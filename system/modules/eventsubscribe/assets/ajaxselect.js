jQuery(document).ready(function() {
      doAjSel(document.getElementsByName('eventId')[0].value);
});

function doAjSel(val){
	jQuery.ajax({
		type: "POST",
		url:  "SimpleAjax.php",
		data: {
			type: "ajaxsimple",
			key: val
		},
		success: function(result){
			event = jQuery.parseJSON(result);
			if(typeof event['error'] == "undefined"){
				$('span.ajaxTitle').replaceWith('<span class="ajaxTitle">' + event['title'] + '</span>');
				$('span.ajaxStartDate').replaceWith('<span class="ajaxStartDate">' + event['startDate'] + '</span>');
				$('span.ajaxField_location_city').replaceWith('<span class="ajaxField_location_city">' + event['field_location_city'] + '</span>');
				$('span.ajaxPrice').replaceWith('<span class="ajaxPrice">' + event['price'] + ' € ' + '</span>');
				$('span.ajaxPriceInfo').replaceWith('<span class="ajaxPriceInfo"> ' + event['price_info'] + '</span>');
				$('span.ajaxRegistrations').replaceWith('<span class="ajaxRegistrations"> ' + event['registrations'] + '</span>');
				$('span.ajaxMaximum_number').replaceWith('<span class="ajaxMaximum_number"> ' + event['maximum_number'] + '</span>');
			}else{
				alert(event['error']);
			}			
		}
	});
}