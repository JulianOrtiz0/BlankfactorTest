
class BasePage {
    verifyURL(url) {
        cy.url().should('include', url)
    }

    verifyTitle(title) {
        cy.title().should('eq', title)
    }
}

export { BasePage };