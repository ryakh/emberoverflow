App.QuestionPreviewComponent = Ember.Component.extend({
  answersCount: Ember.computed.alias('question.answers.length')
});