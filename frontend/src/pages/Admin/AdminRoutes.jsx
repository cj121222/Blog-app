import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"



const AdminRoutes = () => {
    const {userInfo} = useSelector(state => state.auth)
  return userInfo && userInfo.isAdmin? <Outlet/> : <Navigate to="/login" replace/>
}

export default AdminRoutes