Cypress.on('uncaught:exception', (err, runnable) => {
    // Retornar false para evitar que o Cypress falhe o teste
    return false
  })
  