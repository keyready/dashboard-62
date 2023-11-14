import json,yaml,xmltodict
from yaml.loader import SafeLoader

from server import db
from server.models import Candidate


def  check_candidate_in_db(email):
    candidate=Candidate.query.filter_by(email=email).first()
    if candidate is not None:return True
    return False

def save_candidate_in_db(candidate_data):
    db.session.add(Candidate(
        firstname=candidate_data['firstname'],
        middlename=candidate_data['middlename'],
        lastname=candidate_data['lastname'],
        email=candidate_data['email'],
        age=candidate_data['age'],
        averageSubjectsScore=candidate_data['averageSubjectsScore'],
        # img='/backend/server/static/{}'.format(imgPath),
        # faculty=candidate_data['faculty'],
        # department=candidate_data['department'],
        hobby=candidate_data['hobby'],
        subjectsEstimation=candidate_data['subjectsEstimation']
    ))
    db.session.commit()
    return 1

def xml_parser(form,dir_name):
    data_dict=xmltodict.parse(form.read())
    candidate_data=json.dumps(data_dict)
    return candidate_data

def yml_parser(form,dir_name):
    data_dict=yaml.load(form.read(),Loader=SafeLoader)
    candidate_data=json.dumps(data_dict)
    return candidate_data

def json_parser(form,dir_name):
    candidate_data=json.loads(form.read()) 
    return candidate_data