import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { Observer } from "gsap/dist/Observer";

gsap.registerPlugin(ScrollTrigger);

// Animation for title hero

window.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector("[animate]");
  const split = new SplitType(element, {
    types: "chars",
    tagName: "span",
  });

  // Crear animación GSAP con ScrollTrigger
  gsap.fromTo(
    element.querySelectorAll(".char"),
    {
      y: "100%",
      opacity: 1,
    },
    {
      y: "0%",
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.10,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play reverse play reverse",
        // markers: true, // actívalo para ver visualmente los triggers
      },
    }
  );
});