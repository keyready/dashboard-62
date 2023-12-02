from flask.cli import FlaskGroup
from sqlalchemy_utils import database_exists
from sqlalchemy import create_engine,inspect
from server import app
from server.models import db,Management

import os

cli=FlaskGroup(app)

@cli.command('create_db')
def create_db():

    if not os.path.exists('/backend/server/static/files/'):
        os.mkdir('/backend/server/static/files/')

    engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])
    inspector = inspect(engine)
    if not database_exists(app.config["SQLALCHEMY_DATABASE_URI"]) or \
            len(inspector.get_table_names()) == 0:
        db.drop_all()
        db.create_all()
        db.session.add(Management(username='Admin@localhost.com',password='admin_password'))
        db.session.add(Management(username='TeamLead@localhost.com',password='teamlead_password'))
        db.session.commit()
        print("Бд успешно создана.\n\nДиректория для хранения анкет успешно создана.")
    else:
        print("Бд не пустая!")

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