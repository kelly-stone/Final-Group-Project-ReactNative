# NIGHTGUIDE

## Week 8-9 Large group project

The focus of this app is to practice using the Full Stack we have learnt, (and new technology [react native]) in a large scale app.

The idea of the app is to create a **"stargazing - astronomical"** style app for people to visit and check **WEATHER (with visibility)**, **LOOKOUT reccomendations (x and y coordinates)**, **what constellations they can see in wellington**.

---

### Technology

- React Native
- Redux
- API's
- Using Sensors in React Native
- Database Knex
- Express
- JWT Auth (Local)
- SVG
- Postman
- React

  ***

-$npm install
-$npm start

#### MVP

- As a user I want to be able to .. Observe the weather and the visibility for the city/country I am in.

- As a user I want to be able to .. Find all of the best Lookout points to view stars and planets around Wellington, using cordinates and querying a Google Maps API.

- As a user I want to be able to .. Learn more about certain planets and constellations and get some info on when they might be seen

---

#### Stretch

- As a user I want to be able to .. Observe which planets and constellations I can see from Wellington on a specific night

- As a user I want to be able to .. Use augmented reality with the constellations to see image of them through camera

- As a user I want to be able to .. Depending on time of day for user, show light or dark background

- As a user I want to be able to .. Depending on time of day and weather for user, show different background in weather view

  ***

## Views (Client Side)

| components           | purpose                                                       |
| -------------------- | ------------------------------------------------------------- |
| Landing              | View of opening page with logo                                |
| NightGuideLogo       | Night guide logo svg                                          |
| InstructionContainer | Holds the Menu and Welcome instructions                       |
| WelcomeInstruction   | View with welcome message on first open of app                |
| MenuInstruction      | View with menu instructions (use of app) on first open on app |
| Home                 | View to contain initial page with nav bar buttons             |
| NavBar               | View for navigation buttons                                   |
| Weather              | View to see weather in your area for stargazing               |
| ConstellationList    | Shows a list of common constellations                         |
| ConstellationDetails | Shows more info on specific constellation                     |
| PlanetList           | Shows list of planets in solar system                         |
| PlanetDetails        | Shows more info on specific planet                            |
| LookoutList          | Shows specific lookouts in your area and on a map             |
| LookoutDetails       | Shows more details on the specific lookout                    |

| name                        | purpose                                          |
| --------------------------- | ------------------------------------------------ |
| Weather query API           | Search for your local weather                    |
| hardcode Lookout Points API | Search for local Lookout Points                  |
| Hardcode constellations API | Search for constellations in your area           |
| hardcode planet API         | Search for planets that you can see in your area |
| ###                         | ####                                             |
| ##                          | ###                                              |
