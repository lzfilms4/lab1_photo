import React from 'react'
import '../App.css';
import data from '../data'
import { Link } from "react-router-dom";

import {useParams} from "react-router-dom";
import Card from "../components/Card";
import Search from "../components/Search";
import Categories from "../components/Categories";

const FullImage = () => {
    const [inputValue, setInputValue] = React.useState('')
    const [catygory, setCategory] = React.useState(0)
    const [navOpened, setNavOpened] = React.useState(true)
    console.log(navOpened)
    const { name } = useParams();
    return (
        <div className="flex">
            <div className={navOpened ? "w-4/6 fixed" : "w-6/6 fixed"}>
            {
                data.collections.map(el => el.name === name ?
                    ( <div className="flex justify-around mt-20">
                            <div className={navOpened? "shadow-lg mb-20 w-[600px]" : "shadow-lg mb-20 w-[1200px]"}>
                            <div className="image">
                                <img className={navOpened ? "h-[500px] w-auto mx-auto" : "h-[600px] w-auto mx-auto"} src={el.photo} alt="" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{el.name}</div>
                            </div>
                        </div>
                    </div>)
                    : "")
            }
            </div>
            <div className='rounded-xl px-2 py-2 bg-slate-800 text-white hover:bg-slate-600 h-10 ml-[90%] fixed' onClick={() => setNavOpened(!navOpened)}>Скрыть</div>

            {
                navOpened? (
            <div className="w-3/6 text-center ml-[60%]">
                <Search setInputValue={setInputValue}/>
                <Categories categories={data.categories} setCategory={setCategory}/>

                        <div className="flex flex-wrap">
                            {data.collections.filter(
                                (el,i) => el.name.toLowerCase().includes(inputValue.toLowerCase()) && (el.category === catygory || catygory === 0) || (data.categories[el.category].name.toLowerCase().includes(inputValue.toLowerCase()) && inputValue!==''))
                                .map((el,i) => (<Card element={el} key={i}/>))}
                        </div>

            </div>
                ) : ''
            }
            <div className="fixed mt-[55%] flex">
            <Link to="https://github.com/lzfilms4" className="mr-10 ml-10">github: lzfilms4</Link>
                <Link to="https://github.com/Zaxarov">github.com: Zaxarov</Link>

            </div>
        </div>
    )
}

export default FullImage