from flask.cli import FlaskGroup
from sqlalchemy_utils import database_exists
from sqlalchemy import create_engine,inspect
from server import app
from server.models import db,Management,Faculty,Department,Subject

import os,json

cli=FlaskGroup(app)

@cli.command('create_db')
def create_db():
    if not os.path.exists(f'{app.config["APP_DATA_FOLDER"]}/academy/'):
        os.mkdir(f'{app.config["APP_DATA_FOLDER"]}/academy/')

        with open(f'{app.config["APP_DATA_FOLDER"]}/academy/faculties.json','r') as facultiesFile:
            faculties=json.load(facultiesFile)

        with open(f'{app.config["APP_DATA_FOLDER"]}/academy/departments.json','r') as departmentsFile:
            departments=json.load(departmentsFile)

        with open(f'{app.config["APP_DATA_FOLDER"]}/academy/subjects.json','r') as subjectsFile:
            subjects=json.load(subjectsFile)
    
    if not os.path.exists(f'{app.config["APP_DATA_FOLDER"]}/files/'):
        os.mkdir(f'{app.config["APP_DATA_FOLDER"]}/files/')

    if not os.path.exists(f'{app.config["APP_DATA_FOLDER"]}/documents/'):
        os.mkdir(f'{app.config["APP_DATA_FOLDER"]}/documents/')

    engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])
    db.drop_all()
    db.create_all()
    db.session.add(Management(email='Admin@localhost.com',password='admin_password'))
    db.session.add(Management(email='SuperUser@localhost.com',password='superuser_password'))
    for fac in faculties['faculties']:
        db.session.add(Faculty(title=fac))
    for dep in departments['departments']:
        db.session.add(Department(title=dep))
    for sub in subjects['subjects']:
        db.session.add(Subject(title=sub))
    db.session.commit()
    print("Бд успешно создана.\n\nДиректория для хранения анкет успешно создана.\n\nДиректория для хранения сканов документов создана")

@cli.command('clear_db')
def clear_db():
    action=str(input('Хочешь удалить всю БД? Д/н: '))
    if action == 'Д' or action == 'д':
        db.drop_all()
        db.session.commit()
        print('Бд успешно очищена')
    else:
        print('Отмена удаления.')

if __name__ == '__main__':
    cli()