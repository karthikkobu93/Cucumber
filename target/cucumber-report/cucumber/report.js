$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Advantage.feature");
formatter.feature({
  "name": "Two website",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Flipkart test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches chrome and enters flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launches_chrome_and_enters_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches product in the search field and click on search to find the result",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_searches_product_in_the_search_field_and_click_on_search_to_find_the_result()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user finds the relavant result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_finds_the_relavant_result()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Amazon test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches amazon application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launches_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches phone in the search field and click",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_searches_phone_in_the_search_field_and_click()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CPSMOD0\u0027, ip: \u0027192.168.43.128\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50483}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 967aa63d9a38e950d13c0f382f3f3d7b\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027text\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.StepDefinition.user_searches_phone_in_the_search_field_and_click(StepDefinition.java:42)\r\n\tat ✽.user searches phone in the search field and click(file:src/test/java/Advantage.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user sees phone",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_sees_phone()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});