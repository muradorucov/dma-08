import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromListAction } from '../store/actions/list.actions'

function List() {
  const { list } = useSelector(state => state)

  const dis = useDispatch()
  return (
    <div>
      <ul>
        {
          list.map(item => <li key={item}>
            <span>{item}</span>
            <button
              onClick={() => dis(removeFromListAction(item))}
            >delete</button>
          </li>)
        }
      </ul>
    </div>
  )
}

export default List