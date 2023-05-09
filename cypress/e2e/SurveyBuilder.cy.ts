// https://on.cypress.io/api

function testTable(itemName: string) {
  it("changes background color when checkbox is checked", () => {
    // Get the checkbox and the div to test
    const checkbox = cy.get("#" + itemName + 'Row0 input[type="checkbox"]');
    let div = cy.get("#" + itemName + "Row0");

    // Check that the initial background color is not #fff8e8
    div.should("not.have.css", "background-color", "rgb(255, 248, 232)");

    // Check the checkbox
    checkbox.check();

    div = cy.get("#" + itemName + "Row0");
    // Check that the background color has changed to #fff8e8
    div.should("have.css", "background-color", "rgb(255, 248, 232)");
  });

  it("removes the selected rows when all selected are deleted", () => {
    // Get the checkbox and check it
    const checkbox = cy.get(
      "#" + itemName + 'sItems [data-id="1"] [type="checkbox"]'
    );
    checkbox.check();

    // Get the button to open the bulk action context
    const bulkActionButton = cy.get("#" + itemName + "sTitle #bulkAction");
    bulkActionButton.click();

    // Get the delete all button and click it
    const deleteSelected = cy.get("#deleteSelected");
    deleteSelected.click();

    // Check that is no longer exists
    cy.get("#" + itemName + 'sItems [data-id="1"]').should("not.exist");
  });

  it("removes the selected rows when a delete button is pressed", () => {
    // Get the checkbox and check it
    const div = cy.get("#" + itemName + 'sItems [data-id="1"]');
    div.trigger("mouseover");

    const deleteButton = cy.get(
      "#" + itemName + 'sItems [data-id="1"] #deleteRow'
    );

    // Because the button is hidden and revealed using css,
    // I can not reveal this using cypress. Force is needed
    deleteButton.click({ force: true });

    // Check that is no longer exists
    cy.get("#" + itemName + 'sItems [data-id="1"]').should("not.exist");
  });
}

describe("Questions table", () => {
  beforeEach(() => {
    cy.visit("/survey-builder");
  });

  testTable("question");
});

// https://on.cypress.io/api

describe("Pages Table", () => {
  beforeEach(() => {
    cy.visit("/survey-builder");
  });
  testTable("endPage");
});
