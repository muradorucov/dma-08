import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToListAction } from '../store/actions/list.actions';

function Counter() {
  const dis = useDispatch();
  const { counter } = useSelector(state => state);

  const addToList = () => {
    dis(addToListAction(counter))
  }
  return (
    <div>
      <button onClick={addToList}>{counter}</button>
    </div>
  )
}

export default Counter