function NewsPage() {
  return (
    <div className="w-full p-5">
      <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
        اطلاعیه ها
      </p>
      {/*news section */}
      <div className=" rounded-xl p-5 mt-3 border">
        <div>
          <p className="font-semibold text-xs  m-3">اطلاعیه شماره 1</p>
          <p className="font-normal text-xs  m-3">
            توضیحات اطلاعیه شماره یک به این شرح است.
          </p>
        </div>
      </div>
      {/*news section */}
      <div className=" rounded-xl p-5 mt-3 border   ">
        <div>
          <p className="font-semibold text-xs  m-3">اطلاعیه شماره 2</p>
          <p className="font-normal text-xs  m-3">
            توضیحات اطلاعیه شماره دو به این شرح است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
