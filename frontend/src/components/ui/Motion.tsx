"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const pageVariants = {
    initial: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
};

interface RootLayoutProps {
    children: ReactNode;
}

const Motion: FC<RootLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const checkApi = async () => {
            try {
                const res = await fetch(base_url!, {
                    cache: "no-store",
                });

                if (res.ok) {
                    setReady(true);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("API check failed:", err);
                setError(true);
            }
        };

        checkApi();
    }, []);

    if (error) {
        return (
            <div className=" text-center py-8">
                <h2 className="text-red-500 text-6xl"> সার্ভার প্রস্তুত হচ্ছে। কিছুক্ষণ পর রিফ্রেশ করুন।</h2>
            </div>
        );
    }

    if (!ready) {
        return (
            <div className="text-center py-8 text-gray-500 animate-pulse">
                <Image className="mx-auto" src='/assets/img/loader.gif' width={480} height={480} alt="Loader_gif" />
            </div>
        );
    }

    return (
        <motion.div
            key={pathname}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
};

export default Motion;
