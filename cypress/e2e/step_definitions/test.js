import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "../../pages/mainPage";
import { retirementPage } from "../../pages/retirementPage";

Given('User navigates to Blankfactor main page', () => {
    cy.visit('/');
});

When('hover over the Industries link and clicks on Retirement and Wealth section', () => {

    mainPage.openIndustriesMenu();
    mainPage.clickRetirementLink();
});

When('captures the text on the third element of the "Powering innovation" section', () => {

    retirementPage.scrollToInnovationSection();
    retirementPage.hoverMachineLearningCard();
    
});

Then('clicks on the Let\'s get stated button', () => {
    retirementPage.clickLetsGetStartedButton();
});


Then("verifies that the URL contains {string}", (url) => {
    retirementPage.verifyURL(url);
});

Then("the page title is {string}", (title) => {
    retirementPage.verifyTitle(title);
});