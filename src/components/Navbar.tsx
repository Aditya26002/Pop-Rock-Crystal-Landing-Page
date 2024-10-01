import logo from "../assets/Logo.png";
import basket from "../assets/basket_icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  text-white h-16 w-full pt-16 px-12">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-between gap-44">
        <div className="flex gap-12">
          <p className="text-lg">Home</p>
          <p className="text-lg">Shop</p>
          <p className="text-lg">About Us</p>
          <p className="text-lg">Help</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <p className="bg-[#ff2b77] rounded-full text-[9px] h-[14px] w-[14px] pt-[1px] text-center">
            00
          </p>
          <img src={basket} alt="" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
