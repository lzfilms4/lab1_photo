import React from 'react'
import data from './data'
import './App.css';
import Card from './components/Card'
import Search from './components/Search';
import Categories from './components/Categories';

function App() {
  const [inputValue, setInputValue] = React.useState('')
  const [catygory, setCategory] = React.useState(0)
  return (
    <div className="App">
      <h1 className="pt-10 font-extrabold text-xl">Фотогалерея</h1>
      <Search setInputValue={setInputValue}/>
      <Categories categories={data.categories} setCategory={setCategory}/>
      <div className="flex pt-20 flex-wrap justify-around">
        {data.collections.filter(
          (el,i) => 
          el.name.toLowerCase().includes(inputValue.toLowerCase()) && (el.category === catygory || catygory === 0))
          .map((el,i) => (<Card element={el} key={i}/>))}
      </div>
    </div>
  );
}

export default App;
