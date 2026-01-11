import "cypress-real-events";

class RetirementPage {
    get innovationSection() { return cy.get('.cards') }
    get machineLearningCard() { return cy.get('.card-wrapper').eq(2).find('.flip-card-inner') }
    get letsGetStartedButton() { return cy.get('a[title="Let\'s get started"]') }

    scrollToInnovationSection() {
        this.innovationSection.scrollIntoView()
    }
    hoverMachineLearningCard() {

        this.machineLearningCard.should('be.visible')
            .realHover()
            .wait(700)
            .find('.flip-card-back .card-text')
            .invoke('text').then((text) => {
                cy.log('Text in 3rd tile: ' + text.trim());
            });
    }
    clickLetsGetStartedButton() {
        this.letsGetStartedButton.click()
    }

    verifyURL(url) {
        cy.url().should('include', url)
    }

    verifyTitle(title) {
        cy.title().should('eq', title)
    }

}

export const retirementPage = new RetirementPage();