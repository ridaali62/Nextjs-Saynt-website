import React from "react";
import { motion } from "framer-motion";

const Lamp: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center mx-auto mt-[250px] mb-[20px] z-0">
      <motion.div
        initial={{ width: "250px" }}
        animate={{ width: "400px" }}
        transition={{ duration: 1, type: "spring" }}
        className="absolute inset-auto right-1/2 h-52 overflow-visible bg-[conic-gradient(from_70deg_at_center_top,_#00bfff,_transparent,_transparent)] text-white"
      >
        <div className="absolute left-0 bottom-0 z-20 w-full h-40 bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
        <div className="absolute left-0 bottom-0 z-20 w-40 h-full bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]"></div>
      </motion.div>
      <motion.div
        initial={{ width: "250px" }}
        animate={{ width: "400px" }}
        transition={{ duration: 1, type: "spring" }}
        className="absolute inset-auto left-1/2 h-52 bg-[conic-gradient(from_290deg_at_center_top,_transparent,_transparent,_#00bfff)] text-white"
      >
        <div className="absolute right-0 bottom-0 z-20 w-full h-40 bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]"></div>
        <div className="absolute right-0 bottom-0 z-20 w-40 h-full bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]"></div>
      </motion.div>
    </div>
  );
};

export default Lamp;
