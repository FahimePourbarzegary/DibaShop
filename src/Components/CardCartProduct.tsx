import { Link } from "react-router-dom";
import { CartType } from "../services/features/cartSlider";
function CardCartProduct({
  id,
  productId,
  userId,
  name,
  price,
  off,
  image,
  detail,
  category,
  quantity,
  situation,
}: CartType) {
  return (
    <Link to={`/DetailPage/${productId}`}>
      <div className="flex  justify-center items-center">
        <div className=" p-4 w-full bg-dark rounded-xl flex  justify-between gap-3  text-primary-100   border border-primary-100 text-sm">
          {/*image  section */}
          <div className=" flex justify-center items-center">
            {" "}
            <img src={image} alt="product_image" className="h-20 w-20" />
          </div>
          {/*header  section */}
          <div className="flex flex-col justify-center items-center">
            <p className=" font-semibold text-sm text-yellow-300  md:font-bold">
              {name}
            </p>
          </div>
          {/*footer  section */}
          <div className="flex  gap-3 items-center">
            <div className="flex font-bold text-yellow-300">
              <p>{price}</p>
              <p className="px-1">تومان </p>
            </div>
            <div>{off ? price - price * (off / 100) : price}</div>
            <div>تاریخ</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardCartProduct;
