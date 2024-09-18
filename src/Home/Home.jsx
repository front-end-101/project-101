import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl text-center p-8 border border-b-2">
        React Challenges
      </h1>
      <div className="flex gap-4 mt-8 p-8">
        <Link to="/todo">
          <div className="border-2 w-32 h-24 flex justify-center items-center">
            Todo
          </div>
        </Link>
        <Link to="/image-slider">
          <div className="border-2 w-32 h-24 flex justify-center items-center">
            Image Slider
          </div>
        </Link>
        <Link to="/pagination">
          <div className="border-2 w-32 h-24 flex justify-center items-center">
            Pagination
          </div>
        </Link>
        <Link to="/image-uploader">
          <div className="border-2 w-32 h-24 flex justify-center items-center">
            Image Uploader
          </div>
        </Link>
        <Link to="/file-structure">
          <div className="border-2 w-32 h-24 flex justify-center items-center">
            File Structure
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
