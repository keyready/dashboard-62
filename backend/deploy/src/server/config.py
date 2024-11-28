import os

class Config(object):
    FOLDER_DATA=os.getenv('FOLDER_DATA')
    SECRET_KEY = os.getenv('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.getenv('DB_URI')  
    GIGACHAT_API = os.getenv('GIGACHAT_API')  
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    JSONIFY_PRETTYPRINT_REGULAR = False
    JSON_SORT_KEYS = False
    JSON_AS_ASCII = False