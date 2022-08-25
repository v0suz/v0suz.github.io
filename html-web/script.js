gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

$(".section.is--hero").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".nav_logo");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });
    tl.from(targetElement, {
      width: "100%",
      y: "-90%",
      duration: 1,
    });
  });
