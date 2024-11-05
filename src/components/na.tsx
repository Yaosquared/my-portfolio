"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import animationData from "./wrench-animation.json";

const NotAvail = () => {
  const wrenchAnimation = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Lottie lottieRef={wrenchAnimation} animationData={animationData} />
      <h2 className="font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Site under maintenance.
      </h2>
    </div>
  );
};
export default NotAvail;
