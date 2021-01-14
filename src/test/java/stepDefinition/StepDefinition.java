package stepDefinition;


import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import java.util.List;

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

    @Then("^Enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void login(String userName, String Password){
        System.out.println(userName+" "+Password);
    }

    @Then("^Enter valid username and password with below data$")
    public void dataFromTable(DataTable credential){
        List<List<String>> data =credential.raw();
        System.out.print(data.get(0).get(0)+"----");
        System.out.print(data.get(0).get(1));
        System.out.print(data.get(2).get(1));
        System.out.println("");
    }
}
