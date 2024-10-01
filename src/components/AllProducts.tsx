import d_arr from "../assets/down_triangle.png";
import prod_img from "../assets/Crystal_Agate.png";

const products = [
  {
    key: 1,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
  {
    key: 2,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
  {
    key: 3,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
  {
    key: 4,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
  {
    key: 5,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
  {
    key: 6,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
  {
    key: 7,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
  {
    key: 8,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
  {
    key: 9,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
  {
    key: 10,
    image: prod_img,
    name: "CRYSTAL AGATE PHONE GRIP",
    price: "18.99$",
  },
];

const AllProducts = () => {
  return (
    <div className="flex flex-col items-center mt-10 gap-10 mx-12">
      <h1 className="text-5xl font-semibold text-darkblue">All Products</h1>

      <div className="flex justify-start w-full text-lg font-semibold text-[#9AB0C0] gap-32">
        <button className="flex items-center gap-2">
          Filter: <span className="text-darkblue">All Products</span>
          <img src={d_arr} alt="" />
        </button>
        <button className="flex items-center gap-2">
          Sort: <span className="text-darkblue">Best Selling</span>{" "}
          <img src={d_arr} alt="" />
        </button>
      </div>
      {/* CARD CONTAINER */}
      <div className="flex flex-wrap gap-5">
        {products.slice(0, 8).map((product) => (
          <div
            key={product.key}
            className="flex flex-col items-center ring-2 ring-gray-100 rounded-[30px] px-6 py-10 gap-5 hover:ring-0 hover:shadow-2xl hover:scale-105 transition-all ease-in-out duration-300"
          >
            <img src={product.image} alt="" width={230} height={230} />
            <div className="flex flex-col items-center">
              <p className="text-xl">{product.name}</p>
              <p className="text-xl font-semibold text-[#317189]">
                {product.price}
              </p>
            </div>
            <button className="ring-4 ring-[#6FB4FF] text-[#6FB4FF] px-14 py-4 rounded-xl text-sm font-semibold hover:text-white hover:ring-0 hover:bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] hover:shadow-xl transition-all ease-in-out duration-300">
              BUY NOW
            </button>
          </div>
        ))}
      </div>
      <button className="ring-2 ring-[#6FB4FF] text-[#6FB4FF] px-10 py-3 my-5 rounded-2xl font-semibold hover:text-white hover:ring-0 hover:bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] hover:shadow-xl transition-all ease-in-out duration-300">
        View All
      </button>
    </div>
  );
};

export default AllProducts;
