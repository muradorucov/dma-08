const initialState = {
  isToast: false,
  data: {}
}

export const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        isToast: true,
        data: {
          state: "success",
          title: action.payload
        }
      }
    case "ERROR":
      return {
        isToast: true,
        data: {
          state: "error",
          title: action.payload
        }
      }
    case "HIDE":
      return {
        isToast: false,
        data: {}
      }
    default:
      return state
  }
}