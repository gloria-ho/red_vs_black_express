# Red v. Black

## How to run
1. In the command line, run `npm install`
2. Run `npm run start`
3. Direct your browser to `localhost:3000`

## How to view report
1. Direct your browser to `localhost:3000/report`

## Features:
Due to Google Chrome not allowing a local web page cookie privileges, I chose to use Express to create a simple local server.
- Loads a randomly colored square
- Keeps track of the last color seen
- Keeps a total tally of how many times each color was seen
- User can refresh the page with a button
- User can clear the cookies with a button
- User can view a report of how many times a user has seen each color, based on IP address