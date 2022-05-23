/// <reference types="cypress" />

describe("visit", () => {
  var i;
  for (i = 0; i < 300; i++) {
    it("visits page", () => {
      if (i == 100) {
        cy.wait(500000);
        it("visits page", () => {
          cy.visit("https://www.surveymonkey.com/r/F5TVQ2F");
          // cy.contains("Album of the year");
          cy.get("#66681253_544117982").click(); //Dalas plein
          // cy.get("#6681468_544119435").click();
          cy.get(
            "#\\36 6681468_544119435_label > .radio-button-display"
          ).click();
          cy.get("#66681253_544117981").click();

          cy.get("#66681469_544119441").click();
          // Cypress.Screenshot.defaults({ capture: "viewport" });
          // cy.screenshot();

          cy.get("#66681477_544119480").click();

          cy.get("#66681481_544119507").click(); //15 DA agent

          cy.get("#66681479_544119495").click();
          cy.get("#66681481_544119504").click();

          // cy.wait(3000);
          cy.get(".done-button").click();
          // cy.wait(3000);
        });
      }

      if (i == 200) {
        cy.wait(500000);
        it("visits page", () => {
          cy.visit("https://www.surveymonkey.com/r/F5TVQ2F");
          // cy.contains("Album of the year");
          cy.get("#66681253_544117982").click(); //Dalas plein
          // cy.get("#6681468_544119435").click();
          cy.get(
            "#\\36 6681468_544119435_label > .radio-button-display"
          ).click();
          cy.get("#66681253_544117981").click();

          cy.get("#66681469_544119441").click();
          // Cypress.Screenshot.defaults({ capture: "viewport" });
          // cy.screenshot();

          cy.get("#66681477_544119480").click();

          cy.get("#66681481_544119507").click(); //15 DA agent

          cy.get("#66681479_544119495").click();
          cy.get("#66681481_544119504").click();

          // cy.wait(3000);
          cy.get(".done-button").click();
          // cy.wait(3000);
        });
      }
      cy.visit("https://www.surveymonkey.com/r/F5TVQ2F");
      // cy.contains("Album of the year");
      cy.get("#66681253_544117982").click(); //Dalas plein
      // cy.get("#6681468_544119435").click();
      cy.get("#\\36 6681468_544119435_label > .radio-button-display").click();
      cy.get("#66681253_544117981").click();

      cy.get("#66681469_544119441").click();
      // Cypress.Screenshot.defaults({ capture: "viewport" });
      // cy.screenshot();

      cy.get("#66681477_544119480").click();

      cy.get("#66681481_544119507").click(); //15 DA agent

      cy.get("#66681479_544119495").click();
      cy.get("#66681481_544119504").click();

      // cy.wait(3000);
      cy.get(".done-button").click();
      // cy.wait(3000);
    });
  }
});
