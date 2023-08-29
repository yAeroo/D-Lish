import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import SideBar from '../components/Admin/SideBar.jsx'
import { useAuth } from "../hooks/useAuth";

function AdminLayout() {
  useAuth({ middleware: 'owner' });

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
