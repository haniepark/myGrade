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



	// adding/subtracting mark entries.

	// initializing all numbEntries to 1.
	$('.entries').each(function(){
		$(this).data("numEntries", 1);
	});


	// if button is clicked, change numEntries.
	$('.btn').on('click', function(){
		var $sec = $(this).closest('.entries');
		var $numEntries = $sec.data("numEntries") + 1;
		var $entry = $('<label class="entry">Midterm '+$numEntries+' : <input class="midterms"/></label>');
		$(this).closest('.entry').append($entry);
		$sec.data("numEntries", $numEntries);
	});



});