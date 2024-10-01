import background from "../assets/offers_bg.png";
import product from "../assets/Crystal_Agate.png";
const Offers = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover bg-center mt-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex ">
        <div className="flex flex-col w-1/2 items-end mt-20">
          <h3 className="text-5xl text-[#31546D]">BEST PRICE</h3>
          <h1 className="text-7xl font-semibold text-[#31546D]">
            Agate Phone Grip
          </h1>
          <div className="flex items-center mt-10 gap-8">
            <p className="text-2xl text-[#41A0B7] line-through">44.50$</p>
            <p className="text-7xl font-semibold text-red-500">19.50$</p>
          </div>
          <p className="w-7/12 text-right mt-5 text-[#31546D]">
            These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc.!
            Just gently squeeze the sides to remove and swap out with another
            color or design!
          </p>
          <button className="mt-8 px-14 py-5 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] hover:shadow-xl ">
            BUY NOW
          </button>
        </div>
        <div className="w-1/2 flex items-center justify-center relative">
          <div
            className="absolute left-28 bg-white rounded-full w-[650px] h-[650px] flex items-center justify-center "
            style={{ boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.08)" }}
          >
            <div
              className=" bg-white w-[430px] h-[430px] rounded-full flex items-center justify-center "
              style={{ boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.08)" }}
            >
              <img src={product} alt="product" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
