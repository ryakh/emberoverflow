App.IndexController = Ember.ArrayController.extend({
  siteTitle: 'Welcome to Emberoverflow',

  currentTime: function() {
    return(new Date);
  }.property()
});