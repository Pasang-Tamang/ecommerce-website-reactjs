import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const SecretRoute = () => {


  const isLoggedIn = useSelector((state:any) => state.auth.isLoggedIn)


  return (
    <div>
      {
        isLoggedIn ? <Outlet/> : <Navigate to= "/"/> 
      }
    </div>
  )
}

export default SecretRoute
