from flask import Flask
from flask.ext.triangle import Triangle

app = Flask(__name__)  # initialize app
Triangle(app)  # add filter for angular expressions

from app import routes