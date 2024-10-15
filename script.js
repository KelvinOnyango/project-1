// Initialize GSAP and ScrollTrigger animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
gsap.from(".hero-title", {
    duration: 1.5,
    x: -200,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-title",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".hero-subtitle", {
    duration: 1.2,
    x: -200,
    opacity: 0,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-subtitle",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".hero-button", {
    duration: 1,
    y: 100,
    opacity: 0,
    delay: 0.4,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-button",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".hero-image", {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    delay: 1.0,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-image",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

// Function to handle checkbox state and animate the hero-content margin
const checkbox = document.getElementById('check');
const heroContent = document.querySelector('.hero-content');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        // Animate the margin-block-start to 8.5rem when the menu is opened
        gsap.to(heroContent, {
            duration: 0.6,    // Smooth animation duration
            marginBlockStart: '8.5rem',
            ease: "power3.out"
        });
    } else {
        // Animate the margin-block-start back to 0rem when the menu is closed
        gsap.to(heroContent, {
            duration: 0.6,
            marginBlockStart: '0rem',
            ease: "power3.out"
        });
    }
});
