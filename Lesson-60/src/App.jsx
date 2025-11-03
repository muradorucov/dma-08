import React from 'react'
import Counter from './components/Counter'
import Decrease from './components/Decrease'
import Increase from './components/INcrease'
import List from './components/List'
import { clearListAction } from './store/actions/list.actions'
import { useDispatch } from 'react-redux'

function App() {

  const dis = useDispatch()

  return (
    <div>
      <button onClick={() => dis(clearListAction())}>Clear List</button>
      <div className='flex'>
        <Decrease />
        <Counter />
        <Increase />
      </div>
      <List />


    </div>

  )
}

export default App