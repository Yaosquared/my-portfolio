import { Inknut_Antiqua } from "next/font/google";
import "./preloader.css";

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const PreLoader = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center">
      <div
        className={`${inknutAntiqua.className} container
        `}
      >
        <h2 className="first">y</h2>
        <h2 className="second leading-none">2</h2>
      </div>
    </div>
  );
};

export default PreLoader;
