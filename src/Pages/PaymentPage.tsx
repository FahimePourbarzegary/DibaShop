import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  CartType,
  changeSituationCart,
  decreamentCart,
  fetchCartByUserId,
  increamentCart,
  deleteFromCart,
} from "../services/features/cartSlider";
import { RootState } from "../services/store";

function PaymentPage() {
  const { errorCart, loadingCart, cart } = useAppSelector(
    (state: RootState) => state.carts
  );
  const filterdAddToCart = cart?.filter(
    (cart) => cart.situation === "ADD_TO_CART"
  );
  //check rule
  const [rule, setRule] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCartByUserId());
  }, []);

  let totalPrice = 0;
  const navigate = useNavigate();
  // if there is no add to cart navigate to usercart
  useEffect(() => {
    if (!filterdAddToCart.length) navigate(-1);
  }, [cart]);
  // Final Buy
  const changeSituationHandler = async () => {
    if (rule) {
      await dispatch(changeSituationCart(filterdAddToCart));
      await dispatch(fetchCartByUserId());
      toast.success("خریداری شد");
      navigate(-1);
    } else {
      toast.error("مقررات را بررسی و تیک بزنید");
    }
  };
  const incrementCartHandler = async (cartInfo: CartType) => {
    await dispatch(increamentCart(cartInfo));
    await dispatch(fetchCartByUserId());
  };
  const decrementCartHandler = async (cartInfo: CartType) => {
    if (cartInfo.quantity === 1) {
      await dispatch(deleteFromCart(cartInfo.id));
      await dispatch(fetchCartByUserId());
      toast.success(`${cartInfo.name} از سبد خرید حذف شد.`);
      console.log(cart);
    } else {
      await dispatch(decreamentCart(cartInfo));
      await dispatch(fetchCartByUserId());
    }
  };
  const deleteFromCartHandler = async (id: number, name: string) => {
    await dispatch(deleteFromCart(id));
    await dispatch(fetchCartByUserId());
    toast.success(`${name} از سبد خرید حذف شد.`);
  };

  return (
    <div className=" w-full  flex flex-col  justify-center items-center p-10">
      {/* BuyBox section */}
      <div className="w-full  p-8 px-10 border rounded-lg flex flex-col gap-4">
        {/* product Detail */}
        {filterdAddToCart?.map((cart: CartType) => {
          totalPrice += cart?.off
            ? (cart?.price - cart?.price * (cart?.off / 100)) * cart?.quantity
            : cart?.price * cart?.quantity;

          return (
            <div
              className="flex flex-col items-center justify-between gap-5 md:flex-row"
              key={cart?.id}
            >
              <div className="flex justify-between items-center w-full">
                <img
                  src={cart?.image}
                  alt="product-img"
                  className=" w-20 h-20"
                />
                <p>{cart?.name}</p>
                <p>
                  {cart?.off
                    ? cart?.price - cart?.price * (cart?.off / 100)
                    : cart?.price}
                </p>
                <p>تومان</p>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="flex gap-2 items-center ">
                  <button
                    className=" text-center  p-1 px-3 rounded-md cursor-pointer bg-primary-100 text-lg  font-vazirBold text-dark hover:bg-primary-300 "
                    onClick={(): void => {
                      incrementCartHandler(cart);
                    }}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    className=" text-center  p-1 px-3 rounded-md cursor-pointer bg-primary-100 text-lg  font-vazirBold text-dark hover:bg-primary-300 w-1/6"
                    defaultValue={cart?.quantity}
                    value={cart?.quantity}
                  />

                  <button
                    className=" text-center  p-1 px-3 rounded-md cursor-pointer bg-primary-100 text-lg  font-vazirBold text-dark hover:bg-primary-300 "
                    onClick={(): void => {
                      decrementCartHandler(cart);
                    }}
                  >
                    -
                  </button>
                </div>
                <div
                  onClick={() => deleteFromCartHandler(cart?.id, cart?.name)}
                >
                  <FontAwesomeIcon icon={faTrash} className=" cursor-pointer" />
                </div>
              </div>
            </div>
          );
        })}
        <hr className="m-2 md:mx-64 " />
        <div className=" flex justify-evenly items-center ">
          <span>جمع کل :</span> <span>{totalPrice}تومان</span>
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
            checked={rule}
            onChange={() => setRule(!rule)}
            className="w-4 h-4 text-primary-300 bg-primary-100 border-primary-300 rounded focus:ring-primary-300  focus:ring-2 "
          />{" "}
          <label htmlFor="checkbox" className="ml-2 text-sm font-medium">
            با قوانین سایت موافقم.
          </label>
        </div>
        {/*Buy */}
        <div
          className=" w-36 flex items-end"
          onClick={() => changeSituationHandler()}
        >
          <Button title="خرید" />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
