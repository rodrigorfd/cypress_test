/// <reference types="Cypress"/> 
import '@shelex/cypress-allure-plugin';

describe('Acessar Internet Banking/Login', () => {
    beforeEach(function () {
        cy.visit('/')
    });

    it('Login', function () {
        // Acessar o Portal Dash e realizar Login com sucesso
        cy.loginPortalDash("user")

        cy.url({ timeout: 20000 }).should('include', '/home')
        cy.get('.mnp-name').should('be.visible')
        cy.get('.mnp-name').should('not.be.empty')
        cy.contains('.material-icons', 'person').should('be.visible')
    });
});