function Footer() {
  return (
    <div className="p-6 md:bg-dark md:flex md:flex-wrap md:justify-between md:h-24">
      <div className=" w-52 h-20  flex flex-col justify-between mb-4">
        <span className="font-bold text-2xl text-primary-300  md:text-3xl">
          دیبا
        </span>
        <p className=" text-xs text-primary-100 font-medium">
          چشم انداز ما ارائه زیبایی شماست.
        </p>
      </div>
      <div className="flex flex-wrap mb-3">
        <div className=" w-36 h-48 flex flex-col justify-evenly">
          <h1 className=" text-xl font-semibold text-primary-400 mb-2">
            درباره ما
          </h1>
          <p className=" text-base font-medium text-primary-100">چگونگی کار</p>
          <p className=" text-base font-medium text-primary-100">ویژگی ها</p>
          <p className=" text-base font-medium text-primary-100">شراکت</p>
          <p className=" text-base font-medium text-primary-100">رابطه تجاری</p>
        </div>
        <div className=" w-36 h-48 flex flex-col justify-evenly">
          <h1 className=" text-xl font-semibold text-primary-400 mb-2">
            درباره ما
          </h1>
          <p className=" text-base font-medium text-primary-100">چگونگی کار</p>
          <p className=" text-base font-medium text-primary-100">ویژگی ها</p>
          <p className=" text-base font-medium text-primary-100">شراکت</p>
          <p className=" text-base font-medium text-primary-100">رابطه تجاری</p>
        </div>
        <div className=" w-36 h-48 flex flex-col justify-evenly">
          <h1 className=" text-xl font-semibold text-primary-400 mb-2">
            درباره ما
          </h1>
          <p className=" text-base font-medium text-primary-100">چگونگی کار</p>
          <p className=" text-base font-medium text-primary-100">ویژگی ها</p>
          <p className=" text-base font-medium text-primary-100">شراکت</p>
          <p className=" text-base font-medium text-primary-100">رابطه تجاری</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between py-3 h-full md:border-t-2 w-full">
        <div className="flex justify-between w-96 gap-2 mb-3">
          <p>سیاست حفظ حریم خصوصی</p>
          <p>شرایط و ضوابط</p>
        </div>
        <p> دیبا©2022 تمامی حقوق محفوظ است</p>
        <p> طراحی و پیاده سازی فهیمه پوربرزگری</p>
      </div>
    </div>
  );
}

export default Footer;
