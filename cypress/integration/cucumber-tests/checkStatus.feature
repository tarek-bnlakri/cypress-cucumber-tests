Feature: Check Status Of Candidate

    As valide Check When Click To Check status
    Should See PopUps

    Scenario:
        Given I visit homepage
        When I click to Check status
        Then I should see PopUps
        And I click to Proceed
        Then Should disappear