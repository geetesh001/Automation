package stepDefinition;


import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

public class StepDefinition {

    WebDriver driver;
    @Given("^Launch Chrome browser$")
    public void lunchBrowser(){
        System.out.println("Launching chrome browser");
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Geetesh\\IdeaProjects\\Automation\\lib\\chromedriver.exe");
        driver= new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @Given("^Open facebook page$")
    public void openStartingPage(){
        driver.get("https://facebook.com");
    }

    @Then("^Enter valid username and password$")
    public void enterCredential(){
        System.out.println("Entering login credential");
        driver.findElement(By.xpath("//input[@name='email']")).sendKeys("test");
        driver.findElement(By.xpath("//input[@name='pass']")).sendKeys("test pass");
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
