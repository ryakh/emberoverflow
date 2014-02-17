App.AskQuestionController = Ember.ArrayController.extend({
  needs: ['application'],

  actions: {
    askQuestion: function() {
      var question = this.store.createRecord('question', {
        title: this.get('title'),
        question: this.get('question'),
        date: new Date()
      });

      this.get('controllers.application.signedInUser').then(function(user) {
        question.set('author', user);
      });
    }
  }
});