from flask import Flask
from flask_cors import CORS
from server.models import db

app=Flask(__name__,static_folder='./static',template_folder='./static',static_url_path='/')

app.config.from_object('server.config.Config')
db.init_app(app)
cors=CORS(app)

from server import candidate,management