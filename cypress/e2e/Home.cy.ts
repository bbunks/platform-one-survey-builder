// https://on.cypress.io/api

describe("Home Page", () => {
  it("visits the app root url", () => {
    cy.visit("/");
  });
  beforeEach(() => {
    cy.visit("/");
  });
  it("selecting a row changes the background to yellow", () => {
    cy.get("#linkToSurvey").click();
    cy.url().should("contain", "/survey-builder");
    cy.contains("h2", "Questions");
  });
});
