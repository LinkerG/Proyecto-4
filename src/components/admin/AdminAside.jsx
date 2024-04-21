import React from "react";
import 'tailwindcss/tailwind.css';

const AdminAside = ({  }) => {
    return (
        <aside id="sideMenu" className="lg:w-56 bg-gray-800 text-white h-screen fixed top-0 left-0 transition-all transform -translate-x-full lg:translate-x-0 z-50">
            <ul className="pt-8">
                <li className="px-4 py-2 hover:bg-gray-700"><a href="/admin" className="block">Inicio</a></li>
                <li className="px-4 py-2 hover:bg-gray-700"><a href="/admin/competitions" className="block">Competiciones</a></li>
                <li className="px-4 py-2 hover:bg-gray-700"><a href="/admin/teams" className="block">Equipos</a></li>
                <li className="px-4 py-2 hover:bg-gray-700"><a href="/" className="block">Salir</a></li>
            </ul>
        </aside>
    );
}

export default AdminAside;