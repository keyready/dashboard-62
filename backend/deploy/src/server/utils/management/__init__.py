from server.models import Management

def check_management_in_db(email):
    management=Management.query.filter_by(email=email).first()
    if management:
        return True
    return False

        