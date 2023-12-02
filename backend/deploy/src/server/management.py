from flask import (
    request,
    jsonify,
    session,
    abort,
    redirect,
    url_for
)

from server.utils.management import (
    check_password_hash,
    generate_password_hash,
    check_management_in_db
)

from server import app
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
                        # queryParams['age'].split(',')[0] <= candidate.age <= queryParams['age'].split(',')[1]:
                jsonCandidates.append(Candidate.object_as_dict(candidate))
        
        return jsonify(jsonCandidates)  
    except ValueError as e:
        print(e)
        abort(500)

@app.route('/api/folder/create',methods=['POST'])
def create_folder():
    db.session.add(Folder(title=request.json['title']))
    db.session.commit()
    return jsonify(title=request.json['title'])

@app.route('/api/folder/fetch_all',methods=['GET'])
def all_folder():
    folders=Folder.query.all()
    foldersJson=[]
    for folder in folders:
        foldersJson.append(Folder.object_as_dict(folder))
    return jsonify(foldersJson)

@app.route('/api/subjects/fetch',methods=['GET'])
def all_subjects():
    subjects=Subject.query.all()
    subJson=[]
    for sub in subjects:
        subJson.append(Subject.object_as_dict(sub))
    print(subJson)
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