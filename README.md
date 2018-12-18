<<<<<<< HEAD
# NIGHTGUIDE

## Week 8-9 Large group project 

The focus of this app is to practice using the Full Stack we have learnt, (and new technology [react native]) in a large scale app.

The idea of the app is to create a **"stargazing - astronomical"** style app for people to visit and check **WEATHER (with visibility)**, **LOOKOUT reccomendations (x and y coordinates)**, **what constellations they can see in wellington**.

---

### Technology
+ React Native
+ Redux
+ API's
+ Using Sensors in React Native
+ Database Knex
+ Express
+ JWT Auth (Local)
+ SVG
+ Postman
+ React
 
 ---
 ### User Stories

 #### MVP
+ As a user I want to be able to .. Observe the weather and the visibility for the city/country I am in.

+ As a user I want to be able to .. Find all of the best Lookout points to view stars and planets around Wellington, using cordinates and querying a Google Maps API.

+ As a user I want to be able to .. Learn more about certain planets and constellations and get some info on when they might be seen

---


#### Stretch

+ As a user I want to be able to .. Observe which planets and constellations I can see from Wellington on a specific night

+ As a user I want to be able to .. Use augmented reality with the constellations to see image of them through camera

+ As a user I want to be able to .. Depending on time of day for user, show light or dark background

+ As a user I want to be able to .. Depending on time of day and weather for user, show different background in weather view

 ----

 ## Views (Client Side)

  | components | purpose |
  | --- | --- |
  | Landing | View of opening page with logo |
  | NightGuideLogo | Night guide logo svg |
  | InstructionContainer | Holds the Menu and Welcome instructions |
  | WelcomeInstruction  | View with welcome message on first open of app |
  | MenuInstruction | View with menu instructions (use of app) on first open on app |
  | Home | View to contain initial page with nav bar buttons |
  | NavBar | View for navigation buttons |
  | Weather  | View to see weather in your area for stargazing |
  | ConstellationList | Shows a list of common constellations |
  | ConstellationDetails | Shows more info on specific constellation |
  | PlanetList | Shows list of planets in solar system |
  | PlanetDetails  | Shows more info on specific planet |
  | LookoutList | Shows specific lookouts in your area and on a map |
  | LookoutDetails | Shows more details on the specific lookout |

  | name | purpose |
  | --- | --- |
  | Weather query API| Search for your local weather |
  | hardcode Lookout Points API | Search for local Lookout Points |
  | Hardcode constellations API | Search for constellations in your area |
  | hardcode planet API  | Search for planets that you can see in your area |
  | ###  | #### |
  | ## | ###  |
 
---




## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
yarn h:deploy
  - or -
npm run h:deploy
```

Run heroku migrations:
```sh
yarn h:migrate
  - or -
npm run h:migrate
```

Run heroku seeds:
```sh
yarn h:seed
  - or -
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
yarn h:rollback
  - or -
npm run h:rollback
```
=======
# Final-Group-Project-ReactNative
NightGuide-ClientSide
 
$npm install
$npm start
>>>>>>> 3afa5f3a633d0604111ab9209171b32ecc6209b7
