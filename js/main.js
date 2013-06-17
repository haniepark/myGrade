/*function entryAppend($entry, $a, $numEntries) {		
		$a.append($entry);
		$a.data("numEntries", $numEntries); }*/





$(function(){ // In jQuery 1.6+ this is the same as $(document).ready(function(){}).


	var $sumDisplay = $('#result');
	var sum = 0;
	
	$('#marks').on('change','.assign', function(){
		$(this).each(function() {
			var mark = Number($(this).val());
		    sum += mark;    
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
	$('section').each(function(){
		$(this).data("numEntries", 1);
	});


/*	
	$('.btn.plus').on('click', function(){
		var $a = $(this).closest('section');
		var $sec = $(this).closest('.entries');
		var $numEntries = $sec.data("numEntries") + 1;

		
		if($a.has('#mid')){
			var $entry = $('<label class="entry">Midterm '+$numEntries+' : <input class="midterms"/></label>');
			entryAppend($entry, $a, $numEntries);
		}			
	});
	
	$('.btn.plus').on('click', function(e){
		e.preventDefault();
		
		// closest entries.
		var $sec = $(this).closest('.entries');
		
		// number of entries in this section.
		var $numEntries = $sec.data("numEntries") + 1;
		
		// outputting a new node
		var $entry = $('<label class="entry">Midterm '+$numEntries+' : <input class="midterms"/></label>');
		$(this).closest('.entries').append($entry);
		
		//TODO: make buttons follow the entries
				
		// change the numEntries accordingly.
		$sec.data("numEntries", $numEntries);
	});*/
	

	
	$('.btn.plus').on('click', function(e){
		e.preventDefault();
		
		var $sec = $(this).closest('section');
		var $numEntries = $sec.data("numEntries") + 1;
		var $appendEntry = $(this).closest('.entries');
		var $weightEntry = $('<label class="entry"><p>weight factor : </p><input class="weight" placeholder="  %"//></label>')
		
			if ($sec.has("#assign").length != 0 ) {
				
				var $entry = $('<div class="wrap">' + '<label class="entry">Assignment '+$numEntries+' : <input class="assign" placeholder="  %"/></label>' + '</div>').append($weightEntry);
							
			} else if ($sec.has("#mid").length != 0) {
				
				var $entry = $('<div class="wrap">' + '<label class="entry">Midterm '+$numEntries+' : <input class="midterms" placeholder="  %"/></label>' + '</div>').append($weightEntry);
			
			} else if ($sec.has("#final").length != 0) {
				
				var $entry = $('<div class="wrap">' + '<label class="entry">Final '+$numEntries+' : <input class="final" placeholder="  %"/></label>' + '</div>').append($weightEntry);
					
			} 
			$appendEntry.append($entry);			
			$sec.data("numEntries", $numEntries); 
		
		});
	
	
	$('.btn.minus').on('click', function (e){
		e.preventDefault();
		var $sec = $(this).closest('section');
		var $numEntries = $sec.data("numEntries") -1;
		
		$(".btn.minus").attr('disabled', 'disabled');
			

		if ($numEntries >= 1) {
		
			$(".btn.minus").removeAttr('disabled');
		
		$sec.data("numEntries", $numEntries);
		$(this).closest('.entries').find('.wrap').last().remove();
		
		}
		
	});
	
});