import { useState } from 'react'
import { HomeNavigationList } from '../generals/HomeNavigationList'
import { MenuButton } from '../generals/MenuButtons'
const HeaderNav = () => {
    const [open, setOpen] = useState(false);
    
  return (
        <header id="Header" className="w-screen   z-40">
        {/* <LeaveModal open={open} setOpen={setOpen} /> */}
        <div className='relative z-[1000] bg-bgNav '>
      <div
        className={`${open && "translate-y-[-0%]"}  max-sm:px-10
     peer-checked/test:bg-red-500 transition-all duration-[1s]
     text-black  relative  w-full   p-2 h-[4rem] flex items-center container mx-auto`}>
      <h1 className='font-extrabold text-textLogo ' > {`<IHEB/>`} </h1>
        <MenuButton open={open} setOpen={setOpen} />
        <HomeNavigationList open={open}/>
      </div>
      </div>
      </header>
  )
}

export default HeaderNav
