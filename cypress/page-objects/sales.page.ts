import { Page } from "./page";

const pageTitle = "h3[class^='ant-typography']";
const mockupSales = "canvas:eq(0)";
const mockupPremium = "canvas:eq(1)";
const statisticMockup = ".g2-tooltip";
const brandSelect = "div[class*=Sales_brandSelect]";
const yearSelect = ".ant-select-outlined:eq(1)";
const selectedBrand = ".ant-select-selection-item:eq(0)";
const brandOptions = [
  ".ant-select-item-option-content:eq(0)",
  ".ant-select-item-option-content:eq(1)",
];
const selectedYear = ".ant-select-selection-item:eq(1)";
const yearOptions = [
  ".ant-select-item-option-content:eq(2)",
  ".ant-select-item-option-content:eq(3)",
];
const premiumTab = "div[data-node-key='premium']";

export default class SalesPage extends Page {
  checkPageTitle() {
    this.toHaveText(pageTitle, "Sales");
  }

  checkBrandSelectDefaultOption() {
    this.toHaveText(selectedBrand, "Stone Island");
  }

  checkYearSelectDefaultOption() {
    this.toHaveText(selectedYear, "2024");
  }

  hoverSalesStatisticMockup() {
    this.wait(1000);
    this.hover(mockupSales, "center");
    this.hover(premiumTab, "center");
  }

  hoverPremiumStatisticMockup() {
    this.wait(1000);
    this.hover(mockupPremium, "center");
    this.hover(premiumTab, "center");
  }

  getStatisticMockupStateId(): Cypress.Chainable<string> {
    this.wait(1000);
    return this.getAttrVal(statisticMockup, "data-uuid");
  }

  selectSecondBrandOption() {
    this.click(brandSelect);
    this.click(brandOptions[1]);
    this.toHaveText(selectedBrand, "Pi");
  }

  checkStatisticMockupStateId(firstVal: string, secondVal: string) {
    expect(secondVal).not.eq(firstVal);
  }

  selectFirstBrandOption() {
    this.click(brandSelect);
    this.click(brandOptions[0]);
    this.toHaveText(selectedBrand, "Stone Island");
  }

  selectFirstYearOption() {
    this.click(yearSelect);
    this.click(yearOptions[0]);
    this.toHaveText(selectedYear, "2023");
  }

  getSelectedBrandOption(): Cypress.Chainable<string> {
    return this.getText(selectedBrand);
  }

  getSelectedYearOption(): Cypress.Chainable<string> {
    return this.getText(selectedYear);
  }

  checkSelectedFilterOptions(firstOpt: string, secondOpt: string) {
    expect(firstOpt).to.eq(secondOpt);
  }

  clickPremiumTab() {
    this.click(premiumTab);
    this.wait(1000);
  }
}
