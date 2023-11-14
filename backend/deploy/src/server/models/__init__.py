from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import *
from sqlalchemy.orm import relationship
from sqlalchemy import inspect
from server.models.enums import *

db = SQLAlchemy()

class Management(db.Model):
    __tablename__ = 'managements'

    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(), nullable=False, unique=True)
    password = db.Column(db.String(), nullable=False)

    def __init__(self, **kwargs):
        super(Management,self).__init__(**kwargs)

    def object_as_dict(obj):
        return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

    def __repr__(self):
        return '<Management %m>' % self.username

class Candidate(db.Model):
    __tablename__ = 'candidates'

    id = db.Column(db.Integer(), primary_key=True)
    firstname = db.Column(db.String(),nullable=False)
    middlename = db.Column(db.String(),nullable=False)
    lastname = db.Column(db.String(),nullable=False)
    email = db.Column(db.String(),nullable=True,unique=True)
    img = db.Column(db.String())
    age = db.Column(db.String(),nullable=False)
    averageSubjectsScore = db.Column(db.Float(),nullable=False)
    faculty = db.Column(db.Enum(EnumFaculty),nullable=True)
    department = db.Column(db.Enum(EnumDepartment),nullable=True)
    hobby = db.Column(db.String(),nullable=False)
    subjectsEstimation = db.Column(db.ARRAY(db.JSON()),nullable=False)


    def __init__(self, **kwargs):
        super(Candidate, self).__init__(**kwargs)

    def object_as_dict(obj):
        return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

    def __repr__(self):
        return '<Candidate %m>' % self.lastname