import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import CheckStatus from './CheckStatus'

Given('I visit homepage',()=>{
    CheckStatus.visit()
})

When('I click to Check status',()=>{
    CheckStatus.clickToCheckStatus()
})
Then('I should see PopUps',()=>{
    CheckStatus.shouldSeePopUps()
})
When('I click to Proceed',()=>{
    CheckStatus.clickToProceed()
})
Then('Should disappear',()=>{
    CheckStatus.shouldNotSeePopUps()
})
