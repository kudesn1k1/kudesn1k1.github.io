$(document).ready(function () {
	$(window).scroll(function () {
		let distance = $(window).scrollTop();
		if (distance < $("#about").offset().top) {
			$("nav a").each(function (i, el) {
				if ($(el).hasClass("act")) {
					$(el).removeClass("act");
				}
			});
		}
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


	$(window).click(function (event) {
		if (!(event.target.matches(".ham") || event.target.matches(".line"))) {
			$(".ham").removeClass("active");
		}//закрываем выпадающий список при клике вне выпадающего окна
		// else if (event.target.matches('.dropbtn')) {
		// 	$(".ham").addClass("show");
		// }

	});


	$("form").submit(function (event) {
		event.preventDefault();
		const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
		let val = $("#phone").val();
		if (regex.test(val)) {
			$("#phone").css("border", "none");
			$.ajax({
				type: "POST",
				url: "php/mail.php",
				data: $("this").serialize()
			}).done(function () {
				$("this").find("input").val('');
				alert("Успешно отправлено!");
				$("form").trigger("reset");
			});
		}
		//return false;
		else {
			$("#phone").css("border", "2px solid rgb(255,0,0)");
			if ($("html").attr("lang") == "ru") {
				alert("Пожалуйста, введите корректный номер телефона");
			}
			else if ($("html").attr("lang") == "en") {
				alert("Please enter the correct phone number");
			}
			else { alert("Моля, въведете правилния телефонен номер"); }
		}

	})//AJAX FORM
})

function toggle_menu() {
	document.getElementById("myDropdown").classList.toggle("show_lang");
}

window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show_lang')) {
				openDropdown.classList.remove('show_lang');
			}
		}
	}
}//LANG DROPDOWN
