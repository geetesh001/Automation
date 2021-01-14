Feature: login with login data

Background: open browser
  Given Launch Chrome browser

Scenario Outline: login to facebook with data
  Given Open facebook page
  Then Enter valid "<username>" and "<password>"
  And Click on login button
  Then user should be able to login to facebook

  Examples:
  | username | password |
  | geetesh | Test |

@Test
Scenario: login to facebook with inline data
  Given Open facebook page
  Then Enter valid username and password with below data
  | geetesh-table | test-table |
  | data zero     | password zero|
  | data one      | password one |
  And Click on login button
  Then user should be able to login to facebook

