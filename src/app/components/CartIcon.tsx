import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
    return (
        <Link href="/cart" className="flex items-center gap-4 md:gap-2">
            <div className="relative w-8 h-8 md:w-4 md:h-4">
                <Image src="/cart.png" alt="Carrinho" fill />
            </div>
            <span>Carrinho (3)</span>
        </Link>
    );
};

export default CartIcon;
