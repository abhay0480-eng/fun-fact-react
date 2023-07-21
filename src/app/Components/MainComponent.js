import React from 'react'

function MainComponent() {
  return (
    <div className=' text-white px-10 h-[100%] py-16 bg-[#282D35]'>
        <h1 className='text-4xl font-bold'>Fun facts about React</h1>
        <ul className='py-10 list-disc text-base'>
            <li className='py-2'>Was first released in 2013</li>
            <li className='py-2'>Was originally created by Jordan Walke</li>
            <li className='py-2'>Has well over 100K stars on GitHub</li>
            <li className='py-2'>Is maintained by Facebook</li>
            <li className='py-2'>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
  )
}

export default MainComponent 