import BlogBox from "../Components/BlogBox";
import Layout from "../Layout/Layout";

function BlogsPage() {
  return (
    <Layout>
      <section
        className="
         grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-4 mt-10 "
      >
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
      </section>
    </Layout>
  );
}

export default BlogsPage;
