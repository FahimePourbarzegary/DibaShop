import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import CardProduct from "../Components/CardProduct";
import Carousel from "../Components/Carousel";
import Category from "../Components/Category";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Layout from "../Layout/Layout";
import { fetchProducts } from "../services/features/productSlice";
import { fetchBlog } from "../services/features/blogSlice";
import { RootState } from "../services/store";
import { Link } from "react-router-dom";
import { autoLogin } from "../services/features/userSlice";
import { fetchFavoriteByUserId } from "../services/features/favoriteSlice";
function HomePage() {
  const { errorProducts, loadingProducts, products } = useAppSelector(
    (state: RootState) => state.products
  );
  const categoryData = [
    {
      title: "گوشواره",
      link: `/Filter/گوشواره`,
      image: "https://iili.io/HayBUmX.jpg",
    },
    {
      title: "گردنبند",
      link: `/Filter/گردنبند`,
      image: "https://iili.io/Hahlbd7.png",
    },
    {
      title: "دستبند",
      link: `/Filter/دستبند`,
      image: "https://iili.io/HayBl0Q.jpg",
    },
    {
      title: "انگشتر",
      link: `/Filter/انگشتر`,
      image: "https://iili.io/HayBYsj.jpg",
    },
  ];
  const { loadingBlogs, errorBlogs, blogs } = useAppSelector(
    (state: RootState) => state.blogs
  );
  const { errorFavorite, loadingFavorite, favoriteByUserId } = useAppSelector(
    (state: RootState) => state.favorites
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(autoLogin());
    dispatch(fetchFavoriteByUserId());
    dispatch(fetchProducts());
    dispatch(fetchBlog());
  }, []);
  console.log(favoriteByUserId);

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
          {categoryData.map((category, index) => {
            return (
              <Category
                title={category.title}
                link={category.link}
                image={category.image}
                key={index}
              />
            );
          })}
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
              const filteredFavorite = favoriteByUserId?.filter(
                (favorite) => favorite.productId === product.id
              );
              return (
                <CardProduct
                  {...product}
                  key={product.id}
                  favorite={filteredFavorite?.length ? true : false}
                />
              );
            })
          ) : (
            <div>بارگذاری با مشکل رو به رو شده</div>
          )}
        </section>
      </section>
      {/* Preview 2Bloges Box */}
      <section className="py-4 text-primary-100">
        <div className="flex flex-col ">
          {/*  Box 1 */}
          <div className="flex flex-col  bg-slate-900 items-center  md:flex-row-reverse md:h-96 relative mb-5">
            <div className="w-full flex justify-end md:w-[30rem]  ">
              <img
                src={blogs[0]?.image}
                alt="blog-img"
                className="w-full h-80 md:h-96 "
              />
            </div>
            <div className="flex flex-col  items-center text-center p-5  w-full h-full">
              <div className="flex justify-between items-center w-24 md:self-end">
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <span className=""> {blogs[0]?.createdAt}</span>
              </div>
              <div className="flex flex-col justify-between gap-4 md:items-start w-full">
                <h1 className="p-4 font-vazirBold text-3xl">
                  {blogs[0]?.title}
                </h1>
                <article className=" text-sm md:px-4 md:text-start h-40 overflow-hidden">
                  {blogs[0]?.blog}
                </article>
              </div>

              <Link to={`/DetailBlog/1`} state={blogs[0]}>
                <button className=" m-5  text-center font-vazirthin font-semibold border-primary-200 border p-2 rounded-lg hover:text-primary-300 transition-all hover:border-white md:absolute md:top-72 md:left-96">
                  بیشتر
                </button>
              </Link>
            </div>
          </div>
          {/*  Box 2 */}
          <div className="flex flex-col  bg-slate-900 items-center  md:flex-row md:h-96 relative mb-5">
            <div className="w-full flex justify-end md:w-[30rem]  ">
              <img
                src={blogs[1]?.image}
                alt="blog-img"
                className="w-full h-80 md:h-96 "
              />
            </div>
            <div className="flex flex-col  items-center text-center p-5  w-full h-full">
              <div className="flex justify-between items-center w-24 md:self-end">
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <span className="">{blogs[1]?.createdAt}</span>
              </div>

              <div className="flex flex-col justify-between gap-4 md:items-start w-full">
                <h1 className="p-4 font-vazirBold text-3xl">
                  {blogs[1]?.title}
                </h1>
                <article className=" text-sm md:px-7 md:text-start h-40 overflow-hidden">
                  {blogs[1]?.blog}
                </article>
              </div>

              <Link to={`/DetailBlog/2`} state={blogs[1]}>
                <button className=" m-5  text-center font-vazirthin font-semibold border-primary-200 border p-2 rounded-lg hover:text-primary-300 transition-all hover:border-white md:absolute md:top-72 md:right-96">
                  بیشتر
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
