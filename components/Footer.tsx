"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      ref={ref}
      className="my-4 text-center text-white/70"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      © {currentYear} Ayush Dixit
    </motion.div>
  );
};

export default Footer;
