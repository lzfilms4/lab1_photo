import React from 'react'
import data from './data'
import './App.css';
import Card from './components/Card'

function App() {
  const [inputValue, setInputValue] = React.useState('')
  const [catygory, setCategory] = React.useState(0)
  return (
    <div className="App">
      <div className="search w-[300px] mx-10 mt-20">
        <h1 className='font-bold'> Поиск </h1>
        <input
        onChange={e => setInputValue(e.target.value)}
        type="search"
        className=" relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
        id="exampleSearch"
        placeholder="Введите название" />
      </div>
      <div className='categories flex w-[400px] justify-between ml-10 mt-10 '>
        {data.categories.map((el,i) => (<div className='rounded-xl px-2 py-2 bg-slate-800 text-white hover:bg-slate-600' onClick={() => setCategory(i)} key={i}>{el.name}</div>))}
      </div>
      <div className="photos pt-20">
        {data.collections.filter((el,i) => el.name.toLowerCase().includes(inputValue.toLowerCase()) && (i === catygory || catygory === 0)).map((el,i) => (<Card element={el} key={i}/>))}
      </div>
    </div>
  );
}

export default App;
