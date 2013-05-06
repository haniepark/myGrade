$(function(){ // In jQuery 1.6+ this is the same as $(document).ready(function(){}).
	var $form = $('#marks'), $summands = $form.find('.assignments'), $sumDisplay = $('#result');
	
	// Computing marks.
	$form.on('change','.assignments', function(){
		var sum = 0;
		$summands.each(function(){
			var val = Number($(this).val());
			if(!isNaN(val)) sum += val;
		});
		
		$sumDisplay.text(sum);
	});


	// Toggling fields corresponding to the switches below.
	$('input').on('change', function(){
		var btn = $(this).closest('input.off');
		if($(btn).is(':checked')){
			//$(this).closest('#assignment').find('.entries').hide();
			$(this).closest('section').find('.entries').hide();
		}
		else{
			$(this).closest('section').find('.entries').show();
		}
	});

});