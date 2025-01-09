"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import animationData from "./loading-animation.json";

const Loading = () => {
  const loadingAnimation = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie lottieRef={loadingAnimation} animationData={animationData} />
    </div>
  );
};
export default Loading;
