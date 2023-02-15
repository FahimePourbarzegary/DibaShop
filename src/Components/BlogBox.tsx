import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { blogType } from "../services/features/blogSlice";

function BlogBox({ id, title, image, blog, likes, createdAt }: blogType) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-72 p-5 px-6 rounded-3xl flex flex-col justify-center items-center gap-2 bg-slate-900">
        {/*header section */}
        <div className=" flex justify-between items-center w-full overflow-hidden whitespace-nowrap text-ellipsis">
          <FontAwesomeIcon icon={faHeart} />
          <span>{title}</span>
        </div>
        {/*image section */}
        <div className="">
          <img src={image} alt="image" className=" w-56 h-56" />
        </div>
        {/*detail section */}
        <div className="w-72 overflow-hidden   whitespace-nowrap text-ellipsis px-5">
          <span className="">{blog}</span>
        </div>
        {/*button section */}
        <div className="">
          <Link
            to={`/DetailBlog/${id}`}
            state={{ id, title, image, blog, likes, createdAt }}
          >
            {" "}
            <button className=" m-5  text-center font-vazirthin font-semibold border-primary-200 border p-2 rounded-lg hover:text-primary-300 transition-all hover:border-white ">
              بیشتر
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
