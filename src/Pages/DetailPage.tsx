import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useEffect } from "react";
import Button from "../Components/Button";
import Comment from "../Components/Comment";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { RootState } from "../services/store";
import { fetchProductById } from "../services/features/productSlice";
function DetailPage() {
  const navigate = useNavigate();
  const { errorProducts, loadingProducts, product } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);
  console.log(product);

  if (errorProducts) return <div>error</div>;
  if (loadingProducts) return <div>loadingProducts</div>;
  return (
    <Layout>
      <section className=" p-6 flex flex-col justify-evenly items-center my-3">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="flex self-end text-primry-400 p-2 border border-primary-200 rounded-lg mb-2 hover:text-white hover:bg-primary-300 transition-all"
        >
          <FontAwesomeIcon icon={faLeftLong} />
        </button>
        <div className=" w-full flex flex-col justify-center items-center lg:flex-row  lg:justify-between lg:items-start lg:gap-5 ">
          {/* Image section */}
          <div className="lg:w-3/6">
            <div className=" rounded-lg flex justify-center items-center  ">
              <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <React.Fragment>
                    <div className=" flex flex-col justify-between items-center ">
                      <button
                        onClick={() => zoomIn()}
                        className=" w-6 h-6 m-3 border border-primary-200 rounded-lg hover:text-white hover:bg-primary-300 transition-all"
                      >
                        +
                      </button>
                      <button
                        onClick={() => zoomOut()}
                        className=" w-6 h-6 m-3 border border-primary-200 rounded-lg hover:text-white hover:bg-primary-300 transition-all"
                      >
                        -
                      </button>
                      <button
                        onClick={() => resetTransform()}
                        className=" w-6 h-6 m-3 border border-primary-200 rounded-lg hover:text-white hover:bg-primary-300 transition-all"
                      >
                        x
                      </button>
                    </div>
                    <TransformComponent>
                      <img
                        src={product[0]?.image}
                        alt="test"
                        className=" rounded-lg flex justify-center items-center h-[270px] w-80 m-5"
                      />
                    </TransformComponent>
                  </React.Fragment>
                )}
              </TransformWrapper>
            </div>
          </div>
          {/* Detail section */}
          <div className=" w-full  bg-dark rounded-lg p-4 flex flex-col gap-y-4 justify-evenly lg:w-3/6 border ">
            <div>
              {" "}
              <span>{product[0]?.name}</span>
            </div>
            <span className=" text-xs font-normal ">توضیحات</span>
            <span className=" text-sm">{product[0]?.detail}</span>
            <div className=" grid grid-cols-2 gap-2 gap-x-4 w-full lg:px-12">
              <div className="flex flex-wrap justify-between items-center w-full">
                <span className=" text-xs font-medium ">جنس</span>
                <span className=" font-semibold text-xs ">
                  {" "}
                  {product[0]?.material}
                </span>
              </div>
              {product[0]?.properties.map((property) => {
                return (
                  <div className="flex flex-wrap justify-between items-center w-full">
                    <span className=" text-xs font-medium ">
                      {" "}
                      {property.title}{" "}
                    </span>
                    <span className=" font-semibold text-xs text-primary-300">
                      {property.property}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex font-bold text-yellow-300">
                  <p>
                    {product[0]?.off
                      ? product[0]?.price -
                        product[0]?.price * (product[0]?.off / 100)
                      : product[0]?.price}
                  </p>
                  <p className="px-1">تومان </p>
                </div>
                <div className={product[0]?.off ? "" : "hidden"}>
                  <p className=" line-through">{product[0]?.price}</p>
                </div>
              </div>

              <Link to="/">
                <Button title="خرید" />
              </Link>
            </div>
          </div>
        </div>
        {/* Comments section */}
        <div className="w-full bg-dark rounded-lg p-4 flex flex-col gap-y-4 justify-evenly mt-6 border">
          <div>
            <span className=" font-semibold text-xl">نظرات</span>
            <span className=" px-3 py-[6px] bg-primary-400 rounded mr-3 text-white font-bold">
              20
            </span>
          </div>
          <div className="flex flex-col gap-y-6 ">
            {/* Comments */}
            <Comment />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DetailPage;
