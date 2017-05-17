
//SIGNUP
var signupUsername = $('<input id="signup-username" type="text" placeholder="Username">');
var signupName = $('<input id="signup-name" type="text" placeholder="Numele Complet">');
var signupPassword = $('<input id="signup-password" type="password" placeholder="Parola">');
var signupRepeatPassword = $('<input id="signup-repeat-password" type="password" placeholder="Repeta parola">');
var signupSchool = $('<input id="signup-school" type="text" placeholder="Liceu/Unitate de Invatamant">');
var signupButton = $('<button id="signup-button" type="submit">Inregistreaza-te!</button>');
var signupInfo = $('<h3 id="signup-info" style="margin-top:6px;">Ai deja cont? Apasa <a id="login" href="#" style="color:#53e3a6;">aici</a> pentru a te loga!</h3>');
var signupBadPass = $('<h3 id="signup-error-pass" style="margin-top:6px;color:#ff2626;">*Nu ai repetat parola corect!</h3>');
var signupBadInput = $('<h3 id="signup-error-input" style="margin-top:6px;color:#ff2626;">*Completeaza toate casutele!</h3>');

var loading = $('<svg style="margin-top:40px;"class="loader" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle class="internal-circle" cx="60" cy="60" r="30"></circle><circle class="external-circle" cx="60" cy="60" r="50"></circle></svg>');

//daca vrei sa te loghezi
$("#login-button").click(function(event){
    event.preventDefault();


  $('form').append(loading).delay(3000).promise().then(function(){
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
    $('#welcome').text("Salut, " + $('#login-username').val() + "!");

    //trb sa ma duca la pagina principala pe contul sau
  });


});

//daca vrei sa faci un cont nou
$("#sign-up").click(function(event) {

  var fadeOutDone = $('form').fadeOut(800).promise();

  fadeOutDone.then(function(){
    $('#login-username').hide();
    $('#login-password').hide();
    $('#login-button').hide();
    $('#login-info').hide();

    $("form").append(signupUsername);
    $("form").append(signupName);
    $("form").append(signupPassword);
    $("form").append(signupRepeatPassword);
    $("form").append(signupSchool);
    $("form").append(signupButton);
    $("form").append(signupInfo);

    $('form').fadeIn(900);
  });
});

//daca vrei sa inregistrezi noul cont
$('form').on('click', '#signup-button', function() {
  if(signupName.val() && signupUsername.val() && signupPassword.val() && signupSchool.val() && signupRepeatPassword.val()) {
    if(signupPassword.val() === signupRepeatPassword.val()) {
      /*signupName.hide();
      signupPassword.hide();
      signupBadPass.hide();
      signupBadInput.hide();
      signupUsername.hide();
      signupSchool.hide();
      signupInfo.hide();
      signupButton.hide();
      signupRepeatPassword.hide();*/

      $('form').append(loading);


    }else $('form').append(signupBadPass);
  } else $('form').append(signupBadInput)

});

//daca vrei sa mergi iar la login
$('form').on('click', "#login", function(){

  $('form').fadeOut(800).promise().then(function(){
    signupName.remove();
    signupPassword.remove();
    signupBadPass.remove();
    signupBadInput.remove();
    signupUsername.remove();
    signupSchool.remove();
    signupInfo.remove();
    signupButton.remove();
    signupRepeatPassword.remove();

    $("#welcome").show();
    $('#login-username').show();
    $('#login-password').show();
    $('#login-button').show();
    $('#login-info').show();

    $('form').fadeIn(900);
  });
});
