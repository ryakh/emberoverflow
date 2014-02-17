App = Ember.Application.create();

App.ApplicationStore = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Router.map(function() {
  this.route('about');
  this.resource('question', { path: '/:question_id' });
  this.route('sign-in');
});