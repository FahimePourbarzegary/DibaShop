import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React from "react";
import Button from "../Components/Button";
function DetailPage() {
  const navigate = useNavigate();
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
          <div className="lg:w-3/6 ">
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
                        src="https://s2.uupload.ir/files/anghoshtaresezar_9odt.jpg"
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
              <span>اسم</span>
            </div>
            <span className=" text-xs font-normal ">توضیحات</span>
            <span className=" text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </span>
            <div className=" grid grid-cols-2 gap-2 gap-x-4 w-full lg:px-12">
              <div className="flex flex-wrap justify-between items-center w-full">
                <span className=" text-xs font-medium ">جنس</span>
                <span className=" font-semibold text-xs ">جنس جواهر</span>
              </div>
              <div className="flex flex-wrap justify-between items-center w-full">
                <span className=" text-xs font-medium "> ابعاد </span>
                <span className=" font-semibold text-xs text-primary-300">
                  13*2
                </span>
              </div>
              <div className="flex flex-wrap justify-between items-center w-full">
                <span className=" text-xs font-medium ">ویژگی های دیگر </span>
                <span className=" font-semibold text-xs text-primary-300">
                  ننللللللللللللللللللللللللللللللللللللللللللللللللللللللللل
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="flex font-bold text-primary-300">
                  <p>522222</p>
                  <p className="px-1">تومان </p>
                </div>
                <div>
                  <p className=" line-through">10000</p>
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
          <div className="flex flex-col gap-y-6 ">{/* Comments */}</div>
        </div>
      </section>
    </Layout>
  );
}

export default DetailPage;
