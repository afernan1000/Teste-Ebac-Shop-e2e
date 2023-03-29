/// <reference types="cypress" />

import enderecoPage from '../support/page-objects/endereco.page';

const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    before(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    beforeEach(() => {
        cy.visit('produtos')
    });

    it.only('Deve selecionar multiplos produtos da lista - Usando Comandos Customizados + Variáveis', () => {
        var a = 1
        var b = 1
        var c = 1
        var d = 1
        var quantidade = a + b + c + d
        cy.addProdutos('Abominable Hoodie', 'L', 'Green', a)
        cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado')
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'L', 'Red', b)
        cy.get('.woocommerce-message').should('contain', '“Ajax Full-Zip Sweatshirt” foi adicionado')
        cy.addProdutos('Arcadio Gym Short', '33', 'Red', c)
        cy.get('.woocommerce-message').should('contain', '“Arcadio Gym Short” foi adicionado')
        cy.addProdutos('Atlas Fitness Tank', 'XL', 'Blue', d)
        cy.get('.woocommerce-message').should('contain', '“Atlas Fitness Tank” foi adicionado')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.checkout-button').click()
        enderecoPage.editarEnderecoCheckout(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email,
            dadosEndereco[0].info
        )
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    })

})