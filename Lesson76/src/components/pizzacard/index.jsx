import React from 'react'

function Card(props) {
  return (
    <div className='border border-gray-300 p-4 shadow-lg rounded-md'>
      <img
        src={props.pizzaImage}
        alt={props.pizzaName}
        onError={(e) => e.target.src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"}
      />
      <h3 className='my-3'>{props.pizzaName}</h3>
      <div className='flex justify-between'>
        <span>{Math.round(props.pirce) / 10} AZN</span>
        <button>+</button>
      </div>
    </div>
  )
}

export default Card