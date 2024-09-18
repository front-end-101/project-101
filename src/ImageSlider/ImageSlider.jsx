import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ImageSlider = () => {
  const [imageId, setImageId] = useState(0);

  const images = [
    "https://plus.unsplash.com/premium_photo-1666266622687-2e3e817aac13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1725743537422-b36edd83b46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1726007403882-e8f76fe5dc07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1725489890986-330621425633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleNext = () => {
    setImageId((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setImageId((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2">
      <div className="flex relative">
        <button
          onClick={handlePrev}
          className="w-10 flex justify-center items-center h-10 rounded-full text-slate-100 bg-slate-400 absolute top-[50%] left-[-40px]"
        >
          <FaArrowLeft size={24} />
        </button>
        <div className="shadow-md rounded-md m-4 w-[400px] h-[650px]">
          <img
            className="w-full h-full object-cover shadow-md rounded-md"
            src={images[imageId]}
            alt=""
          />
        </div>
        <button
          onClick={handleNext}
          className="w-10 flex justify-center items-center h-10 rounded-full text-slate-100 bg-slate-400 absolute top-[50%] right-[-40px]"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
      <div className="flex gap-2 justify-center items-center">
        {images.map((image, ind) => {
          return (
            <div className={`cursor-pointer ${imageId !== ind && 'opacity-40'}`} key={ind} onClick={() => setImageId(ind)}>
              <img className="object-cover h-20" src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
