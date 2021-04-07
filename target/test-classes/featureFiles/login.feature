Feature: Login to facebook application

Background: Launching chrome browser
  Given Launch Chrome browser

  @smoke
Scenario: Login facebook with valid credential
  Given Open facebook page
  Then Enter valid username and password
  And Click on login button
  Then user should be able to login to facebook
