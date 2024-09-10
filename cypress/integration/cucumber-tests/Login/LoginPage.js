const url ='http://localhost:5173/login'
  const emailInput='input[name="email"]'
  const passwordInput='input[name="password"]'
  const errorMessage=".text-red-600"
class LoginPage{
   
  

   static visit(){
        cy.visit(url)
   }


   static fillEmail(email){
        cy.get(emailInput).type(email)
   }


   static fillPassword(password){
    cy.get(passwordInput).type(password)
    }


    static submit(){
        cy.get('form').submit()
    }

    static shouldSeeErrorMessage(){
        cy.get(errorMessage).contains("Invalid Inputs")
    }
}

export default LoginPage