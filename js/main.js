$(document).ready(function() {
    $(".mobile-btn").click(function () {
        $(".menu-list").slideToggle();
        $(".menu-list").removeClass('hider');
    });

    $(".menu-list").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//alert(id);

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


    // $(".pulse").click(function () {
    //     $(".video-container").slideToggle();
    //     $(".video-container").removeClass('hider');
    // });


    $(".language-list").animate({width: 'toggle'});
    $(".arrow-lang").click(function () {
        $(".language-list").css({width: 'auto'});
        $(".language-list").animate({width: 'toggle'});

        $(".arrow").toggleClass("hider");
        $(".cross").toggleClass("hider");
    });
});

