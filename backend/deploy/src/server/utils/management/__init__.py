from server.models import Management

from werkzeug.security import check_password_hash,generate_password_hash

def check_management_in_db(email):
    management=Management.query.filter_by(email=email).first()
    if management:
        return True
    return False

        