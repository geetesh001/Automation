package stepDefinition;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDefinition {

    @Given("^Launch Chrome browser$")
    public void lunchBrowser(){
        System.out.println("Launching chrome browser");
    }

    @Given("^Open facebook page$")
    public void openStartingPage(){
        System.out.println("Open facebook page");
    }

    @Then("^Enter valid username and password$")
    public void enterCredential(){
        System.out.println("Entering login credential");
    }

    @And("^Click on login button$")
    public void clickButton(){
        System.out.println("clicking login button");
    }

    @Then("^user should be able to login to facebook$")
    public void verify(){
        System.out.println("user able to login to facebook");
    }
}
