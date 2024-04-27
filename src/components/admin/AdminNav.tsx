import React, { useState } from "react";
import "../css/navStyles.css";

const AdminNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white relative z-10 py-4">
            {/* Navbar cuando es grande */}
            <div className="hidden lg:flex justify-between items-center p-4 mx-20">
                <div className=""><h1 className="select-none ml text-2xl">RemCat 🚣‍♂️ / ADMIN</h1></div>
                <ul className="flex">
                    <li className="px-4 hover:bg-gray-700 text-xl"><a href="/admin">Inicio</a></li>
                    <li className="px-4 hover:bg-gray-700 text-xl"><a href="/admin/competitions">Competiciones</a></li>
                    <li className="px-4 hover:bg-gray-700 text-xl"><a href="/admin/teams">Equipos</a></li>
                    <li className="px-4 hover:bg-gray-700 text-xl"><a href="/">Salir</a></li>
                </ul>
            </div>

            {/* Menú hamburguesa cuando es pequeño */}
            <div className="lg:hidden flex justify-between items-center p-4 z-20">
                <div><h1 className="text-xl">RemCat 🚣‍♂️ / ADMIN</h1></div>
                <button onClick={toggleMenu} className="text-white">
                    {/* Icono de hamburguesa */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            
            {/* Menú desplegable */}
            <div style={{ transitionDuration: '0.75s' }} className={`lg:hidden bg-gray-700 text-white fixed left-0 top-full w-full p-4 z-10 transition-transform ${isMenuOpen ? 'translate-y-0' : 'translate-y-full top-minus-6rem'}`}>
                <ul>
                    <li className="py-2"><a href="/admin">Inicio</a></li>
                    <li className="py-2"><a href="/admin/competitions">Competiciones</a></li>
                    <li className="py-2"><a href="/admin/teams">Equipos</a></li>
                    <li className="py-2"><a href="/">Salir</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default AdminNav;
