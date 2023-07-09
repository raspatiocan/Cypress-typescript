export class CheckoutInformation{
    field_first_name = '#first-name'
    field_last_name = '#last-name'
    field_postal = '#postal-code'
    btn_checkout = '.btn_primary'
    
    assertCart(){
        cy.get('.cart_item').should('have.length', 4);
    }

    inputFirstName(firstname:string){
        cy.get(this.field_first_name).type(firstname)
    }

    inputLastName(lastname:string){
        cy.get(this.field_last_name).type(lastname)
    }

    inputPostal(postalcode:string){
        cy.get(this.field_postal).type(postalcode)
    }

    btnContinue(){
        cy.get(this.btn_checkout).should('be.visible')
        cy.get(this.btn_checkout).click()
    }

    assertCheckoutSuccess(){
        // this.cartCheckout()
        cy.get('.title').should('be.visible')
    }
    // assertInputFail(){
    //     cy.get('[data-test="error"]').should('be.visible')
    // }

    validationInput(firstname : string, lastname : string, postalcode : string){
        // this.btnContinue()
        this.inputFirstName(firstname)
        // this.btnContinue()
        this.inputLastName(lastname)
        // this.btnContinue()
        this.inputPostal(postalcode)
        this.btnContinue()
        
   
    }



}