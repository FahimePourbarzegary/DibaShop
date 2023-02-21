import { useEffect } from "react";
import { Link } from "react-router-dom";
import CardCartProduct from "../Components/CardCartProduct";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchCartByUserId } from "../services/features/cartSlider";
import { RootState } from "../services/store";
function CartPage() {
  const { errorCart, loadingCart, cart } = useAppSelector(
    (state: RootState) => state.carts
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCartByUserId());
  }, []);
  console.log(cart);
  const filterdAddToCart = cart?.filter(
    (cart) => cart.situation === "Add_TO_CART"
  );
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
          {/* need ADD  */}
          {cart?.map((cart) => {
            if (cart.situation === "Add_TO_CART") {
              return <CardCartProduct key={cart.id} {...cart} />;
            }
          })}
        </div>
        {/*button */}
        {filterdAddToCart.length ? (
          <div className="p-1 py-2  md:mx-2 md:mb-0 bg-primary-200 text-dark rounded-lg md:px-4 md:py-2  transition-all font-semibold text-sm">
            <Link
              to="/Payment"
              state={{ filterdAddToCart }}
              className="w-full  
              flex justify-center items-center"
            >
              خرید نهایی
            </Link>
          </div>
        ) : (
          <div className="pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
            در حال حاضر کالای جدیدی اضافه نشده است
          </div>
        )}
      </div>
      {/* Buy Product Type */}
      <div>
        <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
          خرید های گذشته
        </p>
        <div
          className="p-6 grid gap-5
        md:gap-8 xl:grid-cols-2"
        >
          {/* Bought  */}
          {cart?.map((cart) => {
            if (cart.situation === "BUY_PRODUCT") {
              return <CardCartProduct key={cart.id} {...cart} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default CartPage;
