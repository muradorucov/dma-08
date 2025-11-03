import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseAction } from '../store/actions/counter.actions'

function Decrease() {
  const dispatch = useDispatch()

  const handler = () => {
    dispatch(decreaseAction(3))
  }

  return (
    <div>
      <button onClick={handler}>-</button>
    </div>
  )
}

export default Decrease