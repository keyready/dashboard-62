import os,re
import openai
from zipfile import ZipFile
from datetime import date,datetime 
from flask import (
    render_template,
    request,
    jsonify,
    abort,
    redirect
)   
from server import app
from server.models import db,Candidate

openai.api_key=app.config['OPENAI_KEY']
#TODO Чистка дир с дубликатами --- import shutil

from server.utils.candidate import (
    xml_parser,
    json_parser,
    yml_parser,
    check_candidate_in_db,
    save_candidate_in_db,
    generate_img_name
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
                return abort(400)
            mainArchive=request.files['archives']
            print(mainArchive)
            pathSaveForms="../static/files/{}".format(date.today())+'_{}-{}-{}'.format(datetime.today().hour,datetime.today().minute,datetime.today().second)
            jsonCandidates=[]
            with ZipFile(mainArchive,'r') as mainZips:
                for nameCurrentZip in mainZips.namelist():
                        os.mkdir(pathSaveForms+'-'+nameCurrentZip.strip('.zip'))
                        with ZipFile(mainZips.extract(nameCurrentZip),'r') as currentZip:
                                currentZip.extractall(pathSaveForms+'-'+nameCurrentZip.strip('.zip'))
                                os.remove('./{}'.format(nameCurrentZip))
                for dirName in os.listdir(os.path.abspath('/static/files/')):
                    for fileName in os.listdir('/static/files/{}'.format(dirName)):
                            EXT=['.png','.jpg','.jpeg']
                            if f'.{fileName.split(".")[1]}' in EXT:
                                imgName=generate_img_name(f'/backend/server/static/files/{dirName}/{fileName}')
                            if f'.{fileName.split(".")[1]}' not in EXT:
                                with open(f'/static/files/{dirName}/{fileName}','r',encoding='utf-8') as form:
                                    repetition_counter=0 # счетчик дубликатов
                                    erorr_format_counter=0 # счетчик анкет неверного формата
                                    match f'.{fileName.split(".")[1]}':
                                        case '.xml':
                                            candidate_data=xml_parser(form,dirName)
                                            if check_candidate_in_db(candidate_data['email']):
                                                repetition_counter+=1
                                                continue
                                            save_candidate_in_db(candidate_data,imgName)
                                            jsonCandidates.append(candidate_data)
                                        case '.yml':
                                            candidate_data=yml_parser(form,dirName)
                                            if check_candidate_in_db(candidate_data['email']):
                                                repetition_counter+=1
                                                continue
                                            save_candidate_in_db(candidate_data,imgName)
                                            jsonCandidates.append(candidate_data)
                                        case '.yaml':
                                            candidate_data=yml_parser(form,dirName)
                                            if check_candidate_in_db(candidate_data['email']):
                                                repetition_counter+=1
                                                continue
                                            save_candidate_in_db(candidate_data,imgName)
                                            jsonCandidates.append(candidate_data)
                                        case '.json':
                                            candidate_data=json_parser(form,dirName)
                                            if check_candidate_in_db(candidate_data['email']):
                                                repetition_counter+=1
                                                continue
                                            save_candidate_in_db(candidate_data,imgName)
                                            jsonCandidates.append(candidate_data)
                                        case _:
                                            erorr_format_counter+=1
                                            continue
                return jsonify(
                    jsonCandidates=jsonCandidates,
                    message=
                            f'{repetition_counter} анкет добавлены не были, т.к являются дубликатами \n' \
                            f'{erorr_format_counter} анкет добавлены не былии, т.к имеют не валидный формат'
                    )
    except ValueError as err:
        print(err)
        return abort(500)

@app.route('/api/compare_candidates',methods=['GET','POST'])
def compare_candidates():
    try:
        ids=list(map(int,request.json['candidatesIds']))
        task=request.json['task']
        
        jsonCandidates = []
        diagramData = {}

        candidate=Candidate.query.filter_by(id=ids[0]).first()
        labels=['Общий балл']
        for subject in candidate.subjectsEstimation:
            labels.append(subject['title'])
        diagramData.update({'labels':labels})

        datasets=[]
        dataset={}
        data=[]
        candidates=Candidate.query.filter(Candidate.id._in(ids)).all()
        for cnd in candidates:
            dataset.update({'label':cnd.lastname})
            for subject in cnd.subjectsEstimation:
                data.append(subject['value'])
            dataset.update({'data':data})
            datasets.append(dataset)
        
        diagramData.update({'datasets':datasets})

        for candidate_id in ids:
            candidate=Candidate.query.filter_by(id=candidate_id).first()
            if candidate is None:continue
            
            jsonCandidate=Candidate.object_as_dict(candidate)

        
            ############################################## Сравнение по хобби, специальности, факультету и кафедре ##################################################

            request_gpt_chat=f'''
                I will now give you information about a university graduate: his hobby, the faculty and department he graduated from, his specialty. Evaluate on a scale from 0 to 3 how much his hobby corresponds to his specialty. That is, if a graduate graduated from the Faculty of special information Technologies in the specialty "Creation of protected software", but was fond of singing for all 5 years of study, the coefficient will be 0
                Data: hobby — ${candidate.hobby}, specialty —${candidate.speciality}, faculty — ${candidate.faculty}, department — ${candidate.department}
                In the answer, specify only a number
            '''
            response_gpt_chat=openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": request_gpt_chat}]
            ).choices[0]['message']['content']
            
            hobbyOverlap=list(map(float,(re.findall(r'(?<!\d)(?<!\d\.)\d{1,2}(?:\.\d{1,2})?(?!\.?\d)', response_gpt_chat, re.ASCII))))[0]

            ############################################### Сравнение по скиллам и таску ############################################

            request_gpt_chat=f'''
                Look, you have a specialty {candidate.specialty}, which a university graduate graduated from, and you have a hobby {candidate.hobby}.
                This graduate is given a specific task {task}. 
                Rate from 0 to 3 how competent this graduate is to complete this task. Give only the number as your answer.
            '''
            response_gpt_chat=openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": request_gpt_chat}]
            ).choices[0]['message']['content']
            taskOverlap=list(map(float,(re.findall(r'(?<!\d)(?<!\d\.)\d{1,2}(?:\.\d{1,2})?(?!\.?\d)', response_gpt_chat, re.ASCII))))[0]

            jsonCandidate.update({'hobbyOverlap':hobbyOverlap,'taskOverlap':taskOverlap})

            jsonCandidates.append(jsonCandidate)

        return jsonify(
            comparedCandidates=jsonCandidates,
            diagramData=diagramData
        )
    except ValueError as err:
        print(err)
        return abort(500)
