from flask import Flask
from flask.ext.cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

from app import views
