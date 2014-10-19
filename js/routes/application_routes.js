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
    ]

    return questions
  }
});