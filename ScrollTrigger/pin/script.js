gsap.to(".page2 img",{
    width:"80%",
    scrollTrigger:{
        trigger:".page2",  // if pin is used then this is exception
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true   
    }
})