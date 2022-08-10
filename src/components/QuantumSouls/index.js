import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Canva from "../../asset/canva.mp4"

gsap.registerPlugin(ScrollTrigger);

export default function QuantumSoul() {
  let contentRef = useRef(null);
  let videoRef = useRef(null);
  let titleRef = useRef(null);
  let textRef = useRef(null);

  const t1 = gsap.timeline();

  useLayoutEffect(() => {
    gsap.from(textRef, {
      scrollTrigger: {
        trigger: textRef,
        toggleActions: "restart none none reset",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.5,
      ease: Power3.easeOut,
    });

    gsap.from(titleRef, {
      scrollTrigger: {
        trigger: titleRef,
        toggleActions: "restart none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: Power3.easeOut,
    });

    gsap.to(contentRef, {
      scrollTrigger: {
        trigger: contentRef,
        toggleActions: "restart none none reset",
        end: "bottom 20%",
      },
      backgroundColor: "#151414",
      color: "white",
      delay: 3,
      duration: 1,
      ease: Power3.easeOut,
    });

    gsap.from(videoRef, {
      scrollTrigger: {
        trigger: contentRef,
        toggleActions: "restart none none reset",
      },
      scale: 1,
      duration: 1,
      delay: 1,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <section
      ref={(el) => (contentRef = el)}
      className="grid overflow-hidden grid-cols-1 gap-y-6 md:grid-cols-2 py-8 px-4 md:px-16 md:py-32 lg:px-40 gap-x-32 items-center bg-[#F5F5F4]"
    >
      <div>
        <p
          className="font-ibm font-bold text-3xl md:text-6xl mb-6 text-left"
          ref={(el) => (titleRef = el)}
        >
          Quantum Souls
        </p>

        <p
          className="font-ibm font-medium leading-8 text-left"
          ref={(el) => (textRef = el)}
        >
          QGNSS is my attempt to recreate Nature, a nature from a different
          timeline, playing with matter and its evolution path. Like you, each
          one is unique. Generated from the nil, they come to life as singular
          beings, made from a fusion of advanced technology and art. This is the
          result of my obsession with the alliance of beauty and machines, an
          aesthetic I have been developing for over 4 years. So far, I've
          created this alone, but now I invite you to play god.
        </p>
      </div>

      <div className="" ref={(el) => (videoRef = el)}>
        <video
          src="https://res.cloudinary.com/dllbqpsrp/video/upload/v1659350983/Untitled_design_kfshga.mp4"
          // src={Canva}
          loop
          muted
          autoPlay
          playsInline
          className=" h-full md:h-[650px] object-cover"
          width="100%"
        ></video>
      </div>
    </section>
  );
}
