App.QuestionPreviewComponent = Ember.Component.extend({
  tagName: 'li',

  answersCount: Ember.computed.alias('question.answers.length'),

  pluralForm: function() {
    var answers = this.get('answersCount');
    return answers === 1 ? 'answer' : 'answers'
  }.property('answersCount'),

  hasAnswers: function() {
    return this.get('answersCount') > 0;
  }.property('answersCount')
});