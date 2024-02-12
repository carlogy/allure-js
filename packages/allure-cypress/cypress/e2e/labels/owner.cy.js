import { owner } from "../../../dist";

after(() => {
  cy.task("readLastTestResult").then((result) => {
    cy.wrap(result.tests).as("tests");

    cy.get("@tests").should("have.length", 1);
    cy.get("@tests").its(0).containsLabel({
      name: "owner",
      value: "foo",
    });
  });
});

it("owner", () => {
  owner("foo");
});
