import { routers } from './routers'
import { RouterProvider } from 'react-router'
import { currentUser, login } from './services/auth'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { gStore } from './store'
import { useEffect } from 'react'
import { getUser } from './features/user.slice'

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.user);

  useEffect(() => {
    (async () => {
      try {
        const data = await currentUser()
        dispatch(getUser(data.user))
      } catch (error) {
      }
    })();
  }, [])

  return (
    <RouterProvider router={routers} />
  )
}

export default App