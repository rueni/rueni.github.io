$(document).ready(function() {

  console.log("All resources are loaded");
  window.navBar = $('header').outerHeight();
  // console.log(navBar)
  
/// sticky navagation menu --> hide banner --> NOT WORKING
  $(window).scroll(function() {
    if ($(this).scrollTop() > navBar) {
      // console.log($(this).scrollTop())
      $('.main-nav').addClass("main-nav-scrolled");
    }
    else {
      $('.main-nav').removeClass('main-nav-scrolled');
  }
});


// Smoooooooth scrolling on navigation icons
$('a').click(function(){
   $('html, body').animate({
       scrollTop: $($(this).attr('href') ).offset().top
   }, 500,'swing');
   return false;
});


// hide status messages
$('.loading').hide();
$('.success').hide();
$('.error').hide();

// contact submit event handler
$('#form_send').on('click', function() {
    var formdata = app.createFormObject();
    console.log(formdata);
    console.log('Clicked form submit...');
    app.sendEmail(formdata);

  });

});

var app = app || {};
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val();
  retJson.request = $('#user_request').val();

  // retJson.type_road = $('#type_road').val();
  // retJson.type_cross = $('#type_cross').val();
  // retJson.type_track = $('#type_track').val();
  // retJson.other = $('#other').val();

// testing...coment out when done
// console.log(retJson);

  return retJson;

}
app.sendEmail = function(emailData) {

  $('.loading').slideDown(); // .hide()
  // hide old messages...because this is a new request
  $('.success').hide();
  $('.error').hide();

  var ajaxData = {
    url: 'http://imperialholonet.herokuapp.com/api/mail',
    type: 'POST',
    data: emailData,
    success: function(data) {
      console.log(data);
      $('.loading').slideUp(); // .hide()
      $('.success').show() // .slideDown()
    },
    error: function(err) {
      console.log(err);
      $('.loading').slideUp(); // .hide()
      $('.error').show()
    }
};

  /*
var ajaxData = {
  url: 'http://imperialholonet.herokuapp.com/api/mail',
  type: 'GET',
  dataType: 'json',
  success: function(data) {
      console.log("success");
      console.log(data);
  },
};
*/
$.ajax(ajaxData)
}
