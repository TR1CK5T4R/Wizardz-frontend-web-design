const page1Animation = () => {
    let tl = gsap.timeline()

    tl.from('#page1 nav h1,#page1 nav h4, nav button', {
        y: -40,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        stagger: 0.15
    })

    tl.from('.centerPart-1 h1', {
        x: -200,
        opacity: 0,
        duration: 0.3
    })

    tl.from('.centerPart-1 p', {
        x: -100,
        opacity: 0,
        duration: 0.3
    })

    tl.from('.centerPart-1 button', {
        opacity: 0,
        duration: 0.3
    })

    tl.from('.centerPart-2 img', {
        opacity: 0,
        x: 150,
        duration: 0.4
    }, "-=0.5")

    gsap.to('.brands-icons', {
        transform: 'translateX(-100%)',
        duration: 5,
        repeat: '-1',
        ease: 'none',
        scrollTrigger: {
            trigger: '.center',
            scroller: 'body',
            start: 'top 50%'
        }
    })
}
page1Animation();

const page2Animation = () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            scroller: 'body',
            start: 'top 50%',
            end: 'top 0%',
            scrub: 2,
        }
    })

    tl2.from('.services', {
        y: 30,
        opacity: 0,
        duration: 0.5
    })

    tl2.from('.line1.left.cont', {
        x: -300,
        opacity: 0,
        duration: 1,
    }, 'delta')

    tl2.from('.line1.right.cont', {
        x: 300,
        opacity: 0,
        duration: 1,
    }, 'delta')

    tl2.from('.line2.left.cont', {
        x: -300,
        opacity: 0,
        duration: 1,
    }, 'delta2')

    tl2.from('.line2.right.cont', {
        x: 300,
        opacity: 0,
        duration: 1,
    }, 'delta2')
}
page2Animation();

const lastPageAnimation = () => {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.line2',
            scroller: 'body',
            start: 'top 100%',
            end: 'top 40%',
            scrub: 2,
        }
    })

    tl3.from('.section3', {
        y: 300,
        opacity: 0,
        duration: 1,
    })
}
lastPageAnimation();