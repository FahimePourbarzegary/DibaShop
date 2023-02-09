import CardProduct from "../Components/CardProduct";
function FavoritePage() {
  return (
    <section className="py-4 w-full">
      <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
        مورد علاقه شما
      </p>
      <div
        className="p-6 grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-3"
      >
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </section>
  );
}

export default FavoritePage;
