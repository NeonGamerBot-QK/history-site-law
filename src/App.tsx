import React from 'react';
import { AnimatePresence, motion } from "framer-motion"
import noTalkTauh from './assets/talk-tuah.png'
import { MdEmail } from "react-icons/md";
import { IoFunnelSharp } from "react-icons/io5";
import { FaMarker } from "react-icons/fa";
import { RiFilePaperLine } from "react-icons/ri";
import { GiCongress } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
function App() {

  return (
    // <AnimatePresence>

<motion.div initial={{ opacity: 0.05 }} transition={{ duration: 0.5 }}  animate={{ opacity: 1 }} className="hero min-h-screen" style={{ background: "var(--base)"}}>
  <div className="hero-content text-center">
    <div className="max-w-xl">
      {/* <img src={noTalkTauh}width={50} height={50} className='mr-5 -ml-5' /> */}
      <motion.h1 initial={{ opacity: .70 }}animate={{ opacity: 1}} transition={{ duration: 1.5 }} className="text-6xl font-bold inline-flex"> <motion.img   src={noTalkTauh} className='mr-5 -ml-5 animate-pulse' width={50} height={50}></motion.img> -  <MdEmail className='mr-5 ml-5' /> - <IoFunnelSharp className='mr-5 ml-5'  /> - <FaMarker className='mr-5 ml-5' />  - <RiFilePaperLine className='mr-5 ml-5' /> - <GiCongress className='mr-5 ml-5' /> - <GoLaw className='mr-5 ml-5' /></motion.h1>
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
