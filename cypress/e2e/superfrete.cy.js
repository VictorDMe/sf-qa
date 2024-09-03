/*
CT01: Cálculo de Frete com Dados Válidos
  Dado que eu estou na página de cálculo de frete
  Quando eu inserir todos os dados válidos do pacote
  E clicar no botão "Calcular Frete com Desconto"
  Então os valores de frete com desconto devem ser exibidos corretamente

CT02: Cálculo de Frete com altura inválida
  Dado que eu estou na página de cálculo de frete
  Quando eu inserir uma altura inválida 
  E clicar no botão "Calcular Frete com Desconto"
  Então uma mensagem de erro deve aparecer na altura

CT03: Cálculo de Frete com largura inválida
  Dado que eu estou na página de cálculo de frete
  Quando eu inserir uma largura inválida 
  E clicar no botão "Calcular Frete com Desconto"
  Então uma mensagem de erro deve aparecer na largura

CT04: Cálculo de Frete com comprimento inválido
  Dado que eu estou na página de cálculo de frete
  Quando eu inserir um comprimento inválido 
  E clicar no botão "Calcular Frete com Desconto"
  Então uma mensagem de erro deve aparecer no comprimento

CT05: Cálculo de Frete com Peso não selecionado
  Dado que eu estou na página de cálculo de frete
  Quando eu não selecionar um peso
  E clicar no botão "Calcular Frete com Desconto"
  Então uma mensagem de erro deve aparecer no campo de peso

CT06: Cálculo de Frete com CEPs Inválidos
  Dado que eu estou na página de cálculo de frete
  Quando eu inserir um CEP de origem ou destino inválido
  E clicar no botão "Calcular Frete com Desconto"
  Então uma mensagem de erro deve aparecer no campo de CEP

CT07: Cálculo de Frete com Dados Ausentes
  Dado que eu estou na página de cálculo de frete
  Quando eu não preencher um ou mais campos obrigatórios
  E clicar no botão "Calcular Frete com Desconto"
  Então uma mensagem de erro deve aparecer indicando que os campos são obrigatórios

CT08: Cálculo de Frete com Dados de Limite Exato
  Dado que eu estou na página de cálculo de frete
  Quando eu inserir os valores máximos e mínimos válidos permitidos para altura, largura, comprimento e peso
  E clicar no botão "Calcular Frete com Desconto"
  Então os valores de frete com desconto devem ser exibidos corretamente
*/

const calculo = require("./utils/calculo");

const alturasInvalidas = require("../fixtures/altura.json");
const largurasInvalidas = require("../fixtures/largura.json");
const comprimentosInvalidos = require("../fixtures/comprimento.json");
const cepsInvalidos = require("../fixtures/ceps.json");

const DADOS_VALIDOS = {
  cepOrigem: "08090-284",
  cepDestino: "05407-002",
  peso: "0.3",
  altura: "2",
  largura: "11",
  comprimento: "16",
};

describe("Teste Funcional - Cálculo de Frete", () => {
  beforeEach(() => {
    cy.ignorarErros();
    calculo.acessarSiteCalculoFrete();
    cy.clearAllLocalStorage();
    cy.clearAllCookies();
    cy.wait(10000);
  });

  it("CT01: Cálculo de Frete com Dados Válidos", () => {
    calculo.preencherDadosFrete(DADOS_VALIDOS);
    calculo.clicarCalcular();
    calculo.verificarSeFreteFoiCalculado();
  });

  alturasInvalidas.forEach(({ nome, valor }) => {
    it(`CT02: Cálculo com Altura Inválida - ${nome}`, () => {
      calculo.preencherDadosFrete({ ...DADOS_VALIDOS, altura: valor });
      calculo.clicarCalcular();
      calculo.verificarSeErroEmAltura();
    });
  });

  largurasInvalidas.forEach(({ nome, valor }) => {
    it(`CT03: Cálculo com Largura Inválida - ${nome}`, () => {
      calculo.preencherDadosFrete({ ...DADOS_VALIDOS, largura: valor });
      calculo.clicarCalcular();
      calculo.verificarSeErroEmLargura();
    });
  });

  comprimentosInvalidos.forEach(({ nome, valor }) => {
    it(`CT04: Cálculo com Comprimento Inválido - ${nome}`, () => {
      calculo.preencherDadosFrete({ ...DADOS_VALIDOS, comprimento: valor });
      calculo.clicarCalcular();
      calculo.verificarSeErroNoComprimento();
    });
  });

  it("CT05: Cálculo com Peso não Selecionado", () => {
    calculo.alterarCepOrigem(DADOS_VALIDOS.cepOrigem);
    calculo.alterarAltura(DADOS_VALIDOS.altura);
    calculo.alterarLargura(DADOS_VALIDOS.largura);
    calculo.alterarComprimento(DADOS_VALIDOS.comprimento);
    calculo.alterarCepDestino(DADOS_VALIDOS.cepDestino);
    calculo.clicarCalcular();
    calculo.verificarSeErroEmPeso();
  });

  cepsInvalidos.forEach(({ nome, valor }) => {
    it(`CT06: Cálculo de Frete com CEP Inválido (CEP Origem) - ${nome}`, () => {
      calculo.preencherDadosFrete({ ...DADOS_VALIDOS, cepOrigem: valor });
      calculo.clicarCalcular();
      calculo.verificarSeErroEmCepOrigem();
    });
  });

  cepsInvalidos.forEach(({ nome, valor }) => {
    it(`CT06: Cálculo de Frete com CEP Inválido (CEP Destino) - ${nome}`, () => {
      calculo.preencherDadosFrete({ ...DADOS_VALIDOS, cepDestino: valor });
      calculo.clicarCalcular();
      calculo.verificarSeErroEmCepDestino();
    });
  });

  it("CT07: Cálculo de Frete com Dados Ausentes - Altura, Largura e Comprimento", () => {
    calculo.preencherDadosFrete({
      ...DADOS_VALIDOS,
      altura: " ",
      largura: " ",
      comprimento: " "
    });
    calculo.clicarCalcular();
    calculo.verificarSeErroEmAltura();
    calculo.verificarSeErroEmLargura();
    calculo.verificarSeErroNoComprimento();
  });

  it("CT08: Cálculo de Frete com Dados de Limite - Superior", () => {
    calculo.preencherDadosFrete({
      ...DADOS_VALIDOS,
      altura: "100",
      largura: "100",
      comprimento: "100",
    });
    calculo.clicarCalcular();
    calculo.verificarSeFreteFoiCalculado();
  });

  it("CT08: Cálculo de Frete com Dados de Limite - Inferior", () => {
    calculo.preencherDadosFrete({
      ...DADOS_VALIDOS,
      altura: "0.4",
      largura: "8",
      comprimento: "13",
    });
    calculo.clicarCalcular();
    calculo.verificarSeFreteFoiCalculado();
  });
});
