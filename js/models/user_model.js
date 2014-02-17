App.User = DS.Model.extend({
  fullname:  DS.attr('string'),
  email:     DS.attr('string'),
  questions: DS.hasMany('question', { async: true })
});