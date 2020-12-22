$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/featureFiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to facebook application",
  "description": "",
  "id": "login-to-facebook-application",
  "keyword": "Feature"
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
  "duration": 94272200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login facebook with valid credential",
  "description": "",
  "id": "login-to-facebook-application;login-facebook-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Open facebook page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter valid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be able to login to facebook",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.openStartingPage()"
});
formatter.result({
  "duration": 63700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.enterCredential()"
});
formatter.result({
  "duration": 93400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickButton()"
});
formatter.result({
  "duration": 53800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});