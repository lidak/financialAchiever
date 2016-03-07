'use strict';
var page;
var CategoryPage = function () {
  var nameInput = element(by.model('category.name'));
  var button = element(by.css('button'));

  this.create = function () {
    button.click();
  };

  this.setName = function (name) {
    nameInput.sendKeys(name);
  };

  this.isCreateAllowed = function () {
    return !button.getAttribute('disabled');
  };

  this.loadPage = function() {
    browser.get('http://localhost:5000/#/category');
  }
};

beforeEach(function () {
  page = new CategoryPage();
  page.loadPage();
});

describe('CategoryPage', function() {
  it('should not be able create empty-name categories', function() {
    expect(page.isCreateAllowed()).toEqual(false);
  });

  it('should redirect to home-page after category create', function() {
    page.setName('New Category');
    page.create();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:5000/#/');
  });
});
  