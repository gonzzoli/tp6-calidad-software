describe("creacion de post", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000");
  });
  it("usuario publica un post", () => {
    const nombreUsuario = "Usuario Logeado";
    const tituloPost = "Titulo de mi post";
    const contenidoPost = "Contenido de mi post";
    cy.get("#boton-login").click();
    cy.get("#input-login-usuario").type(nombreUsuario);
    cy.get("#boton-confirmar-login").click();
    cy.get("#nombre-usuario-logeado").contains(nombreUsuario);
    cy.get("#boton-publicar").click();
    cy.get("#input-titulo-post").type(tituloPost);
    cy.get("#input-contenido-post").type(contenidoPost);
    cy.get("#boton-confirmar-post").click();
    cy.get("#post-0 h3").contains(tituloPost);
    cy.get("#post-0 p").contains(contenidoPost);
  });
});
