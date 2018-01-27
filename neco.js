(function($){
	$(document).ready(function(){
		var price_elem = $('#our_price_display');
		if (price_elem.length) {
			var addToCartRewrite = ajaxCart.add.toString()
				.replace('function ', 'function addToCartFunc')
				.replace("controller=cart&add=1", "controller=cart&add=1&belvg_custom_price='+encodeURIComponent($('#belvg_price').val())+'");
	
			eval(addToCartRewrite);
			ajaxCart.add = addToCartFunc;

			price_elem.before('<span class="belvg_custom_price">'+original_price_label+'</span>');
			price_elem.parent().after('<p id="belvg_custom_price" class="our_price_display"><span class="belvg_custom_price">'+custom_price_label+'</span></p>');

			$('#belvg_custom_price').append(
				$('<input>').attr({
					'name': 'belvg_custom_price',
					'id': 'belvg_price' 
				}).css({
					'width': productPrice.length * 15 + 'px',
					'text-align': 'center',
				})
			);

			$('#belvg_price').keydown(function(e){
	            var key = e.charCode || e.keyCode || 0;
	            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
	            // home, end, period, and numpad decimal
	            return (
	                key == 8 || 
	                key == 9 ||
	                key == 46 ||
	                key == 110 ||
	                key == 190 ||
	                (key >= 35 && key <= 40) ||
	                (key >= 48 && key <= 57) ||
	                (key >= 96 && key <= 105)
	            );
			});
		}
	});
})(jQuery);