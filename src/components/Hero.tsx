import Navbar from "./Navbar";
import hero from "../assets/hero_banner.png";
import crystal from "../assets/Crystal_Agate.png";
import r_arrow from "../assets/bi_arrow-right-square-fill -.png";
import l_arrow from "../assets/bi_arrow-left-square-fill.png";
import scroll from "../assets/Scroll Down.png";

const Hero = () => {
  return (
    <div
      className="w-full h-[125vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Navbar />
      {/* CARD ELEMENT */}
      <div className=" mx-12 flex gap-2">
        {/* TEXT */}
        <div className="mt-52 flex flex-col gap-14 text-darkblue w-1/2">
          <h1 className="text-5xl text-white">
            Welcome to <br />
            <span className="text-6xl font-semibold">
              Pop Rock Crystal Shop!
            </span>
          </h1>
          <p className="w-3/5">
            Here you will find unique phone accessories, crystals, jewelry and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </p>
          <div className="flex items-center gap-12">
            <button className="bg-white px-10 py-4 rounded-2xl font-semibold">
              SHOP NOW
            </button>
            <button>about us</button>
          </div>
        </div>
        {/* CARD */}
        <div className="w-1/2 mt-24 pl-20">
          {/* CARD */}
          <div className="bg-white flex flex-col items-center pt-20 pb-10 rounded-[40px] relative shadow-xl">
            <div className="absolute left-0 bg-[#8A93E5] text-white rounded-r-lg py-2 px-5 ">
              New Lot
            </div>
            <div className="flex items-center justify-center w-96 h-96">
              <img src={crystal} alt="" />
            </div>
            <div className="h-[2px] w-1/5 mt-12 bg-gray-200" />
            <div className="mt-5 text-2xl text-gray-500">
              CRYSTAL AGATE PHONE GRIP -{" "}
              <span className="text-[#317189] font-semibold">18.99$</span>
            </div>
          </div>
          {/* SLIDER */}
          <div className="flex justify-center items-center mt-10 gap-7">
            <div className="antialiased">
              <img src={l_arrow} alt="" width={30} height={30} />
            </div>
            <div className="flex gap-3">
              <div className="bg-[#8A93E5] w-[16px] h-[16px] rounded-full" />
              <div className="bg-[#D7DBFF] w-[16px] h-[16px] rounded-full" />
              <div className="bg-[#D7DBFF] w-[16px] h-[16px] rounded-full" />
              <div className="bg-[#D7DBFF] w-[16px] h-[16px] rounded-full" />
              <div className="bg-[#D7DBFF] w-[16px] h-[16px] rounded-full" />
              <div className="bg-[#D7DBFF] w-[16px] h-[16px] rounded-full" />
              <div className="bg-[#D7DBFF] w-[16px] h-[16px] rounded-full" />
            </div>
            <div className="antialiased">
              <img src={r_arrow} alt="" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
      {/* SCROLL DOWN ICON */}
      <div className="w-full flex justify-center items-center gap-5 antialiased">
        <img src={scroll} alt="" />
        <p className="text-[#317189] font-semibold ">scroll down</p>
      </div>
    </div>
  );
};

export default Hero;
