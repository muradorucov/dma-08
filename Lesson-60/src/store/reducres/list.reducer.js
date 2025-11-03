export const listReducer = (state = [], action) => {
  if (action.type === "ADD_TO_LIST") {
    const foundItem = state.includes(action.payload);
    if (!foundItem) {
      return [...state, action.payload]
    }
  } else if (action.type === "REMOVE_FROM_LIST") {
    return state.filter(item => item !== action.payload)
  } else if (action.type === "DELETE_LIST") {
    return []
  }

  return state
}