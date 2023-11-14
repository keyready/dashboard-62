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
from server.models import db,Management,Candidate

@app.route('/login',methods=['POST'])
def login():
    try:    
        if request.method == 'POST':
            email=request.json['email']
            password=request.json['password']
            # management=check_management_in_db(username)
            management=Management.query.filter_by(username=email).first()
            if management == None or management.password != password:
                return abort(401)
            session['email']=email
            jsonManagement=Management.object_as_dict(management)
            return jsonify(jsonManagement)
    except ValueError as e:
        print(e)
        return abort(500)

@app.route('/logout',methods=['GET'])
def logout():
    try:
        session.clear()
        return redirect(url_for('index'))
    except:
        abort(500)

@app.route('/api/candidates',methods=['GET'])
def candidates():
    try:
        paginations_args = request.args.to_dict()        
        jsonCandidates=[]
        ########################################## ПАГИНАЦИЯ #######################################################
        candidates = Candidate.query.order_by(Candidate.id).limit(int(paginations_args['limit'])).offset((int(paginations_args['page'])) * int(paginations_args['limit']))
        ############################################################################################################
        for candidate in candidates:
            jsonCandidates.append(Candidate.object_as_dict(candidate))        
        return jsonify(jsonCandidates)  
    except ValueError as e:
        print(e)
        return abort(500)