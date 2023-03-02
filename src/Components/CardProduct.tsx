import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { ProductType } from "../services/features/productSlice";
import { RootState } from "../services/store";
import Button from "./Button";
type CardProductProps = {
  id: number;
  name: string;
  price: number;
  off: number;
  image: string;
  material: string;
  favorite: boolean;
};
function CardProduct({
  id,
  name,
  price,
  off,
  image,
  material,
  favorite,
}: CardProductProps) {
  const [favoriteSign, setFavoriteSign] = useState(favorite);
  console.log(favoriteSign, name);

  return (
    <div className="flex justify-center items-center">
      <div className=" p-4 w-72 bg-dark rounded-xl flex flex-col justify-between gap-3  text-primary-100   border border-primary-100 ">
        {/*header  section */}
        <div className="flex justify-between items-center">
          <div>
            <p className=" font-semibold text-base text-yellow-300 md:text-xl md:font-bold">
              {name}
            </p>
            <p className="font-medium text-xs md:text-sm md:font-bold">
              {material}
            </p>
          </div>
          <div>
            <button>
              <FontAwesomeIcon
                icon={faHeart}
                className={favoriteSign ? "text-rose-700" : ""}
              />
            </button>
          </div>
        </div>
        {/*image  section */}
        <Link to={`/DetailPage/${id}`}>
          <div className="w-full flex justify-center items-center">
            <img src={image} alt="product_image" className=" h-52" />
          </div>
        </Link>

        {/*footer  section */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex font-bold text-yellow-300">
              <p>{off ? price - price * (off / 100) : price}</p>
              <p className="px-1">تومان </p>
            </div>
            <div className={off ? "" : "hidden"}>
              <p className=" line-through">{price}</p>
            </div>
          </div>
          <Link to={`/DetailPage/${id}`}>
            <Button title="جزئیات" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
