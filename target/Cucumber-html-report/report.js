$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to facebook application",
  "description": "",
  "id": "login-to-facebook-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 403300,
  "status": "passed"
});
formatter.before({
  "duration": 26200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launching chrome browser",
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
  "duration": 2811256400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Login facebook with valid credential",
  "description": "",
  "id": "login-to-facebook-application;login-facebook-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Enter valid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should be able to login to facebook",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.openStartingPage()"
});
formatter.result({
  "duration": 2264873500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.enterCredential()"
});
formatter.result({
  "duration": 151349100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickButton()"
});
formatter.result({
  "duration": 64700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify()"
});
formatter.result({
  "duration": 52200,
  "status": "passed"
});
formatter.after({
  "duration": 34300,
  "status": "passed"
});
formatter.after({
  "duration": 25500,
  "status": "passed"
});
});