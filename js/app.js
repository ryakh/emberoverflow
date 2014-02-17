App = Ember.Application.create({
  currentUser: localStorage['currentUser']
});

App.ApplicationStore = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Router.map(function() {
  this.route('about');
  this.route('sign-in');

  this.route('ask-question');

  this.resource('questions', function() {
    this.resource('question', { path: '/:question_id' });
  });
});