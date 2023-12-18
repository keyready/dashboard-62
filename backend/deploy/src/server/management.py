from flask import (
    request,
    jsonify,
    session,
    abort,
    redirect,
    url_for
)

import json

from server.utils.management import (
    check_password_hash,
    generate_password_hash,
    check_management_in_db
)

from    server import app
from server.models import db,Management,Candidate,Folder,Subject,Department,Faculty

@app.route('/login',methods=['POST'])
def login():
    try:    
        if request.method == 'POST':
            email=request.json['email']
            password=request.json['password']
            management=Management.query.filter_by(email=email).first()
            checker=check_management_in_db(email)
            if checker == False or management.password != password:
                abort(401)
            session['email']=email
            return jsonify(Management.object_as_dict(management))
    except ValueError as e:
        print(e)
        abort(500)

@app.route('/logout',methods=['GET'])
def logout():
    try:
        session.pop('email')
        session.clear()
        return redirect(url_for('index'))
    except:
        abort(500)

@app.route('/api/candidates',methods=['GET'])
def candidates():
    try:
        queryParams = request.args.to_dict()        
        jsonCandidates=[]

        if 'folderId' in queryParams.keys():
            candidates=Candidate.query.filter(~Candidate.foldersId.contains[queryParams['folderId']]).all()
            for cnd in candidates:
                jsonCandidates.append(Candidate.object_as_dict(cnd))
                return jsonify(jsonCandidates)
        
        ########################################## ПАГИНАЦИЯ #######################################################
        candidates = Candidate.query.order_by(
            Candidate.id        
        ).limit(
            int(queryParams['limit'])
        ).offset(
            (int(queryParams['page'])) * int(queryParams['limit'])
        )

        for candidate in candidates:
            # if candidate.faculty == queryParams['faculty'] and \
                    # candidate.departments == queryParams['department'] and \
                        # queryParams['age'].split(',')[0] <= candidate.age <= queryParams['age'].split(',')[1] and \
                            # not candidate.foldersId.contains(queryParams['foldersId']):
                jsonCandidates.append(Candidate.object_as_dict(candidate))
        
        return jsonify(jsonCandidates)  
    except ValueError as e:
        print(e)
        abort(500)

@app.route('/api/folder/manual_create',methods=['POST'])
def manual_create():
    db.session.add(Folder(title=request.json['folderTitle'],groupingRule=request.json['groupingRule']))
    db.session.commit()

    folder=Folder.query.filter_by(title=request.json['folderTitle']).first()
    for id in request.json['candidatesIds']:
        cnd=Candidate.query.filter_by(id=id).first()
        cnd.foldersId.append(folder.id)
        db.session.add(cnd)
        db.session.commit()
    return jsonify(msg="success")

@app.route('/api/folder/create',methods=['POST'])
def create_folder():

    groupBy = json.dumps({request.json['params']['param']:request.json['params']['value']})    

    db.session.add(Folder(
        title=request.json['folderTitle'],
        groupBy=groupBy,
    ))
    db.session.commit()

    candidates=Candidate.query.all()
    folder=Folder.query.filter_by(title=request.json['folderTitle']).first()

    for cnd in candidates:
        parametrs=Candidate.object_as_dict(cnd).keys()
        jsonCnd=Candidate.object_as_dict(cnd)
        if request.json['params']['param'] in parametrs:
            match request.json['params']['param']:
                case 'age':
                    if int(str(request.json['params']['value']).split('-')[0]) <= cnd.age <= int(str(request.json['params']['value']).split('-')[1]):
                        cnd.foldersId.append(folder.id)
                        db.session.add(cnd)
                        db.session.commit()
                    else:
                        break
                case 'faculty':
                    if cnd.faculty == request.json['params']['value']:
                        cnd.foldersId.append(folder.id)
                        db.session.add(cnd)
                        db.session.commit()
                    else:
                        break
                case 'keySkills':
                    for skill in jsonCnd['keySkills']:
                        if skill in request.json['params']['value']:
                            cnd.foldersId.append(folder.id)
                            db.session.add(cnd)
                            db.session.commit()
                        else:
                            break
    
    jsonCandidates=[]
    for cnd in candidates:
        jsonCandidates.append(Candidate.object_as_dict(cnd))

    return jsonify(jsonCandidates)

@app.route('/api/folder/candidates',methods=['GET'])
def folder_candidates():
    folderId=request.args['folderId']
    
    folder=Folder.query.filter_by(id=folderId).first()
    if folder is None: abort(404)

    jsonCandidates=[]
    candidates=Candidate.query.filter(Candidate.foldersId._in(folderId)).all()
    for cnd in candidates:
        jsonCandidates.append(Candidate.object_as_dict(cnd))
    
    return jsonify(
        folderTitle=folder.title,
        candidates=jsonCandidates,
    )

@app.route('/api/folder/fetch_all',methods=['GET'])
def all_folder():
    foldersJson=[]
    folders=Folder.query.all()
    for folder in folders:
        foldersJson.append(Folder.object_as_dict(folder))
    return jsonify(foldersJson)

@app.route('/api/subjects/fetch',methods=['GET'])
def all_subjects():
    subjects=Subject.query.all()
    subJson=[]
    for sub in subjects:
        subJson.append(Subject.object_as_dict(sub))
    return jsonify(subJson)

@app.route('/api/departments/fetch',methods=['GET'])
def all_departments():
    deps=Department.query.all()
    depsJson=[]
    for dep in deps:
        depsJson.append(Department.object_as_dict(dep))
    return jsonify(depsJson)

@app.route('/api/faculties/fetch',methods=['GET'])
def all_faculties():
    facs=Faculty.query.all()
    facsJson=[]
    for fac in facs:
        facsJson.append(Faculty.object_as_dict(fac))
    return jsonify(facsJson)