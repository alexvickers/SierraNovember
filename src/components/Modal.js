import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ image, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.85)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          padding: "1rem",
          overflow: "hidden",
        }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GatsbyImage
            image={image}
            alt="Modal image"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              display: "block",
            }}
            imgStyle={{
              objectFit: "contain",
            }}
          />
        </motion.div>

        <button
          onClick={onClose}
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            background: "transparent",
            color: "#fff",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          aria-label="Close modal"
        >
          &times;
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
