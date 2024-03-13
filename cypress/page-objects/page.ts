export class Page {
  openUrl(url: string | undefined = "/"): void {
    cy.visit(url);
  }

  includeUrl(url: string): void {
    cy.url().should("include", url);
  }

  equalUrl(url: string): void {
    cy.url().should("eq", url);
  }

  refresh(): void {
    cy.reload();
    this.wait(1000);
  }

  wait(milliseconds: number): void {
    cy.wait(milliseconds);
  }

  getElement(element: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(element);
  }

  click(element: string): void {
    this.getElement(element).click();
  }

  fill(element: string, data: string): void {
    this.getElement(element).type(data);
  }

  notToHaveText(element: string, text: string): void {
    this.getElement(element).should("not.have.text", text);
  }

  toHaveText(element: string, text: string): void {
    this.getElement(element).should("have.text", text);
  }

  toContainText(element: string, text: string): void {
    this.getElement(element).should("include.text", text);
  }

  getAttrVal(element: string, attr: string): Cypress.Chainable<string> {
    return this.getElement(element)
      .invoke("attr", attr)
      .then((value) => {
        return value as string;
      });
  }

  getText(element: string): Cypress.Chainable<string> {
    return this.getElement(element)
      .invoke("text")
      .then((text) => {
        return text as string;
      });
  }

  hover(element: string, side: any): void {
    this.getElement(element).realHover({ position: side });
  }
}
