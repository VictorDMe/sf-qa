# Teste Funcional - Cálculo de Frete e Cenários Associados

Este projeto tem como objetivo garantir a funcionalidade e a precisão da tela de cálculo de frete da aplicação. Os testes cobrem diversos cenários, incluindo a inserção de dados válidos e inválidos, verificação de mensagens de erro, e validação de limites exatos para altura, largura, comprimento, peso e CEP.

## Casos de Teste

### CT01: Cálculo de Frete com Dados Válidos

**Descrição**: Verifica se o cálculo de frete é realizado corretamente com todos os dados válidos.

- **Dado**: Que estou na página de cálculo de frete.
- **Quando**: Inserir todos os dados válidos do pacote.
- **E**: Clicar no botão "Calcular Frete com Desconto".
- **Então**: Os valores de frete com desconto devem ser exibidos corretamente.

---

### CT02: Cálculo de Frete com Altura Inválida

**Descrição**: Verifica se o sistema exibe uma mensagem de erro ao inserir uma altura inválida.

- **Dado**: Que estou na página de cálculo de frete.
- **Quando**: Inserir uma altura inválida.
- **E**: Clicar no botão "Calcular Frete com Desconto".
- **Então**: Uma mensagem de erro deve aparecer na altura.

---

### CT03: Cálculo de Frete com Largura Inválida

**Descrição**: Verifica se o sistema exibe uma mensagem de erro ao inserir uma largura inválida.

- **Dado**: Que estou na página de cálculo de frete.
- **Quando**: Inserir uma largura inválida.
- **E**: Clicar no botão "Calcular Frete com Desconto".
- **Então**: Uma mensagem de erro deve aparecer na largura.

---

### CT04: Cálculo de Frete com Comprimento Inválido

**Descrição**: Verifica se o sistema exibe uma mensagem de erro ao inserir um comprimento inválido.

- **Dado**: Que estou na página de cálculo de frete.
- **Quando**: Inserir um comprimento inválido.
- **E**: Clicar no botão "Calcular Frete com Desconto".
- **Então**: Uma mensagem de erro deve aparecer no comprimento.

---

### CT06: Cálculo de Frete com CEP Inválido

**Descrição**: Verifica se o sistema exibe uma mensagem de erro ao inserir um CEP inválido.

- **Dado**: Que estou na página de cálculo de frete.
- **Quando**: Inserir um CEP inválido.
- **E**: Clicar no botão "Calcular Frete com Desconto".
- **Então**: Uma mensagem de erro deve ser exibida informando o CEP inválido.

---

### CT08: Cálculo de Frete com Dados de Limite Exato

**Descrição**: Verifica se o cálculo de frete é realizado corretamente quando os valores máximos e mínimos válidos são inseridos para altura, largura, comprimento e peso.

- **Dado**: Que estou na página de cálculo de frete.
- **Quando**: Inserir os valores máximos e mínimos válidos permitidos.
- **E**: Clicar no botão "Calcular Frete com Desconto".
- **Então**: Os valores de frete com desconto devem ser exibidos corretamente.

---

## Estrutura de Teste

Os testes seguem uma estrutura simples, baseada em ações e resultados esperados. Cada caso de teste é construído da seguinte forma:

- **Dado**: O estado inicial necessário para a execução do teste.
- **Quando**: As ações realizadas pelo usuário ou sistema.
- **E**: Ações adicionais ou condições que precisam ser atendidas.
- **Então**: O resultado esperado após a execução do teste.

---

## Dados de Teste

### Exemplos de Altura, Comprimento e Largura Inválidos Utilizados

- Limite inferior e superior
- Valor negativo
- Número zero
- `null`
- `undefined`

### Exemplos de CEPs Inválidos Utilizados

- `00000-000`: Formato inválido.
- `99999-999`: Formato inválido.

---

## Executando os Testes

Para garantir que os testes sejam executados corretamente, siga os passos abaixo:

1. **Clone o repositório**:
   Primeiramente é necessário fazer o clone do repostório.

   ```bash
   git clone https://github.com/VictorDMe/sf-qa
   ```

2. **Instale as Dependências**:
   Antes de rodar os testes, você precisa instalar as dependências do projeto. Abra o terminal e execute o seguinte comando na raiz do projeto:

   ```bash
   npm install
   ```

3. **Execute os Testes**: Existem duas formas de executar os testes: através da interface gráfica ou diretamente no terminal.

   - **Interface Gráfica**: Para abrir a interface gráfica do Cypress e executar os testes interativamente, use o comando abaixo. Isso permite visualizar os testes em tempo real:

     ```bash
     npx cypress open
     ```

   - **Modo Headless**: Para executar todos os testes diretamente no terminal sem abrir a interface gráfica, use o comando:

     ```bash
     npx cypress run
     ```
