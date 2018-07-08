$(function () {
    $('#view').click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 600);
    });
    $('.link-active').on('click', function () {
        const linkActive = $(this).attr('data-scrollid');
        $('html, body').animate({
            scrollTop: $("#" + linkActive).offset().top
        }, 600);
    });
    $(".navul").on("click", "li", function () {
        $(".navul li.active").removeClass("active");
        $(this).addClass("active");
    });
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scolling
        $('.page-section').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('.navul li.active').removeClass('active');
                $('.navul li').eq(i).addClass('active');
            }
        });
    }).scroll();
    /* Filtering categories images */
    $('.category-item').click(function () {
        const category = $(this).attr('id');
        if (category == 'all') {
            $('.myproject').addClass('hide');
            setTimeout(() => {
                $('.myproject').removeClass('hide');
            }, 500);
        } else {
            $('.myproject').addClass('hide');
            setTimeout(() => {
                $('.' + category).removeClass('hide');
            }, 500);
        }
    });
    $('.category_container p').click(function () {
        const category = $('.category_container p');
        $(category).removeClass('activetech');
        $(this).addClass('activetech');
    });

    // $('.img-wrap').is(':hidden') {
    //     $(this).css({ "display": "none" });
    // }
})