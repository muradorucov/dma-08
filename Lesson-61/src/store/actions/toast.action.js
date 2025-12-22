export const successAction = (payload) => {
  return {
    type: "SUCCESS",
    payload
  }
}

export const errorAction = (payload) => {
  return {
    type: "ERROR",
    payload
  }
}



export const hideAction = () => {
  return {
    type: "HIDE"
  }
}