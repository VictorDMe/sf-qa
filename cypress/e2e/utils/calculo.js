function acessarSiteCalculoFrete() {
  cy.visit('/', { 
    failOnStatusCode: false,
    waitForAnimations: true, 
    waitUntil: 'domcontentloaded'
  });
}

function alterarCepOrigem(cep) {
  cy.get("#originPostcode").type(cep);
}

function alterarPeso(valor) {
  cy.get('#weight').click();
  cy.get(`[data-value="${valor}"]`).click();
}

function alterarComprimento(valor) {
  cy.get('#packageDepth').type(valor);
}

function alterarLargura(valor) {
  cy.get('#packageWidth').type(valor);
}

function alterarAltura(valor) {
  cy.get('#packageHeight').type(valor);
}

function alterarCepDestino(cep) {
  cy.get('#destinationPostcode').type(cep);
}

function clicarCalcular() {
  cy.dataCy('calculator-submit').click();
}

function verificarSeFreteFoiCalculado() {
  cy.get('#resultsArea', { timeout: 10000 }).should('be.visible');
}

function verificarSeErroEmAltura() {
  cy.get('[data-cy="calculator-packageHeight"] #packageHeight-helper-text', { timeout: 10000 }).should('be.visible');
}

function verificarSeErroEmLargura() {
  cy.get('[data-cy="calculator-packageWidth"] #packageWidth-helper-text', { timeout: 10000 }).should('be.visible');
}

function verificarSeErroNoComprimento() {
  cy.get('[data-cy="calculator-packageDepth"] #packageDepth-helper-text', { timeout: 10000 }).should('be.visible');
}

function verificarSeErroEmPeso() {
  cy.get(':nth-child(5) > .MuiFormControl-root > .MuiFormHelperText-root', { timeout: 10000 }).should('be.visible');
}

function verificarSeErroEmCepOrigem() {
  cy.get('[data-cy="calculator-originPostCode"] #originPostcode-helper-text', { timeout: 10000 }).should('be.visible');
}

function verificarSeErroEmCepDestino() {
  cy.get('[data-cy="calculator-destinationPostCode"] #destinationPostcode-helper-text', { timeout: 10000 }).should('be.visible');
}

function preencherDadosFrete({ cepOrigem, peso, altura, largura, comprimento, cepDestino }) {
  alterarCepOrigem(cepOrigem);
  alterarPeso(peso);
  alterarAltura(altura);
  alterarLargura(largura);
  alterarComprimento(comprimento);
  alterarCepDestino(cepDestino);
}

module.exports = {
  acessarSiteCalculoFrete,
  alterarCepOrigem,
  alterarPeso,
  alterarAltura,
  alterarLargura,
  alterarComprimento,
  alterarCepDestino,
  clicarCalcular,
  verificarSeFreteFoiCalculado,
  verificarSeErroEmAltura,
  verificarSeErroEmLargura,
  verificarSeErroNoComprimento,
  verificarSeErroEmPeso,
  verificarSeErroEmCepOrigem,
  verificarSeErroEmCepDestino,
  preencherDadosFrete
};
