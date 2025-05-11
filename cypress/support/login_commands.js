/// <reference types="Cypress"/>

Cypress.Commands.add('loginPortalDash', (userType) => {
    // Carregar os dados do arquivo de usuários JSON
    cy.fixture('users').then((users) => {
        const user = users[userType]

        cy.get('[data-testid="btn-loginpj-cnpj"]').type(user.cnpj)
        cy.get('[data-testid="btn-loginpj-psw"]').type(user.password)
        cy.get('[data-testid="btn-loginpj-submit"]').contains('Entrar na conta').click()
    })
})