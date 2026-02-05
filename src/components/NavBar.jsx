import React, { useState } from 'react'
import {Menu } from "lucide-react";
import { X } from "lucide-react";
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className="">
        <header className=''>
            <nav className='fixed w-full z-10 py-2'>
                <div className='w-11/12 container py-2 mx-auto flex justify-between items-center'>
                  <Link to='/#'><img src="/images/logo.png" className="w-50" alt=""/></Link>
                    <div className='hidden lg:flex gap-16 items-center mt-5'>
                      <div className='flex flex-col'>
                        <Link to="/" className='text-white hover:text-gray-200 hover:cursor-pointer'>HOME</Link>
                        <Link to="/about" className='text-white hover:text-gray-200 hover:cursor-pointer'>ABOUT</Link>
                        <Link to="/blog" className='text-white hover:text-gray-200 hover:cursor-pointer'>NEWS</Link>
                      </div>
                      <div className='flex flex-col mb-6'>
                        <Link to="/contact" className='text-white hover:text-gray-200 hover:cursor-pointer'>CONTACT</Link>
                        <Link to="" className='text-white hover:text-gray-200 hover:cursor-pointer'>404</Link>
                      </div>
                    </div>
                    <div className="hidden lg:flex justify-center items-center gap-12">
                      <div className='space-x-4'>
                        <a href="" className='text-white hover:text-gray-200 hover:cursor-pointer'>IG</a>
                        <a href="" className='text-white hover:text-gray-200 hover:cursor-pointer'>X</a>
                        <a href="" className='text-white hover:text-gray-200 hover:cursor-pointer'>IN</a>
                      </div>
                        <Link to="/contact"><button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-4xl hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>GET A QUOTE</button></Link> 
                    </div>
                    
                    <button onClick={()=> setIsOpen(!isOpen)} className="lg:hidden hover:cursor-pointer ">
                        {isOpen? <X color='#ffffff'/> : <Menu color="#ffffff"/>}
                        
                    </button>
                </div>
                
                
                {isOpen && (
                <div className="lg:hidden bg-black m-2 text-start px-8 font-bold py-6 rounded-2xl mt-4 md:py-12">
                    <Link to="/" className='block mb-2 text-white hover:text-gray-200 hover:cursor-pointer md:mb-4'>HOME</Link>
                    <Link to="/about" className='block mb-2 text-white hover:text-gray-200 hover:cursor-pointer md:mb-4'>ABOUT</Link>
                    <Link to="/blog" className='block mb-2 text-white hover:text-gray-200 hover:cursor-pointer md:mb-4'>NEWS</Link>
                    <Link to="/contact" className='block mb-2 text-white hover:text-gray-200 hover:cursor-pointer md:mb-4'>CONTACT</Link>
                    <Link to="#" className='block mb-2 text-white hover:text-gray-200 hover:cursor-pointer md:mb-4'>404</Link>
                </div>
                )}
            </nav>
            
        </header>
    </section>
  )
}
