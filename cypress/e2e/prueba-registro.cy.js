describe("registro de usuario", () => {
  beforeEach(() => {
    cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    cy.get("#signup").click();
    cy.url().should("include", "/addUser");
  });

  it("usuario completa registro correctamente", () => {
    cy.get("#firstName").type("juan");
    cy.get("#lastName").type("perez");
    const numAleatorio = Math.round(Math.random() * 100);
    cy.get("#email").type(`juanperez${numAleatorio}@gmail.com`);
    cy.get("#password").type("contrasenia123");
    cy.get("#submit").click();
    cy.url().should("include", "/contactList");
  });

  it("validacion de campo: mail", () => {
    cy.get("#email").type("email-invalido");
    cy.get("#submit").click();
    cy.get("#error").contains("email");
  });

  it("validacion de campo: contraseña corta", () => {
    cy.get("#password").type("siete");
    cy.get("#submit").click();
    cy.get("#error")
      .contains("password")
      .contains("is shorter than the minimum allowed length (7)");
  });

  it("usuario quiere loguearse",()=>{
    cy.visit("https://thinking-tester-contact-list.herokuapp.com/addUser");
    cy.visit("https://thinking-tester-contact-list.herokuapp.com");
    cy.get("#email").type(`juanperez${numAleatorio}@gmail.com`);
    cy.get("#password").type("contrasenia123");
    cy.get("#submit").click();
    cy.url().should('include', "/contactList");
  })
});
