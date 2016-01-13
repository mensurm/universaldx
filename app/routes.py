from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def home():
    return render_template("index.html")

@app.route('/get-data', methods=['GET'])
def get_data():
    return ""

app.route('/post-data', methods=['POST'])
def post_data():
    return ""