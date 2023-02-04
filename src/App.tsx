import { Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/DetailPage/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
