
const Works = () => {
  return (
   <div className='py-15 my-20  '>
        <div className='container mx-auto max-sm:px-4 dark:bg-puresBlack '>
            <h4 className="mb-5 mx-auto w-fit text-center rounded-xl bg-lightBlueGray 
            px-5 text-lightGray dark:bg-darkBluichGray dark:text-white py-1  text-md "  >
                        works
        </h4>
        <h6 className="text-center mb-10 text-[#6A727D] dark:text-[#BBBFC6]">Some of the noteworthy projects i have built.</h6>

            <div className="flex flex-col gap-y-5 px-5">
              {
                Array(2).fill(null).map((_,i)=>
                <div
  key={i}
  className="relative group rounded-lg  px-5 overflow-hidden shadow-[1px_2px_15px_1px_rgba(0,0,0,0.14)]
   bg-white dark:bg-bgBox flex items-center "
>
  {/* Image */}
  <img
    src="/image.png"
    alt="Git Logo"
    className="w-1/2  max-sw-[400px] object-cover msl-[35%] my-5 translate-x-1/2 transition-transform duration-500 
    ease-in-out group-hover:translate-x-0"
  />

  {/* Text Section */}
  <div
    className="absolute pl-5 right-0 top-5 bottom-5  w-0 opacity-0 overflow-hidden transition-all duration-700 ease-in-out 
               group-hover:w-1/2 group-hover:opacity-100  flex flex-col gap-y-5 text-lightGray dark:text-lightGrayText
                bg-white dark:bg-bgBox"
  >
    <h3 className="text-2xl font-bold uppercase text-emerald-600">Title</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo
      doloribus fugit culpa blanditiis eum dolorem quia sit, assumenda explicabo
      minus officiis voluptatibus unde ab corporis, suscipit commodi porro
      praesentium.
    </p>

    <div className="flex flex-wrap gap-2">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className="w-fit rounded-xl bg-lightBlueGray px-5 py-1 text-md text-lightGray dark:bg-darkBluichGray dark:text-white"
          >
            React
          </span>
        ))}
    </div>
  </div>
</div>

                )
              }
            </div>
        </div>
    </div>
  )
}

export default Works






   /*              <div
  key={i}
  className="relative group rounded-lg  px-5 overflow-hidden shadow-[1px_2px_15px_1px_rgba(0,0,0,0.14)]
   bg-white dark:bg-bgBox flex items-center "
>

  <img
    src="/image.png"
    alt="Git Logo"
    className="w-1/2  max-sw-[400px] object-cover msl-[35%] my-5 translate-x-1/2 transition-transform duration-500 
    ease-in-out group-hover:translate-x-0"
  />

 
  <div
    className="absolute pl-5 right-0 top-5 bottom-5  w-0 opacity-0 overflow-hidden transition-all duration-700 ease-in-out 
               group-hover:w-1/2 group-hover:opacity-100  flex flex-col gap-y-5 text-lightGray dark:text-lightGrayText
                bg-white dark:bg-bgBox"
  >
    <h3 className="text-2xl font-bold uppercase text-emerald-600">Title</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo
      doloribus fugit culpa blanditiis eum dolorem quia sit, assumenda explicabo
      minus officiis voluptatibus unde ab corporis, suscipit commodi porro
      praesentium.
    </p>

    <div className="flex flex-wrap gap-2">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            className="w-fit rounded-xl bg-lightBlueGray px-5 py-1 text-md text-lightGray dark:bg-darkBluichGray dark:text-white"
          >
            React
          </span>
        ))}
    </div>
  </div>
</div>
 */