import axios from "axios";
import { useState } from "react";
import { LuImagePlus } from "react-icons/lu";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!image) {
      setUploadMessage("Please select an image first");
      return;
    }
    setUploadMessage("");
    setLoading(true);

    const formdata = new FormData();
    formdata.append("file", image);
    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/files/upload",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadMessage("Upload successful");
      setPreviewUrl("");
      setLoading(false);
      setResponse(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {response?.data?.location && (
        <div className="mb-8">
          <img
            className="w-72 h-72 object-cover"
            src={response.data?.location}
            alt=""
          />
        </div>
      )}
      <div className="flex flex-col justify-between p-[4px] border-2 w-4/5 rounded-md">
        {previewUrl && (
          <div>
            <img
              className="w-24 h-24"
              src={typeof previewUrl === "string" ? previewUrl : ""}
              alt="image"
            />
          </div>
        )}
        <div className="flex">
          <div className="p-2 bg-slate-400 rounded-md cursor-pointer">
            <label htmlFor="image-uploader">
              <LuImagePlus className="cursor-pointer" />
            </label>
            <input
              className="hidden"
              type="file"
              accept="image/*"
              name="image-uploader"
              id="image-uploader"
              onChange={handleImageChange}
            />
          </div>
          <input
            className="px-2 w-full outline-none"
            type="text"
            placeholder="Enter your prompt here"
          />
          <button onClick={handleImageUpload}>
            {loading ? "Uploading.." : "Upload"}
          </button>
        </div>
      </div>
      <p>{uploadMessage}</p>
    </div>
  );
};

export default ImageUploader;
