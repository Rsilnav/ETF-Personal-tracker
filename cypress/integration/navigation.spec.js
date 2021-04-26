describe('My First Test', () => {
    it('Finds the Title in the header', () => {
      cy.visit('/')
      cy.get('mat-toolbar')
            .contains('etf')
    })

    it('Finds the menu sidebar', () => {
        cy.visit('/')
        cy.get('mat-sidenav')
            .contains('Menu')
      })
  })
  