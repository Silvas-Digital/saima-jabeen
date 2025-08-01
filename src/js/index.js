import '../css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/styles.css';
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import * as THREE from 'three'; // Must be imported first
import BIRDS from 'vanta/dist/vanta.birds.min'; // Or any other preset: net, stars, blobs, etc.


export const initializeCommon = () => {
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-in-out'
    });

   
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    BIRDS({
        el: "#vanta-bg",
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x07232b,  // Primary color
        color1: 0x52ab98,          // Secondary color
        color2: 0xc8d8e4,          // Accent color
        colorMode: "lerpGradient",
        birdSize: 0.90,
        quantity: 3.00
    });
};


document.addEventListener('DOMContentLoaded', initializeCommon);