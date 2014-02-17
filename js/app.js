App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    var questions = [
      {
        title:  'How do I feed hamsters?',
        author: 'Tom Dale'
      },

      {
        title:  'Are humans insane?',
        author: 'Tomster the Hamster'
      }
    ];

    return questions;
  }
});

App.IndexController = Ember.Controller.extend({
  siteTitle: 'Welcome to Emberoverflow',

  currentTime: function() {
    return(new Date());
  }.property()
});