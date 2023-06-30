// Habilitando archivo para router link
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
    return (
        <>
            {/* Navbar sujeto a cambios (sections obligatorios si se desea el navbar redondo) */}
            <section className='py-4 md:px-24 px-4'>
                <Navbar />
            </section>


        </>
    );
}
