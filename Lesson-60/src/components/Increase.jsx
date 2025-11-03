import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseAction } from '../store/actions/counter.actions'

function Increase() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increaseAction(4))}>+</button>
    </div>
  )
}

export default Increase