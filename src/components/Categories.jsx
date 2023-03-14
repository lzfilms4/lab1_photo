import React from 'react'

const Categories = ({categories, setCategory}) => {
  return (
    <div className='flex max-w-[400px] justify-around ml-15 mt-10 flex-wrap mb-10 pl-10'>
        {categories.map((el,i) => (<div className='rounded-xl px-2 py-2 bg-slate-800 text-white hover:bg-slate-600' onClick={() => setCategory(i)} key={i}>{el.name}</div>))}
      </div>
  )
}
export default Categories