import { loginPage } from "../pageObjects/loginPage";
import { logout } from "../pageObjects/logout";

describe("login test", () => {
  it("visit vivifyscrum login", () => {
    cy.visit("https://cypress.vivifyscrum-stage.com/login");
    cy.url().should("include", "/login");
    logout.logoutBtn.should("not.exist");
    loginPage.login("bla123@bla.com", "bla12345");
    logout.logoutButton();
  });
});
