import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//NavMobileIndex
import NavMobileIndex from "../components/Nav/NavMobileIndex";

export default function Search() {
  return (
    <>
    <NavMobileIndex/>
    <section className="min-h-screen w-full bg-base-200">
        <div className="mx-10 bg-green-900">
            <div className="bg-accent w-full">
                Hola
            </div>
        </div>
    </section>
    </>
  )
}
