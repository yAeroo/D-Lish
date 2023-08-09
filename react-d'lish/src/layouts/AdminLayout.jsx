import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import SideBar from '../components/SideBar'

function AdminLayout() {
  return (
    <div className="bg-neutral-100 ">
      <>
        <SideBar />

        {/* Impresión del componente correspondiente */}
        <Outlet />

        <Footer />
      </>
    </div>
  )
}

export default AdminLayout
