import { useEffect, useState } from "react"
import { currentUser } from "../services/auth";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {

  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await currentUser();
        setIsLogin(true)
      } catch (error) {
        setIsLogin(false)
      }
    })();
  }, [])

  if (isLogin === null) {
    return <p>loading....</p>
  }
  return isLogin ? children : <Navigate to={"/login"} />
}

export default ProtectedRoute