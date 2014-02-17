App = Ember.Application.create({
  currentUser: localStorage['currentUser']
});

App.ApplicationStore = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Router.map(function() {
  this.route('about');
  this.resource('question', { path: '/:question_id' });
  this.route('ask-question');
  this.route('sign-in');
});