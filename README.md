### Fibonacci Sequence

## Getting Started

Installation
- Clone the repository
    ```
        git clone https://github.com/B-Tanonaka/fibonacci-sequence.git
    ```
- Install the dependencies
    ```
        npm install
    ```
- If it's the first time you are opening the repo make sure to run npm build
    ```
        npm build
        npm start

- Open the application on http://localhost:3000

## Tech stack
- Database - MySQL
- Backend - Node.js
- Frontend - TypeScript, React, React Router
- Bundle - Webpack, Babel

## Notes
- My approach was to check if the input n value is already in the database, if so, return every value up to the input n value. If there was already data in the database but it was lower than the input n value, the function pulls data up until the highest n value from the database and calculates the remaining Fibonacci values up to the input n value. Then post the new values into the database.
- I started by creating HTTP functions in controller.ts and realized I was setting up to calculate the Fibonacci sequence on the front end. I reversed course and combined all processes into a single function in controller.ts so that the front end only has to make a single request with an input number.
- The core calculateFibonacci algorithm was sourced from StackOverflow but I adjusted it to fit my data structure

## Things I would do if I had more time
- Write tests using Jest
- Implement server-side rendering so that the /list page can be navigated to directly and pulls the highest input value from the database
- Handle the error of navigating directly to the current /list page
- Handle the error of the calculateData function occasionally trying to insert data for an already existing n value
- Change the database value types to strings so that there isn't an upper limit