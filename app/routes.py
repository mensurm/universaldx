from app import app
from flask import render_template, jsonify, request
from app.model import ContactForm
import csv
from ast import literal_eval

# APP ROUTE DEFINITIONS

# Home page
@app.route('/')
@app.route('/index')
def home():
    return render_template("index.html")

# get company info route
@app.route('/company_info', methods=['GET'])
def company_info():
    company_details = {'name': 'Universal Diagnostics, S.L.', 'address': 'Centre of Research Technology and Innovation (CITIUS II)\
                        University of Seville. Avda. Reina Mercedes s/n', 'city': 'Seville', 'country': 'Spain', 'phone': '+34 955 420 154',
                       'email': 'contact@universaldx.com'}
    return jsonify(**company_details)


# contact us route
@app.route('/contact_us', methods=['POST'])
def contact_us():

    try:
        #get posted form data
        form = literal_eval(request.data) # convert string to dictionary
        firstname = form.get('firstname', '')
        lastname = form.get('lastname', '')
        email = form.get('email', '')
        question = form.get('question', '')

        contact_form = ContactForm(firstname=firstname, lastname=lastname, email=email, question=question)

        #save submited data to text file
        with open('queries.csv', mode='a') as file:
            file.write(str(contact_form))
            file.write("\n")

        response = {'message': 'Thank you for contacting us.'}
        return jsonify(**response)

    except Exception:
        response = {'message': 'There was a problem processing your request. Contact our support staf.'}
        return jsonify(**response)


@app.route('/clinical_data', methods=['GET'])
def clinical_data():
    try:
        samples = {}
        with open('clinical_data_training.csv', 'r') as csvfile:
            next(csvfile) # skip csv header line
            rows = csv.reader(csvfile, delimiter=',')
            for row in rows:
                sample = {}
                sample_id = row[0]
                sample['condition'] = row[1]
                sample['age'] = row[2]
                sample['gender'] = row[3]
                sample['race'] = row[4]
                samples[sample_id] = sample

        print samples

        with open('training.csv', 'r') as csvfile:
            next(csvfile)
            rows = csv.reader(csvfile, delimiter=',')
            for row in rows:
                sample_id = row[0]
                if sample_id in samples.keys():
                    samples[sample_id]['markers'] = [float(x) for x in row[1:]]

        return jsonify(**samples)

    except:
        response = {}
        return jsonify(**response)


