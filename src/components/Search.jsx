import React from 'react'

const Search = ({setInputValue}) => {
  return (
    <div className="search max-w-[300px] mx-10 mt-20">
        <h1 className='font-bold'> Поиск </h1>
        <input
        onChange={e => setInputValue(e.target.value)}
        type="search"
        className=" relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
        id="exampleSearch"
        placeholder="Введите название" />
      </div>
  )
}
export default Search