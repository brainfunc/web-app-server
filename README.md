# Web App (Server)
Server for web app for core game web-app.

# Running Instruction
- Run the following script to run on localhost. Starts on port 3000
```javascript
npm install
npm start
```
- To run in debug mode using nodemon, install nodemon as a dev dependency
```javascript
npm install
npm i nodemon --save-dev
npm start-watch
```

# Testing Instructions
- Run the following script to run on localhost. Runs the test suite in tests/server.test.js
```javascript
npm install
npm i chai mocha supertest --save-dev
npm test
```
- To test in debug mode using nodemon, install nodemon as a dev dependency first
```javascript
npm install
npm i nodemon --save-dev
npm i chai mocha supertest --save-dev
npm test-watch
```

# Deployment Instruction
The deployment and testing instructions for deploying to heroku can be found in [**instructions.md**](./scripts/instructions.md) inside /scripts folder.

# Author
  - Tejas Nikumbh
    - Email: tejnikumbh@gmail.com
    - Skype: tjnikumbh
