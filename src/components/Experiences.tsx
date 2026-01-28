
const Experiences = () => {
  return (
    <div className='py-15 my-20  bg-lightblueWhite dark:bg-darkBlueGray'>
        <div className='container mx-auto max-sm:px-4 dark:bg-puresBlack '>
            <h4 className="mb-5 mx-auto w-fit text-center rounded-xl bg-lightBlueGray 
            px-5 text-[#6A727D] dark:bg-darkBluichGray dark:text-[#BBBFC6] py-1  text-md "  >
                        Experience
        </h4>
        <h6 className="text-center mb-10 text-[#6A727D] dark:text-[#BBBFC6]">Here is a quick summary of my most experiences</h6>
            <div className="flex flex-col gap-y-5 px-5">
               {
                Array(5).fill(null).map((_,i)=>
                <div key={i} className="bg-white dark:bg-bgBox flex flex-col  lg:flex-row transition-all duration-500 
               gap-x-20 gap-y-5 rounded-lg text-lightGray dark:text-lightGrayText 
               shadow-[0px_0px_15px_1px_rgba(0,0,0,0.14)]
               p-7">
                    <h3 className="text-2xl font-bold uppercase text-emerald-600">Upwork</h3>
                    <h4 className="lg:order-last shrink-0">Nov 2021 - Present</h4>
                   <div className="flex flex-col gap-4">
                     <h4 className="font-bold text-xl text-black dark:text-white">FrontendDeveloper</h4>

                    <ol className="list-disc px-4">
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita molestias esse in eum sit similique quis, amet laboriosam eligendi .</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita molestias esse in eum sit similique quis, amet laboriosam eligendi .</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita molestias esse in eum sit similique quis, amet laboriosam eligendi .</li>
                    </ol>
                   </div>

               </div>)
               }
            
            </div>
        </div>
    </div>
  )
}

export default Experiences