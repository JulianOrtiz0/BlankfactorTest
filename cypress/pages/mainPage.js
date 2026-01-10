class MainPage {
    get industriesMenu() {return cy.get('#menu-item-4871')}
    get retirementhLink() {return cy.get('div.industries-slider-wrap').find('a[title="Retirement and wealth"]', {delay: 500})}


    openIndustriesMenu() {
        this.industriesMenu.trigger('mouseover')
    }
    clickRetirementLink(){
        this.retirementhLink.should('be.visible').click()
    }
}

export const mainPage = new MainPage();