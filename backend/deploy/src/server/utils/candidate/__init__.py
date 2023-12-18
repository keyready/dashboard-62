import json,yaml,xmltodict,os,string,random
from yaml.loader import SafeLoader
import numpy as np 

from server import db
from server.models import Candidate

def check_candidate_in_db(email):
    candidate=Candidate.query.filter_by(email=email).first()
    if candidate is not None:return True
    return False

def parse_diagramData(ids: list):
    diagramData = {}

    candidate=Candidate.query.filter_by(id=int(ids[0])).first()
    labels=['Общий балл']
    for subject in candidate.subjectsEstimation:
        labels.append(subject['title'])
    diagramData.update({'labels':labels})

    datasets=[]
    candidates=Candidate.query.filter(Candidate.id.in_(ids)).all()
    for cnd in candidates:
        dataset={}
        dataset.update({'label':cnd.lastname})
        data=[]
        for subject in cnd.subjectsEstimation:
            data.append(subject['score'])
        dataset.update({'data':data[:len(labels)]})
        datasets.append(dataset)
        
    diagramData.update({'datasets':datasets})
    return diagramData

def save_candidate_in_db(candidate_data,dirName):
    averageScore=average_score(candidate_data['subjectsEstimation'])
    db.session.add(Candidate(
        firstname=candidate_data['firstname'],
        middlename=candidate_data['middlename'],
        lastname=candidate_data['lastname'],
        email=candidate_data['email'],
        age=candidate_data['age'],
        averageSubjectsScore=averageScore,
        phoneNumber=candidate_data['phoneNumber'],
        img=f'static/files/{dirName}/avatar.jpg',
        faculty=candidate_data['faculty'],
        department=candidate_data['department'],
        keySkills=candidate_data['keySkills'],
        subjectsEstimation=candidate_data['subjectsEstimation']
    ))
    db.session.commit()
    return 1

def xml_parser(form):
    data_dict=xmltodict.parse(form.read())
    candidate_data=json.dumps(data_dict)
    return candidate_data

def yml_parser(form):
    data_dict=yaml.load(form.read(),Loader=SafeLoader)
    candidate_data=json.dumps(data_dict)
    return candidate_data

def json_parser(form):
    candidate_data=json.loads(form.read()) 
    return candidate_data

def list_score(jsonCandidate):
    data=[]
    for object in jsonCandidate['subjectsEstimation']:
        data.append(object['score'])
    return np.array(data)

def average_score(cnd):
    digit=0
    for obj in cnd:
        digit+=obj['score']
    return digit/len(cnd)