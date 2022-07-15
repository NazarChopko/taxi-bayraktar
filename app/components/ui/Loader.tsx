import { FC } from "react";
import Image from "next/image";
import backImage from "../../assets/images/ukraine.png";
import drone from "../../assets/images/drone.png";
import taxiHat from "../../assets/images/taxiHat.png";

const Loader: FC = () => {
  return (
    <div className="w-screen h-screen ">
      <Image src={backImage} alt="preloader" priority={true} />
      <div className="absolute top-[16%] w-[100%] h-[200px] ">
        <img
          className="drone_icon relative left-[65%] top-10 "
          style={{
            width: "60px",
            height: "60px",
          }}
          src={taxiHat.src}
          alt="drone_taxi"
        />
      </div>

      <div className="absolute top-[50%] w-[100%] h-[200px] ">
        <img
          className="drone_icon relative left-[39%] top-6 animate-spin-slow "
          style={{
            width: "100px",
            height: "100px",
          }}
          src={drone.src}
          alt="drone_taxi"
        />
      </div>
      <div
        style={{ textShadow: "#FC0 3px 0 10px" }}
        className="text-white text-center text-[50px] font-extrabold absolute top-[25%] left-[18%] leading-[68px]"
      >
        BAYRAKTAR <br /> TAXI
      </div>
    </div>
  );
};

export default Loader;
