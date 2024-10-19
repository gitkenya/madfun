"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Mockup(props: any) {
  return (
    <div className="mockup-phone bg-slate-300 dark:bg-slate-700 border-slate-400/20 dark:border-slate-600">
      <div className="camera bg-slate-300 dark:bg-slate-700"></div>
      <div className="display bg-slate-100 dark:bg-slate-500">
        <div className="artboard artboard-demo phone-1 bg-slate-100 dark:bg-slate-800">
          <div className="flex flex-col items-center justify-center gap-4">
            <motion.div
              animate={{
                x: 0,
                scale: [1, 1.5, 1],
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: 0,
              }}
              className="flex flex-row items-center justify-center gap-4"
            >
              <Image
                className="rounded"
                src="/assets/img/logos/logo.svg"
                width={80}
                height={80}
                alt="Madfun"
              />
            </motion.div>
            <div className="text-slate-500 dark:text-slate-400 text-center">
              Your Event Preview
              <br /> will appear here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
