import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll(true);

gsap.to("#informations", {
  scrollTrigger: {
    trigger: "#informations",
    start: "top center",
    end: "bottom center",
    // markers: true,
    scrub: 2,
  },
  y: 200,
  opacity: 1,
});

gsap.to("#details", {
  scrollTrigger: {
    trigger: "#details",
    start: "top center",
    end: "bottom center",
    // markers: true,
    scrub: 2,
  },
  y: 120,
  opacity: 1,
});
gsap.to("#fourthSection", {
  scrollTrigger: {
    trigger: "#fourthSection",
    start: "top center",
    end: "bottom center",
    // markers: true,
    scrub: 2,
  },
  y: 120,
  opacity: 1,
});

gsap.to("#fivethSection", {
  scrollTrigger: {
    trigger: "#fivethSection",
    start: "top center",
    end: "bottom center",
    // markers: true,
    scrub: 2,
  },
  y: 50,
  opacity: 1,
});

gsap.to("#contact", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "bottom center",
    // markers: true,
    scrub: 2,
  },
  y: 50,
  opacity: 1,
});
