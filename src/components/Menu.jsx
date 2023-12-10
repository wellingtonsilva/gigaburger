import {useState} from 'react'
import {data} from './../data/data.jsx'

export const Menu = () => {
  const [foods, setFoods] = useState(data)
  const filterFoods = (category) => {
    setFoods(data.filter(food =>  food.category === category))
    
  }
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-1 lg:py-12'>
      <h3 className='text-orange-600 font-bold text-4xl text-center mb-3 sm:mb-2'>Nosso Cardápio</h3>
      {/* row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* filtro tipo */}
        <div>
         
            <p className='font-bold text-gray-700 mb-3 sm:mb-2'>Filtros por Categorias</p>
            <div className='flex justify-between flex-wrap'>
              <button onClick={() => setFoods(data)} className='m-1 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white active:text-white active:bg-orange-600'>Todos</button>
              <button onClick={() => filterFoods('burger')} className='m-1 border-orange-600 text-orange-600 hover:'>Burger</button>
              <button onClick={() => filterFoods('pizza')} className='m-1 border-orange-600 text-orange-600 hover:'>Pizza</button>
              <button onClick={() => filterFoods('salad')} className='m-1 border-orange-600 text-orange-600 hover:'>Salada</button>
              <button onClick={() => filterFoods('chicken')} className='m-1 border-orange-600 text-orange-600 hover:'>Frango</button>
            </div>
          
        </div>

        {/* filtro preço */}
        {/* <div>
          <p>Filtro por preço</p>
          <div>
            <button>$</button>
            <button>$</button>
            <button>$</button>
            <button>$</button>

          </div>
        </div> */}
      </div>
        
   
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map(({id, image, name, price}) => (
            <div className='border shadow-lg hover:scale-105 duration-200' key={id}>
              <img className='w-full h-[200px] object-cover rounded-t-lg' src={image} alt={name} />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{name}</p>
                <p className=''>
                  <span className='bg-orange-600 text-white p-1 rounded-full'>{price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
    

    </div>
  )
}

