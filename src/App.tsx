import { Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage";
import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/DetailPage/:id" element={<DetailPage />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
