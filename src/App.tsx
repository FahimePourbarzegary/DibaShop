import { Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";
import BlogDetailPage from "./Pages/BlogDetailPage";
import BlogsPage from "./Pages/BlogsPage";
import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/DetailPage/:id" element={<DetailPage />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/DetailBlog/:id" element={<BlogDetailPage />} />
    </Routes>
  );
}

export default App;
