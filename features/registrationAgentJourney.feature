
Feature: Registration Agent Journey
  As a tester
  I want to check the Registration Agent journey functionality
  So that I know that it works and is secure

@wip @zap
 Scenario: Registration Agent Journey
   Given I go to item type page
   Then I select a item type 2
   And click Continue button
   Then I should be presented with add photograph page
   When I choose file in add photograph page
   And click Continue button
   Then I should be presented with this is your photo page
   And click Use this photo
   Then I should be presented with description page
   When I enter a description
   And click Continue button
   Then I should be presented with age exemption page
   When I select the age declaration
   Then I enter a description in age exemption page
   And click Continue button
   Then I should be presented with volume exemption page
   When I select the volume declaration
   Then I enter a description in volume exemption page
   And click Continue button
   Then I should be presented with who owns the item page
   When I select agent
   And click Continue button
   Then I should be presented with contact name page
   When I enter a valid name
   And click Continue button
   Then I should be presented with your address page
   When I enter valid full address
   And click Continue button
   Then I should be presented with your email address page
   When I enter a valid agent email Id
   And click Continue button
   Then I should be presented with owner name page
   When I enter a valid name
   And click Continue button
   Then I should be presented with owner address page
   When I enter valid full details
   And click Continue button
#   Then I should be presented with owner email address page
#   When I enter a valid email Id
#   And click Continue button
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



