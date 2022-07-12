## App 'CAGE QUEST'

the design for this app works best on small(mobile) screens

### Table of contents

1. Project introduction
2. Problem and solution
3. API keys
4. Starting the application

### 1. Project introduction

This frontend programming final assignment was created as a result of the Frontend Development course at NOVI University of Applied Sciences.

The project was set up with [Create React App](https://github.com/facebook/create-react-app)

### 2. Problem and solution

Nicolas Cage is a very versatile actor and has made many many movies. Those movies can be great or really suck depending on your taste and personality.
This app, provides you with information about Nic Cage's best movies and you can do a quiz that gives you a movie recommendation based on your answers!

### 3. API keys

The API keys used for this project come from [Nicolas Cage Quotes](https://nicolas-cage-quotes.herokuapp.com/quotes/?movie=&info=true) made by donth77 and
[The Movie Database](https://api.themoviedb.org/3/movie/). These will be sent along in a separate file called `.env` and will be put into the system in step 4 of this manual. Registering can be done on the `register` page when you have started the application.

### 4. Starting the application

Once you have copied the project to your local machine, first install the `node_modules` by running the following commands in the terminal:

`npm install`

When this is done, you can save the API keys from the `.env` file to the root of the project. This file is sent separately with the project. In the terminal run the following:

`npm run build`

You start the application by using:

`npm start`

Open http://localhost:3000 to view the page in the browser.
