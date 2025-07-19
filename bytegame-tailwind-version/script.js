var checkToggle = false;

$('#toggle-collapse').click((e)=>{

	if (!checkToggle) {

		$('#site-collapse-content').removeClass("hidden");
		$('#site-collapse-content').addClass("flex");

	}else {

		$('#site-collapse-content').removeClass("flex");
		$('#site-collapse-content').addClass("hidden");
		
	}

	checkToggle = !checkToggle;
});

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 6,
	spaceBetween: 30,
});
