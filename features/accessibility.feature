Feature: Demo test feature
  As a cucumber-wdio user, I want to be able to check
  whether I am able to execute a sample cucumber scenario
@axe
  Scenario Outline: Test to showcase accessibility testing using axe-core
    When I validate accessibility standards using AXE for <page> with <report>
    Examples:
      |page|report|
      |/item-type|item-type-axe.csv|
      |/add-photograph|add-photo-axe.csv|
#      |https://webdriver.io/|test-result-wdio.csv|
