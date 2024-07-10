import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Container from "../Container";

const About = () => {
  const [revealIntroduction, setRevealIntroduction] = useState(false);

  const handleReadMore = () => setRevealIntroduction(!revealIntroduction);

  return (
    <Container bg="secondary">
      <div className=" flex flex-col space-y-4 items-center">
        <div>
          <h1 className="font-bold text-6xl">
            Flavio <br /> Gomes{" "}
            <span className="text-secondary-text-color">.</span>
          </h1>
          <div className=" border-b-2 border-secondary-text-color w-10 mt-5"></div>
        </div>
        <ul className="flex gap-2">
          <li>
            <a href="https://www.linkedin.com/in/flaviogp/">Linkedin |</a>
          </li>
          <li>
            <a href="https://github.com/flaviogp">GitHub</a>
          </li>
        </ul>
        <button className="uppercase font-semibold text-secondary-text-color border-2 py-2 px-4">
          Contact me
        </button>
      </div>
      <div className=" flex flex-col space-y-4  items-center text-center">
        <p className="text-secondary-text-color font-semibold uppercase text-sm">
          Introdução
        </p>
        <h2 className="font-bold text-2xl">Web Developer</h2>
        <div className="flex flex-col">
          <p
            className={` overflow-hidden transition-height ${
              revealIntroduction ? "h-max" : "h-[100px]"
            }`}
          >
            Olá me chamo Flavio Gomes, ... Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Reprehenderit aliquid modi dolorum
            voluptate, inventore nostrum quia ratione id numquam, dolor, officia
            consectetur corrupti placeat dolore officiis illo eos deserunt
            aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sed dicta dolores, quas sunt ipsa cumque pariatur facilis!
            Laudantium et quod deserunt dolorem voluptas, ea molestiae quis
            maiores excepturi nisi fuga!
          </p>
          {!revealIntroduction ? (
            <button
              className="flex items-center gap-2 font-semibold text-secondary-text-color hover:underline"
              onClick={handleReadMore}
            >
              Ler mais
              <FaArrowDown size={12} />
            </button>
          ) : (
            <button
              className="flex items-center gap-2 font-semibold text-secondary-text-color hover:underline"
              onClick={handleReadMore}
            >
              Ler menos
              <FaArrowUp size={12} />
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default About;
