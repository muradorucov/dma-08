import axios from "axios";
import { useEffect, useState } from "react"
import { currentUser } from "../services";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  const [gbData, setGbdata] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await currentUser();
        setGbdata(data)
        console.log("Success", data);
      } catch (error) {
        setGbdata(false)
        console.log("error", error);
      }
    }
    fetchData()
  }, [])

  if (gbData === null) {
    return <p className="absolute inset-0 flex justify-center items-center">Yuklenir....</p>
  }

  return gbData ? children : <Navigate to={"/login"} />
}

export default PrivateRouter