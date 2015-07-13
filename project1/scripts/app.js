$(document).ready(function() {

  console.log("All resources are loaded");
// contact submit event handler

$('#form_send').on('click', function() {
    var formdata = app.createFormObject();
    console.log('Clicked form submit...');
  });

});

var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val();
  retJson.request = $('#user_request').val();
  retJson.type_road = $('#type_road').val();
  retJson.type_cross = $('#type_cross').val();
  retJson.type_track = $('#type_track').val();
  retJson.other = $('#other').val();

console.log(retJson);

  return retJson;

}
