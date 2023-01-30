import Carousel from "../Components/Carousel";
import { Navbar } from "../Components/Navbar";
function HomePage() {
  return (
    <div>
      <header className="flex flex-col py-3 px-6 md:px-8 md:py-4">
        <Navbar />
      </header>
      <Carousel />
    </div>
  );
}

export default HomePage;
