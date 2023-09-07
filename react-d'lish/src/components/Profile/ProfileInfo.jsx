
export default function ProfileInfo(props) {
  const { user } = props;

  return (
    <>
      <section id="pfp-cont" className="w-full flex justify-center rounded-full border-8 border-solid border-base-100 bg-base-100">
        <div className="-mt-28 w-48 h-48 lg:w-56 lg:h-56 rounded-full border-8 border-solid border-base-100 bg-base-100 overflow-hidden">
          <img src={`/assets/pfp/${user?.profile_pic}`} id="profile-pic" className="transition-all object-cover !w-full !h-full" alt="." />
        </div>
      </section>

      <div id="profile-name" className="my-5">
        <p className="font-title text-3xl lg:text-4xl text-center font-bold tracking-wide transition-all">
          {user?.name}
        </p>
      </div>
    </>
  )
}
