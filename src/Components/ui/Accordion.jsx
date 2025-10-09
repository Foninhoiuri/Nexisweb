import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Accordion({ children }) {
  return <div className="w-full divide-y divide-gray-200">{children}</div>;
}

export function AccordionItem({ children }) {
  return <div className="py-2">{children}</div>;
}

export function AccordionTrigger({ children, open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between py-2 font-medium text-gray-800 hover:text-blue-600"
    >
      {children}
      <motion.span animate={{ rotate: open ? 180 : 0 }}>
        <ChevronDown size={18} />
      </motion.span>
    </button>
  );
}

export function AccordionContent({ children, open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden text-gray-600"
        >
          <div className="py-2">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
