import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogBox from "../Components/BlogBox";
import Layout from "../Layout/Layout";

function BlogDetailPage() {
  return (
    <Layout>
      {" "}
      <div className="flex justify-center items-center flex-col mt-5 w-full">
        {" "}
        <div className=" w-60 flex flex-col gap-10 md:w-96">
          {/*header section */}
          <div className=" flex justify-between items-center w-full overflow-hidden whitespace-nowrap text-ellipsis">
            <span> لایک 440+ </span>
            <span>عنوانننننن</span>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          {/*image section */}
          <div className="">
            <img
              src="https://s2.uupload.ir/files/blogimage_inhn.jpg"
              alt="image"
              className=" w-60 h-60 md:w-96 md:h-auto "
            />
          </div>
          {/*date section */}
          <span className="text-center">1400 /12/ 1 </span>
        </div>
        {/*detail section */}
        <div className=" md:w-[40rem] m-8 p-8 rounded-2xl bg-slate-700">
          <span className="">
            گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
            طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
            توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
            تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
            جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
            قرارگرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرارگرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار
          </span>
        </div>
        {/* Blog box section */}
        <section className="flex justify-between items-center gap-x-12 overflow-x-auto md:overflow-hidden  w-full">
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </section>
      </div>
    </Layout>
  );
}

export default BlogDetailPage;
