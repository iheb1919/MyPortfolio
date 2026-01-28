import { MoonOutline, SunOutline } from "../../assets/iconsSVG/svgIcons";
import useThemeMode from "../../hooks/useThemeMode";
type HomeNAvigationListProps = {
  open: boolean;
};
export const HomeNavigationList = ({ open }: HomeNAvigationListProps) => {
  const navLists = ["Home", "About", "Resume", "Contact"];
  const {mode,toggleMode} = useThemeMode();
  return (
    <ul
      className={`navbar  flex gap-5 ml-auto w-fit  z-50 text-white overflow-hidden transition-none
       ${
          open ? " openNav ":""
        }
    `
  }
    >
      {navLists.map((list: string, i: number) => {
        return (
          <li
            key={i}
            className="sub max-sm:w-full flex items-center cursor-pointer rounded-md relative  text-md px-2 py-1">
            <a href={`#${list}`} 
            className="block after:[''] w-full 
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:w-0
                    after:h-[6px]
                    after:bg-[#009ffd]
                    after:transition-all
                    hover:after:w-full  
                    max-sm:after:hidden
                    bg-transparent
                    max-sm:hover:bg-white/50
                    
                    text-black dark:text-white 
                    "
            >{list} </a>
          </li>
        );
      })}
      <li className="sub max-sm:w-full flex items-center cursor-pointer rounded-md relative  text-md px-2 py-1  ">
      <button className=" text-left
                   block after:['']
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:w-0
                    after:h-[6px]
                    after:bg-[#009ffd]
                    after:transition-all
                    hover:after:w-full  
                    max-sm:after:hidden
                    bg-transparent
                    max-sm:hover:bg-white/50
                    w-full " onClick={toggleMode} >
                      {mode === "light" ? <MoonOutline className="text-black dark:text-white"/> : <SunOutline className="text-black dark:text-white"/>  }
                       </button>
      </li>
      <li className="sub max-sm:w-full  cursor-pointer rounded-md relative  text-md px-2 py-1  ">
      <button className=" text-left w-full rounded-xl bg-black text-white dark:bg-white dark:text-black py-1 px-3 text-md "  >
                      Download CV
      </button>
      </li>
    </ul>
  );
};
