/// <reference types="Cypress"/>

import SearchPageElements from "../elements/searchPageElements"
const searchPageElements = new SearchPageElements

function addToCart() {
    cy.get(searchPageElements.firstItem()).first().click()
}

function goToCart() {
    cy.get(searchPageElements.goToCart()).click()
}

export {
    addToCart,
    goToCart
}