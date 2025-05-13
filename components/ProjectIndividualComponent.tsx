"use client";
import React, { useRef, useEffect } from "react";
import { Safari } from "./magicui/safari";
import {
    motion,
    useScroll,
    useTransform,
    useInView,
} from "motion/react";

const ProjectIndividualComponent = ({
    setIndex,
    myIndex,
}: {
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    myIndex: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const hasSet = useRef(false);
    const isInView = useInView(ref, { amount: 0.8 });
    useEffect(() => {
        if (isInView && !hasSet.current) {
            setIndex(myIndex);
            hasSet.current = true;
        } else if (!isInView && hasSet.current) {
            hasSet.current = false;
        }
    }, [isInView, myIndex, setIndex]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 60 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.7, scale: 0.95, y: 30 }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
            className="w-full items-center"
        >
            <Safari
                url="https://chatapp.ayushdixit.site"
                imageSrc="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q="
                className="size-full"
            />
        </motion.div>
    );
};

export default ProjectIndividualComponent;
