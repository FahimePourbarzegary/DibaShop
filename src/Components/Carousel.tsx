import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
function Carousel() {
  const [images, setImages] = useState([
    { url: "https://iili.io/H1nOdSj.png" },
    { url: "https://iili.io/H1nOk0u.jpg" },
    { url: "https://iili.io/H1nhnYQ.webp" },
  ]);
  let slideInterval: number;
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [mouseEvent, setMouseEvent] = useState<boolean>(true);
  let intervalActiveSlide: number = activeSlide;
  const handleOnPrevClick = () => {
    const isFirstSlide = activeSlide === 0;
    const newIndex = isFirstSlide ? images.length - 1 : activeSlide - 1;
    setActiveSlide(newIndex);
  };
  const handleOnNextClick = () => {
    const islastSlide = activeSlide === images.length - 1;
    const newIndex = islastSlide ? 0 : activeSlide + 1;
    setActiveSlide(newIndex);
  };
  const startSlider = () => {
    slideInterval = setInterval(() => {
      const islastSlide = intervalActiveSlide === images.length - 1;
      if (islastSlide) intervalActiveSlide = 0;
      else intervalActiveSlide += 1;
      setActiveSlide(intervalActiveSlide);
      console.log("interval", intervalActiveSlide);
    }, 5000);
  };
  const goToSlide = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };
  useEffect(() => {
    if (mouseEvent) startSlider();
    else () => clearInterval(slideInterval);
    return () => clearInterval(slideInterval);
  }, [mouseEvent]);

  const mouseEnter = () => {
    setMouseEvent(false);
  };
  return (
    <div
      className=" w-full h-[560px] bg-slate-800 relative text-center hover:-translate-y-px transition-all group text-white hover:text-black"
      onMouseEnter={mouseEnter}
      onMouseLeave={() => {
        setMouseEvent(true);
      }}
    >
      {/* chevro left */}
      <div
        className="hidden w-8 h-8 group-hover:flex absolute top-[50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer bg-black/25  justify-center items-center z-10"
        onClick={handleOnNextClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      {/* chevron right */}
      <div
        className=" hidden w-8 h-8 group-hover:flex absolute top-[50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer bg-black/25   justify-center items-center z-10"
        onClick={handleOnPrevClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div
        style={{ backgroundImage: `url(${images[activeSlide].url})` }}
        className="w-full h-full opacity-60 hover:opacity-80  transition-all duration-700 bg-center bg-cover"
      ></div>
      <h1 className=" absolute  top-40 text-center font-vazirbold  w-full">
        زیبایی ماندگار
      </h1>
      <h2 className=" absolute  top-60 text-center font-vazirthin font-semibold  w-full">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </h2>
      <div className="w-full flex justify-center items-center">
        {" "}
        <button className=" absolute  top-80 text-center font-vazirthin font-semibold border-primary-200 border p-2 rounded-lg hover:bg-primary-200 transition-all">
          {" "}
          همین حالا بخر
        </button>
      </div>
      {/* go to slide */}
      <div className=" absolute w-full bottom-2">
        <div className=" flex  justify-center items-center py-2 ">
          {" "}
          {images.map((slide, slideIndex) => {
            let markIndex: boolean = false;
            if (slideIndex === activeSlide) markIndex = true;
            return (
              <div
                className={` w-5 h-5 rounded-full cursor-pointer mx-2 duration-150 ${
                  markIndex ? "bg-primary-300" : "bg-black/25"
                }`}
                key={slideIndex}
                onClick={() => {
                  goToSlide(slideIndex);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
