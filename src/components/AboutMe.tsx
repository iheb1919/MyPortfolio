const AboutMe = () => {
  return (
    <div className='py-15 my-20 bg-lightblueWhite dark:bg-darkBlueGray '>
    <div className='container mx-auto max-sm:px-4 '>
         <div className=" mx-auto w-fit text-center rounded-xl bg-lightBlueGray 
         px-5 text-lightGray dark:bg-darkBluichGray dark:text-white py-1  text-md "  >
                      About Me
      </div>
      <div className="py-15 gap-y-15 lg:gap-x-25 flex flex-col items-center md:flex-row">
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
                <h1 className="text-2xl md:text-4xl  font-bold text-black dark:text-white ">
                  Curious about me? Here you have it:
                </h1>
                <p className="text-lightGray mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem assumenda magni inventore facilis, vel laboriosam tenetur voluptates sed deleniti maxime. Odit eum atque excepturi fugiat, delectus a autem ab nam!
                  Laborum temporibus saepe nam in quo aperiam quaerat minima provident nostrum consequuntur autem excepturi vero itaque dolorem, animi ad maiores earum repellendus exercitationem. Unde excepturi inventore animi, voluptatibus quisquam officiis?
                  Vel ipsam ex sapiente eaque perspiciatis nam alias minima libero ratione, voluptatibus deleniti! Sapiente, id repellat placeat itaque aperiam rerum temporibus. Modi error a iusto harum quod voluptatibus facere dolor.
                </p>
              </div>
              
            </div>
          </div>
    </div>
    </div>
  )
}
export default AboutMe