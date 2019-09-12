
Feature: First test


 Scenario: Registration scenario
   Given I go to item type page
   Then I select a item type
   And click Continue button
   Then I should be presented with description page
   When I enter a description
   And click Continue button
   Then I should be presented with owner email address page
   When I enter a valid email Id
   And click Continue button
#   Then I should be presented with "owner name" page
#   When I enter a valid name
#   And click Continue button
#   Then I should be presented with "owner address" page
#   When I enter valid full details
#   And click Continue button
#   Then I should be presented with "dealing intent" page
#   When I select an intent
#   And click Continue button
#   Then I should be presented with "summary" page
#   And click Confirm and continue button
#   Then I should be presented with "confirmation" page


