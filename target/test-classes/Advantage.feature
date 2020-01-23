@tag
Feature: Two website
  I want to use this template for my feature file

  @tag1
  Scenario: Flipkart test
    Given user launches chrome and enters flipkart application
    When user searches product in the search field and click on search to find the result
    Then user finds the relavant result


  @tag2
  Scenario: Amazon test
    Given user launches amazon application
    When user searches phone in the search field and click
    Then user sees phone 