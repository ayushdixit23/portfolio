import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 w-full'>
            <div>
                <h1 className='text-xl'>{`<Ayush Dixit />`}</h1>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-8 '>
                        <li className='text-[#E6E6E6] hover:text-white cursor-pointer'>Home</li>
                        <li className='text-[#E6E6E6] hover:text-white cursor-pointer'>About</li>
                        <li className='text-[#E6E6E6] hover:text-white cursor-pointer'>Projects</li>
                        <li className='text-[#E6E6E6] hover:text-white cursor-pointer'>Blog</li>
                        <li className='text-[#E6E6E6] hover:text-white cursor-pointer'>Contact</li>
                    </ul>
                </nav>
            </div>
            <div>
                <button className="bg-[#E6E6E6] text-sm font-bold text-black px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 flex items-center gap-x-1">
                    Let's Talk
                    <GoArrowUpRight className='w-5 h-5' />
                </button>
            </div>
        </div>
    )
}

export default Navbar