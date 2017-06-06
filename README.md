# Turnout
Team Orange Client Project

## Overview
Turnout is an application designed for first year students at Northwestern University to see and follow different campus events. It is built with Ionic2 and Firebase. 

## Install
Install dependencies by going into the turnoutApp folder and running 
```
npm install --save --save-peers
```

## Starting 
Run the following code to start the project. Make sure Ionic2 is installed on your device. Documentation on how to install Ionic can be found here: https://ionicframework.com/getting-started/
```
ionic serve
```
Checkout www.localhost:8100 to view the site

## Platform Constraints
With the current version of the Turnout app, users can put in their preferences and see a list of events. Additionally, they can search for events using keywords and can create new events. The user, however, is unable to create profiles, RSVP for an event, or follow events. 

## Dependencies
The only dependency for the site currently is the installation of Ionic2 and its dependencies.

## Bugs & Fixes
The sign in page currently does not function. The user can put in any username & password combination to continue using the site. Additionally, on the events page, users can only view events and cannot RSVP or interact with any of the event objects. Other than that, there are no bugs or fixes. The site should function without problems.

## Next Steps
The next steps for development are to implement the users features. This includes user sign up, session, sign in, event CRUD, and event following. Additionally, users should be able to follow other users and follow different events. This will require setup in the database as user objects do not currently exist since relations need to be created between users and between users and events. 
