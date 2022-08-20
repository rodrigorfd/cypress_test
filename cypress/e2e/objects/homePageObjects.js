/// <reference types="Cypress"/>

import HomePageElements from "../elements/homePageElements"
const homePageElements = new HomePageElements

function goToHome() {
    cy.viewport(1920, 1080).visit('http://automationpractice.com/index.php', {
        headers: {
            'user-agent': 'axios/0.21.4'
        }
    })
}

function doASearch(args) {
    cy.get(homePageElements.textBoxSearch()).clear().type(args)
    cy.get(homePageElements.btnSearch()).click().wait(500)
    cy.get(homePageElements.searchResult()).should('be.visible').contains('dress')
}

export {
    doASearch,
    goToHome
}