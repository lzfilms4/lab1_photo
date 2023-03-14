import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";
const Card = ({element}) => {
  return (
    <Link to={`/fullImage/${element.name}`} className="shadow-lg mb-20 w-[400px] mx-5 mt-10">
        <div className="image">
            <img className="h-[250px] w-auto mx-auto" src={element.photo} alt="" />
        </div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{element.name}</div>
        </div>
    </Link>
  )
}

export default Card