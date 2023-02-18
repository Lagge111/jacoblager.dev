import { Github, LinkedIn, Email } from "../components/Icons";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex justify-center items-center content-center m-auto max-w-[900px] flex-col js-show-on-scroll"
    >
      <div className="flex justify-center pt-80 flex-col items-center">
        <div className="flex flex-col gap-4 items-center">
          <p className="font-mono text-secondary text-md">03. What's Next?</p>
          <p className="text-primary_text font-inter font-bold text-4xl">
            Get In Touch
          </p>
        </div>
        <div className="relative flex py-8 items-center w-[250px] max-w-[250px]">
          <div className="flex-grow border-t border-secondary_text/30"></div>
        </div>
      </div>
      <div>
        <p className="font-inter text-secondary_text max-w-lg text-center">
          Got a question, an idea, or do you just want to say hi?
          <br />
          <span className="text-secondary">I'm all ears!</span>
        </p>
      </div>
      <div className="mt-4">
        <div className="flex flex-row gap-6 mt-6 items-center justify-center">
          <a
            title="Github"
            href="https://github.com/Lagge111"
            target="_blank"
            rel="noreferrer"
            className="top-0 hover:top-[-3px] relative ease-in-out duration-200"
          >
            <Github strokeColor="secondary_text" width="28" height="28" />
          </a>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/jacob-lager-98511b151/"
            target="_blank"
            rel="noreferrer"
            className="top-0 hover:top-[-3px] relative ease-in-out duration-200"
          >
            <LinkedIn strokeColor="secondary_text" width="30" height="30" />
          </a>
          <a
            title="Email"
            href="mailto:jacoblager99@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="top-0 hover:top-[-3px] relative ease-in-out duration-200"
          >
            <Email strokeColor="secondary_text" width="32" height="32" />
          </a>
        </div>
      </div>
      <a
        href="/static/CV-JacobLager.pdf"
        target="_blank"
        rel="noreferrer"
        className=" mt-10 font-mono border rounded border-secondary text-secondary px-4 py-2 text-sm hover:bg-secondary/20 ease-in-out duration-300 no-underline flex sm:hidden"
      >
        Resume
      </a>
    </div>
  );
};

export default Contact;
