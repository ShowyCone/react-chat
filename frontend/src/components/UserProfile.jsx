const UserProfile = ({ toggle, username }) => {

  return (
    <div
      className={`flex  items-center justify-evenly ${
        toggle
          ? 'bg-none transition-all duration-150 delay-200'
          : 'bg-zinc-900 rounded-xl p-2'
      }`}
    >
      <div className="min-w-[3rem] h-[3rem]">
        <img
          src={`https://robohash.org/${username}?set=set4`}
          alt="profile-picture"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div
        className={`${
          toggle ? 'hidden' : ''
        } w-[60%] text-center overflow-clip`}
      >
        <h3 className="text-xl">{username}</h3>
      </div>
    </div>
  )
}

export default UserProfile
