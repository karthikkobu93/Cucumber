package StepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {
	static WebDriver driver;

	@Before
	public void lanch() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Admin\\eclipse-workspace\\karthik\\Cucucmberbatch\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();

	}

	@After
	public void close() {

		driver.quit();

	}

}
