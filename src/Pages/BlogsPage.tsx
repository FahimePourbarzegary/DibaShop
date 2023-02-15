import { useEffect } from "react";
import BlogBox from "../Components/BlogBox";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Layout from "../Layout/Layout";
import { fetchBlog } from "../services/features/blogSlice";
import { RootState } from "../services/store";

function BlogsPage() {
  const { loadingBlogs, errorBlogs, blogs } = useAppSelector(
    (state: RootState) => state.blogs
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
  }, []);
  console.log(blogs);
  if (loadingBlogs) return <div>در حال بارگذاری</div>;
  return (
    <Layout>
      <section
        className="
         grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-4 mt-10 "
      >
        {!errorBlogs ? (
          blogs?.map((blog) => {
            return <BlogBox {...blog} />;
          })
        ) : (
          <div>err</div>
        )}
      </section>
    </Layout>
  );
}

export default BlogsPage;
