import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartAction, decreaseCountAction, increaseCountAction, removeFromCartAction } from "../../store/actions/cart.actions";
import { successAction } from "../../store/actions/toast.action";

function CartList() {
  const { cartList } = useSelector(state => state);
  const dis = useDispatch()


  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-5 mt-10 ">
      <div className="flex justify-between items-center border-b mb-4">
        <h1 className="text-xl font-semibold   pb-2">🛒 Cart</h1>
        <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 border rounded-md text-gray-600 font-bold text-lg"
          onClick={() => dis(clearCartAction())}>Clear</button>
      </div>

      <div className="space-y-4">
        {
          cartList.length ? cartList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg border"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 border rounded-md text-gray-600 font-bold text-lg disabled:bg-emerald-700"
                    onClick={() => dis(decreaseCountAction(item.id))}
                    disabled={item.count <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-semibold">
                    {item.count}
                  </span>
                  <button className="w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 border rounded-md text-gray-600 font-bold text-lg disabled:bg-emerald-700"
                    onClick={() => dis(increaseCountAction(item.id))}
                    disabled={item.count === item.stock}
                  >
                    +
                  </button>
                </div>

                <p className="font-semibold text-pink-600 text-sm">
                  ${(item.price * item.count).toFixed(2)}
                </p>

                <button className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1"
                  onClick={() => {
                    dis(removeFromCartAction(item.id))
                    dis(successAction("Product removed successfully"))
                  }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          )) : <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="" className="mx-auto" />
        }
      </div>

      {/* Total Section */}
      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <span className="text-gray-600 font-medium">Total:</span>
        <span className="text-xl font-bold text-pink-600">
          $
          {cartList
            .reduce((acc, item) => acc + item.price * item.count, 0)
            .toFixed(2)}
        </span>
      </div>

      <button className="w-full cursor-pointer mt-6 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition disabled:opacity-[0.5] disabled:bg-amber-900 disabled:cursor-not-allowed"
        disabled={!cartList.length}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartList;
