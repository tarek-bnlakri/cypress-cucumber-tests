Feature:Login to Application
    As invalid user 
    I can't login to the application

    As a valid user
    I can  login into Application

    Scenario:"Vald Login"
        Given I open the login page
        When I fill email with "tarek@gmail.com"
        And fill password with "2003"
        And clcik to the submit
        Then I should see home page

    Scenario:"Invalide Login"
        Given I open the login page
        When I fill email with "tare@g"
        And fill password with "2004"
        And clcik to the submit
        Then I should stay in the Login Page