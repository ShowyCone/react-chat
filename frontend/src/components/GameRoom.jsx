import React, {useState} from 'react'
import { FaRegCircle, FaXmark } from 'react-icons/fa6'

const GameRoom = () => {
  const [openGame, setOpenGame] = useState(false)
  const [tictactoe, setTictactoe] = useState('')
  
  let hiddenCards
  const gameCard = `${openGame ? '' : ''} bg-zinc-800`
  const handleOpenGame = (e) => {
    console.log(e)
  }

  const Cell3inARow = ({ typeXO }) => (
    <div className='bg-zinc-800 grid place-items-center'>
      <FaXmark
        className={`${
          typeXO !== null && typeXO === true ? '' : 'hidden'
        } text-zinc-900 w-[20%] h-[20%] absolute`}
      />
      <FaRegCircle
        className={`${
          typeXO !== null && typeXO === false ? '' : 'hidden'
        } text-zinc-900 w-[20%] h-[20%] absolute`}
      />
    </div>
  )

  const HoverCard = () => (
    <div className='w-[37.8%] absolute h-[40.8%] bg-[#00000000] {hover:bg-[#00000020]} bro'></div>
  )

  return (
    <div onClick={handleOpenGame} className='bg-zinc-900 p-6 w-[80%] h-[90%] rounded-2xl grid grid-cols-2 grid-rows-2 m-6 overflow-y-auto border-slate-400 border gap-1'>
      <div className={`${gameCard} rounded-tl-xl grid place-items-center w-full h-full relative`}>
        <div className='grid grid-cols-3 grid-rows-3 w-[60%] h-[80%] gap-[7px] bg-zinc-900'>
          <Cell3inARow typeXO={true} />
          <Cell3inARow typeXO={null} />
          <Cell3inARow typeXO={null} />
          <Cell3inARow typeXO={null} />
          <Cell3inARow typeXO={true} />
          <Cell3inARow typeXO={null} />
          <Cell3inARow typeXO={null} />
          <Cell3inARow typeXO={null} />
          <Cell3inARow typeXO={true} />
        </div>
        <div className='w-full absolute h-full bg-[#00000000] hover:bg-[#00000020] tictactoe-hover flex justify-center items-center cursor-pointer'>
          <span className='transition-font'>Tic</span>
          <span className='transition-font'>Tac</span>
          <span className='transition-font'>Toe</span>
        </div>
      </div>
      <div className={`${gameCard} rounded-tr-xl flex justify-center items-center`}><span className='text-slate-400 text-3xl'>Coming soon...</span></div>
      <div className={`${gameCard} rounded-bl-xl flex justify-center items-center`}><span className='text-slate-400 text-3xl'>Coming soon...</span></div>
      <div className={`${gameCard} rounded-br-xl flex justify-center items-center`}><span className='text-slate-400 text-3xl'>Coming soon...</span></div>
    </div>
  )
}

export default GameRoom
