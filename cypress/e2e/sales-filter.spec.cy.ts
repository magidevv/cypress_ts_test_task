import LoginPage from "../page-objects/login.page";
import SalesPage from "../page-objects/sales.page";
import { userData } from "../support/data";

const loginPage = new LoginPage();
const salesPage = new SalesPage();

describe("Sales filter checking", () => {
  beforeEach(() => {
    loginPage.open();
    loginPage.fillLoginForm(userData.email, userData.password);
    loginPage.clickSubmitBtn();
  });

  it('in "Number of Sales" tab', () => {
    // Intercept the requests and assign aliases
    cy.intercept("GET", "/admin/brands").as("brandsRequest");
    cy.intercept("POST", "/admin/insurance/monthly-sales-counts").as(
      "salesCountsRequest"
    );

    // Check page title and default options
    salesPage.checkPageTitle();

    // Wait for the backend requests to complete and check their responses
    cy.wait("@brandsRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    salesPage.checkBrandSelectDefaultOption();
    salesPage.checkYearSelectDefaultOption();

    // Wait for the backend requests to complete and check their responses
    cy.wait("@salesCountsRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    // Hover over the statistic mockup and get its ID
    salesPage.hoverSalesStatisticMockup();
    salesPage
      .getStatisticMockupStateId()
      .then((id_1) => {
        // Select second brand option, hover over statistic mockup again, and get its ID
        salesPage.selectSecondBrandOption();
        // Wait for the backend requests to complete and check their responses
        cy.wait("@salesCountsRequest").then((interception) => {
          expect(interception.response.statusCode).to.eq(200);
        });
        salesPage.hoverSalesStatisticMockup();
        return salesPage.getStatisticMockupStateId().then((id_2) => {
          // Check the state IDs from the first and second steps
          salesPage.checkStatisticMockupStateId(id_1, id_2);
          // Return ID_2 for further steps
          return id_2;
        });
      })
      .then((id_2) => {
        // Select first year option, hover over statistic mockup again, and get its ID
        salesPage.selectFirstYearOption();
        // Wait for the backend requests to complete and check their responses
        cy.wait("@salesCountsRequest").then((interception) => {
          expect(interception.response.statusCode).to.eq(200);
        });
        salesPage.hoverSalesStatisticMockup();
        return salesPage.getStatisticMockupStateId().then((id_3) => {
          // Check the state IDs from the second and third steps
          salesPage.checkStatisticMockupStateId(id_2, id_3);
          // Return ID_3 for further steps
          return id_3;
        });
      })
      .then((id_3) => {
        // Select first brand option, hover over statistic mockup again, and get its ID
        salesPage.selectFirstBrandOption();
        // Wait for the backend requests to complete and check their responses
        cy.wait("@salesCountsRequest").then((interception) => {
          expect(interception.response.statusCode).to.eq(200);
        });
        salesPage.hoverSalesStatisticMockup();
        return salesPage.getStatisticMockupStateId().then((id_4) => {
          // Check the state IDs from the third and fourth steps
          salesPage.checkStatisticMockupStateId(id_3, id_4);
        });
      });
    salesPage.selectSecondBrandOption();
    salesPage.getSelectedBrandOption().then((selectedBrandOption) => {
      salesPage.getSelectedYearOption().then((selectedYearOption) => {
        // Refresh the page
        salesPage.refresh();
        salesPage.getSelectedBrandOption().then((brandOptionAfterRefresh) => {
          salesPage.getSelectedYearOption().then((yearOptionAfterRefresh) => {
            // Check selected options after refreshing
            salesPage.checkSelectedFilterOptions(
              selectedBrandOption,
              brandOptionAfterRefresh
            );
            salesPage.checkSelectedFilterOptions(
              selectedYearOption,
              yearOptionAfterRefresh
            );
          });
        });
      });
    });
  });

  it('in "Total Premium" tab', () => {
    // Intercept the requests and assign aliases
    cy.intercept("GET", "/admin/brands").as("brandsRequest");
    cy.intercept("POST", "/admin/insurance/monthly-total-premiums").as(
      "salesCountsRequest"
    );

    // Check page title
    salesPage.checkPageTitle();

    // Wait for the backend requests to complete and check their responses
    cy.wait("@brandsRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    // Switch to "Total Premium" tab
    salesPage.clickPremiumTab();

    // Wait for the backend requests to complete and check their responses
    cy.wait("@salesCountsRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    // Hover over the statistic mockup and get its ID
    salesPage.hoverPremiumStatisticMockup();
    salesPage
      .getStatisticMockupStateId()
      .then((id_1) => {
        // Select second brand option, hover over statistic mockup again, and get its ID
        salesPage.selectSecondBrandOption();
        // Wait for the backend requests to complete and check their responses
        cy.wait("@salesCountsRequest").then((interception) => {
          expect(interception.response.statusCode).to.eq(200);
        });
        salesPage.hoverPremiumStatisticMockup();
        return salesPage.getStatisticMockupStateId().then((id_2) => {
          // Check the state IDs from the first and second steps
          salesPage.checkStatisticMockupStateId(id_1, id_2);
          // Return ID_2 for further steps
          return id_2;
        });
      })
      .then((id_2) => {
        // Select first year option, hover over statistic mockup again, and get its ID
        salesPage.selectFirstYearOption();
        // Wait for the backend requests to complete and check their responses
        cy.wait("@salesCountsRequest").then((interception) => {
          expect(interception.response.statusCode).to.eq(200);
        });
        salesPage.hoverPremiumStatisticMockup();
        return salesPage.getStatisticMockupStateId().then((id_3) => {
          // Check the state IDs from the second and third steps
          salesPage.checkStatisticMockupStateId(id_2, id_3);
          // Return ID_3 for further steps
          return id_3;
        });
      })
      .then((id_3) => {
        // Select first brand option, hover over statistic mockup again, and get its ID
        salesPage.selectFirstBrandOption();
        // Wait for the backend requests to complete and check their responses
        cy.wait("@salesCountsRequest").then((interception) => {
          expect(interception.response.statusCode).to.eq(200);
        });
        salesPage.hoverPremiumStatisticMockup();
        return salesPage.getStatisticMockupStateId().then((id_4) => {
          // Check the state IDs from the third and fourth steps
          salesPage.checkStatisticMockupStateId(id_3, id_4);
        });
      });
    salesPage.selectSecondBrandOption();
    salesPage.getSelectedBrandOption().then((selectedBrandOption) => {
      salesPage.getSelectedYearOption().then((selectedYearOption) => {
        // Refresh the page
        salesPage.refresh();
        salesPage.getSelectedBrandOption().then((brandOptionAfterRefresh) => {
          salesPage.getSelectedYearOption().then((yearOptionAfterRefresh) => {
            // Check selected options after refreshing
            salesPage.checkSelectedFilterOptions(
              selectedBrandOption,
              brandOptionAfterRefresh
            );
            salesPage.checkSelectedFilterOptions(
              selectedYearOption,
              yearOptionAfterRefresh
            );
          });
        });
      });
    });
  });
});
