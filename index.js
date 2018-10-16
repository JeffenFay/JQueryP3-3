var guessMe = Math.round(Math.random()*100);
var nbrClick = 0;
var regex = /^[0-9]{1,3}$/;
// alert(guessMe);
$('button').click(function(){
  nbrClick+=1;
  if(!regex.test($('#valueGuess').val())||$('#valueGuess').val()>100){
    $('#guessed').css('background-color','black');
    $('#guessed').css('color','yellow');
    $('#guessed').text('Erreur de saisie.');
  } else {
    if ($('#valueGuess').val() > guessMe) {
      $('#guessed').css('background-color','red');
      $('#guessed').css('color','white');
      $('#guessed').text('Moins.');
    }else if ($('#valueGuess').val() < guessMe){
      $('#guessed').css('background-color','red');
      $('#guessed').css('color','white');
      $('#guessed').text('Plus.');
    }else if ($('#valueGuess').val() == guessMe){
      $('#guessed').css('background-color','lightgreen');
      $('#guessed').css('color','black');
      $('#guessed').text('Correct. Vous avez réussi en '+nbrClick+' essais !');
    }
  }
});
