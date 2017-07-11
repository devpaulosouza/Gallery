jQuery(($)=>{
	$('body').append("<div id='gallery-lightbox'>"
		+"<a href='#' class='next'>&#12297;</a>"
		+"<a href='#' class='prev'>&#12296;</a>"
		+"<a href='#' class='glyphicon glyphicon-fullscreen'>x</a>"
		+"<a href='#' class='full'>[-]</a></div>");

	let divlb=$('#gallery-lightbox');
	let showimg=-1;
	let gallery;
	let imgs;


	function lightbox (img) {
		showimg=$(img).parent().index();
		divlb.show().css('background-image', 'url('+img.href+')');
	}

	function lightboxoff () {
		showimg = -1;
		divlb.hide();
		return false;
	}


	function next () {
		if (showimg == -1){return}
		showimg=(showimg+1)%imgs.length;
		imgs.eq(showimg).click();
		return false;
	}


	function prev () {
		if (showimg == -1){return}
		showimg=(showimg+(imgs.length -1))%imgs.length;
		console.log(showimg);
		imgs.eq(showimg).click();
		return false;
	}

	$('.gallery').each(function () {
		gallery=$(this);
		imgs=gallery.find('li a');

		imgs.click(function() {
			lightbox(this);
			return false;
		});
	});

	$('#gallery-lightbox .close').click(function(){
		lightboxoff();
		return false;
	});

	$('#gallery-lightbox .next').click(function(){
		next();
		return false;
	});

	$('#gallery-lightbox .prev').click(function(){
		prev();
		return false;
	});

	$(window).keydown(function(e){
		switch (e.keyCode) {
			case 27:
				lightboxoff();
				break;
			case 39:
				next();
				break;
			case 37:
				prev();
				break;

		}
	});
});
