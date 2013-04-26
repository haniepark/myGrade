$(function(){ // In jQuery 1.6+ this is the same as $(document).ready(function(){}).
	var $form = $('#marks'), $summands = $form.find('.assignments'), $sumDisplay = $('#result');
	
	$form.delegate('.assignments', 'change', function(){
		var sum = 0;
		$summands.each(function(){
			var val = Number($(this).val());
			if(!isNaN(val)) sum += val;
		});
		
		$sumDisplay.text(sum);
	});
});