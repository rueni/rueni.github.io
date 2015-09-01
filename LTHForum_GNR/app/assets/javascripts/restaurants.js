// #gnr-template
// #gnr-list

var app = app || {};
var active = active || {};

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader('Authorization', 'Token token=' + global.apiKey)
  }
});

//blueprints
app.model = Backbone.Model.extend();
app.collection = Backbone.Collection.extend({
  model: app.model,
  url: '/api/list'
});
app.modelView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#gnr-template').html());
    this.render();
  },
  render: function() {
    var data = this.model.attributes;
    this.$el.append(this.template(data));
  }
});
app.collectionView = Backbone.View.extend({
  initialize: function() {
    var that = this;
    this.collection.on('sync', function() {
      that.render();
    });
    // retrieve data from my API 'all get' route
    this.collection.fetch();
    this.$el.html(''); // empty out any content inside of my $el
  },
  render: function() {
    var collection = this.collection.models;
    for (var model in collection) {
      // console.log(collection[model].attributes);
      new app.modelView({
        el: $('#gnr-list'),
        model: collection[model]
      });
    }
  }
});
//end blueprints

$(document).ready(function(event) {
  active.collection = new app.collection();
  active.collectionView = new app.collectionView({
    collection: active.collection,
    el: $('#gnr-list')
  });

// Add sorting feature to list
  $('thead th.sortable').each(function(column) {
  $(this).click(function(){
    var findSortKey = function($cell) {
      return $cell.find('.sort-key').text().toUpperCase() + ' ' + $cell.text().toUpperCase();
    };
    var sortDirection = $(this).is('.sorted-asc') ? -1 : 1;

    //step back up the tree and get the rows with data
    //for sorting
    var $rows = $(this).parent().parent().parent().find('tbody tr').get();

    //loop through all the rows and find
    $.each($rows, function(index, row) {
      row.sortKey = findSortKey($(row).children('td').eq(column));
    });

    //compare and sort the rows alphabetically
    $rows.sort(function(a, b) {
        if (a.sortKey < b.sortKey) return -sortDirection;
        if (a.sortKey > b.sortKey) return sortDirection;
        return 0;
    });

    //add the rows in the correct order to the bottom of the table
    $.each($rows, function(index, row) {
        $('tbody').append(row);
        row.sortKey = null;
    });

    //identify the column sort order
    $('th').removeClass('sorted-asc sorted-desc');
    var $sortHead = $('th').filter(':nth-child(' + (column + 1) + ')');
    sortDirection == 1 ? $sortHead.addClass('sorted-asc') : $sortHead.addClass('sorted-desc');

    //identify the column to be sorted by
    $('td').removeClass('sorted')
                .filter(':nth-child(' + (column + 1) + ')')
                .addClass('sorted');

    $('.visible td').removeClass('odd');
    zebraRows('.visible:even td', 'odd');
  });
});
});
