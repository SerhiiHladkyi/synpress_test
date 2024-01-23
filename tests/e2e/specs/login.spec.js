describe('Test User Login', () => {

    it('Connects with Metamask', () => {
        cy.visit('https://redduck-flow-poc.netlify.app/')
        cy.contains('Connect Wallet').click();
        cy.window().then((win) => {
            win.eval('document.querySelector("body > w3m-modal").shadowRoot.querySelector("wui-flex > wui-card > w3m-router").shadowRoot.querySelector("div > w3m-connect-view").shadowRoot.querySelector("wui-flex > wui-list-wallet:nth-child(3)").shadowRoot.querySelector("button").click()');
        });
        cy.acceptMetamaskAccess().should("be.true");
        cy.switchToCypressWindow();
        cy.contains('Connect Wallet').should('not.exist');
    })
})