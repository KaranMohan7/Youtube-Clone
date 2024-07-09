import { motion, useScroll } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className='w-full fixed top-0 right-0 left-0 h-2 bg-red-600 '
        style={{ scaleX: scrollYProgress }}
      />

    </>
  );
}