// in order to see the app running inside the QUnit runner
App.rootElement = '#ember-testing';

// Common test setup
App.setupForTesting();
App.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    App.reset();
  }
});

test("index page has a title and a list of questions", function() {
  visit("/");

  andThen(function() {
    equal(
      find("h2").text(),
      "Welcome to Emberoverflow",
      "Application header is rendered"
    );

    equal(
      find("ul:not(.nav) > li").length,
      2,
      "There are two questions in the list"
    );
  });
});

test("quesion links on index page lead to questions", function() {
  visit("/");
  click("ul:not(.nav) > li > a:first");

  andThen(function() {
    equal(
      find("h2").length,
      1,
      "Question header is rendered"
    );

    equal(
      find("p").length,
      2,
      "Question and author are rendered"
    );
  });
});