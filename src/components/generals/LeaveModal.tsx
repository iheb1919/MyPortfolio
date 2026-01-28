type LeaveModalProps = {
    open: boolean;
    setOpen: (open: boolean | ((prevState: boolean) => boolean)) => void;
  };
  export const LeaveModal = ({ open, setOpen }: LeaveModalProps) => {
    return (
      <div
        onClick={() => setOpen(!open)}
        className={`h-screen fixed max-sm:block
      bg-gray-800 opacity-[.8] z-[10] transition-all duration-[1s] ${
        open ? "w-screen" : "w-0"
      } hidden`}
      ></div>
    );
  };
  