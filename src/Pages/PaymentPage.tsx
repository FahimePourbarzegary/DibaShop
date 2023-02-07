import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Components/Button";

function PaymentPage() {
  return (
    <div className=" w-full  flex flex-col  justify-center items-center p-10">
      {/* BuyBox section */}
      <div className="w-full  p-8 px-10 border rounded-lg flex flex-col gap-4">
        {/* product Detail */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex justify-between items-center w-full">
            {" "}
            <img
              src="https://s2.uupload.ir/files/anghoshtaresezar_9odt.jpg"
              alt="product-img"
              className=" w-20 h-20"
            />
            <p>اسم</p>
            <p>قیمت</p>
          </div>
          <div className="flex justify-around items-center w-full">
            {" "}
            <div className="flex gap-2 items-center ">
              <button className=" text-center  p-1 px-3 rounded-md cursor-pointer bg-primary-100 text-lg  font-vazirBold text-dark hover:bg-primary-300 ">
                +
              </button>
              <input
                type="text"
                className=" text-center  p-1 px-3 rounded-md cursor-pointer bg-primary-100 text-lg  font-vazirBold text-dark hover:bg-primary-300 w-1/6"
                value="15"
              />

              <button className=" text-center  p-1 px-3 rounded-md cursor-pointer bg-primary-100 text-lg  font-vazirBold text-dark hover:bg-primary-300 ">
                -
              </button>
            </div>
            <div>
              <FontAwesomeIcon icon={faTrash} className="" />
            </div>
          </div>
        </div>
        {/* product Detail */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex justify-between items-center w-full">
            {" "}
            <img
              src="https://s2.uupload.ir/files/anghoshtaresezar_9odt.jpg"
              alt="product-img"
              className=" w-20 h-20"
            />
            <p>اسم</p>
            <p>قیمت</p>
          </div>
          <div className="flex justify-around items-center w-full">
            {" "}
            <div className="flex gap-2 items-center ">
              <button className=" text-center  p-1 px-3 rounded-md cursor-pointer bg-primary-100 text-lg  font-vazirBold text-dark hover:bg-primary-300 ">
                +
              </button>
              <input
                type="text"
                className=" text-center  p-1 px-3 rounded-md cursor-pointer bg-primary-100 text-lg  font-vazirBold text-dark hover:bg-primary-300 w-1/6"
                value="15"
              />

              <button className=" text-center  p-1 px-3 rounded-md cursor-pointer bg-primary-100 text-lg  font-vazirBold text-dark hover:bg-primary-300 ">
                -
              </button>
            </div>
            <div>
              <FontAwesomeIcon icon={faTrash} className="" />
            </div>
          </div>
        </div>
        <hr className="m-2 md:mx-64 " />
        <div className=" flex justify-evenly items-center ">
          <span>جمع کل :</span> <span>20000000000تومان</span>
        </div>
        <div className="flex justify-center items-center ">
          <input
            type="text"
            placeholder="کد تخفیف"
            className="p-2 rounded-r-lg bg-primary-100 text-dark "
          />
          <button className=" rounded-l-lg bg-primary-100 p-2 text-dark hover:bg-primary-300">
            اعمال
          </button>
        </div>
      </div>
      {/* Rule payment & Buy product */}
      <div className="w-full  p-8 px-10 border rounded-lg flex flex-col gap-4 mt-10">
        {/*Rule */}
        <div className="w-full  p-5 px-8 border rounded-lg flex items-center  gap-4 mt-10 bg-slate-900">
          <input
            id="checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-primary-300 bg-primary-100 border-primary-300 rounded focus:ring-primary-300  focus:ring-2 "
          />{" "}
          <label htmlFor="checkbox" className="ml-2 text-sm font-medium">
            با قوانین سایت موافقم.
          </label>
        </div>
        {/*Buy */}
        <div className=" w-36 flex items-end">
          <Button title="خرید" />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
