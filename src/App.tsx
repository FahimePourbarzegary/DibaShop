import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";
import BlogDetailPage from "./Pages/BlogDetailPage";
import BlogsPage from "./Pages/BlogsPage";
import DashboardPage from "./Pages/DashboardPage";
import DetailPage from "./Pages/DetailPage";
import FilterPage from "./Pages/FilterPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import PaymentPage from "./Pages/PaymentPage";
import RegisterPage from "./Pages/RegisterPage";
function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DetailPage/:id" element={<DetailPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/DetailBlog/:id" element={<BlogDetailPage />} />
        <Route path="/Payment" element={<PaymentPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Filter" element={<FilterPage />} />
        <Route path="/Dashboard/*" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
