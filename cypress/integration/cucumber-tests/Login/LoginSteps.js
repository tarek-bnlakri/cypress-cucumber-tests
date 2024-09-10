import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './LoginPage'
Given("I open the login page",()=>{
    LoginPage.visit()
})

When("I fill email with {string}",(email)=>{
   LoginPage.fillEmail(email)
 
  
})
When("fill password with {string}",(passsword)=>{
   
    LoginPage.fillPassword(passsword)
    
 })
 When("clcik to the submit",()=>{
    
    LoginPage.submit()
 })
Then("I should see home page",()=>{
    cy.url().should('include', '/');
    cy.get('h1').should('contain', 'Track candidate status');
})
Then("I should stay in the Login Page",()=>{
    cy.url().should('include', '/login');
    LoginPage.shouldSeeErrorMessage()
})