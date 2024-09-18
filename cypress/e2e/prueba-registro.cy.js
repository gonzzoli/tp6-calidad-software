describe("registro de usuario", () => {
  beforeEach(() => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com");
  });

  it("clickear boton Sign Up redirige a pantalla de registro", () => {
    cy.get("#signup").click();
    cy.url().should("include", "/addUser");
  });


  it("usuario quiere loguearse",()=>{
    cy.visit("https://thinking-tester-contact-list.herokuapp.com/addUser");
    cy.get("#firstName").type("juan");
    cy.get("#lastName").type("perez");
    const numAleatorio = Math.round(Math.random()*100);
    cy.get("#email").type(`juanperez${numAleatorio}@gmail.com`);
    cy.get("#password").type("contrasenia123");
    cy.get("#submit").click();
    cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    cy.get("#email").type(`juanperez${numAleatorio}@gmail.com`);
    cy.get("#password").type("contrasenia123");
    cy.get("#submit").click();
    cy.url().should('include', "/contactList");
  })


});
