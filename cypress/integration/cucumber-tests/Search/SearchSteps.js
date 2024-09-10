import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'

Given('I visit the home page',()=>{
    cy.visit('http://localhost:5173')
})

When('I search for user with {string}',(user)=>{
    cy.get('input[name="search-user"]').type(user)
})

Then('I should see a list of status', () => {
    cy.get('#title').should('contain', 'INFOSYS');        
});

// In case invalide user doesn't exist
Then('I should see nothing', () => {
    cy.get('#container').should('not.exist');       
});



When('When I hover to company',()=>{
    cy.get('#company').trigger('mouseover');
})

Then('Should see View more btn', () => {
    cy.get('#btnViewMore').should('exist').should('contain',"View more");       
});
When ('I click on view more',()=>{
    cy.get('#btnViewMore').click()
})
Then('should see pipeline',()=>{
    cy.get('#pipeline').should('exist')
    cy.get('#username').should('exist')
    cy.get('#status').should('exist')
})