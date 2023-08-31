import React, { useContext } from 'react'
import { useState } from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import SidebarData from './SidebarData'
import UserProfile from './UserProfile'

const Sidebar = ({ username }) => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className={`${toggle ? 'w-[5.8rem]' : ''} sidebar-container`}>
      <UserProfile toggle={toggle} username={username} />
      <SidebarData toggle={toggle} username={username} />
      <div
        className="absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-zinc-900 rounded-full cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <BiChevronLeft
          className={`${
            toggle ? 'rotate-180' : ''
          } transition-all duration-500 text-3xl`}
        />
      </div>
    </div>
  )
}

export default Sidebar
