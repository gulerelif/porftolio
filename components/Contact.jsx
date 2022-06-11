import Link from 'next/link';
import React, { useState, useRef} from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_vrd5jo2', form.current, 'Tn8Urc7x3l-mYEWJA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Elif Güler</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
               
              </div>
            </div>
          </div>
          </div>
 {/* right */}
<div className='col-span-3 w-full h-auto shadow-gray-400 rounded-xl lg:py-4'>
    <div className='p-4'>
        <form ref={form} onSubmit={sendEmail}>
            <div className='grdi md:grid-cols-2 gap-4 py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' name='user_name'  type="text" />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>EMAIL</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' name='user_email' type="email" />
                </div>
                
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>MESSAGE</label>
                    <textarea name="message" className='border-2 rounded-lg p-3 flex border-gray-300' ></textarea>
                </div>
            </div>
      <button className='w-full p-4 bg-[#5651e5]'>Send Message</button>      
        </form>
    </div>
</div>
</div>
          </div>
          <div className='flex justify-center py-12 '>
          <Link href='/'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <HiOutlineChevronDoubleUp className=' size={30} text-[#5651e5]'/>
        </div>
          </Link>
          </div>
          </div>
  )
}

export default Contact