import { gsap, Power3 } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  let contentRef = useRef(null);
  let backgroundRef = useRef(null);
  let aboutRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(backgroundRef, {
      scrollTrigger: {
        trigger: contentRef,
        toggleActions: "restart none none reset",
      },
      duration: 3,
      ease: Power3.easeOut,
    });

    gsap.from(aboutRef, {
      scrollTrigger: {
        trigger: aboutRef,
        toggleActions: "restart none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: Power3.easeOut,
    });

    gsap.from(contentRef, {
      scrollTrigger: {
        trigger: contentRef,
        toggleActions: "restart none none none",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.5,
      ease: Power3.easeOut,
    });
  });
  return (
    <div
      ref={(el) => (backgroundRef = el)}
      className="text-white relative grid-cols-1 grid md:grid-cols-2 items-center bg-black px-4 py-16 md:px-16 md:py-32 lg:px-40 gap-x-32"
    >
      <section className="">
        <div>
          <video
            src="https://res.cloudinary.com/dllbqpsrp/video/upload/v1659353586/slide_three_lyprdg.mp4"
            muted
            autoPlay
            playsInline
            className="hidden md:block"
            loop
          ></video>
        </div>
      </section>

      <section className="">
        <h3
          className="font-ce text-3xl md:text-6xl mb-6 about text-left"
          ref={(el) => (aboutRef = el)}
        >
          ABOUT US
        </h3>

        <p
          className="text-regular font-regular leading-8 text-left"
          ref={(el) => (contentRef = el)}
        >
          hey, this is Quantum stheskdj dsjdj hey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
          dsjdjhey, this is Quantum stheskdj dsjdjhey, this is Quantum stheskdj
        </p>
      </section>
    </div>
  );
}