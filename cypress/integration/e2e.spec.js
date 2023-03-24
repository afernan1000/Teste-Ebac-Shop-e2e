/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha conta')
        // APONTANDO PARA O PERFIL EM FIXTURE E CRIANDO VARIAVEL DADOS
        cy.fixture('perfil').then(dados => {
            // FAZENDO LOGIN COM COMANDOS CUSTOMIZADOS E COM A VARIAVEL DADOS
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

    });


})