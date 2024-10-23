import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import noTalkTauh from "./assets/talk-tuah.png";
import hopper form "./assets/hopper.png"
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
  const ref = useRef(null);
  const [defaultPos, setDP] = React.useState(-1);
  if (defaultPos < 0 && slide > -1) {
    //@ts-expect-error
    setDP(ref.current?.offsetTop);
  }
  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0.7, x: -50 }}
      animate={{
        opacity: 1,
        //@ts-ignore
        y: slide > -1 ? (slide == 0 ? defaultPos - 20 : defaultPos) : 0,
      }}
      transition={{ duration: 1.5 }}
      className={`${
        slide > -1 ? " md:text-5xl text-3xl" : "md: text-6xl text-4xl"
      } font-bold inline-flex ${slide == 1 ? "mt-5" : ""} duration-500 linear`}
    >
      {" "}
      <motion.img
        src={noTalkTauh}
        onClick={() => setSlide(0)}
        className={`mr-5 lg:ml-20 ${
          slide === -1 ? "animate-pulse cursor-pointer" : ""
        } ${slide > 0 ? "opacity-50" : ""} w-20 h-20`}
        width={50}
        height={50}
        whileHover={{ scale: 1.1 }}
        whileFocus={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      ></motion.img>{" "}
      {/* -{" "} */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={slide == 1 ? { x: -350, y: -400 } : {}}
        transition={{ duration: 0.5 }}
      >
        <MdEmail
          className={`mr-5 ml-5  ${
            slide === 0 ? "animate-pulse cursor-pointer" : ""
          } ${slide === 1 ? "text-9xl" : ""}`}
          style={slide > 1 ? { color: "var(--overlay0)" } : {}}
          onClick={() => setSlide(1)}
        />
        {slide == 1 && <img src={hopper} />}
      </motion.div>{" "}
      {/* -{" "} */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={slide == 2 ? { x: 550, y: -400 } : {}}
        transition={{ duration: 0.5 }}
      >
        <IoFunnelSharp
          style={slide > 2 ? { color: "var(--overlay0)" } : {}}
          onClick={() => setSlide(2)}
          className={`mr-5 ml-5  ${
            slide === 1 ? "animate-pulse cursor-pointer" : ""
          } ${slide === 2 ? "text-9xl" : ""}`}
        />
        {slide == 2 && (
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/231025171028-07-house-speaker-race-102423.jpg?c=original"
            className="w-1/2 h-1/2"
          />
        )}
      </motion.div>{" "}
      {/* -{" "} */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={slide == 3 ? { x: -200, y: -400 } : {}}
        transition={{ duration: 0.5 }}
      >
        <FaMarker
          style={slide > 3 ? { color: "var(--overlay0)" } : {}}
          onClick={() => setSlide(3)}
          className={`mr-5 ml-5  ${
            slide === 2 ? "animate-pulse cursor-pointer" : ""
          } ${slide == 3 ? "text-9xl" : ""}`}
        />
        {slide == 3 && (
          <img
            src="https://www.congressionalinstitute.org/wp-content/uploads/2021/02/schumer_mcconnell-1024x683.png"
            className="w-1/2 h-1/2"
          />
        )}
      </motion.div>{" "}
      {/* -{" "} */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={slide == 4 ? { x: 350, y: -400 } : {}}
        transition={{ duration: 0.5 }}
      >
        <RiFilePaperLine
          style={slide > 4 ? { color: "var(--overlay0)" } : {}}
          onClick={() => setSlide(4)}
          className={`mr-5 ml-5  ${
            slide === 3 ? "animate-pulse cursor-pointer" : ""
          } } ${slide == 4 ? "text-9xl" : ""}`}
        />
        {slide == 4 && (
          <img
            src="https://media3.giphy.com/media/23D8NR89IoZUC9jgsO/giphy.gif?cid=6c09b952wwjpu17i0m3vgijyy3n5ctljgj5kdatcctw1lof5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
            className="w-1/2 h-1/2"
          />
        )}
      </motion.div>{" "}
      {/* -{" "} */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={slide == 5 ? { x: -400, y: -400 } : {}}
        transition={{ duration: 0.5 }}
      >
        <GiCongress
          onClick={() => setSlide(5)}
          style={slide > 5 ? { color: "var(--overlay0)" } : {}}
          className={`mr-5 ml-5 ${
            slide === 4 ? "animate-pulse cursor-pointer" : ""
          } ${slide == 5 ? "text-9xl" : ""}`}
        />
        {slide == 5 && (
          <img
            src="https://compote.slate.com/images/a14da45b-d7a4-4233-bbaa-0e4872c3d12c.jpg?width=1200"
            className="w-1/2 h-1/2"
          />
        )}
      </motion.div>{" "}
      {/* -{" "} */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={slide == 6 ? { x: 50, y: -400 } : {}}
        transition={{ duration: 0.5 }}
      >
        <GoLaw
          onClick={() => setSlide(6)}
          style={slide > 6 ? { color: "var(--overlay0)" } : {}}
          className={`ml-5  ${
            slide === 5 ? "animate-pulse cursor-pointer" : ""
          } ${slide == 6 ? "text-9xl" : ""}`}
        />
        {slide == 6 && (
          <img
            src="https://media.istockphoto.com/id/1409304410/photo/dramatic-view-of-the-united-states-capitol-building-in-washington-dc.jpg?s=612x612&w=0&k=20&c=ddWqTW-8V-1DQ06fZQLq5e9vWemWGCYNVfu9G_SA2g8="
            className="w-1/2 h-1/2"
          />
        )}
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
          <motion.div
            animate={{
              y: -50,
              x: slide % 2 == 0 ? -330 : 330,
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
                    className="md:text-xl text-sm"
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
      <IconBar setSlide={setSlide} slide={slide} />
    </motion.div>
    // </AnimatePresence>
  );
}

export default App;
