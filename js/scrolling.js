// Created by Davor
$(function () {
    var offScroll = false;
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
        offScroll = true;
        setTimeout(() => {
            offScroll = false;
        }, 1000)
    });
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        // Assign active class to nav links while scolling
        $('.page-section').each(function (i) {
            if ($(this).position().top <= scrollDistance && !offScroll) {
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

    // Skills Bar
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 4000);
    });

    // Load More Btn
    $(".box:gt(2)").hide();
    $("a.addMore").click(function () {
        const hiddens = $(".box:hidden");
        hiddens.slice(0, 10).show();
        if (hiddens.length <= 9) {
            $(this).remove();
        }
    });
})
