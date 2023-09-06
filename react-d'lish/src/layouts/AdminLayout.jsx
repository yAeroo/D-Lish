import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import SideBar from '../components/Admin/SideBar.jsx'
import { useAuth } from "../hooks/useAuth";
// Modal
import Modal from 'react-modal'
import ModalMenu from "../components/Admin/ModalMenu";
import useOwner from "../hooks/useOwner";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Definición del elemento al que se agrega
Modal.setAppElement("#root");

function AdminLayout() {
  const { modal } = useOwner();

  useAuth({ middleware: 'owner' });

  return (
    <div className="bg-neutral-100 ">
      <>
        <SideBar />

        {/* Impresión del componente correspondiente */}
        <Outlet />

        <Footer />
      </>

      {/* Cuando se abre el modal */}
      <Modal isOpen={modal} style={customStyles} >
        <ModalMenu />
      </Modal>
    </div>
  )
}

export default AdminLayout
