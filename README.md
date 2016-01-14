# universaldx

This is a simple single page app with a contact us form and multiple charts to show clinical data.
Back-end is implemented in a Python microframework Flask. Front-end is developed utillizing Bootrap 3 and Angular 1.4.

##Platform requirements 
To run the app you have to have Python installed on your machine, specifically version 2.7.
Linux machines come with a Python interpreter preinstalled. For Windows OS, installation can be found on
www.python.org (be sure to check the add to PATH feature and install pip)

To check your version enter
<code>python --version</code>
in the command promt/terminal window.

Additionally, it is neceessary to install multiple packages for Python <br>
Prequisite is the python package manager, <code>pip</code>.

<code>pip install Flask </code>  install the Flask microframework<br>   
<code>pip install flask-triangle </code> installs the package needed for AngularJS and Flask templating engine (Jinja) integration

##Run the app
To run the app, navigate to the project root folder and enter command
<br> <code>python run_app.py </code>

This will start a Python script that will run a simple web server.<br>

To start evaluating the app simply enter localhost in your browser. <br>

##API
The API containes 4 routes (3 called by GET method and 1  by POST), found in routes.py . <br>
First route ('/' or '/index')  is the index route for serving the single page application. Remaining three are used in AJAX calls
from the application. 

View method company_info return the data about the company which is displayed on the home page (home partial view).
View method contact_us is an endpoint for posting form data from the application (the contact us partial view in the app).
This method saves the data into a CSV file 'queries.csv'. 
The last view method ('/clinical_data') reads all the data from the Universal DX supplied files (clinical_data_training.csv and training.csv) merges them into a single collection of JSON objects and puts it into the HTTP response.

##Angular app
The angular app javascript code can be found in /static/js/app folder. 
App is structured into a master index view with four partial views. Routing is enabled injecting the default ng-route module.
All partial views are in views folder. Each partial is separated into different folders:<br>
<code>views/home </code><br>
<code>views/contactus </code> <br> 
<code>views/chart </code><br>
<code>views/scatter </code><br>

Each folder contains the html and javascript which serves as background logic for that partial view (controllers, services, directives).

The charts are displayed using the highchart.js javacript library. DOM elements for displaying the charts are manipulated with 
angular directives. 









