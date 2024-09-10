const url ="http://localhost:5173/"
const checkStatusBtn ='#checkStatus'
const popUps ="#popUps"
const h1 ='#titleForPopUps'
const proceedBtn="#proceedBtn"

class CheckStatus{

        static visit(){
            cy.visit(url)
        }
        static clickToCheckStatus(){
            cy.get(checkStatusBtn).should('exist').should('contain',"Check status").click()
        }
        static shouldSeePopUps(){
           cy.get(popUps).should('exist')
            cy.get(h1).should('exist').should('contain',"For Checking the status of Candidate,You")
        }
        static clickToProceed(){
            cy.get(proceedBtn).should('exist').should('contain',"Proceed").click()
        }
        static shouldNotSeePopUps(){
            cy.get(popUps, { timeout: 10000 }).should('not.be.visible');
        }
}

export default CheckStatus