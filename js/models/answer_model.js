App.Answer = DS.Model.extend({
  answer: DS.attr('string'),
  date:   DS.attr('date'),
  author: DS.belongsTo('user', { async: true })
});