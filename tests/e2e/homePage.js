'use strict';

describe('homePage', function() {
  it('Create-new-month-plan link should redirect user to a newPlanPage', function () {
    browser.get('http://localhost:5000/#/');
    element(by.id('new-plan-link')).click();
    expect(browser.getCurrentUrl()).toMatch(/\/newMonthPlan$/);
  });
});