$(document).ready(function () {
	$(window).scroll(function () {
		let distance = $(window).scrollTop();

		$(".section").each(function (i, el) {
			if (($(el).offset().top - $("nav").outerHeight()) <= distance) {

				$("nav a").each(function (i, el) {
					if ($(el).hasClass("act")) {
						$(el).removeClass("act");
					}
				});

				$("nav li:eq(" + i + ")").find("a").addClass("act");
			}
		});
	}); //Отображение текущей секции

	$("nav a, .title a").click(function () {
		let valRef = $(this).attr("href");
		$("html,body").animate({
			scrollTop: $(valRef).offset().top - 40 + "px"
		});
	}); //якорные ссылки



	$('.image-link').magnificPopup({
		type: 'image'
	}); //modal images
	setTimeout(function () { $("#exampleModal").modal("show"); }, 10000)

	// $("#phone").mask("+7(999) 999-99-99");

	$(".dropdown li a").click(function () {
		$(".ham").removeClass("active");
	})

	$(window).click(function (event) {
		if (!(event.target.matches(".ham") || event.target.matches(".line"))) {
			$(".ham").removeClass("active");
		}//закрываем выпадающий список при клике вне выпадающего окна

	});

	// 	$("#phone").change(function () {
	// 		const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
	// 		let val = $(this).val();
	// 		if (!regex.test(val)) {
	// 			$(this).css("background-color", "rgba(255,0,0,0.7)");
	// 			$(".button").prop('disabled', 'disabled');
	// 		}
	// 	});

	$("form").submit(function (event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: $("this").serialize()
		}).done(function () {
			$("this").find("input").val('');
			alert("Успешно отправлено!");
			$("form").trigger("reset");
		});
		return false;
	})
})