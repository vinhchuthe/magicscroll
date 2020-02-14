
$(document).ready( function() {
	deviceWidth = $(window).width();
	deviceHeight = $(window).height();
	initGiacca();
});

// scrollMagic blocco 13 (giacca)

function initGiacca() {
	var controller;
	controller = new ScrollMagic.Controller();

	var startpin = new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0,
		duration: 4500
	})
		.setPin("#blocco13")
		.addTo(controller);

	if (deviceWidth >= 1024) {
		TweenMax.set("#blocco13 .wrap_giacca", { opacity: 0, x: '50%', y: +200 });
	} else {
		TweenMax.set("#blocco13 .wrap_giacca", { opacity: 0, x: '0%', y: +200 });
	}

	new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0.5,
	})
		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .wrap_giacca", 0.5, { opacity: 1, y: 0, delay: 0.5 })))
		//.addIndicators({ name: "wrap_giacca" })
		.addTo(controller);

	// giacca 1-->2
	TweenMax.set("#blocco13 .g02", { opacity: 0 });
	new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0.1,
		duration: 500
	})
		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .g02", 0, { opacity: 1, delay: 0.5 })))
		.addTo(controller);

	// giacca 2-->3
	TweenMax.set("#blocco13 .g03", { opacity: 0 });
	new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0.1,
		duration: 1000
	})
		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .g03", 0, { opacity: 1, delay: 1 })))
		.addTo(controller);

	// giacca 3-->4
	TweenMax.set("#blocco13 .g04", { opacity: 0 });
	new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0.1,
		duration: 1500
	})
		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .g04", 0, { opacity: 1, delay: 1.5 })))
		.addTo(controller);

	// giacca 4-->5
	TweenMax.set("#blocco13 .g05", { opacity: 0 });
	new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0.1,
		duration: 2000
	})
		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .g05", 0, { opacity: 1, delay: 2 })))
		.addTo(controller);

	// giacca 5-->6
	TweenMax.set("#blocco13 .g06", { opacity: 0 });
	new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0.1,
		duration: 2500
	})
		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .g06", 0, { opacity: 1, delay: 2.5 })))
		.addTo(controller);

	// plus icons
	TweenMax.set("#blocco13 .wrap-plus", { opacity: 0 });
	new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0.1,
		duration: 3000
	})
		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .wrap-plus", 0.5, { opacity: 1, delay: 3.5 })))
		.addTo(controller);

	// giacca left
	new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0.1,
		duration: 3000
	})
		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .wrap_giacca", 0.5, { x: '0%', delay: 3.5, onComplete: complete })))
		//.addIndicators({ name: "wrap_giacca" })
		.addTo(controller);
	function complete() { }

	// giacca ombra
	TweenMax.set("#blocco13 .ombra", { opacity: 0 });
	new ScrollMagic.Scene({
		triggerElement: "#blocco13",
		triggerHook: 0.1,
		duration: 3000
	})
		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .ombra", 0.5, { opacity: 1, delay: 3.5 })))
		.addTo(controller);

	TweenMax.set("#blocco13 .wrap_testo", { opacity: 0, x: -200, display: "none" });
	if (deviceWidth >= 1024) {
		// giacca testo
		new ScrollMagic.Scene({
			triggerElement: "#blocco13",
			triggerHook: 0.1,
			duration: 3000
		})
			.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .wrap_testo", 0.5, { opacity: 1, delay: 3.5, x: 0, display: "block" })))
			//.addIndicators({ name: "wrap_testo" })
			.addTo(controller);
	}

	// if (deviceWidth >= 1024) {
	// 	// content giacca y 
	// 	new ScrollMagic.Scene({
	// 		triggerElement: "#blocco14",
	// 		triggerHook: 1,
	// 		duration: 1000
	// 	})
	// 		.setTween(new TimelineMax().add(TweenMax.staggerTo("#blocco13 .content", 0.5, { opacity: 0, y: -800, delay: 0 })))
	// 		//.addIndicators({ name: "opacity" })
	// 		.addTo(controller);
	// }
}