/// <reference types='cypress'/>
import { newBoard } from "../pageObject/board";
import { loginPage } from "../pageObject/login";

describe("board", () => {
  before("login", () => {
    cy.visit("/login");
    loginPage.login("bla123@bla.com", "bla12345");
  });

  it("check organization", () => {
    cy.url().should("contain", "/my-organizations");
    cy.get("h2").should("be.visible");
  });

  it("add new board", () => {
    newBoard.createBoard("novi Board");
  });
});
