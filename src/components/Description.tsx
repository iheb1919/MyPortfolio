import {
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
} from "../assets/iconsSVG/svgIcons";

const Description = () => {
  return (
    <div className=" pt-20 pb-10 ">
      <div className=" container mx-auto max-sm:px-4  ">
    <div className=" gap-y-15 lg:gap-x-15 flex flex-col items-center md:flex-row-reverse">
      <div className="relative w-fit px-10  shrink-0">
        <div
          className="md:hidden absolute top-6 bottosm-0 left-3 right-3 w-fsull h-full border-15
                 border-[rgba(230,232,235,1)] dark:border-[rgba(55,65,80,1)] border-t-0 
                 px-2"
        ></div>
        <img
          src="./mypic.jpeg"
          className="dark:md:shadow-[22px_24px_0px_5px_rgba(55,65,80,1)] md:shadow-[22px_24px_0px_5px_rgba(230,232,235,1)]"
          width={350}
          height={200}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5 text-textgray ">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white ">
            Hi, I'm Iheb
          </h1>
          <p className="text-lightGray ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui
            tenetur tempore harum quisquam dolore at ducimus alias molestiae
            velit aspernatur cumque, dolores temporibus est, dolor magnam amet
            minima doloremque!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-8 items-center mt-5">
            <div className="-ml-1 w-5">
              <LocationIcon className="text-2xl" />
            </div>
            Tunisia, Tunis
          </div>
          <div className="flex gap-8 items-center">
            <div className="rounded-full w-4 h-4 bg-emerald-500"></div> Tunisia,
            Tunis
          </div>
        </div>
        <div className="flex gap-5 items-center ">
          <GithubIcon className="dark:text-white text-lightGray hover:text-black  cursor-pointer" />
          <LinkedInIcon className="dark:text-white text-lightGray  hover:text-blue-500 cursor-pointer" />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Description;
