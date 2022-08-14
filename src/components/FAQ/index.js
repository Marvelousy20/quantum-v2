import { Disclosure } from "@headlessui/react";
import { IoMdArrowDropup } from "react-icons/io";

const questions = [
  {
    question: "WHAT SETS THIS PROJECT APART FROM OTHERS?",
    answer:
      "QNTM NFT’s is a result of one year of research and development, making it true geometrical nodes generative art. Each QNTM NFT’s is truly unique, having been curated over six months and containing 11940 animated unique art pieces of QNTM SOULS and QNTM BEINGS  stored on ERC-721 containing a unique reflection of Evolutional Beings living in the future. Being a holder of a QNTM NFT, you get access to Quantum eco-system, token airdrops, QNTM app where will be located the most rare NFT’s, and much more upcoming benefits.",
  },

  {
    question: "HOW LONG DOES IT TAKE FOR THE SOUL TO REVEAL?",
    answer:
      "Once a QNTM SOUL has been minted, the reveal of collection will go live within 48 hours on Opensea.",
  },
  {
    question: "IS THERE A DISCORD?",
    answer: `The Quantum Network is opened with love and peace for everyone here ${(
      <p className="text-green">hello</p>
    )}!`,
  },
  {
    question: "WHERE I CAN SEE QNTM UPDATES?",
    answer: `Follow our official QNTM twitter account to get informed on all announcements that will be made there. Be careful of scammers and always check if you are on the official twitter , discord or website.`,
  },
  {
    question: "WHO ARE WE?",
    answer:
      "We are a worldwide community fullfilled in love with the whole planet working in team spaces with like-minded people, and helping the world to discover the ONE vision so together we could transecnd into a dimension throw the evolution within ourselves",
  },
];

export default function FAQ() {
  return (
    <div className="text-white bg-[#151414] px-4 md:px-16 md:py-32 lg:px-24 py-8">
      <h1 className="text-2xl md:text-6xl font-extrabold flex justify-center font-ibm">
        FREQUENTLY ASKED QUESTIONS
      </h1>

      <div className="w-full mt-6 md:mt-10">
        {questions.map((question, i) => (
          <Disclosure key="i">
            {({ open }) => (
              <div className="border-b mb-4">
                <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-lg md:text-3xl font-ibm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{question.question}</span>
                  <IoMdArrowDropup
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="pt-4 pb-2 text-base md:text-lg text-gray-300">
                  {question.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
