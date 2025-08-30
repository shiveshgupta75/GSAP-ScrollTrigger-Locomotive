// gsap.to("#box",{
//     x:1000,
//     backgroundColor:"blue",
//     rotate:360,
//     duration:2,
//     delay:1
// })

// gsap.from("#box",{
//     x:1000,
//     backgroundColor:"blue",
//     rotate:360,
//     duration:2,
//     delay:1
// })

// gsap.to(".box1",{
//     x:1000,
//     scale:0.5,
//     rotate:360,
//     duration:2,
//     delay:1
// })
// gsap.to(".box2",{
//     x:1000,
//     scale:0.5,
//     rotate:360,
//     duration:2,
//     delay:3
// })
// gsap.to(".box3",{
//     x:1000,
//     scale:0.5,
//     rotate:360,
//     duration:2,
//     delay:5
// })

var tl=gsap.timeline();
tl.to(".box1",{
    x:1000,
    scale:0.5,
    rotate:360,
    duration:2,
    delay:1
})
tl.to(".box2",{
    x:1000,
    scale:0.5,
    rotate:360,
    duration:2,
    
})
tl.to(".box3",{
    x:1000,
    scale:0.5,
    rotate:360,
    duration:2,
})

