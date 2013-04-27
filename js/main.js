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


	//checkbox
	/*
	if($('input[id=ass]').is(':checked')){// this will return true is the checkbox is checked, if not it will return false.
		$("#assignments").toggle();
	}
	*/

	var $ass = $('input[id=ass]');

	$ass.change(function(){
		$("#assignments").toggle($ass.is(':checked'));

		//$("#assignments").toggle('slow', function(){$ass.is(':checked')});

		/*
		$("#assignments").toggle(
			function(){
				if($ass.is(':checked')){
					$("#assignments").toggle("slow");
				}
			}
			
			);
*/

	});
	$("input[id=ass]:checked").change();

});