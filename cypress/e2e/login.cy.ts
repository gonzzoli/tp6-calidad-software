describe("login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000");
  });
  it("usuario inicia sesion correctamente", () => {
    const nombreUsuario = "Usuario Logeado";
    cy.get("#boton-login").click();
    cy.get("#input-login-usuario").type(nombreUsuario);
    cy.get("#boton-confirmar-login").click();
    cy.get("#nombre-usuario-logeado").contains(nombreUsuario);
  });
});
