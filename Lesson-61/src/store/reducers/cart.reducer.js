export const cartListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const foundPro = state.find(pro => pro.id === action.payload.id)
      if (foundPro) {
        if (foundPro.count < foundPro.stock) {
          foundPro.count++
        }
        return [...state]
      }
      return [...state, {
        ...action.payload,
        count: 1
      }]
    case "REMOVE_FROM_CART":
      return state.filter(pro => pro.id !== action.payload)
    case "INCREASE":
      const foundPro1 = state.find(pro => pro.id === action.payload);
      if (foundPro1.count < foundPro1.stock) {
        foundPro1.count++
      }
      return [...state]
    case "DECREASE":
      const foundPro2 = state.find(pro => pro.id === action.payload)
      if (foundPro2.count >= 2) {
        foundPro2.count--
      }
      return [...state]
    case "CLEAR":
      return []
    default:
      return state
  }
}