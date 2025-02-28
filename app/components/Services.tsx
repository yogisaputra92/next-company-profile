import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { PiHairDryerDuotone } from "react-icons/pi";

export default function Services() {
  return (
    <div>
        <h1 className="bg-white w-full text-5xl font-bold text-black text-center p-10">SERVICE</h1>
      <div className="w-full inline-flex text-black mx-auto bg-white items-center justify-center p-20">
        <div className="mx-auto bg-gray-100 border p-10 rounded-md">
          <FaScrewdriverWrench size={50} fill="gray" />
          <h1>Screw</h1>
          <p>hallo</p>
        </div>
        <div className="mx-auto bg-gray-100 border p-10 rounded-md shadow-sm">
          <FaGear size={50} fill="gray" />
          <h1>Gear</h1>
          <p>hallo</p>
        </div>
        <div className="mx-auto bg-gray-100 border p-10">
          <PiHairDryerDuotone size={50} fill="gray" />
          <h1>Dryer</h1>
          <p>hallo</p>
        </div>
        <div className="mx-auto bg-gray-100 border p-10">
          <h1>Screw</h1>
          <p>hallo</p>
        </div>
      </div>
    </div>
  );
}
