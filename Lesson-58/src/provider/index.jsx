import { useEffect, useState } from "react";
import { Navigate } from "react-router";

function PrivateRouter({ children }) {

  const [user, setUser] = useState(null);


  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })

        const data = await res.json();


        if (data && !data.message) {
          setUser(data)
        }

        if (!data || data.message) {
          setUser(false)
        }

      } catch (error) {
        console.log("errrrrror", error);
      }
    })()
  }, [])

  if (user === null) {
    return <p>.....loading.....</p>
  }

  if (user === false) {
    return <Navigate to={"/login"} />
  }

  return (
    children
  )
}

export default PrivateRouter