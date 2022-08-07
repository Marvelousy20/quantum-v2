// import Image from 'next/image'
import qntmlogo from "../../asset/qntmlogo.png";
import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative pt-4">
      <div className="relative flex items-center justify-between px-4 md:px-16">
        <div className="hidden md:block">
          <img src={qntmlogo} alt="logo" width="200px" height="70px" />
        </div>

        <div className="md:hidden block">
          <img src={qntmlogo} alt="logo" width="150px" height="70px" />
        </div>

        <div className="flex gap-x-5 items-center">
          <a href="https://twitter.com/qntmverse">
            <FaTwitter size={24} color = "fff" />
          </a>
          <a href="https://discord.gg/gnvjQy4p">
            <SiDiscord size={24} color = "fff" />
          </a>
          <button className="bg-blue-500 px-4 py-2 md:px-6 md:py-3 text-white text-base md:text-lg">
            Connect Wallet
          </button>
        </div>
      </div>

      <div className="h-screen">
        <video
          src="https://res.cloudinary.com/dllbqpsrp/video/upload/v1659346907/Wide_16_9_3840x2160_amq-13_r9htuu.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="h-full w-full object-cover absolute top-0 -z-10"
        ></video>
      </div>
    </section>
  );
}
