const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }, "-=1");
tl.fromTo(".big-text-support", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }, "-=1");
tl.fromTo(".nav-links", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }, "-=1");
tl.fromTo("#logo", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 }, "-=1");
tl.fromTo(".nav-links", { opacity: 0, y: "50" }, { opacity: 1, y: "0", duration: 1 }, "-=1");

const menuBtn = document.querySelector('.menu-icon');
const navBg = document.querySelector('.nav-bg');
const navLinks = document.querySelector('.nav-links');
const menuClosebtn = document.querySelector('.menu-close-icon');
const footer = document.querySelector('.footer')

menuBtn.onclick = function showMenu() {
    console.log('hello');
    navLinks.style.width = "3rem";
    navBg.style.width = "3rem";
    menuBtn.style.display = "none";
    menuClosebtn.style.display = "block";
    footer.style.marginLeft = "3rem";
}

menuClosebtn.onclick = function hideMenu() {
    navLinks.style.width = "0rem";
    navBg.style.width = "0rem";
    menuBtn.style.display = "block";
    menuClosebtn.style.display = "none";
    footer.style.marginLeft = "0rem";
}
