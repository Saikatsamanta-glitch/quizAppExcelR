import React from 'react'

export default function Navbar() {
  return (
    <nav className='border h-14 flex items-center px-14'>
        <img src='https://150226542.v2.pressablecdn.com/wp-content/uploads/2023/07/Quiz-AI-Logo.jpg' alt='brand' className='h-full' />
        <button className='rounded px-2 py-1 border shadow-md h-[70%] ms-auto'> Create Quiz </button>
        <div className='user_icon h-12 w-12 bg-yellow-100 ms-10 rounded-full cursor-pointer'>
            <img src='https://images.vexels.com/media/users/3/289095/isolated/preview/d8005cde4e990cde15819262ed5fa36b-cat-artistic-character.png' alt='user' className='h-full w-full'/>
        </div>
    </nav>
  )
}
