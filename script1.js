document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navMenu = document.querySelector('.nav-menu');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {

    AOS.init({
        duration: 1200,
    });


    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {

            navbar.style.top = '-80px';
        } else {

            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });


    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#00ff5f' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6 }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });


    VANTA.BIRDS({
        el: "#birds-animation",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x23153c,
        color1: 0x5f2f,
        color2: 0xff00ae,
        colorMode: "lerpGradient",
        birdSize: 1.50,
        wingSpan: 20.00,
        speedLimit: 4.00,
        separation: 50.00,
        alignment: 20.00,
        cohesion: 20.00
    });


    VANTA.DOTS({
        el: "#dots-animation",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f9fff,
        color2: 0xff00ae,
        backgroundColor: 0x23153c,
        size: 4.00,
        spacing: 30.00
    });


    VANTA.RINGS({
        el: "#rings-animation",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x23153c,
        color: 0xff3f81
    });
});
VanillaTilt.init(document.getElementById("wol"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});