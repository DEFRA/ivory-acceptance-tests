
Feature: Registration Journey
  As a tester
  I want to check the Registration journey functionality
  So that I know that it works and is secure

@wip
  Scenario: Registration Error Messages
     Given I go to item type page
     And click Continue button
     Then I should see error message in item type page
     When I select a item type
     And click Continue button
     Then I should be presented with add photograph page
     When click Continue button
     Then I should see error message in add photograph page
     When I choose file in add photograph page
     And click Continue button
     Then I should be presented with this is your photo page
     And click Continue button
     Then I should be presented with description page
     And click Continue button
     Then I should see error message in description page
     When I enter a description
     And click Continue button
     Then I should be presented with age exemption page
     When click Continue button
     Then I should see error message in age exemption page
     When I select the age declaration
     Then I enter a description in age exemption page
     And click Continue button
     Then I should be presented with volume exemption page
     When click Continue button
     Then I should see error message in volume exemption page
     When I select the age declaration
     Then I enter a description in volume exemption page
     And click Continue button
     Then I should be presented with who owns the item page
     When click Continue button
     Then I should see error message in who owns the item page
     When I select owner
     And click Continue button
     Then I should be presented with owner name page
     When click Continue button
     Then I should see error message in owner name page
     When I enter a valid name
     And click Continue button
     Then I should be presented with owner address page
     When click Continue button
     Then I should see error message in owner address page
     When I enter valid full details
     And click Continue button
     Then I should be presented with owner email address page
     When click Continue button
     Then I should see error message in owner email address page
     When I enter a valid email Id
     And click Continue button
     Then I should be presented with dealing intent page
     When click Continue button
     Then I should see error message in dealing intent page
     When I select an intent
     And click Continue button
     Then I should be presented with summary page
     And click Confirm and continue button
     When I enter valid details
     And click Continue button
     Then I should be presented with payment confirm page
     And click Confirm payment button
     Then I should be presented with confirmation page


