/// <reference types="Cypress"/>

import CartPageElements from "../elements/cartPageElements"
const cartPageElements = new CartPageElements

function confirmCartItem() {
    cy.get(cartPageElements.cartProduct()).should('be.visible')
}

export {
    confirmCartItem
}