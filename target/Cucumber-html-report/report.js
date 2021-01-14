$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginWithData.feature");
formatter.feature({
  "line": 1,
  "name": "login with login data",
  "description": "",
  "id": "login-with-login-data",
  "keyword": "Feature"
});
formatter.before({
  "duration": 579000,
  "status": "passed"
});
formatter.before({
  "duration": 47900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "open browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.lunchBrowser()"
});
formatter.result({
  "duration": 88636900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "login to facebook with inline data",
  "description": "",
  "id": "login-with-login-data;login-to-facebook-with-inline-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter valid username and password with below data",
  "rows": [
    {
      "cells": [
        "geetesh-table",
        "test-table"
      ],
      "line": 20
    },
    {
      "cells": [
        "data zero",
        "password zero"
      ],
      "line": 21
    },
    {
      "cells": [
        "data one",
        "password one"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should be able to login to facebook",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.openStartingPage()"
});
formatter.result({
  "duration": 41600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.dataFromTable(DataTable)"
});
formatter.result({
  "duration": 1296800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickButton()"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify()"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.after({
  "duration": 36000,
  "status": "passed"
});
formatter.after({
  "duration": 33300,
  "status": "passed"
});
});