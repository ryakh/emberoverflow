App.QuestionPreviewComponent = Ember.Component.extend({
  answersCount: function() {
    return this.get('question.answers.length');
  }.property('question.answers.length')
});