
Feature: Registration Museum Journey
  As a tester
  I want to check the Registration Museum journey functionality
  So that I know that it works and is secure

@wip
 Scenario: Registration Museum Journey
   Given I go to item type page
   Then I select a item type 4
   And click Continue button
   Then I should be presented with add photograph page
   When I choose file in add photograph page
   And click Continue button
   Then I should be presented with this is your photo page
   And click Use this photo
   Then I should be presented with description page
   When I enter a description
   And click Continue button
   Then I should be presented with who owns the item page
   When I select owner
   And click Continue button
   Then I should be presented with owner name page
   When I enter a valid name
   And click Continue button
   Then I should be presented with owner address page
   When I enter valid full details
   And click Continue button
   Then I should be presented with owner email address page
   When I enter a valid email Id
   And click Continue button
   Then I should be presented with dealing intent page
   When I select an intent
   And click Continue button
   Then I should be presented with summary page
   And click Confirm and continue button
   Then I should be presented with payments page
   And I enter valid details
   Then click Continue button
   And I should be presented with payment confirm page
   Then click Confirm payment button
   And I should be presented with confirmation page



