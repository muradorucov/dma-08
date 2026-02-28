import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { currentUser } from '../services/auth';

const PrivateRouter = ({ children }) => {
  const [isLogin, setIslogin] = useState(null);


  useEffect(() => {
    (async () => {
      try {
        const data = await currentUser()
        setIslogin(true)
      } catch (error) {
        setIslogin(false)
      }
    })();
  }, [])

  if (isLogin === null) {
    return <p>gozle de ala....</p>
  }
  return isLogin === true ? children : <Navigate to={"/login"} />
}

export default PrivateRouter