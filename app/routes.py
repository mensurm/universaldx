from app import app
from flask import render_template, jsonify, request
from app.model import ContactForm

# APP ROUTE DEFINITIONS

# Home page
@app.route('/')
@app.route('/index')
def home():
    return render_template("index.html")

# get company info route
@app.route('/company_info', methods=['GET'])
def get_data():
    company_details = {'name': 'Universal Diagnostics, S.L.', 'address': 'Centre of Research Technology and Innovation (CITIUS II)\
                        University of Seville. Avda. Reina Mercedes s/n', 'city': 'Seville', 'country': 'Spain', 'phone': '+34 955 420 154',
                       'email': 'contact@universaldx.com'}
    return jsonify(**company_details)


# contact us route
@app.route('/contact_us', methods=['POST'])
def post_data():

    try:
        #get posted form data
        form = request.form

        firstname = form.get('firstname', '') # set emtpy string if field not present in form
        lastname = form.get('lastname', '')
        email = form.get('email', '')
        question = form.get('question', '')
        contact_form = ContactForm(firstname=firstname, lastname=lastname, email=email, question=question)

        #save submited data to text file
        with open('queries.txt', mode='a') as file:
            file.write(str(contact_form))
            file.write("\n")

        response = {'status': 'OK'}
        return jsonify(**response)

    except Exception:
        response = {'status': 'ERROR'}
        return jsonify(**response)