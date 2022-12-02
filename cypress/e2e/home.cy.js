import home from '../selectors/home.sel'

describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('');
    })
    
    it('displays correctly 5 popular products with their title, sales and a 5 star rating', () => {
        cy.get(home.mainHomeTitles).first()
            .should('be.visible')
            .and('include.text', 'Popular gifts right now')
        
        cy.get(home.popularProducts)
            .should('be.visible')
            .and('have.length', 5)

        cy.get(home.popularProductsRating)
            .should('be.visible')

        cy.get(home.popularProductsTitles)
            .should('be.visible')
            .and('not.be.empty')

        cy.get(home.popularProductsSales)
            .should('be.visible')
            .and('have.css', 'color', 'rgb(37, 134, 53)')
    })


    it('can add a popular product into favorites list', () => {
        cy.get(home.popularProducts).first()
            .trigger('mouseover')

        cy.get(home.popularProductsFavBtn).first()
            .click();
    })


    it('allows users to subscribe to the mail list', () => {
        cy.get(home.mailInput)
            .focus()
            .type('qat055848@gmail.com')

        cy.get(home.subscribeBtn)
            .click()   
    }) 
})