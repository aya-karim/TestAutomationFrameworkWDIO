# Test Automation Framework with typescript

Designing Test Automation Framework to Tests functional UI Websites:


System Design: Page Object Model


Used Package: WDIO (web Driver Input Output)

Reporting Tool : Allure Reporting 

Framework: Mocha

Tested Browser: Google Chrome

## Prerequisites

Download [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and npm

```bash
npm install -g npm
```

## Running commands with browser

```javascript
npm run tests
// run all tests

npm run loginTests
// run logIn page testcases only

npm run searchTests
// run search page testcases only

npm run salesTests
// run sales page testcases only

npm run allureReport
// Generate and open Allure reports after running tests
```

## Run Tests in Headless Mode
Uncomment "Headless" in wdio.conf.js


![In capabilities](https://raw.githubusercontent.com/aya-karim/TestAutomationFrameworkWDIO/master/Headless%20Screenshot.png)
