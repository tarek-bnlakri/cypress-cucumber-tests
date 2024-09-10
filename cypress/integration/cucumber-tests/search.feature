Feature: Search Status Of User

  As a user,
  I want to search for users
  So that I can see their status

  Scenario: Valid Search
    Given I visit the home page
    When I search for user with "tarek"
    Then I should see a list of status
    And  When I hover to company
    Then Should see View more btn
    And I click on view more 
    Then should see pipeline
    

  Scenario: Invalid Search
     Given I visit the home page
     When I search for user with "nouser"
     Then I should see nothing 