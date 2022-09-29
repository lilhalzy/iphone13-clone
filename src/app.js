// Page 1 - Fading navbar once scrolling
const tlOne = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    scrub: true,
  }
})

tlOne.fromTo("nav", {opacity: 1}, {opacity: 0})