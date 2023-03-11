import React from 'react'
import '../App.css';

const Card = ({element}) => {
  return (
    <div className="card shadow-lg mb-20">
        <div className="image">
            <img src={element.photo} alt="Sunset in the mountains" />
        </div>
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{element.name}</div>
    </div>
    </div>
  )
}

export default Card