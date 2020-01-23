package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition {
	

	@Given("user launches chrome and enters flipkart application")
	public void user_launches_chrome_and_enters_flipkart_application() {
		
		
		Hooks.driver.get("https://www.flipkart.com/");
	}

	@When("user searches product in the search field and click on search to find the result")
	public void user_searches_product_in_the_search_field_and_click_on_search_to_find_the_result() {
		Hooks.driver.findElement(By.xpath("//input[@title='Search for products, brands and more']")).sendKeys("iphone");
		Hooks.driver.findElement(By.xpath("//button[@type='submit']")).click();
		

	}

	@Then("user finds the relavant result")
	public void user_finds_the_relavant_result() {
		System.out.println("user has found relavant result");
	}

	@Given("user launches amazon application")
	public void user_launches_amazon_application() {
		
		Hooks.driver.get("https://www.amazon.in/");
	}

	@When("user searches phone in the search field and click")
	public void user_searches_phone_in_the_search_field_and_click() {
		Hooks.driver.findElement(By.xpath("//input[@type='text']")).sendKeys("iphone");
		Hooks.driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("user sees phone")
	public void user_sees_phone() {
		System.out.println("user has found Iphone");

	}

}
