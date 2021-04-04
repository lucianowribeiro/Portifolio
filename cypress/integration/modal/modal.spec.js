describe('/', () => {
  describe('Submit fields on form cadastro in the modal', () => {
    describe('Open modal', () => {
      it('Visit some page and click on contact button', () => {
        cy.visit('/');
        cy.get('header button').click();
      });
    });
    describe('Fill the fields', () => {
      it('Fill the name ,email and message fields', () => {
        cy.get('form input[name="name"]').type('someuser');
        cy.get('form input[name="email"]').type('someemail@mail.com');
        cy.get('form textarea[name="message"]').type('some message here ...');
      });
    });
    describe('Submit', () => {
      it('Check button and click', () => {
        cy.get('form button[type="submit"]').should('not.be.disabled');
        cy.get('form button[type="submit"]').click();
      });
      describe('Verify', () => {
        it('Verify fields not visibled , response and animation', () => {
          cy.intercept(
            'https://contact-form-api-jamstack.herokuapp.com/message',
          ).as('formMessage');
          cy.wait('@formMessage').then((api) => {
            // Verify fields
            cy.get('form input[name="name"]').should('not.exist');
            cy.get('form input[name="email"]').should('not.exist');
            cy.get('form textarea[name="message"]').should('not.exist');
            // Verify response
            expect(api.response.statusCode).to.equal(201);
            //
            expect(api.response.body.name).to.equal('someuser');
            expect(api.response.body.email).to.equal('someemail@mail.com');
            expect(api.response.body.message).to.equal('some message here ...');
            // Verify animation
            cy.get('.sc-jrAGrp > div')
              .should('exist')
              .should('have.css', 'width')
              .and('match', /150px/);
            cy.get('.sc-jrAGrp > div > svg').should('exist');
          });
        });
      });
    });
  });
});
