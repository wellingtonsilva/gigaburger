export const FilterCategory = ({ filterFoods }) => {
  return (
    <div>
      <p className='font-bold text-gray-700 mb-3 sm:mb-2'>Filtros por Categorias</p>
      <div className='flex justify-between flex-wrap'>
        <button onClick={() => filterFoods('all')} className='m-1 p-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white active:text-white active:bg-orange-600'>Todos</button>
        <button onClick={() => filterFoods('burger')} className='m-1 border-orange-600 text-orange-600 hover:'>Burger</button>
        <button onClick={() => filterFoods('pizza')} className='m-1 border-orange-600 text-orange-600 hover:'>Pizza</button>
        <button onClick={() => filterFoods('salad')} className='m-1 border-orange-600 text-orange-600 hover:'>Salada</button>
        <button onClick={() => filterFoods('chicken')} className='m-1 border-orange-600 text-orange-600 hover:'>Frango</button>
      </div>
    </div>
  );
}


