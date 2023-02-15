import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import BlogBox from "../Components/BlogBox";
import Layout from "../Layout/Layout";
import { blogType } from "../services/features/blogSlice";

function BlogDetailPage() {
  const location = useLocation();
  const { id, title, image, blog, likes, createdAt } = location.state;
  return (
    <Layout>
      {" "}
      <div className="flex justify-center items-center flex-col mt-5 w-full">
        {" "}
        <div className=" w-60 flex flex-col gap-10 md:w-96">
          {/*header section */}
          <div className=" flex justify-between items-center w-full overflow-hidden whitespace-nowrap text-ellipsis">
            <span> لایک {likes}+ </span>
            <span>{title}</span>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          {/*image section */}
          <div className="">
            <img
              src={image}
              alt="image"
              className=" w-60 h-60 md:w-96 md:h-auto "
            />
          </div>
          {/*date section */}
          <span className="text-center">{createdAt} </span>
        </div>
        {/*detail section */}
        <div className=" md:w-[40rem] m-8 p-8 rounded-2xl bg-slate-700">
          <span className="">{blog}</span>
        </div>
        {/* Blog box section */}
        <section className="flex justify-between items-center gap-x-12 overflow-x-auto md:overflow-hidden  w-full">
          {/* {!errorBlogs?blogs?.map((blog)=>{
          return <BlogBox {...blogs}/>;
        }):<div>err</div>} */}
        </section>
      </div>
    </Layout>
  );
}

export default BlogDetailPage;
