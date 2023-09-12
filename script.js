gsap.from(".page1 .box",{

    scale:0,
    rotate:360,
    duration:2,
    delay:.1,
})

gsap.from(".page2 .box",{
    scale:0,
    rotate:360,
    duration:2,
    scrollTrigger:{
        trigger:".page2 .box",
        start:"top 60%",
        end:"top 30%",
        markers:true,
        scrub:2
    }
})