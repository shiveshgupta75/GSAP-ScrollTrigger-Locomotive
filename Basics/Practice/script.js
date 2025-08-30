var tl=gsap.timeline();
tl.from(".nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.3
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:1,
    delay:0.3,
    stagger:0.3
})
tl.from("img",{
    x:500,
    rotate:45,
    opacity:0,
    duration:1,
    delay:0.3,
    stagger:0.3
})