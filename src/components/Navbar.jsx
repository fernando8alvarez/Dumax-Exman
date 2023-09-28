import { useEffect } from "react";
import logo from "../imgs/dumaxLogo.png";
import user from "../imgs/user.jpg";

const Navbar = () => {

    return (
        <>
            <nav className="bg-zinc-900 border-gray-200 drop-shadow-lg ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center gap-10">
                        <img src={logo} className="w-28 border-spacing-4" alt="Flowbite Logo" />
                        <p className="text-white text-lg pl-10 border-l-2 border-lime-500 font-bold">Reportes</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <img className="w-10 h-10 rounded-full" src={user} alt="user photo" />
                        <p className="text-white text-lg">User1</p>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;