$(document).ready((function() {
    var t = document.querySelector(".spin-result-wrapper"),
        e = document.querySelector(".wheel-img");

    $(".active").on("click", (function(s) {
        $(this).off(s), e.classList.contains("rotated") ? t.style.display = "block" : (e.classList.add("super-rotation"), setTimeout((function() {
            t.style.display = "block"
        }), 8e3), setTimeout((function() {
            $(".spin-wrapper").slideUp(), $(".order_block").slideDown()
        }), 9500), e.classList.add("rotated"))
    })), $(".close-popup, .pop-up-button").click((function(t) {
        t.preventDefault(), $(".spin-result-wrapper").fadeOut("slow", (function() {
            $("html, body").animate({
                scrollTop: $(".pred_form").offset().top - 60
            })
        }))
    }));



    $("a[href*='#']:not([href='#'])").click(function(e) {
        e.preventDefault();
    });

    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate(
            { scrollTop: destination },
            800
        );
        return false;
    });

}));

var countDownDate = new Date().getTime() + (1000*600);

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // $(".time.hours").text( hours < 10 ? "0" + hours : hours );
    $(".minutes").text( minutes < 10 ? "0" + minutes : minutes );
    $(".seconds").text( seconds < 10 ? "0" + seconds : seconds );

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        // $(".timer-wrap").html("<p class='timer-expired'>EXPIRED</p>");
        // $(".time.hours").text("00");
        $(".minutes").text("00");
        $(".seconds").text("00");
    }
}, 1000);