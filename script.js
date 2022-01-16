// smooth scroll
$('.page-scroll').on('click', function (e) {
	const tujuan = $(this).attr('href');
	const elemenTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	});
	e.preventDefault();
});