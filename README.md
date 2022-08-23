## App 'CAGE QUEST'

the design for this app works best on small(mobile) screens

### Table of contents

1. Project introduction
2. Problem and solution
3. API keys
4. Installation Guide
5. Starting the application
6. Register and Log-in

### 1. Project introduction

This frontend programming final assignment was created as a result of the Frontend Development course at NOVI University of Applied Sciences.

The project was set up with [Create React App](https://github.com/facebook/create-react-app)

### 2. Problem and solution

Nicolas Cage is a very versatile actor and has made many many movies. Those movies can be great or really suck depending on your taste and personality.
This app, provides you with information about Nic Cage's best movies and you can do a quiz that gives you a movie recommendation based on your answers!

### 3. API keys

The API keys used for this project come from [Nicolas Cage Quotes](https://nicolas-cage-quotes.herokuapp.com/quotes/?movie=&info=true) made by donth77 and
[The Movie Database](https://api.themoviedb.org/3/movie/). API keys are already in the application on the pages themselves that use the API. 

### 4. Installation Guide
Necessities (Benodigdheden):
64-bit versions of Microsoft Windows 11, 10, 8
2 GB free RAM minimum, 8 GB of total system RAM recommended
2.5 GB hard disk space, SSD recommended
1024x768 minimum screen resolution

STEP 01:
---
First we need a Javascript IDE code editor to be able to read and edit the application. 
We can download this one on: https://www.jetbrains.com/webstorm/download/#section=windows

- Click on the Download Button. (see src/assets/01.JPG)
- Open the Webstorm-2022.2.exe file en start the Installation Wizard.
- Follow the steps of the Installation Wizard en choose the preferred installation options (like the preferred installation target).
- Check all the boxes on the Associations Area. (see src/assets/02.JPG and src/assets/03.PNG)

(DUTCH: We hebben allereerst een Javascript IDE code editor nodig om de applicatie te kunnen lezen en bewerken. Deze kunnen we downloaden op:
https://www.jetbrains.com/webstorm/download/#section=windows

- Klik op de Download knop
- Open nu op je computer WebStorm-2022.2.exe file en die start de Installation Wizard.
- Volg de stappen van de Installation Wizard en kies de gewenste installatie opties, zoals waar je
  het programma wilt installeren.
- Klik bij Associations alles aan.)

STEP 02:
---
Now you can open the application in WebStorm:
- Option A -- open the included source code in WebStorm.
- Option B -- download the source code from the GitHub link:
  Click on the green button Code
  Click on Download ZIP
  Unpack the downloaded zip file en open it in Webstorm.

See src/assets/04.PNG

(DUTCH Je kunt nu de applicatie in WebStorm openen:
- Optie A -- open de bijgevoegde broncode in WebStorm.
- Optie B -- download de broncode uit de GitHub link
  klik op de groene knop Code
  klik op Download ZIP
  pak het gedownloade zip bestand uit en open deze in WebStorm.)

STEP 03:
---
Now you have opened the application code in a IDE Environment and now we have to unpack the metadata
of our project, so we can use the dependencies, scripts, version, ect and now we can run the App. 

Open the TERMINAL and follow the steps of the contents of chapter 5 of this readme (5. Starting the application)

(DUTCH: Je hebt nu de applicatie code in een IDE omgeving geopend nu moeten we de metadata 
van het project uitpakken zodat we dependencies, scripts, version van het project kunnen 
gebruiken en de app kunnen runnen, volg nu de stappen van hoofdstuk 5 van deze readme)

### 5. Starting the application

Once you have copied the project to your local machine, first install the `node_modules` by running the following commands in the terminal:

`npm install`

When this is done, you can save the API keys from the `.env` file to the root of the project. This file is sent separately with the project. In the terminal run the following:

`npm run build`

You start the application by using:

`npm start`

Open http://localhost:3000 to view the page in the browser.

### 6. Register and Log-in
Now, when the application is opened in a window and you want access to the content of the app, you have to
Register. You can do so on the Register page and you need to register the following:
> Email
> Username
> Password

Now you will be automatically re-directed to the Login page where you are required to input the following:
> Username
> Password

If the user has submitted the data correctly, the Homepage will be loaded and the user can use the app freely with
a JWT Token which we be valid for a certain amount of time.
