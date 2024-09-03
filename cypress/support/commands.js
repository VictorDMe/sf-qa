Cypress.Commands.add('ignorarErros', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
})