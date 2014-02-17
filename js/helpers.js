Ember.Handlebars.registerBoundHelper('currentDate', function(format) {
  return moment().format(format);
});