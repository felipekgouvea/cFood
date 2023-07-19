import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";

const NavBar = () => {
    const user = false;

    return (
        <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 md:h-20 lg:px-20 xl:px-24">
            <div className="hidden md:flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contatos</Link>
            </div>
            <div className="text-xl md:font-bold">
                <Link href="/">cFood</Link>
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
            <div className="hidden md:flex gap-4 flex items-center justify-center">
                <CartIcon />
                {!user ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <Link href="/orders">Pedidos</Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
