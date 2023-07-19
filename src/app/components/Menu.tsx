"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";
import { links } from "../utils/links";

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
                        <Link
                            key={item.id}
                            href={item.url}
                            onClick={() => setOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                    {!user ? (
                        <Link href="/login" onClick={() => setOpen(false)}>
                            Login
                        </Link>
                    ) : (
                        <Link href="/orders" onClick={() => setOpen(false)}>
                            Pedidos
                        </Link>
                    )}
                    <Link href="/cart" onClick={() => setOpen(false)}>
                        <CartIcon />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Menu;
