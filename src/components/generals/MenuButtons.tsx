type MenuButtonProps = {
    open: boolean;
    setOpen: (open: boolean | ((prevState: boolean) => boolean)) => void;
  };
  export const MenuButton = ({ open, setOpen }: MenuButtonProps) => {
    return (
      <div className="ml-auto  ">
        <input id="toggleNav" type="checkBox" className="hidden peer" />
        <label
          htmlFor="toggleNav"
          className="max-sm:flex flex-col gap-1 group relative hidden "
          onClick={() => setOpen(!open)}
        >
          <div
            className={`h-[3px] w-[20px] rounded-md bg-lightGray dark:bg-white transition duration-300 ${open && "absolute"} ${open && "rotate-45"} `}
          ></div>
          <div
            className={`h-[3px] w-[20px] rounded-md bg-lightGray dark:bg-white  ${open && "hidden"} `}
          ></div>
          <div
            className={`h-[3px] w-[20px] rounded-md bg-lightGray dark:bg-white transition duration-300 ${open && "-rotate-45"} `}
          ></div>
        </label>
      </div>
    );
  };