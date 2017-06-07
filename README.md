# Turnout
Team Orange Client Project

## Overview
Turnout is an application designed for first year students at Northwestern University to see and follow different campus events. It is built with Ionic2 and Firebase. 

## Install
Install dependencies by going into the turnoutApp folder and running 
```
npm install --save --save-peers
```

## Build and Deploy
Run the following code to start the project. Make sure Ionic2 is installed on your device. Documentation on how to install Ionic can be found [here](https://ionicframework.com/getting-started/)
```
ionic serve
```
Checkout www.localhost:8100 to view the site
To see the application on a mobile frame, go to www.localhost:8100/ionic-lab or launch the application with
```
ionic serve --lab
```

Since the application uses Firebase, developers working on the project should set up a Firebase account [here](https://firebase.google.com/)

## Platform Constraints
The application is written as a hybrid application, meaning it can run on mobile or web. The deploy the app on mobile, users can download the IonicView mobile app, plug the phone into the computer using a data-transfer cable, and run the command
```
ionic upload
```

## Dependencies
Aside from the installation of Ionic2 and it's dependencies, the application requires firebase and angularfire2.

## Bugs & Fixes
The sign in page currently does not function. The user can put in any username & password combination to continue using the site. Additionally, on the events page, users can only view events and cannot RSVP or interact with any of the event objects. Other than that, there are no bugs or fixes. The site should function without problems.

## Limitations
With the current version of the Turnout app, users can put in their preferences and see a list of events. Additionally, they can search for events using keywords and can create new events. The user, however, is unable to create profiles, RSVP for an event, or follow events. 

## Next Steps
The next steps for development are to implement the users features. This includes user sign up, session, sign in, event CRUD, and event following. Additionally, users should be able to follow other users and follow different events. This will require setup in the database as user objects do not currently exist since relations need to be created between users and between users and events. 
