import React, {useState,useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail,AiOutlineCloseCircle} from "react-icons/ai";
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbarr = () => {
    const [nav,setNav]=useState(false)
    const [shadow,setShadow]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
    useEffect(()=>{
        console.log("use");
        const handleShadow=()=>{
            if(window.scrollY>=90){
                setShadow(true)
            }
            else{
                setShadow(false)
            }
        };
        window.addEventListener('scroll',handleShadow)
    })
  return (
    <div className={shadow? 'fixed w-full h-20 shadow-xl z-[100]':'fixed w-full h-20  z-[100]'}>
        <div className='flex  justify-between items-center w-full h-full px-2 2xl:px-16'>
            <h2 className='text-[#5651e5]'>ELİF GÜLER</h2>
            <div>
                <ul className='hidden md:flex'>
                    <Link href="#home">
                         <li className='ml-10 uppercase text-sm hover:border-b'>Home</li>
                    </Link>

                
                    <Link href="#skills">
                        <li className='ml-10 uppercase text-sm hover:border-b'>Skills</li>
                    </Link>
                    
                    <Link href="#project">
                         <li className='ml-10 uppercase text-sm hover:border-b'>Project</li>
                    </Link>
                    
                    <Link href="#contact">
                        <li className='ml-10 uppercase text-sm hover:border-b'>Contact</li>
                    </Link>
                </ul>
               <div onClick={handleNav} className='md:hidden'>
                   <AiOutlineMenu className='size={25}'></AiOutlineMenu>
               </div>
                </div>
        </div>
        <div className={nav? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70':''} >
            <div className={nav?
            'fixed top-0 left-0 w-[75%] sm-[45%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500':
            'fixed top-0 left-[-100%] p-10 ease-in duration-500'}>
                <div className='flex justify-between items-center w-full'>
                <h2 className='text-[#5651e5]'>Elif Güler</h2>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer'>
                <AiOutlineClose></AiOutlineClose>
                </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
                </div>
                <div className='py-4  flex flex-col'>
                    
                <ul className='uppercase'>
                    <Link href='#home'><li className='py-4 text-sm hover:border-b'>Home</li></Link>
                    <Link href='#about'><li className='py-4 text-sm hover:border-b'>About</li></Link>
                    <Link href='#skills'><li className='py-4 text-sm hover:border-b'>Skills</li></Link>
                    <Link href='#projects'><li className='py-4 text-sm hover:border-b'>Projects</li></Link>
                    <Link href='#contact'><li className='py-4 text-sm hover:border-b'>Contact</li></Link>
                </ul>
 
                </div>
                <div className='pt-40'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
                </div>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-95 ease-in duration-100 '>
                <FaLinkedinIn  />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-95 ease-in duration-100 '>
                <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-95 ease-in duration-100 '>
                <AiOutlineMail  />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-95 ease-in duration-100 '>
                <BsFillPersonLinesFill  />
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbarr