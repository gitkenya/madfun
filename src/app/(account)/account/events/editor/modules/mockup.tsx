"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAccount } from "@/providers/account/account";

export default function Mockup(props: any) {
  const { newEventData, setNewEventData } = useAccount();
  const hasAnyData = Object.values(newEventData).some((value) => value);
  return (
    <div className="mockup-phone bg-slate-300 dark:bg-slate-700 border-slate-400/20 dark:border-slate-600">
      <div className="camera bg-slate-300 dark:bg-slate-700"></div>
      <div className="display bg-slate-100 dark:bg-slate-500">
        <div className="artboard artboard-demo phone-1 bg-slate-100 dark:bg-slate-800 p-1.5">
          {hasAnyData ? (
            <div className="w-full h-full flex flex-col">
              <div className="relative w-full h-[240px] bg-slate-200 dark:bg-slate-700/20 rounded-t-[2.4rem]">
                {newEventData?.event_poster && (
                  <Image
                    className="object-cover rounded-t-[2.4rem]"
                    src={newEventData.event_poster.value}
                    fill
                    alt="Madfun Event Poster"
                  />
                )}
              </div>
              <div className="py-3 px-3 bg-slate-200/50 dark:bg-slate-700/60 h-[calc(100%-240px)] rounded-b-[2.4rem]">
                {newEventData?.event_title ? (
                  <div className="font-bold text-slate-700 dark:text-slate-400">
                    {newEventData.event_title}
                  </div>
                ) : (
                  <div
                    className={`w-[80%] h-6 flex flex-col justify-center bg-slate-300/60 dark:bg-slate-800/60 animate-pulse`}
                  ></div>
                )}
                <div className="w-[100%] flex flex-col justify-center mt-2">
                  {newEventData?.event_description ? (
                    <div className="text-xs text-slate-700 dark:text-slate-400">
                      <h4 className="font-semibold text-xs">
                        Event description
                      </h4>
                      <p className="line-clamp-3">
                        {newEventData.event_description}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div
                        className={`w-[30%] h-3 flex justify-center items-center bg-slate-300/60 dark:bg-slate-800/60 mb-1 animate-pulse`}
                      ></div>
                      <div
                        className={`w-full h-3 flex justify-center items-center bg-slate-300/60 dark:bg-slate-800/60 mb-1 animate-pulse`}
                      ></div>
                      <div
                        className={`w-[90%] h-3 flex justify-center items-center bg-slate-300/60 dark:bg-slate-800/60 mb-1 animate-pulse`}
                      ></div>
                      <div
                        className={`w-[60%] h-3 flex justify-center items-center bg-slate-300/60 dark:bg-slate-800/60 mb-1 animate-pulse`}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
