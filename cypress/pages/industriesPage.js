import { BasePage } from "./basePage";
class IndustriesPage extends BasePage {
    get retirementLearnMoreButton() {return cy.contains('div.section-row', 'Retirement and Wealth').contains('Learn More');}

    clickRetirementLearnMore() {
        this.retirementLearnMoreButton.wait(1000).click();
    }

}
export const industriesPage = new IndustriesPage();