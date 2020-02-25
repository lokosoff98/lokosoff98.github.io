jQuery(document).ready(function($) {

	var 
		cosmoTopBlock = $(".cosmo-mob-section-btn-top-box");
		cosmoBottomBlock = $(".cosmo-mob-section-btn-bottom-box");
		cosmoFixedBlock = $(".cosmo-mob-section-btn-fixed-box");

	var resizeScrollCosmo = function() {
		if ( $(window).width() < 1000 )	{
			$(window).scroll(function(event) {
				if ( $(this).scrollTop() 
						< 
					cosmoTopBlock.offset().top )
				{
					cosmoTopBlock.addClass('cosmo-btn-a');
					cosmoBottomBlock.removeClass('cosmo-btn-a');
					cosmoFixedBlock.removeClass('cosmo-btn-a');
				}

				else if ( $(this).scrollTop() 
							> 
						  cosmoTopBlock.offset().top 
						  &&
						  $(this).scrollTop() 
						  	< 
						  cosmoBottomBlock.offset().top
						  )
				{
						cosmoTopBlock.removeClass('cosmo-btn-a');
						cosmoBottomBlock.removeClass('cosmo-btn-a');
						cosmoFixedBlock.addClass('cosmo-btn-a');
				}

				else if ( $(this).scrollTop() 
							 >
						  cosmoBottomBlock.offset().top )
				{
						cosmoTopBlock.removeClass('cosmo-btn-a');
						cosmoBottomBlock.addClass('cosmo-btn-a');
						cosmoFixedBlock.removeClass('cosmo-btn-a');
				}


			});
		}	
	}

	resizeScrollCosmo();

	$(window).resize(function(event) {
		resizeScrollCosmo();
	});
});