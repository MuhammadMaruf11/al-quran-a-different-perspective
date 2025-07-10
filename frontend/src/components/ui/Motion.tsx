"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

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

interface MotionProps {
    children: ReactNode;
    apiReady: boolean;
}

const Motion: FC<MotionProps> = ({ children, apiReady }) => {
    const pathname = usePathname();

    if (!apiReady) {
        return (
            <div className=" text-center flex h-dvh justify-center items-center">
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
