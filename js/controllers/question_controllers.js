App.SetAuthorMixin = Ember.Mixin.create({
  needs: ['application'],

  setAuthorFor: function(object) {
    this.get('controllers.application.signedInUser').then(function(user) {
      object.set('author', user);
    });
  }
});

App.AskQuestionController = Ember.ArrayController.extend(
  App.SetAuthorMixin, {

  sortProperties: ['date'],
  sortAscending: false,

  latestQuestions: function() {
    return this.slice(0,3);
  }.property('[]'),

  actions: {
    askQuestion: function() {
      var question = this.store.createRecord('question', {
        title: this.get('title'),
        question: this.get('question'),
        date: new Date()
      });

      this.setAuthorFor(question);

      var controller = this;

      question.save().then(function(question) {
        controller.setProperties({
          title: '',
          question: ''
        });

        controller.transitionToRoute('question', question);
      });
    }
  }
});

App.QuestionController = Ember.ObjectController.extend(
  App.SetAuthorMixin, {
  isEditing: false,

  canEditQuestion: function() {
    return this.get('author.id') == App.currentUser
  }.property('model'),

  actions: {
    toggleEditQuestion: function() {
      this.toggleProperty('isEditing');
    },

    submitEdits: function() {
      this.toggleProperty('isEditing');
      this.get('model').save();
    },

    answerQuestion: function() {
      var answer = this.store.createRecord('answer', {
        answer: this.get('answer'),
        question: this.get('model'),
        date: new Date()
      });

      this.setAuthorFor(answer);

      var controller = this;

      answer.save().then(function(answer) {
        controller.get('model.answers').addObject(answer);

        controller.setProperties({
          answer: ''
        });
      });
    }
  }
});

App.QuestionsController = Ember.ArrayController.extend({
  siteTitle: 'Welcome to Emberoverflow',

  currentTime: function() {
    return(new Date);
  }.property()
});