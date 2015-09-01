// #roulette-template
// #roulette-result

var rand = rand || {};
var active = active || {};

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader('Authorization', 'Token token=' + global.apiKey)
  }
});

//blueprints
rand.model = Backbone.Model.extend();

rand.collection = Backbone.Collection.extend({
  model: rand.model,
  url: '/api/list'
});

rand.modelView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#roulette-template').html());
    this.render();
  },
  render: function() {
    var data = this.model.attributes;
    this.$el.app(this.template(data));
  }
});

rand.collectionView = Backbone.View.extend({
  initialize: function() {
    this.collection.fetch();
    this.$el.html(''); //empty out any content inside of el
  },
  render: function() {
      // this.$el.html("<button type='submit' id = 'random'>Spin Wheel!</button>")
      this.$el.html('');
      var collection = this.collection.models;
      var random = _.sample(collection);
      new rand.modelView({
          el: $('#roulette-result'),
          model: random
      });
//end blueprints

$(document).ready(function(event) {
    active.collection = new rand.collection();
    active.collectionView = new rand.collectionView({
      collection: active.collection,
      el: $('#roulette-result')
    });
    $('.random').on('click', function() {
      active.collectionView.render();
    })
  });
