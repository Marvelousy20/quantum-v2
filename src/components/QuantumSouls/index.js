import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Canva from "../../asset/canva.mp4";

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
        end: "bottom 5%",
      },
      backgroundColor: "#F5F5F4",
      color: "black",
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
      className="grid overflow-hidden grid-cols-1 gap-y-6 md:grid-cols-3 py-8 px-4 md:px-16 md:py-32 lg:px-24 gap-x-16 items-center text-white bg-[#151414]"
    >
      <div className="col-span-1">
        <p
          className="font-ibm font-bold text-3xl md:text-5xl mb-6 text-start"
          ref={(el) => (titleRef = el)}
        >
          Quantum Souls
        </p>

        <p
          className="font-ibm font-medium leading-8 text-start max-w-[400px]"
          ref={(el) => (textRef = el)}
        >
          Quantum Souls is a generative collection on geometrical nodes containg
          5550 pieces of digital animated souls stored on Ethereum Blockchain of
          where each soul is unique and exclusive The goal is to generate
          singular souls which instigate the imagination of the one who observes
          them. Each person will have a different perception of each piece,
          bringing up the imagination in its purest form. Using your own
          perspectives and experiences, the beauty is to discover them and get
          lost in ideas and thoughts, watching the countless possibilities of
          what each one can mean to you.  
        </p>
      </div>

      <div className="col-span-2" ref={(el) => (videoRef = el)}>
        <video
          src="https://res.cloudinary.com/dllbqpsrp/video/upload/v1659350983/Untitled_design_kfshga.mp4"
          // src={Canva}
          loop
          muted
          autoPlay
          playsInline
          className=" h-full md:h-[700px] object-cover"
          width="100%"
        ></video>
      </div>
    </section>
  );
}
