App.AskQuestionController = Ember.ArrayController.extend({
  needs: ['application'],

  actions: {
    askQuestion: function() {
      var question = this.store.createRecord('question', {
        title: this.get('title'),
        question: this.get('question'),
        author: this.get('controllers.application.signedInUser'),
        date: new Date()
      });
    }
  }
});