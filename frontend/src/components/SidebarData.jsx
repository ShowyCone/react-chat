import React, { useContext, useEffect } from 'react'
import { MyContext } from '../App'
import { useState } from 'react'
import { BiLogOut, BiConversation, BiRename, BiColor, BiMoon, BiSun, BiJoystick } from 'react-icons/bi'

const SidebarData = ({ toggle }) => {
  const [editUsername, setEditUsername] = useState(!toggle)
  const [usernameState, setUsernameState] = useState('')
  const { username, setUsername } = useContext(MyContext)

  const config = `last:w-[calc(100%-2rem)] sidebar last:absolute left-4 bottom-4`
  const configIcon = 'mr-8 text-[1.7rem]'
  const configText = `${toggle ? 'hidden' : ''} text-[1rem] whitespace-pre`
  const [darkmode, setDarkmode] = useState(true)

  const handleTheme = () => {
    setDarkmode(!darkmode)
  }

  const handleOpenChangeUsername = (e) => {
    if (!toggle)
      return setEditUsername(!editUsername)
  }

  const saveDataUsername = () => {
    handleOpenChangeUsername()
    return setUsername(usernameState)
  }

  const handleChangeUsername = (e) => {
    return setUsernameState(e.target.value)
  }

  useEffect(() => {
    if(toggle)
      setEditUsername(!toggle)
  }, [!toggle])

  return (
    <div className="mt-6">
      <div
        className={`${config} ${
          editUsername
            ? 'h-[10rem] transition-all duration-150 delay-200 items-center justify-around bg-zinc-900'
            : 'h-[3.5rem]'
        } flex-col`}
      >
        <div className="flex w-full" onClick={handleOpenChangeUsername}>
          <div className={configIcon}>
            <BiRename />
          </div>
          <div className={configText}>Change username</div>
        </div>

        {editUsername ? (
          <div className="flex flex-col w-full h-[70%] justify-between items-center p-2">
            <input
              type="text"
              value={usernameState}
              onChange={handleChangeUsername}
              className="border border-slate-400 p-2 w-full focus:outline-none rounded-xl bg-transparent text-white focus:bg-zinc-800 h-[50%]"
            />
            <button
              onClick={saveDataUsername}
              className="h-[40%] rounded-xl w-[60%] border border-slate-400 hover:bg-zinc-800"
            >
              Save
            </button>
          </div>
        ) : null}
      </div>

      <div className={config}>
        <div className={configIcon}>
          <BiColor />
        </div>
        <div className={configText}>Change color</div>
      </div>

      <div className={config} onClick={handleTheme}>
        <div className={configIcon}>{darkmode ? <BiSun /> : <BiMoon />}</div>
        <div className={configText}>Toggle Theme</div>
      </div>
      
      <div className={config}>
        <div className={configIcon}>
          <BiJoystick />
        </div>
        <div className={configText}>Games</div>
      </div>

      <div className={config}>
        <div className={configIcon}>
          <BiLogOut />
        </div>
        <div className={configText}>Logout</div>
      </div>


    </div>
  )
}

export default SidebarData
