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

$(".header_text-move").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "-100% top",
        end: "30% top",
        scrub: 0.8
      }
    });
    tl.to(targetElement, {
      y: "100%",
      duration: 1
    });
  });
  
  // Sticky Circle Grow
  $(".sticky-circle_wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".sticky-circle_element");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(
      targetElement,
      {
        width: "35em",
        height: "35em",
        borderRadius: "35em",
        duration: 1
      },
      {
        width: "100vw",
        height: "100vh",
        borderRadius: "0em",
        duration: 1
      }
    );
  });

  $(".grid_wrapper:nth-child(odd)").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("body, .section.is--nav");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        // can also use "20px 80%"
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(
      targetElement,
      {
        backgroundColor: "#e8e2da",
        color: "#2e2a27",
        duration: 1
      },
      {
        backgroundColor: "#2e2a27",
        color: "#e8e2da",
        duration: 1
      }
    );
  });
  $(".grid_wrapper:nth-child(even), .sticky-circle_wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $("body, .section.is--nav");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        // can also use "20px 80%"
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(
      targetElement,
      {
        backgroundColor: "#2e2a27",
        color: "#e8e2da",
        duration: 1
      },
      {
        backgroundColor: "#e8e2da",
        color: "#2e2a27",
        duration: 1
      }
    );
  });
  