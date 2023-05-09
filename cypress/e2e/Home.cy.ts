// https://on.cypress.io/api

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.get("#linkToSurvey").click();
    cy.url().should("contain", "/survey-builder");
    cy.contains("h2", "Questions");
  });
});
