import header from '../selectors/header.sel'

describe('Header', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('can search for products suggested in the search box', () => {
        cy.get(header.searchBox)
            .type('music')
        
        cy.get(header.suggestionBox)
            .find('li')
            .contains('poster')
            .click() 
    })


    it('can search for Home Decor products from the nav bar', () => {
        cy.get(header.navBar)
            .find('a')
            .eq(3)
            .trigger('mouseover')

        cy.get(header.decorNav)
            .click()
    })


    it('can change the currency of the website', () => {
        cy.get(header.updateSettingsBtn)
            .click()
        
        cy.get(header.currencyCbo)
            .select('USD')
            .select('CAD')

        cy.get(header.updateSettingsSaveBtn)
            .click()
    })
})