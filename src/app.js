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
    start: "-30%",
    end: "0%",
    scrub: true
  }
})

tlThree.fromTo('.large-phone', {x: '40%'}, {x: '35%'})
tlThree.fromTo('.small-phone', {x: '-40%'}, {x: '-35%'}, '<')
tlThree.fromTo('.product-txt-left', {x: 50, opacity: 0}, {x: 0, opacity: 1}, '<')
tlThree.fromTo('.product-txt-right', {x: -50, opacity: 0}, {x: 30, opacity: 1}, '<')

const tlThreePin = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false,
  }
})

// page 4 - carousel

const swatches = document.querySelectorAll('.swatches img')
const gallery = document.querySelector('.phone-gallery')
const slides = document.querySelectorAll('.phone-gallery-container')

let currentSwatch = 'blue'
let topIndex = 2

swatches.forEach((swatch, i) => {
  const position = slides[i].getBoundingClientRect().left
  
  swatch.addEventListener('click', (e) => {
    let swatchName = e.target.getAttribute('swatch')
    let rightPanel = document.querySelector('.' + swatchName)

    if(currentSwatch === swatchName) return

    gsap.set(rightPanel, {zIndex: topIndex})
    gsap.fromTo(rightPanel, {opacity: 0}, {opacity: 1, duration: 1})

    // gallery
    gsap.to(gallery, {x: -position, duration: 1, ease: 'back.out(1.1)'})

    topIndex++
    currentSwatch = swatchName
  })
})

// page 5 - video scrolling
const tlFifth = gsap.timeline({
  scrollTrigger: {
    trigger: '.fifth-page',
    start: '0%',
    end: '100%',
    scrub: true,
    pin: true,
  }
})

tlFifth.fromTo('.product-video', { currentTime: 0}, { currentTime: 2, duration: 10})
tlFifth.fromTo('.product-info-container h3', {opacity: 0}, {opacity: 1, stagger: 3, duration: 5}, '<')

// page 6 - parallax
const tlSixth = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    start: "-25%",
    end: "50%",
    markers: { startColor: "pink", endColor: "green" },
    scrub: true,
  },
});

tlSixth.fromTo('.photo-description', {y: 0}, {y: -80});
tlSixth.fromTo('.portrait-container', {y: 0}, {y: -80}, '<');
tlSixth.fromTo('.phone-video', {y: 0}, {y: -275}, '<')