# Red v. Blue

## How to run
1. In the command line, run `npm install`
2. Run `npm run start`
3. Direct your browser to `localhost:3000`

## How to view report
1. Direct your browser to `localhost:3000/report`

## Features:
Due to Google Chrome not allowing a local web page cookie privileges, I chose to use Express to create a simple local server.
- Loads a randomly colored circle
- Keeps track of the last color seen
- Keeps a total tally of how many times each color was seen
- User can refresh the page with a button
- User can clear the cookies with a button

## Task
### Build an HTML page (or web app) that:
- Shows a user an image of either a red or blue ball upon visiting the page. This should be random, with a 50/50 chance of a user being shown either color ball.
- Determine whether the user saw a red or a blue ball and the next time a user visits the page show them the same color ball they saw previously.
- Please work with cookies (and not local storage) to record how many times a user has seen each color of ball. You should be able to provide a report on users and number of times they saw each color ball.
- The test should work in any browser (including Chrome). Style as necessary (it is very much appreciated if you do).
- Code should be written in Javascript and feel free to use a framework for building the page/application. Any cookie functionality should not be abstracted by jQuery or any other module provided by NPM or the like.