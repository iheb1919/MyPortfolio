import React from 'react'
import { NextJsIcon } from '../assets/iconsSVG/svgIcons'

const Skills = () => {
    const allSkills = [
        {name:"JavaScript",img:"./JavaScript.png"},
        {name:"TypeScript",img:"./TypeScript.png"},
        {name:"React",img:"./React.png"},
        {name:"Next.js",img:<NextJsIcon className='max-w-[60px] text-lightGrayText delay-[1s] transition-all  group-hover:duration-[2s] group-hover:text-black group-hover:dark:text-white'/>},
        {name:"Node.js",img:"./Node.js.png"},
        {name:"figma",img:"./figma.png"},
        {name:"Git",img:"./Git.png"},
        {name:"MongoDB",img:"./MongoDB.png"},
        {name:"PostgresSQL",img:"./PostgresSQL.png"},
        {name:"Sass",img:"./Sass.png"},
        {name:"Storybook",img:"./Storybook.png"},
        {name:"Tailwind Css",img:"./Tailwind CSS.png"},
    ]
  return (
     <div className='py-15 my-20 bg-resd-500'>
        <div className='container mx-auto max-sm:px-4 dark:bg-pureBlack '>
            <h4 className="mb-5 mx-auto w-fit text-center rounded-xl bg-lightBlueGray 
            px-5 text-lightGray dark:bg-darkBluichGray dark:text-white py-1  text-md "  >
                Skills
        </h4>
        <h6 className="text-center mb-10 text-[#6A727D] dark:text-[#BBBFC6]">The skills, tools and technologies i'am really good at</h6>

            <div className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-5">
                {
                    allSkills.map((skill,i)=>
                    <div key={i} className='flex group cursor-pointer hover:animate-comeIntr animate-comeIntrs transition-all flex-col justify-center items-center text-center dark:text-white font-bolsd'> 
                        {typeof(skill.img) === "string" ?  <img src={skill.img} className='max-w-[50px] grayscale transition-all duration-[2s] grosup-hover:delay-[900ms]  group-hover:grayscale-0' alt={skill.name} />
                            : skill.img
                        }  
                        <h4> {skill.name} </h4>  
                    </div>
                    )
                }
            
            </div>
        </div>
    </div>
  )
}

export default Skills