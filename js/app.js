App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.IndexController = Ember.Controller.extend({
  siteTitle: 'Welcome to Emberoverflow'
});