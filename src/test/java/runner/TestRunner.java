package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@CucumberOptions(
        features = {"src/test/resources/featureFiles"},
        glue = {"stepDefinition"},
        plugin = {"html:target/Cucumber-html-report"}, //used to generate different type of report
        monochrome = true,//to make console output more readable
        dryRun = false, // if true it checks all steps of feature files are defined in stepdefinition or not. it
                      // does not run entire code
        strict = false, //
        /*if strict option is set to false then at execution time if cucumber encounters any undefined/pending
        steps then cucumber does not fail the execution and undefined steps are skipped and BUILD is SUCCESSFUL.*/
        tags = {"@Test"}
)

@RunWith(Cucumber.class)
public class TestRunner {
}
