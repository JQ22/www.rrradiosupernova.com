$(document).ready(function(){
	$('input[type="text"]').wrap('<span class="input-text-wrapper"></span>').on('keydown', function (e) {
          e.stopPropagation();//else cant put space for some reason
    });;
})