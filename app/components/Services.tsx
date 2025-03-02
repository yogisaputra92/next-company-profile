// import Image from "next/image";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { PiHairDryerDuotone } from "react-icons/pi";

export default function Services() {
  return (
    <div className="w-full bg-white p-10 md:p-32 sm:p-14 sm:px-40">
      <h1 className="p-5 text-center text-[#2596be] text-5xl font-bold">
        Services
      </h1>
      <div className="grid grid-col-1 gap-4 md:flex md:gap-5 text-center">
        <div className="card size-auto grow-3 bg-[#2596be] text-white p-4 items-center gap-3">
          <FaScrewdriverWrench size={50} />
          <h1>Srew</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum
            in voluptates
          </p>
        </div>
        <div className="card size-auto grow-3 bg-[#2596be] text-white p-4 items-center gap-3">
          <FaGear size={50} />
          <h1>Gear</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum
            in voluptates
          </p>
        </div>
        <div className="card size-auto grow-3 bg-[#2596be] text-white p-4 items-center gap-3">
          <PiHairDryerDuotone size={50} />
          <h1>Srrew</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum
            in voluptates
          </p>
        </div>
      </div>
    </div>
  );
}
