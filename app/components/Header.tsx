import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import TiltedCard from "@/components/Components/TiltedCard/TiltedCard";
import BlurText from "@/components/TextAnimations/BlurText/BlurText";

export default function Header() {
  return (
    <div className=" lg:h-screen grid grid-col-1 lg:grid-rows-none lg:grid-cols-12 bg-gray-200 text-black">
      <div className="lg:col-span-6 flex flex-col justify-center items-start gap-4 p-5 md:p-10">
        <div className="">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className=" text-3xl md:text-6xl lg:text-6xl text-[#2596be] font-bold ">
              Boge Official
            </div>
          </AnimatedContent>
        </div>

        <div className="">
          <BlurText
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum alias repellat iusto in, cupiditate, ullam dignissimos dicta eveniet autem ipsa minus vitae illo ad ipsam nostrum! Vel rerum itaque dolor? Magni at modi alias dolorum cum doloremque accusamus id esse corrupti numquam odit, ut blanditiis consequuntur perspiciatis neque asperiores voluptatum magnam necessitatibus voluptatibus quas tempora."
            delay={5}
            animateBy="words"
            direction="top"
            className="text-xs lg:text-base md:text-base mb-8"
          />
        </div>
        <div>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.1}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <button className="bg-[#2596be] text-white font-semibold text-base p-2 lg:px-7 lg:py-2 lg:text-sm rounded-md">
              Contact Us
            </button>
          </AnimatedContent>
        </div>
      </div>
      <div className="lg:col-span-6 flex flex-col justify-center ">
        <div id="card" className="border-cyan-500 mx-auto">
          <AnimatedContent
            distance={75}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.8}
            threshold={0.2}
          >
            <img
              src="https://clevelandcompressors.com.au/wp-content/uploads/cc-boge-slf-screw-compressor-30kw.png"
              alt=""
              className="lg:size-auto md:size-3/5 sm:size-3/5 mx-auto"
            />
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}
