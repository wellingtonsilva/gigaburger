

export const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Wrapper Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white p-3">
          <p className="font-bold text-2xl px-2 pt-4">Burguer da Casa</p>
          <p className="px-2">300g de carne na brasa</p>
          <button className="absolute bg-orange-400 text-black mt-4">Pedir agora</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60" alt="Burguer da Casa" />
      </div>


            {/* Wrapper Card */}
            <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white p-3">
          <p className="font-bold text-2xl px-2 pt-4">Burguer Bacon</p>
          <p className="px-2">300g de carne na brasa + bacon</p>
          <button className="absolute bg-orange-400 text-black mt-4">Pedir agora</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" alt="Burguer Bacon" />
      </div>

            {/* Wrapper Card */}
            <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white p-3">
          <p className="font-bold text-2xl px-2 pt-4">Burguer Salada</p>
          <p className="px-2">300g de carne na brasa salada e batata</p>
          <button className="absolute bg-orange-400 text-black mt-4">Pedir agora</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Burguer da Casa" />
      </div>

    </div>
  )
}
