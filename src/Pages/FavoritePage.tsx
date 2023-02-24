import { useEffect } from "react";
import CardProduct from "../Components/CardProduct";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchProducts } from "../services/features/productSlice";
import { RootState } from "../services/store";
function FavoritePage() {
  const { errorProducts, loadingProducts, products } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <section className="py-4 w-full">
      <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
        مورد علاقه شما
      </p>
      <div
        className="p-6 grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-3"
      >
        {!errorProducts ? (
          products.map((product) => {
            return <CardProduct {...product} key={product.id} />;
          })
        ) : (
          <div>بارگذاری با مشکل رو به رو شده</div>
        )}
      </div>
    </section>
  );
}

export default FavoritePage;
