import { Link } from "react-router-dom";
import CardCartProduct from "../Components/CardCartProduct";
function CartPage() {
  return (
    <section className="py-4 w-full ">
      {/* Add Product Type */}
      <div className="mb-10">
        {" "}
        <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
          سبد خرید
        </p>
        <div
          className="p-6 grid gap-5
        md:gap-8 xl:grid-cols-2"
        >
          {" "}
          <CardCartProduct /> <CardCartProduct /> <CardCartProduct />{" "}
          <CardCartProduct /> <CardCartProduct />
        </div>
        <div className="p-1 py-2  md:mx-2 md:mb-0 bg-primary-200 text-dark rounded-lg md:px-4 md:py-2  transition-all font-semibold text-sm">
          <Link
            to="/"
            className="w-full  
              flex justify-center items-center"
          >
            خرید نهایی
          </Link>
        </div>
      </div>
      {/* Buy Product Type */}
      <div>
        <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
          خریداری شده
        </p>
        <div
          className="p-6 grid gap-5
        md:gap-8 xl:grid-cols-2"
        >
          {" "}
          <CardCartProduct /> <CardCartProduct /> <CardCartProduct />{" "}
          <CardCartProduct /> <CardCartProduct /> <CardCartProduct />
        </div>
      </div>
    </section>
  );
}

export default CartPage;
