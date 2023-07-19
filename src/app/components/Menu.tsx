"use client";

import { links } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const Menu = () => {
    const [open, setOpen] = useState(false);
    const user = false;

    return (
        <div>
            {!open ? (
                <Image
                    src="/open.png"
                    alt="Menu"
                    width={20}
                    height={20}
                    onClick={() => setOpen(true)}
                />
            ) : (
                <Image
                    src="/close.png"
                    alt="Menu"
                    width={20}
                    height={20}
                    onClick={() => setOpen(false)}
                />
            )}
            {open && (
                <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                    {links.map((item) => (
                        <Link key={item.id} href={item.url}>
                            {item.title}
                        </Link>
                    ))}
                    {!user ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <Link href="/orders">Pedidos</Link>
                    )}
                    <Link href="/cart">
                        <CartIcon />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Menu;
