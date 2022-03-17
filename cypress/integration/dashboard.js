describe('NYT Bestsellers List user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=*', {
      fixture: 'mock_data.json'
    });
    cy.visit('http://localhost:3000');
  });

  it('Should be able to view a table of all books for all the Bestsellers lists for the current week', () => {
    cy.get('#dropdown')
      .should('have.value', 'All');

    cy.get('.date')
      .should('have.text', 'Currently viewing the list for the week of Mar 11, 2022');
    
    cy.get('.number-of-entries')
      .should('have.text', 'Number of entries: 20');
    
    cy.get('tbody tr')
      .should('have.length', 20);
  });

  it('Should only show the books for the selected list of Bestsellers', () => {
    const selectedList = 'Young Adult Paperback Monthly';
    cy.get('#dropdown')
      .select(selectedList);

    cy.get('.number-of-entries')
      .should('have.text', 'Number of entries: 10');
    
    cy.get('tbody tr')
      .should('have.length', 10);

    cy.get('.list-name')
      .each(listName => cy.wrap(listName).should('have.text', selectedList));  

    cy.get('.book-title')
      .should('have.length', 10);

    cy.get('.book-author')
      .should('have.length', 10);

    cy.get('.book-description')
      .should('have.length', 10);

    cy.get('.book-publisher')
      .should('have.length', 10);

    cy.get('.book-rank')
      .should('have.length', 10);

    cy.get('.book-purchase-links')
      .should('have.length', 10);
  });

});
