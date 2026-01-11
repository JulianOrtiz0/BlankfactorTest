import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "../../pages/mainPage";
import { retirementPage } from "../../pages/retirementPage";
import { industriesPage } from "../../pages/industriesPage";

Given('I navigate to Blankfactor main page', () => {
    cy.visit('/');
});

When('click the Industries nav link', () => {
    mainPage.clickIndustriesLink();
});

When('click on Learn More button in Retirement and Wealth section', () => {
    industriesPage.clickRetirementLearnMore();
});

When('capture the text on the third element of the "Powering innovation" section', () => {
    retirementPage.scrollToInnovationSection();
    retirementPage.hoverMachineLearningCard();
});

Then('click on the Lets get stated button', () => {
    retirementPage.clickLetsGetStartedButton();
});

Then("verify that the URL contains {string}", (url) => {
    retirementPage.verifyURL(url);
});

Then("the page title should be {string}", (title) => {
    retirementPage.verifyTitle(title);
});