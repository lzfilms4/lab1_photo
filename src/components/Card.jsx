import React from 'react'
import '../App.css';

const Card = ({element}) => {
  return (
    <div className="shadow-lg mb-20 w-[500px]">
        <div className="image">
            <img className="h-[300px] w-auto mx-auto" src={element.photo} alt="photo" />
        </div>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{element.name}</div>
    </div>
    </div>
  )
}

export default Card