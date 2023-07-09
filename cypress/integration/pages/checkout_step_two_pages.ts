export class CheckoutDetail{
    assertDetail(){
        // cy.get('#checkout_summary_container > div > div.summary_info').contains('contains', 'Payment')
        cy.get('.cart_item').should('have.length', 4);
    }
}