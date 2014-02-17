App.AskQuestionRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('question');
  }
});