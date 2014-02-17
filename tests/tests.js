// in order to see the app running inside the QUnit runner
App.rootElement = '#ember-testing';

// Common test setup
App.setupForTesting();
App.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    delete localStorage['currentUser'];
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    App.reset();
    delete localStorage['currentUser'];
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

    notEqual(
      find("ul:not(.nav) > li").length,
      0,
      "There are questions in the list"
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

test("user will be able to log in", function() {
  visit("/sign-in");

  fillIn(".form-control", "tomster@hamster.com");
  click("button");

  andThen(function() {
    equal(
      find("p").text(),
      "You are already signed-in!",
      "Signed-in message rendered"
    );
  });
});

test("signed-in user can ask new question", function() {
  localStorage['currentUser'] = 201;
  App.set('currentUser', 201);

  visit("/ask-question");
  fillIn("#title", "Question title");
  fillIn("#question", "Question");
  click("button");

  andThen(function(){
    equal(
      find("h2").text(),
      "Question title",
      "Question title is rendered"
    );

    equal(
      find("p:first").text().replace(/\s+/g, ''),
      "Question",
      "Question is rendered"
    );
  });
});