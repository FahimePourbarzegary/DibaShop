import { useEffect } from "react";
import CardFavoriteProduct from "../Components/CardFavoriteProduct";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchFavoriteByUserId } from "../services/features/favoriteSlice";
import { RootState } from "../services/store";
function FavoritePage() {
  const { errorFavorite, loadingFavorite, favoriteByUserId } = useAppSelector(
    (state: RootState) => state.favorites
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteByUserId());
  }, []);
  console.log(favoriteByUserId);

  return (
    <section className="py-4 w-full">
      <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
        مورد علاقه شما
      </p>
      <div
        className="p-6 grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-3"
      >
        {!errorFavorite ? (
          favoriteByUserId?.map((product) => {
            return <CardFavoriteProduct {...product} key={product.id} />;
          })
        ) : (
          <div>بارگذاری با مشکل رو به رو شده</div>
        )}
      </div>
    </section>
  );
}

export default FavoritePage;
