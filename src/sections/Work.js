const Work = () => {
  return (
    <div className="flex justify-center items-center content-center m-auto max-w-[900px]">
      <div className="flex justify-left pt-80 flex-col">
        <div className="flex flex-row gap-2 items-center">
          <p className="font-mono text-secondary text-xl">02.</p>
          <p className="text-primary_text font-inter font-bold text-2xl">
            Some Things I've Built
          </p>
          <div className="relative flex py-5 items-center pl-2 w-[250px] max-w-[250px]">
            <div className="flex-grow border-t border-secondary_text"></div>
          </div>
        </div>
        <div className="mt-10">
          <ul>
            <li>
              {/* Cover photo div */}
              <div>
                <a href="add link to catch me if you can project">
                  <div>
                    <img src="" alt="" />
                  </div>
                </a>
              </div>
              {/* Description div */}
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
