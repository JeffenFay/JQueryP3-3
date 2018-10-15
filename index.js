var guessMe = Math.round(Math.random()*100);
alert(guessMe);
$('button').click(function(){
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
  	$('#guessed').text('Correcte.');
  }
});
