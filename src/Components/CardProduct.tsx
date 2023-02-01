import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function CardProduct() {
  const [favoriteSign, setFavoriteSign] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <div className=" p-4 w-72 bg-dark rounded-xl flex flex-col justify-between gap-3  text-primary-100   border border-primary-100 ">
        {/*header  section */}
        <div className="flex justify-between items-center">
          <div>
            <p className=" font-semibold text-base text-yellow-300 md:text-xl md:font-bold">
              اسم
            </p>
            <p className="font-medium text-xs md:text-sm md:font-bold">جنس</p>
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
        <div className="w-full flex justify-center items-center">
          <img
            src="https://s2.uupload.ir/files/anghoshtaresezar_9odt.jpg"
            alt="product_image"
            className=" h-52"
          />
        </div>

        {/*footer  section */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex font-bold text-yellow-300">
              <p>100000</p>
              <p className="px-1">تومان </p>
            </div>
            <div className={1 ? "" : "hidden"}>
              <p className=" line-through">10000</p>
            </div>
          </div>
          <Link to={`/DetailPage/1`}>
            <button className=" bg-primary-400 w-full text-dark py-3 px-10 text-cente font-semibold text-base hover:animate-pulse rounded">
              خرید
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
