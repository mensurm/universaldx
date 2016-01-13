from app import app
from flask import render_template, jsonify

# APP ROUTE DEFINITIONS

# Home page
@app.route('/')
@app.route('/index')
def home():
    return render_template("index.html")

# get company info method
@app.route('/company_info', methods=['GET'])
def get_data():
    company_details = {'name': 'Universal DX', 'city': 'Seville'}
    return jsonify(**company_details)

# post data method
app.route('/post-data', methods=['POST'])
def post_data():
    return ""