$(document).ready(function() {
    $(".mobile-menu").click(function () {
        $(".menu-block").slideToggle();
        $(".menu-block").removeClass('hider');
    });

    $("#menu-list li").on("click","a", function (event) {
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

    $(function() {
        //Simple filter controls
        $('.simplefilter li').click(function() {
            $('.simplefilter li').removeClass('active');
            $(this).addClass('active');
        });
        //Multifilter controls
        $('.multifilter li').click(function() {
            $(this).toggleClass('active');
        });
        //Shuffle control
        $('.shuffle-btn').click(function() {
            $('.sort-btn').removeClass('active');
        });
        //Sort controls
        $('.sort-btn').click(function() {
            $('.sort-btn').removeClass('active');
            $(this).addClass('active');
        });
    });

});

