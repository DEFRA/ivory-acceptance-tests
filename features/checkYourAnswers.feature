
Feature: Check Your Answers Journey
  As a tester
  I want to check the Check Your Answers functionality
  So that I know that it works and is secure

@wip
 Scenario: Check Your Answers Journey
   Given I go to item type page
   Then I select a item type 2
   And click Continue button
   Then I should be presented with add photograph page
   When I choose file in add photograph page
   And click Continue button
   Then I should be presented with this is your photo page
   And click Continue button
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
   Then I should be presented with dealing intent page
   When I select an intent
   And click Continue button
   Then I should be presented with summary page
   When I click on Item type Change button
   Then I go to item type page
   When I select a item type
   And click Continue button
   Then I should be presented with age exemption page
   When I select the age declaration
   Then I enter a description in age exemption page
   And click Continue button
   Then I should be presented with volume exemption page
   When I select the volume declaration
   Then I enter a description in volume exemption page
   And click Continue button
   Then I should be presented with summary page
   When I click on Item description Change button
   Then I should be presented with description page
   When I change the description
   And click Continue button
   Then I should be presented with summary page
   When I click change photograph link
   Then I should be presented with this is your photo page
   And click Continue button
   Then I should be presented with summary page
   When I click change who owns the item link
   Then I should be presented with who owns the item page
   When I select owner
   And click Continue button
   Then I should be presented with summary page
   When I click change dealing intent link
   Then I should be presented with dealing intent page
   When I select an intent
   And click Continue button
   Then I should be presented with summary page
   When I click change your name link
   Then I should be presented with owner name page
   And click Continue button
   Then I should be presented with summary page
   When I click change item age declaration link
   Then I should be presented with age exemption page
   And click Continue button
   Then I should be presented with summary page
   When I click change owner address link
   Then I should be presented with owner address page
   And click Continue button
   Then I should be presented with summary page
   And click Confirm and continue button
   Then I should be presented with payments page
   And I enter valid details
   Then click Continue button
   And I should be presented with payment confirm page
   Then click Confirm payment button
   And I should be presented with confirmation page





