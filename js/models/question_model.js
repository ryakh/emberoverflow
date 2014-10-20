App.Question = DS.Model.extend({
  title:    DS.attr('string'),
  question: DS.attr('string'),
  date:     DS.attr('date'),
  author:   DS.belongsTo('user', { async: true }),
  answers:  DS.hasMany('answer', { async: true })
});