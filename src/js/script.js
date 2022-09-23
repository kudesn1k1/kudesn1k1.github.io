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

    $("nav a").click(function () {
        let valRef = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(valRef).offset().top - 40 + "px"
        });
    }); //якорные ссылки



    $('.image-link').magnificPopup({
        type: 'image'
    }); //modal images
    setTimeout(function(){$("#exampleModal").modal("show");}, 10000)
    

});
