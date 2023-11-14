from server.models import Management

from werkzeug.security import check_password_hash,generate_password_hash

def check_management_in_db(username):
    management=Management.query.filter_by(username=username).first()
    if management == None:return None
    else: return management

        