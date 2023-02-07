import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BlogBox() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-72 p-5 px-6 rounded-3xl flex flex-col justify-center items-center gap-2 bg-slate-900">
        {/*header section */}
        <div className=" flex justify-between items-center w-full overflow-hidden whitespace-nowrap text-ellipsis">
          <FontAwesomeIcon icon={faHeart} />
          <span>عنوانننننن</span>
        </div>
        {/*image section */}
        <div className="">
          <img
            src="https://s2.uupload.ir/files/blogimage_inhn.jpg"
            alt="image"
            className=" w-56 h-56"
          />
        </div>
        {/*detail section */}
        <div className="w-72 overflow-hidden   whitespace-nowrap text-ellipsis px-5">
          <span className="">
            گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
            طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
            توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
            تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
            جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
          </span>
        </div>
        {/*button section */}
        <div className="">
          <button className=" m-5  text-center font-vazirthin font-semibold border-primary-200 border p-2 rounded-lg hover:text-primary-300 transition-all hover:border-white ">
            بیشتر
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
