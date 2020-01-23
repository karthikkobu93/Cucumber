package org.TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java",glue="StepDefinition",plugin= {"pretty","json:target/cucumber-report/cucumber.json"})
public class TestRunner {

	
	
}
