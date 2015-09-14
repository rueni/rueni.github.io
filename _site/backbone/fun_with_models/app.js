
var catApp = catApp || {};

  catApp.catView = Backbone.View.extend({
    initialize: function() {
      var self = this;
      console.log('View initialized!');
      this.model.on('change', function(){
        self.render();
      });
    },
    render: function() {
      var data = this.model.attributes;
      this.$el.html('<p>True of False? <strong>' + data.Facts + '</strong> is....' + data.Success + '</p>');
    }
  });

  catApp.catModel = Backbone.Model.extend({
      url: 'http://catfacts-api.appspot.com/api/facts?number=5',
      initialize: function() {
      console.log('Model initialized!')
    }
    });

  $(document).ready(function(){
    var catModel = new catApp.catModel();
    var catView = new catApp.catView({
      el: $('#content'),
      model: catModel
    });
  catModel.fetch();
  });
