import React, { useState } from "react";

const AdminNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white relative z-10 py-4">
            {/* Navbar cuando es grande */}
            <div className="hidden lg:flex justify-between items-center p-4 mx-20">
                <div><h1 className="ml text-2xl">RemCat 🚣‍♂️</h1></div>
                <ul className="flex">
                    <li className="px-4 hover:bg-gray-700 text-xl"><a href="/admin">Inicio</a></li>
                    <li className="px-4 hover:bg-gray-700 text-xl"><a href="/admin/competitions">Competiciones</a></li>
                    <li className="px-4 hover:bg-gray-700 text-xl"><a href="/admin/teams">Equipos</a></li>
                    <li className="px-4 hover:bg-gray-700 text-xl"><a href="/">Salir</a></li>
                </ul>
            </div>

            {/* Menú hamburguesa cuando es pequeño */}
            <div className="lg:hidden flex justify-between items-center p-4">
                <div><h1 className="text-xl">RemCat 🚣‍♂️</h1></div>
                <button onClick={toggleMenu} className="text-white">
                    {/* Icono de hamburguesa */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            
            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className="lg:hidden bg-gray-700 text-white absolute top-full left-0 w-full p-4 z-20">
                    <ul>
                        <li className="py-2"><a href="/admin">Inicio</a></li>
                        <li className="py-2"><a href="/admin/competitions">Competiciones</a></li>
                        <li className="py-2"><a href="/admin/teams">Equipos</a></li>
                        <li className="py-2"><a href="/">Salir</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default AdminNav;
