import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='!bg-[#21222A] text-white flex justify-between items-center py-5 px-10'>
         <Image
            src="/reactjs-icon.png"
            width={50}
            height={50}
            alt="Picture of the author"
            />
            <p>React Course - Project 1</p>
    </div>
  )
}

export default Header