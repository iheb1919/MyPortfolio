import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BaselineStar, PhoneCallSpeaker } from '../assets/iconsSVG/svgIcons';

const Testimonials = () => {
  const testimonialsAvis = [
    {
      stars: 5,
      footer: {
        position: "Product Manager",
        name: "Dan Martin",
        img: '/team/1.png',
        text: "Working with Iheb was a fantastic experience! He delivered high-quality code on time and exceeded our expectations with his attention to detail."
      }
    },
    {
      stars: 5,
      footer: {
        position: "Designer",
        name: "Olivia Brown",
        img: '/team/4.png',
        text: "Iheb transformed our vision into a fully functional product. His skills in React and frontend architecture are top-notch."
      }
    },
    {
      stars: 4,
      footer: {
        position: "Developer",
        name: "Emily Martin",
        img: '/team/6.png',
        text: "Iheb is very collaborative and communicative. He helped us refactor our codebase and improve performance significantly."
      }
    },
    {
      stars: 4,
      footer: {
        position: "CEO",
        name: "Robert Frank",
        img: '/team/3.png',
        text: "Professional, efficient, and highly skilled. Iheb was a key part of our product launch."
      }
    },
    {
      stars: 5,
      footer: {
        position: "CTO",
        name: "Jessica McCury",
        img: '/carRent%20images/team/2.png',
        text: "His work ethic is unmatched. He built a scalable, well-structured application that our team now relies on daily."
      }
    },
    {
      stars: 5,
      footer: {
        position: "Team Lead",
        name: "Evelyn Elena",
        img: '/carRent%20images/team/5.png',
        text: "Iheb’s expertise with modern frontend tools like React and TailwindCSS helped us deliver a beautiful UI in record time."
      }
    },
  ];

  const settings = {
    customPaging: function () {
      return <div className="caroucelDot"></div>;
    },
    dots: true,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='py-15 my-20'>
      <div className='container mx-auto max-sm:px-4 dark:bg-puresBlack'>
        
        {/* Section Title */}
        <h4 className="mb-10 mx-auto w-fit text-center rounded-xl bg-lightBlueGray 
            px-5 text-lightGray dark:bg-darkBluichGray dark:text-white py-1 text-md">
          Testimonials
        </h4>

        <div className='container mx-auto grid grid-cols-1 gap-y-15 md:grid-cols-2 relative'>

          {/* Left Side Info */}
          <div className="flex flex-col text-white">
            <h3 className='text-white font-semibold text-2xl mb-8'>
              What My Clients Say
            </h3>
            <p className='text-textgray dark:text-lightGray mb-6'>
              Here are some kind words from the amazing people and teams I’ve worked with.
            </p>

            <div className=" text-textgray dark:text-lightGray flex w-fit ml-4 justify-center items-center text-[16px] gap-2">
              <div className="flex justify-center items-center rounded-full w-12 h-12">
                <PhoneCallSpeaker className="w-full h-full " />
              </div>
              <div className="flex flex-col">
                <span className="">For inquiries</span>
                <span className=" font-semibold">+216 29 394 433</span>
              </div>
            </div>
            {/* <span className="mt-2 text-gray-300">Call me, it's toll-free</span> */}
          </div>

          {/* Testimonials Slider */}
          <div className='ml-auto w-full md:w-[80%]'>
            <div className='bg-white flex flex-col gap-5 p-[60px_45px_45px_45px] md:-mb-10 rounded-lg shadow-lg'>
              <div className='flex flex-col gap-4 mb-5'>
                <h1 className="text-[#0f2454] text-3xl font-bold">People's Reviews</h1>
              </div>

              <Slider {...settings}>
                {testimonialsAvis.map((testimonial, i) => (
                  <div key={i} className='!flex flex-col gap-9 p-5'>
                    <p className='text-gray-700 italic'>
                      "{testimonial.footer.text}"
                    </p>
                    <div className="flex gap-4">
                      <div className='w-[65px] h-[65px] overflow-hidden rounded-full'>
                        <img src={"./defaultUserImage.png"} alt={testimonial.footer.name} />
                      </div>
                      <div className='flex flex-col'>
                        <div className='flex'>
                          {Array(5).fill(null).map((_, index) => (
                            <BaselineStar
                              key={index}
                              className={`${testimonial.stars > index ? "text-orange-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className='m-0 text-black font-semibold'>
                          {testimonial.footer.name}
                        </p>
                        <span className='text-gray-500 text-sm'>
                          {testimonial.footer.position}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
