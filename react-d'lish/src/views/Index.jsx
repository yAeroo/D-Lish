import { Link } from "react-router-dom";
import { useState } from 'react';
import Footer from "../components/Footer";
import Modal from "./Modal/Modal";
import Navbar from "../components/Navbar";
import Carrousel from "../components/Carrousel";

export default function Index() {
    return (
        <>
            <section className='py-4 md:px-24 px-4'>
                <Navbar />
            </section>

            <div>
                <Carrousel />
            </div>
        </>
    );
}
