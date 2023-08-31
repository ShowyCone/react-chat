import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

function Header(props) {
  const sxCustom = {
    color: '#88f',
    '&:hover': {
      backgroundColor: '#33333395',
    },
  }

  const sxCustomIcons = { fontSize: 30, color: '#88f' }

  const handleMenu = (e) => {

  }

  return (
    <header className="h-full flex flex-col w-[80px] items-center border-r-[0.5px] border-slate-400 bg-zinc-900 fixed left-0">
      <IconButton aria-label="menu" sx={sxCustom} >
        <MenuRoundedIcon sx={sxCustomIcons} />
      </IconButton>
      <div className="flex flex-col w-full h-full justify-around items-center">
        <IconButton aria-label="menu" sx={sxCustom}>
          <NotificationsNoneRoundedIcon sx={sxCustomIcons} />
        </IconButton>
        <div className="rounded-full bg-slate-700 cursor-pointer">
          <img
            src={`https://robohash.org/${props.username}?set=set4`}
            alt="profile-picture"
            className="h-10"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
