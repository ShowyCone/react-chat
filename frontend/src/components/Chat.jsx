import { BiSend } from 'react-icons/bi'

const Chat = ({ message, messages, socketID, username, handleSubmit, setMessage }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 p-6 w-[100vw] h-[100vh] lg:w-[80%] lg:h-[90%] lg:rounded-2xl flex flex-col lg:m-6 overflow-y-auto border-slate-400 border justify-between"
    >
      <ul className="h-[90%] flex flex-col p-2 mb-3 overflow-y-auto">
        {messages.map((message, index) => (
          <li
            key={index}
            className={`my-2 py-2 px-6 text-sm rounded-md flex flex-col w-[48%] justify-self-end ${
              message.from === 'Me'
                ? 'self-end bg-[#88f]'
                : 'self-start bg-slate-600'
            }`}
          >
            <span className="text-base block font-bold w-[100%] text-ellipsis overflow-hidden">
              {message.from}
            </span>
            <span className="text-sm font-medium w-[100%] break-words">
              {message.body}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-evenly max-h-[10%] min-h-[6%]">
        <input
          type="text"
          placeholder="Write your message..."
          className="border border-slate-400 p-2 w-[90%] focus:outline-none rounded-xl justify-self-end bg-transparent text-white focus:bg-zinc-800"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoFocus
        />
        <button className="w-[5%] rounded-full border border-slate-400 hover:bg-zinc-800 p-2 min-w-[40px] mx-2">
          <BiSend className="w-full h-full" />
        </button>
      </div>
    </form>
  )
}

export default Chat
