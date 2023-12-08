import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'


export const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleMenuMobile = () => {
    setNav(!nav)
  }

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* coluna esquerda */}
      <div className='flex items-center'>
        <div onClick={handleMenuMobile} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Giga <span className='font-bold'>Burger</span></h1>
          <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-2'>Entrega</p>
            <p className='p-2'>Escolher</p>
          </div>
        </div>
        {/* busca */}
        <div className='bg-gray-200 rounded-full flex items-center p-2 px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25} />
          <input className='bg-transparent px-2 w-full focus:outline-none' type="text" placeholder='Pesquisar lanches' />
        </div>

        {/* carrinho */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
          <BsFillCartFill className='mr-2' size={20} />
          <p>Carrinho</p>
        </button>

        {/* menu mobile */}
        {/* overlay */}
        {nav && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}
          
          {/* menu lateral */}
          <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
            <AiOutlineClose onClick={handleMenuMobile} size={25} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>Giga <span className='font-bold'>Burger</span></h2>
            <nav>
              <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex items-center'>
                  <TbTruckDelivery className='mr-4' size={25}  />
                  <span>Pedidos</span>
                </li>
                <li className='text-xl py-4 flex items-center'>
                  <MdFavorite className='mr-4' size={25}  />
                  <span>Favoritos</span>
                </li>
                <li className='text-xl py-4 flex items-center'>
                  <FaWallet className='mr-4' size={25}  />
                  <span>Carteira</span>
                </li>
                <li className='text-xl py-4 flex items-center'>
                  <MdHelp className='mr-4' size={25}  />
                  <span>Ajuda</span>
                </li>
                <li className='text-xl py-4 flex items-center'>
                  <AiFillTag className='mr-4' size={25}  />
                  <span>Promoções</span>
                </li>
                <li className='text-xl py-4 flex items-center'>
                  <BsFillSaveFill className='mr-4' size={25}  />
                  <span>Mais vendidos</span>
                </li>
                <li className='text-xl py-4 flex items-center'>
                  <FaUserFriends  className='mr-4' size={25}  />
                  <span>Envie para amigos</span>
                </li>
              </ul>
            </nav>
          </div>
        
    </div>
  )
}

