import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
const Main = () => {
  
  return (
    
    <div id='home' className='w-full h-screen text-center'>
    
    
    
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
  
        <div>
         
          <h1 className='py-4 text-gray-700'>
            
          <img  className='rounded-full h-52 w-52 ml-[40%]' src="https://avatars.githubusercontent.com/u/45162726?v=4" alt=""/>
            Hi, I'm <span className='text-[#5651e5]'> Elif</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
         
      
    
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
          I'm a passionate computer engineering student and a front-end developer who is mostly
            developing with Angular & React.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/elif-g%C3%BCler-80b763238/'
              target='_blank'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/gulerelif' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Main;