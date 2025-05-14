"use client"
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface LineWithBeamProps {
    positionClass: string;
}

const LineWithBeam = ({ positionClass }: LineWithBeamProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null); 
    const [height, setHeight] = useState<number>(0);
    const [delay] = useState<number>(Math.random() * 1);
    useEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.offsetHeight); 
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className={`absolute ${positionClass} top-0 h-screen w-[2px] -z-30 line-background overflow-hidden`}
        >
            <div className="absolute top-0 h-20 w-full z-10 pointer-events-none bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl" />
            <div className="absolute bottom-0 h-10 w-full z-10 pointer-events-none bg-gradient-to-b from-black/30 to-transparent backdrop-blur-xl" />

            {height > 0 && (
                <motion.div
                    className="w-full h-[80px] bg-[#f1f1f1]/10 rounded-full"
                    animate={{
                        y: [0, height - 40, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "backInOut",
                        delay,
                    }}
                />
            )}
        </div>
    );
};

const AnimatedLines = () => {
    return (
        <>
            {["left-0", "left-[160px]", "right-0", "right-[160px]"].map(
                (pos, idx) => (
                    <LineWithBeam key={idx} positionClass={pos} />
                )
            )}
        </>
    );
};

export default AnimatedLines;