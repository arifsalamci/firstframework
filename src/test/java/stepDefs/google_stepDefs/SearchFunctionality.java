package stepDefs.google_stepDefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.google.GoogleHomePage;
import utilities.Driver;

public class SearchFunctionality {

    GoogleHomePage googleHomePage = new GoogleHomePage();

    @Given("User is on home page")
    public void user_is_on_home_page() {
        Driver.getDriver().get("https://www.google.com");
    }

    @When("User enter his {string}")
    public void user_enter_his(String searchKeyword) {
        googleHomePage.searchBox.sendKeys(searchKeyword + Keys.ENTER);
    }

    @When("User verify that actualTitle with {string}")
    public void user_verify_that_actualTitle_with(String string) {


        Assert.assertTrue("Title verification Failed", string.equals(Driver.getDriver().getTitle()));

    }




}
