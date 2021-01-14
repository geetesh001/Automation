package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

    @Before
    public void before(){
        System.out.println("This is before hook");
    }

    @Before(order = 0)
    public void before2(){
        System.out.println("This is before hook with order zero");
    }

    @After
    public void tearDown(){
        System.out.println("This is after hook");
    }

    @After(order = 0)
    public void tearDown2(){
        System.out.println("This is after hook with order zero");
    }


}
