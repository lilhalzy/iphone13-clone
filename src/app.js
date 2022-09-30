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

// --pin 
const tlOnePin = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  }
})

// Page 2 - Highlight 
const tlTwo = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    markers: { startColor: "white", endColor: "red"},
    scrub: true,
    start: "-35%",
    end: "35%",
  },
})

tlTwo.fromTo(
  ".highlight",
  { color: "rgba(255, 255, 255, 0.4" },
  { color: "rgba(255, 255, 255, 1", stagger: 1 },
)

// --remove highlight
const tlTwoRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    markers: { startColor: "pink", endColor: "green"},
    scrub: true,
    start: "0%",
    end: "60%",
  }
})

tlTwoRemove.to(
  ".highlight",
  { color: "rgba(255, 255, 255, 0.4", stagger: 1}
)

// page 3 - split
const tlThree = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-25%",
    end: "30%",
    scrub: true
  }
})

tlThree.fromTo('.large-phone', {x: '40%'}, {x: '20%'})
tlThree.fromTo('.small-phone', {x: '-40%'}, {x: '-20%'}, '<')
tlThree.fromTo('.product-txt-left', {x: 50, opacity: 0}, {x: 0, opacity: 1}, '<')
tlThree.fromTo('.product-txt-right', {x: -50, opacity: 0}, {x: 0, opacity: 1}, '<')