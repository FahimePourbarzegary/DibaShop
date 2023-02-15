import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import CardProduct from "../Components/CardProduct";
import Carousel from "../Components/Carousel";
import Category from "../Components/Category";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Layout from "../Layout/Layout";
import { fetchProducts } from "../services/features/productSlice";
import { RootState } from "../services/store";
function HomePage() {
  const { errorProducts, loadingProducts, products } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Layout>
      <Carousel />
      {/* Categories Box */}
      <section className="py-4">
        <div className="w-full  px-8 mb-4 flex justify-between items-center">
          <p className=" md:pr-18 font-semibold text-primary-300 text-base md:text-xl">
            دسته بندی
          </p>
          <a href="/" className=" text-primary-400 font-semibold text-base">
            نمایش همه
          </a>
        </div>
        <section
          className=" w-full grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-4"
        >
          <Category />
          <Category />
          <Category />
          <Category />
        </section>
      </section>
      {/* Products Box */}
      <section className="py-4">
        <div className="w-full  px-8 flex justify-between items-center mb-4">
          <p className=" md:pr-18 font-semibold text-primary-300 text-base md:text-xl">
            محصولات{" "}
          </p>
          <a href="/" className=" text-primary-400 font-semibold text-base">
            نمایش همه
          </a>
        </div>
        <section
          className=" grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-4"
        >
          {!errorProducts ? (
            products.map((product) => {
              return <CardProduct {...product} />;
            })
          ) : (
            <div>بارگذاری با مشکل رو به رو شده</div>
          )}
        </section>
      </section>
      {/* Preview Bloges Box */}
      <section className="py-4 text-primary-100">
        <div className="flex flex-col ">
          {/*  Box 1 */}
          <div className="flex flex-col  bg-slate-900 items-center  md:flex-row-reverse md:h-96 relative mb-5">
            <div className="w-full flex justify-end md:w-[30rem]  ">
              <img
                src="https://s2.uupload.ir/files/blogimage_inhn.jpg"
                alt="blog-img"
                className="w-full h-80 md:h-96 "
              />
            </div>
            <div className="flex flex-col  items-center text-center p-5  w-full h-full">
              <div className="flex justify-between items-center w-24 md:self-end">
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <span className=""> 26 فروردین </span>
              </div>
              <div className="flex flex-col justify-between gap-4 md:items-start w-full">
                <h1 className="p-4 font-vazirBold text-3xl">تیتر</h1>
                <article className=" text-sm md:px-7 md:text-start">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </article>
              </div>

              <button className=" m-5  text-center font-vazirthin font-semibold border-primary-200 border p-2 rounded-lg hover:text-primary-300 transition-all hover:border-white md:absolute md:top-72 md:left-96">
                بیشتر
              </button>
            </div>
          </div>
          {/*  Box 2 */}
          <div className="flex flex-col  bg-slate-900 items-center  md:flex-row md:h-96 relative mb-5">
            <div className="w-full flex justify-end md:w-[30rem]  ">
              <img
                src="https://s2.uupload.ir/files/blogimage2_grzp.jpg"
                alt="blog-img"
                className="w-full h-80 md:h-96 "
              />
            </div>
            <div className="flex flex-col  items-center text-center p-5  w-full h-full">
              <div className="flex justify-between items-center w-24 md:self-end">
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <span className=""> 26 فروردین </span>
              </div>

              <div className="flex flex-col justify-between gap-4 md:items-start w-full">
                <h1 className="p-4 font-vazirBold text-3xl">تیتر</h1>
                <article className=" text-sm md:px-7 md:text-start">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </article>
              </div>

              <button className=" m-5  text-center font-vazirthin font-semibold border-primary-200 border p-2 rounded-lg hover:text-primary-300 transition-all hover:border-white md:absolute md:top-72 md:right-96">
                بیشتر
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
