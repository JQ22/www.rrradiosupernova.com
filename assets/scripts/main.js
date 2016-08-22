$('document').ready(function(){

	var receiver = $('#receiver');
	var menu = $('.menu');

	// receiver.load('include/show.php');
	$('.logo-box').addClass('active');

	$('body').addClass('active');

	$('.logo-bar').on('click', function(){
		$('.box-mosaique').toggleClass('active');
	});

	$('.box-mosaique .close').on('click', function(){
		$('.box-mosaique').removeClass('active');
	});

	$('.mosaique-item .sticker').on('click', function(){
		$('.box-mosaique').removeClass('active');
	});



	$('.play-button').on('click', function(){
		console.log('!');
		$('.waveform-ctnr').toggleClass('active');
		$('.progress').toggleClass('active');
	})


// AJAX LOAD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// AJAX NAVIGATION
	function loadFile(file) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', file);
	xhr.addEventListener('readystatechange', function() {
		if(xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {
			$('.receiver').html(xhr.responseText);
		}
	});
	xhr.send(null);
	};

	(function(){
	var inputs = $('.nav li');
	var inputsLen = inputs.length;
			inputs.on('click', function(){
				loadFile($(this).attr('value'));
			})
	})();


// SOUND  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	$('button').on('click', function(){
		$(this).next('.waveform').toggleClass('active');
	})

});

//
// SC.initialize({
//   client_id: '7f0decc8decbcd4c4d74340857fb9d57'
// });
//
// SC.stream('/tracks/253283178').then(function(player){
//   player.play();
//
