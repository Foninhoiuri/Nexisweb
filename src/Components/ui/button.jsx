import * as React from "react";
import { motion } from "framer-motion";

export function Button({ children, className = "", variant = "primary", ...props }) {
  const base = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant] || variant} px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
