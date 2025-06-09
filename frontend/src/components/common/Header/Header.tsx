"use client";
import ThemeToggle from "@/components/ThemeBtn/ThemeToggle"

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Menu, X } from "react-feather";
import { navbarData } from "@/data/navbarData";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="px-6 py-4 border-b border-[color:var(--color-accent)] bg-[color:var(--color-background)] dark:bg-[color:var(--color-background-dark)] sticky top-0 z-50">
            <div className="container mx-auto ">
                <div className="flex justify-between">
                    <div className="w-1/2 ">
                        <Link className="flex items-center gap-4 text-2xl font-bold" href='/'>   <BookOpen />  Al-Quran</Link>
                    </div>

                    <div className="w-1/2">
                        <div className="flex items-center justify-end gap-4">
                            <ThemeToggle />
                            <button
                                onClick={() => setOpen(!open)}
                                className="p-2 border rounded-md hover:bg-muted cursor-pointer"
                            >
                                <Menu size={20} />
                            </button>
                        </div>

                    </div>
                </div>


                {open && (
                    <div className="fixed top-0 left-0 bg-[color:var(--color-background)] dark:bg-[color:var(--color-background-dark)]  w-full h-full">
                        <button
                            onClick={() => setOpen(!open)}
                            className="p-2 border rounded-md hover:bg-muted cursor-pointer absolute right-48 top-4"
                        >
                            <X size={20} />
                        </button>
                        <ul className="absolute top-1/2 left-1/2 -translate-1/2 space-y-4 text-center" onClick={() => setOpen(!open)}>
                            {navbarData?.map((item, index) => {
                                const { title, url } = item
                                return (
                                    <li key={index} className="text-3xl font-semibold uppercase">
                                        <Link href={url}>
                                            {index + 1}: {title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header