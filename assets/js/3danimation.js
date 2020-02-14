var controller;
controller = new ScrollMagic.Controller();

// TweenMax.set($(".item-box"), { css: { transformPerspective: 400, transformStyle: "preserve-3d" } });
// new ScrollMagic.Scene({
//     triggerElement: ".item",
//     triggerHook: 0.1,
//     duration: 1500
// })
//     .setTween(new TimelineMax().add(TweenMax.staggerTo($(".item"), 1, { css: { rotationY: 30, rotationX: 20, rotationZ: 10  }})))
//     .addTo(controller);

TweenMax.set($(".item"), { css: { transformPerspective: "102.4rem", transformStyle: "preserve-3d", translateY: "79.0278px", rotate3d: "1, -1, 0, 31.5976deg" } })

$(".item-left").each(function () {
    $(this).click(function () {
        console.log("asd");
    })
});

$(document).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $(".item-left").each(function () {

        var el = $(this);
        if (el.offset().top < scrollTop) {
            // TweenMax.to($(".item"), 1, { css: { translateY: "82.1647px", rotate3d: "1, -1, 0, -31.0656deg" } })
            console.log("asdasdasd");
        } else {
            // TweenMax.to($(".item"), 1, { css: { translateY: "79.0278px", rotate3d: "1, -1, 0, 31.5976deg" } })
            console.log("qweqweqwe");
        }
    });
})