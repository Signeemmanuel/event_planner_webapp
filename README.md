#Event_planner_webapp, EVENA
This is a web app that helps its users to create events and manage the events every step of the way.

#How to install
To run this project,
- Install the dependencies necessary to run a Django project starting with intalling python (python 3.11 is recommended).
- Install XAMPP server or have Apache an MySQL server running.

#How to run backend
- Start your virtual environment in the event_planner project directory (pipenv shell).
- Redirect back to the event_planner directory.
- Start your Apache and MySQL servers
- Create a database named "event_planner_db"
- Run "py manage.py makemigrations" 
- And finally run "py manage.py migrate" This will create tables in the database with respect to the entities stated in the models.py file.

#How to run frontend
- Simply double click on th index.html file

#How to use it
- On the homepage, click on the button get started and you shall be taken to the registration page where you can register.
- After registion, you are no wallowed to use the web app anytime.
- Upon loging in, simply go to the event section on the navbar and tp on create event.
- After creating an event, you can manage the RSVP, budget etc.
