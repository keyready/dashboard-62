from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import *
from sqlalchemy.orm import relationship
from sqlalchemy import inspect

db = SQLAlchemy()

metadata = MetaData()

class Management(db.Model):
    __tablename__ = 'managements'

    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(), nullable=False, unique=True)
    password = db.Column(db.String(), nullable=False)

    def __init__(self, **kwargs):
        super(Management,self).__init__(**kwargs)

    def object_as_dict(obj):
        return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

    def __repr__(self):
        return '<Management %m>' % self.email

class Folder(db.Model):
    __tablename__='folders'

    id=db.Column(db.Integer(),primary_key=True)
    title=db.Column(db.String())

    def object_as_dict(obj):
        return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

    def __init__(self,**kwargs):
        super(Folder,self).__init__(**kwargs)

    def __repr__(self):
        return '<Title %t>' % self.title

class Candidate(db.Model):
    __tablename__ = 'candidates'

    id = db.Column(db.Integer(), primary_key=True)
    firstname = db.Column(db.String())
    middlename = db.Column(db.String())
    lastname = db.Column(db.String())
    email = db.Column(db.String(),unique=True)
    img = db.Column(db.String())
    age = db.Column(db.String(),nullable=False)
    phoneNumber = db.Column(db.String(),unique=True)
    averageSubjectsScore = db.Column(db.Float(),nullable=True)
    faculty = db.Column(db.String())
    department = db.Column(db.String())
    keySkills = db.Column(db.ARRAY(db.String()))
    subjectsEstimation = db.Column(db.ARRAY(db.JSON()),nullable=True)
    document = db.Column(db.String()) #скан
    folderId = db.Column(db.Integer())

    def __init__(self, **kwargs):
        super(Candidate, self).__init__(**kwargs)

    def object_as_dict(obj):
        return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

    def getTableInfo(self):
        table = Table('candidates', metadata, autoload=True)
        columns = table.columns.keys()
        return columns

    def __repr__(self):
        return '<Candidate %m>' % self.lastname
    
class Faculty(db.Model):
    __tablename__='faculties'

    id=db.Column(db.Integer(),primary_key=True)
    title=db.Column(db.String())

    def __init__(self,**kwargs):
        super(Faculty,self).__init__(**kwargs)

    def object_as_dict(obj):
        return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

    def __repr__(self) -> str:
        return '<Faculty %f>' % self.name
    
class Department(db.Model):
    __tablename__='departments'

    id=db.Column(db.Integer(),primary_key=True)
    title=db.Column(db.String())

    def __init__(self,**kwargs):
        super(Department,self).__init__(**kwargs)
    
    def object_as_dict(obj):
        return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

    def __repr__(self) -> str:
        return '<Department %f>' % self.name
    
class Subject(db.Model):
    __tablename__='subjects'

    id=db.Column(db.Integer(),primary_key=True)
    title=db.Column(db.String())

    def __init__(self,**kwargs):
        super(Subject,self).__init__(**kwargs)
    
    def object_as_dict(obj):
        return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}

    def __repr__(self) -> str:
        return '<Subject %f>' % self.name