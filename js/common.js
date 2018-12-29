$(document).ready(function() {
	
	//Плавный переход к якорям

	$("a.nav-scroll").click(function () {
		elementClick = jQuery(this).attr("href")
		destination = jQuery(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
		return false;
	});

	//Вывод формы

	//Стилизация вывода формы

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	//Валидация формы

	$("form").validate({

		rules: {

			email: {
				required: true,
				email: true
			},

			name: {
				required: true
			},

			phone: {
				required: true,
				digits: true,
				minlength: 7
			}
		},

		messages: {

			name: {
				required: "Введите ваше имя",
			},

			email: {
				required: "Введите e-mail",
				email: "Введите корректный e-mail"
			},

			phone: {
				required: "Введите номер",
				digits: "Введите корректный номер",
				minlength: "Введите номер"
			}
		}

	});

	//Отправка данных на почту

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! В ближайшее время с Вами свяжется наш специалист");
			setTimeout(function() {
				$.magnificPopup.close();
				// Done Functions
				th.trigger("reset");
			}, 500);
		});
		return false;
	});

	//Google map

	ymaps.ready(init);
	var myMap;

	function init(){
		myMap = new ymaps.Map("map", {
			center: [53.909323, 27.522754],
			zoom: 17
		});
		myPlacemark = new ymaps.Placemark([53.909323, 27.522754], {
		});
            
		myMap.geoObjects.add(myPlacemark);
	}
	
});
