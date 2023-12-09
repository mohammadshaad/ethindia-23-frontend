"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import Image from "next/image";
import MetaMaskLogo from '@/public/logo.webp'
import Link from "next/link";

export default function Login() {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="flex items-center justify-center p-20 flex-col">
            <div
                onMouseMove={onMouseMove}
                className="overflow-hidden h-full w-full relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 text-white"
            >
                <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                    <motion.div
                        className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
                        style={style}
                    />
                    <motion.div
                        className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                        style={style}
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-8 h-full">
                    <div className="flex items-center justify-center">
                        <button className=" text-white py-2 px-4 rounded flex items-center justify-center gap-4" >
                            <div className="">
                                <Image src={MetaMaskLogo} className="w-8" width={40} height={40} alt="" />
                            </div>
                            <div>
                                Login with MetaMask
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <Link href='/events' className="mt-5 text-white flex items-center justify-center w-full">
                Go Back
            </Link>
        </div>
    );
}
