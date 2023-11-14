import os

class Config(object):
    SECRET_KEY=os.getenv('SECRET_KEY')
    OPENAI_KEY=os.getenv('OPENAI_KEY')
    SQLALCHEMY_DATABASE_URI=os.getenv('DB_URI')    
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    JSONIFY_PRETTYPRINT_REGULAR = False
    JSON_SORT_KEYS = False
    JSON_AS_ASCII = False