var controller = new ScrollMagic.Controller();

// ----------------Section1-------------------
var tl1 = new TimelineMax();
tl1.from("#pintitle .panel.content", 1, { opacity: 0, yPercent: 100 })
    .from("#pintitle .blackscreen", 1, { opacity: 0 }, "-0.5")
    .to("#pintitle .panel.title", 1, { opacity: 0 }, "-0.5");

new ScrollMagic.Scene({
    triggerElement: "#pintitle",
    triggerHook: "onLeave",
    duration: "200%"
})
    .setPin("#pintitle")
    .setTween(tl1)
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
    })
    .addTo(controller);


// --------------Section2-----------------
var tl2 = new TimelineMax();
// tl.from("#pinmaster .panel.bg1", 1, { xPercent: 100 });
tl2.from("#pinmaster .panel.bg2", 1, { xPercent: -100 })
    .from("#pinmaster .panel.bg3", 1, { yPercent: 100 });


new ScrollMagic.Scene({
    triggerElement: "#pinmaster",
    triggerHook: "onLeave",
    duration: "200%"
})
    .setPin("#pinmaster")
    .setTween(tl2)
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
    })
    .addTo(controller);

var tl3 = new TimelineMax();

tl3.to("#pinmaster .list1", 1, { opacity: 0 })
    .staggerFrom("#pinmaster .list2 .obj", 1, { opacity: 0, xPercent: -100 }, 0.1)
    .to("#pinmaster .list2", 1, { opacity: 0 })
    .staggerFrom("#pinmaster .list3 .obj", 1, { opacity: 0, yPercent: -100 }, 0.1);

new ScrollMagic.Scene({
    triggerElement: "#pinmaster",
    triggerHook: "onLeave",
    duration: "200%"
})
    .setTween(tl3)
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
    })
    .addTo(controller);


// -----------------Section3-----------------------

var tl4 = new TimelineMax();

TweenMax.set("#tracesvg path", { strokeDasharray: "100%", strokeDashoffset: "100%" });

tl4.to("#p1", 5, { strokeDashoffset: 0, ease: Power2.easeInOut })
    .to("#p2", 5, { strokeDashoffset: 0, ease: Power2.easeInOut })
    .to("#p3", 5, { strokeDashoffset: 0, ease: Power2.easeInOut })
    .to("#p4", 5, { strokeDashoffset: 0, ease: Power2.easeInOut })
    .to("#p5", 5, { strokeDashoffset: 0, ease: Power2.easeInOut })
    .to("#p6", 5, { strokeDashoffset: 0, ease: Power2.easeInOut })
    .to("#p7", 5, { strokeDashoffset: 0, ease: Power2.easeInOut });

new ScrollMagic.Scene({
    triggerElement: ".section3",
    triggerHook: "onLeave",
    offset: 10,
    duration: 3500
})
    .setTween(tl4)
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40
    })
    .addTo(controller);

var title = $(".section3 .titlesvg");
for (var i = 0; i < title.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: title[i],
        offset: -50,
    })
        .setClassToggle(title[i], "reveal")
        .addIndicators({
            colorTrigger: "white",
            colorStart: "white",
            colorEnd: "white",
            indent: 40
        })
        .addTo(controller);
}