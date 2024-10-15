import os,re
from zipfile import ZipFile
from datetime import date,datetime 
from flask import (
    render_template,
    request,
    jsonify,
    abort,
    redirect,
    url_for
)   

from gigachat import GigaChat

from server import app
from server.models import db,Candidate,Folder

from server.utils.candidate import (
    xml_parser,
    json_parser,
    yml_parser,
    check_candidate_in_db,
    save_candidate_in_db,
    parse_diagramData,
    list_score,
    kolmogorov_test,
    pearson_test,
    average_score
)

@app.route('/',methods=['GET'])
def index():
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(e):
    return redirect(request.host_url)

@app.route('/api/total_candidates',methods=['GET'])
def total_candidates():
    cnt = Candidate.query.count()
    return str(cnt)

@app.route('/api/upload',methods=['POST'])
def upload():
    try:
        if request.method == 'POST':
            if request.files == None:
                abort(400)
            mainArchive=request.files['archives']
            pathSaveForms="../static/files/{}".format(date.today())+'_{}-{}-{}'.format(datetime.today().hour,datetime.today().minute,datetime.today().second)
            jsonCandidates=[]
            with ZipFile(mainArchive,'r') as mainZips:
                for nameCurrentZip in mainZips.namelist():
                        os.mkdir(f"{pathSaveForms}-{nameCurrentZip.strip('.zip')}")
                        with ZipFile(mainZips.extract(nameCurrentZip),'r') as currentZip:
                                currentZip.extractall(pathSaveForms+'-'+nameCurrentZip.strip('.zip'))
                                os.remove('./{}'.format(nameCurrentZip))
                for dirName in os.listdir(os.path.abspath('/static/files/')):
                    for fileName in os.listdir('/static/files/{}'.format(dirName)):
                            EXT=['.png','.jpg','.jpeg']
                            if f'.{fileName.split(".")[1]}' not in EXT:
                                with open(f'/static/files/{dirName}/{fileName}','r',encoding='utf-8') as form:
                                    repetition_counter=0 # счетчик дубликатов
                                    erorr_format_counter=0 # счетчик анкет неверного формата
                                    match f'.{fileName.split(".")[1]}':
                                        case '.xml':
                                            candidate_data=xml_parser(form)
                                            if check_candidate_in_db(candidate_data['email']):
                                                repetition_counter+=1
                                                continue
                                            save_candidate_in_db(candidate_data,dirName)
                                            jsonCandidates.append(candidate_data)
                                        case '.yml':
                                            candidate_data=yml_parser(form)
                                            if check_candidate_in_db(candidate_data['email']):
                                                repetition_counter+=1
                                                continue
                                            save_candidate_in_db(candidate_data,dirName)
                                            jsonCandidates.append(candidate_data)
                                        case '.yaml':
                                            candidate_data=yml_parser(form)
                                            if check_candidate_in_db(candidate_data['email']):
                                                repetition_counter+=1
                                                continue
                                            save_candidate_in_db(candidate_data,dirName)
                                            jsonCandidates.append(candidate_data)
                                        case '.json':
                                            candidate_data=json_parser(form)
                                            if check_candidate_in_db(candidate_data['email']):
                                                repetition_counter+=1
                                                continue
                                            save_candidate_in_db(candidate_data,dirName)
                                            jsonCandidates.append(candidate_data)
                                        case _:
                                            erorr_format_counter+=1
                                            continue
                return jsonify(
                    jsonCandidates=jsonCandidates,
                    message=
                            f'{repetition_counter} анкет добавлены не были, т.к являются дубликатами \n' \
                            f'{erorr_format_counter} анкет добавлены не были, т.к имеют не валидный формат'
                    )
    except ValueError as err:
        print(err)
        return abort(500)

import json

@app.route('/api/candidate/create',methods=['POST'])
def create_candidate():
        candidateData = request.form.to_dict()

        byteObjects = ['name','education','keySkills']
        for key in candidateData.keys():
            if key in byteObjects:
                candidateData[key]=json.loads(candidateData[key])
        # candidateData['name']=json.loads(candidateData['name'])
        # candidateData['education']=json.loads(candidateData['education'])
        # candidateData['keySkills']=json.loads(candidateData['keySkills'])

        document = request.files['document']
        img = request.files['img']

        dirName=str(date.today())+'_{}-{}-{}'.format(datetime.today().hour,datetime.today().minute,datetime.today().second)
        pathSave="/backend/server/static/documents/{}".format(dirName)
        os.mkdir(pathSave)

        if '.pdf' not in document.filename:abort(400)

        VALIDATE_EXT=['png','jpg','jpeg']
        if img.filename.split('.')[1] not in VALIDATE_EXT:abort(400)

        document.save(pathSave+'/'+document.filename)
        img.save(pathSave+'/'+img.filename)

        if check_candidate_in_db(candidateData['email']):abort(400)

        averageScore=average_score(candidateData['subjectsEstimation'])

        candidate=Candidate(
            firstname=candidateData['name']['firstname'],
            middlename=candidateData['name']['middlename'],
            lastname=candidateData['name']['lastname'],
            email=candidateData['mail'],
            age=candidateData['age'],
            averageSubjectsScore=averageScore,
            img=f'static/documents/{dirName}/{img.filename}',
            phoneNumber=candidateData['phoneNumber'],
            faculty=candidateData['education']['faculty'],
            department=candidateData['education']['department'],
            keySkills=candidateData['keySkills'],
            subjectsEstimation=candidateData['subjectsEstimation'],
            document=f'static/documents/{dirName}/{document.filename}'
        )

        db.session.add(candidate)
        db.session.commit()

        return jsonify(Candidate.object_as_dict(candidate))

@app.route('/api/compare_candidates',methods=['GET','POST'])
def compare_candidates():
    try:
        if request.json['candidatesIds'] == [] and request.json['task'] == '':
            return redirect(url_for('compare_candidates'))

        ids=request.json['candidatesIds']
        task=request.json['task']
        
        jsonCandidates = []
        diagramData=parse_diagramData(ids)

        for candidate_id in ids:
            candidate=Candidate.query.filter_by(id=candidate_id).first()
            if candidate is None:continue
            
            jsonCandidate=Candidate.object_as_dict(candidate)

            kolmogorovTest = kolmogorov_test(list_score(jsonCandidate))
            pearsonTest = pearson_test(list_score(jsonCandidate))

            with GigaChat(credentials=app.config['GIGACHAT_API'],verify_ssl_certs=False) as giga:
            ############################################## Сравнение по хобби, специальности, факультету и кафедре ##################################################
                hobbyOverplapAnswer=f'''
                    Я тебе предоставлю информацию о выпускнике ВУЗа, 
                    а именно: ключевые навыки - {candidate.keySkills}, факультет - {candidate.faculty} и кафедру - {candidate.department}, которую он окончил.
                    Соотнеси эти параметры между собой и выставь оценочный коэффициент от 1 до 5.
                    Если студент обучался по техническому направлению, но увлекался художественной самодейтельностью, то коэффициент будет минимальным - 1.
                    Если студент обучался на лингвистическом факультете и дополнительно занимался переводом или подрабатывал репетиторством, то коэффициент будет максимальным - 3.
                    
                    Но, обязательное условие - коэффициент не может быть равен 0, он либо минимум - 1 либо максимум - 5.
                    
                    Ответь только одним числом, без подробного описания твоих размышлений.
                '''
                hobbyOverlapValue=giga.chat(hobbyOverplapAnswer).choices[0].message.content
            ############################################### Сравнение по скиллам и таску ############################################
                taskOverlapAnswer=f'''
                    Я тебе предоставлю информацию о выпускнике ВУЗа, 
                    а именно: ключевые навыки - {candidate.keySkills},
                    кафедра - {candidate.department}, 
                    факультет - {candidate.faculty}, который он окончил.
                    Средний балл диплома - {candidate.averageSubjectsScore}.
                    Данному выпускнику ставиться задача - {task}.
                    Соотнеси все параметры с информаций о выпускнике и поставленную задачу на совместимость, 
                    оцени насколько качественно и быстро данный выпускник способен выполнить эту задачу коэффициентом от 1 до 5.
                    
                    Но, обязательное условие - коэффициент не может быть равен 0, он либо минимум - 1 либо максимум - 5.
                    
                    Ответь только одним числом, без подробного описания твоих размышлений. 
                '''
                taskOverlapValue=giga.chat(taskOverlapAnswer).choices[0].message.content

            jsonCandidate.update(
                {
                    'hobbyOverlap':hobbyOverlapValue,
                    'taskOverlap':taskOverlapValue,
                    'kolmogorovTest':kolmogorovTest,
                    'pearsonTest':pearsonTest,
                })
            
            jsonCandidates.append(jsonCandidate)
            
        return jsonify(
            comparedCandidates=jsonCandidates,
            diagramData=diagramData
        )
    
    except ValueError as err:
        print(err)
        abort(500)

@app.route('/api/candidate/define',methods=['POST'])
def define_folder():
    candidateId=request.json['candidateId']
    folderId=request.json['folderId']

    candidate=Candidate.query.filter_by(id=candidateId).first()
    if candidate is None: abort(404)

    if folderId == -1:
        db.session.delete(candidate)
    else:
        folder=Folder.query.filter_by(id=folderId).first()
        if folder is None: abort(404)
        
        candidate.folderId=folderId
        db.session.add(candidate)

    db.session.commit()
    return jsonify(candidate)

@app.route('/api/candidate/define_mass',methods=['POST'])
def define_mass_folder():
    folderTitle=request.json['folderTitle']
    param=request.json['param'] #name, value

    db.session.add(Folder(title=folderTitle))
    db.session.commit()

    paramsCandidate = Candidate.getTableInfo()

    folderId=Folder.query.filter_by(title=folderTitle).first()

    for oneParam in paramsCandidate:
        if param['name'] == oneParam:
            candidates=Candidate.query.filter_by(oneParam=param['value']).all()
            for cnd in candidates:
                cnd.folderId = folderId.id
                db.session.add(cnd)
                db.session.commit()
    
    return jsonify(candidates)

@app.route('/api/fetch_key_skills',methods=['GET'])
def unique_skills():
    listSkills=[]
    jsonCandidates=[]

    candidates=Candidate.query.all()
    for cnd in candidates:
        jsonCandidates.append(Candidate.object_as_dict(cnd))

    for jsonCandidate in jsonCandidates:
        if jsonCandidate['keySkills'] not in listSkills:
            listSkills.append(jsonCandidate['keySkills'])

    return jsonify(listSkills)
