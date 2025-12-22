export const addToCartAction = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload
  }
}

export const removeFromCartAction = (payload) => {
  return {
    type: "REMOVE_FROM_CART",
    payload
  }
}
export const increaseCountAction = (payload) => {
  return {
    type: "INCREASE",
    payload
  }
}
export const decreaseCountAction = (payload) => {
  return {
    type: "DECREASE",
    payload
  }
}

export const clearCartAction = () => {
  return {
    type: "CLEAR"
  }
}