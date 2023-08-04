import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import SideBar from '../components/SideBar'

function AdminLayout() {
  return (
    <div className="">
      <>
        <SideBar />

        {/* Impresión del componente correspondiente */}
        <Outlet />


      </>
    </div>
  )
}

export default AdminLayout
