gsap.from(".page1 .circle",{
    scale:0,
    delay:0.3,
    duration:1,
    rotate:720
})
gsap.from(".page2 .circle",{
    scale:0,
    delay:0.3,
    duration:1,
    rotate:720,
    // scrollTrigger:".page2 .cicrle" (Normal way without object)
    scrollTrigger:{
        trigger:".page2 .circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"bottom 30%",
        scrub:5  // val from 0 to 5
        

    }
})
gsap.from(".page3 .circle",{
    scale:0,
    duration:1,
    rotate:720,
    scrollTrigger:{
        trigger:".page3 .circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"bottom 30%",
        scrub:true   // can be true/false
        

    }
})