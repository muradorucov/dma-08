import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../store/actions/cart.actions';
import { successAction } from '../store/actions/toast.action';

function ProductCard({ product }) {

  const dispatch = useDispatch();
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      <img
        src={product.thumbnail}
        alt="Essence Mascara Lash Princess"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {product.description?.slice(0, 100)}...
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-pink-600">${product.price}</span>
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md">
            {product.availabilityStatus}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-sm py-2 rounded-lg transition-colors duration-200"
            onClick={() => {
              dispatch(addToCartAction(product))
              dispatch(successAction("Product added successfully"))
            }}>
            Add to Cart
          </button>
          <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-sm py-2 rounded-lg transition-colors duration-200">
            Add to Fav
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
