const userImg = 'https://this-person-does-not-exist.com/img/avatar-gen9f6ab4de0e8ed08f8e20d6ac6e61c55d.jpg'

const Profile = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-teal-500 font-sans">
      
      <article className="bg-white rounded-xl w-80 overflow-hidden shadow-lg">

        <section className="w-full h-24 bg-red-500">
            <img />
        </section>

        <section>
          <aside className="mt-[-3rem] mx-auto w-24 h-24 overflow-hidden rounded-full border-4 border-solid border-white">
            <img src={userImg} alt="Image of a user than doesnt existo, It was created by a IA" />
          </aside>

          <aside className="py-4">
            <h3 className="px-4 text-center font-semibold text-xl">
              Victor Creast 
              <span className="ml-2 text-lg text-zinc-400">26</span>
            </h3>
            <p className="px-4 pb-6 text-center text-zinc-500">London</p>

            <div className="border-t-[1px] border-solid border-zinc-200 px-6 pt-6 pb-3 flex justify-center gap-8">
              <div className="text-center">
                <h4 className="text-xl text-black font-bold">850k</h4>
                <p className="text-zinc-500 text-sm">Followers</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl text-black font-bold">8M</h4>
                <p className="text-zinc-500 text-sm">Likes</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl text-black font-bold">8</h4>
                <p className="text-zinc-500 text-sm">Photos</p>
              </div>
            </div>
          </aside>
        </section>

      </article>
    </main>
  )
}

export default Profile
