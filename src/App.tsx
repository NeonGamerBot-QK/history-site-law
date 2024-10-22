import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import noTalkTauh from "./assets/talk-tuah.png";
import { MdEmail } from "react-icons/md";
import { IoFunnelSharp } from "react-icons/io5";
import { FaMarker } from "react-icons/fa";
import { RiFilePaperLine } from "react-icons/ri";
import { GiCongress } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { text } from "./content";
const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
function IconBar({ setSlide, slide }: any) {
  return (
    <motion.h1
      initial={{ opacity: 0.7, x: -50 }}
      animate={{
        opacity: 1,
        y: slide > -1 ? window.screen.height - 600 : 0,
      }}
      transition={{ duration: 1.5 }}
      className={`${
        slide > -1 ? "text-5xl" : "text-6xl"
      } font-bold inline-flex`}
    >
      {" "}
      <motion.img
        src={noTalkTauh}
        onClick={() => setSlide(0)}
        className={`mr-5 -ml-5 ${
          slide === -1 ? "animate-pulse cursor-pointer" : ""
        } ${slide > 0 ? "opacity-50" : ""}`}
        width={50}
        height={50}
        whileHover={{ scale: 1.1 }}
        whileFocus={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      ></motion.img>{" "}
      -{" "}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        <MdEmail
          className={`mr-5 ml-5 5 ${
            slide === 0 ? "animate-pulse cursor-pointer" : ""
          }`}
          style={slide > 1 ? { color: "var(--overlay0)" } : {}}
          onClick={() => setSlide(1)}
        />
      </motion.div>{" "}
      -{" "}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        <IoFunnelSharp
          style={slide > 2 ? { color: "var(--overlay0)" } : {}}
          onClick={() => setSlide(2)}
          className={`mr-5 ml-5 5 ${
            slide === 1 ? "animate-pulse cursor-pointer" : ""
          }`}
        />
      </motion.div>{" "}
      -{" "}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        <FaMarker
          style={slide > 3 ? { color: "var(--overlay0)" } : {}}
          onClick={() => setSlide(3)}
          className={`mr-5 ml-5 5 ${
            slide === 2 ? "animate-pulse cursor-pointer" : ""
          }`}
        />
      </motion.div>{" "}
      -{" "}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        <RiFilePaperLine
          style={slide > 4 ? { color: "var(--overlay0)" } : {}}
          onClick={() => setSlide(4)}
          className={`mr-5 ml-5 5 ${
            slide === 3 ? "animate-pulse cursor-pointer" : ""
          }`}
        />
      </motion.div>{" "}
      -{" "}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        <GiCongress
          onClick={() => setSlide(5)}
          style={slide > 5 ? { color: "var(--overlay0)" } : {}}
          className={`mr-5 ml-5 5 ${
            slide === 4 ? "animate-pulse cursor-pointer" : ""
          }`}
        />
      </motion.div>{" "}
      -{" "}
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
        <GoLaw
          onClick={() => setSlide(6)}
          style={slide > 6 ? { color: "var(--overlay0)" } : {}}
          className={`mr-5 ml-5 5 ${
            slide === 5 ? "animate-pulse cursor-pointer" : ""
          }`}
        />
      </motion.div>
    </motion.h1>
  );
}
function App() {
  const [slide, setSlide] = React.useState(-1);
  // req fullscreen
  return (
    // <AnimatePresence>

    <motion.div
      initial={{ opacity: 0.05 }}
      transition={{ duration: 0.4 }}
      animate={{ opacity: 1 }}
      className="hero min-h-screen"
      style={{ background: "var(--base)" }}
    >
      <div className="hero-content text-center">
        <div className="max-w-xl">
          {/* <img src={noTalkTauh}width={50} height={50} className='mr-5 -ml-5' /> */}
          <IconBar setSlide={setSlide} slide={slide} />
          <motion.div
            animate={{
              y: -50,
              x: slide % 2 == 0 ? -370 : 370,
              opacity: 1,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
            initial={{
              x: slide % 2 == 0 ? 10000 : -10000,
              opacity: 0,
              y: slide % 2 == 0 ? 10000 : -10000,
            }}
          >
            {slide !== -1 && (
              <AnimatePresence>
                <motion.div>
                  {/* <motion.h1 className="font-bold text-3xl">Title</motion.h1> */}
                  <p
                    className="text-xl"
                    // variants={variants}
                    // initial="initial"
                    // animate="animate"
                    // exit="exit"
                    key={slide}
                    // transition={{ duration: 1 }}
                  >
                    {text[slide]}
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
          {/* <p className="py-6">
Default react template
      </p> */}
          {/* <button className="btn btn-primary">src/App.tsx</button> */}
        </div>
      </div>
    </motion.div>
    // </AnimatePresence>
  );
}

export default App;
