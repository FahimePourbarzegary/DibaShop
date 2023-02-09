import Layout from "../Layout/Layout";
import React, { useState, useEffect, HtmlHTMLAttributes } from "react";
import CardProduct from "../Components/CardProduct";
function FilterPage() {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [check, setCheck] = useState({
    Necklaces: false,
    earrings: false,
    ring: false,
    bracelet: false,
    gold: false,
    brass: false,
    metal: false,
    steal: false,
    stealDesignGold: false,
  });
  const [price, setPrice] = useState(1000000);
  const [dragStarted, setDragStarted] = useState(false);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    if (dragStarted && !dragging) {
      setDragging(true);
    }
  }, [price, dragStarted, dragging]);

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheck = { ...check, [e.target.name]: e.target.checked };
    setCheck(newCheck);
  };
  return (
    <Layout>
      {" "}
      <section className=" relative flex flex-col md:flex-row ">
        <div className=" w-full  p-4 pr-8  md:w-60 lg:w-96 bg-slate-900">
          {/*Select material  */}
          <div>
            <p className=" font-semibold text-xs "> جنس </p>
            <div className="flexflex-col justify-center items-start p-2 mt-2">
              <div className="flex items-center mb-4">
                <input
                  id="gold"
                  type="checkbox"
                  checked={check.gold}
                  name="gold"
                  value="طلا"
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 accent-primary-400   bg-gray-100 rounded border-gray-300 focus:ring-primary-300  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="gold"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  طلا
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="brass"
                  type="checkbox"
                  name="brass"
                  value=" برنجی"
                  onChange={(e) => onCheck(e)}
                  checked={check.brass}
                  className="w-4 h-4  accent-primary-400   bg-gray-100 rounded border-gray-300 focus:ring-primary-300  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="brass"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  برنجی
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="steal"
                  type="checkbox"
                  name="steal"
                  value="استیل"
                  checked={check.steal}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 accent-primary-400 bg-gray-100 rounded border-gray-300 focus:ring-primary-300  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="steal"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  استیل
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="metal"
                  type="checkbox"
                  name="metal"
                  value="فلز"
                  checked={check.metal}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 accent-primary-400 bg-gray-100 rounded border-gray-300 focus:ring-primary-300  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="metal"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  فلز
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="stealDesignGold"
                  type="checkbox"
                  name="stealDesignGold"
                  value="استیل طرح طلا"
                  checked={check.stealDesignGold}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 accent-primary-400 bg-gray-100 rounded border-gray-300 focus:ring-primary-300  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="stealDesignGold"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  استیل طرح طلا
                </label>
              </div>
            </div>
          </div>
          {/*Select category */}
          <div>
            <p className=" font-semibold text-xs "> ظرفیت</p>
            <div className="flexflex-col justify-center items-start p-2 mt-2">
              <div className="flex items-center mb-4">
                <input
                  id="2"
                  type="checkbox"
                  name="Necklaces"
                  checked={check.Necklaces}
                  value="2"
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 accent-primary-400 bg-gray-100 rounded border-gray-300 focus:ring-primary-300  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="2"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  گردنبند
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="1"
                  type="checkbox"
                  name="earrings"
                  value="1"
                  checked={check.earrings}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 accent-primary-400 bg-gray-100 rounded border-gray-300 focus:ring-primary-300  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="1"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  گوشواره
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="3"
                  type="checkbox"
                  name="ring"
                  value="3"
                  checked={check.ring}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 accent-primary-400 bg-gray-100 rounded border-gray-300 focus:ring-primary-300  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="3"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  انگشتر
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="4"
                  type="checkbox"
                  name="bracelet"
                  value="4"
                  checked={check.bracelet}
                  onChange={(e) => onCheck(e)}
                  className="w-4 h-4 accent-primary-400 bg-gray-100 rounded border-gray-300 focus:ring-primary-300  ml-2 focus:ring-2"
                />
                <label
                  htmlFor="4"
                  className="ml-2  font-semibold text-gray-600 "
                >
                  دستبند
                </label>
              </div>
            </div>
          </div>
          {/* Select Range of price  */}
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-xs font-semibold  "
            >
              قیمت
            </label>
            <input
              id="price"
              type="range"
              min="1"
              max="1000000"
              step="500"
              value={price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPrice(parseInt(e.target.value))
              }
              onMouseDown={() => {
                setDragStarted(true);
              }}
              onMouseUp={() => {
                setDragStarted(false);
                setDragging(false);
              }}
              className=" w-48 h-3 rounded-lg cursor-pointer ring-1 hover:bg-slate-600 outline-none form-range accent-primary-400"
            />
            <p> {price} تومان</p>
          </div>
        </div>
        {/**Shows product */}
        <section className="py-4 w-full">
          <div
            className=" w-full p-6 grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-3"
          >
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default FilterPage;
