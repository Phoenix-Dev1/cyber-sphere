import { useUser } from "@clerk/clerk-react";
import LoginPage from "./LoginPage.jsx";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  // Add loading animation later
  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-20px)]">
        <LoginPage />
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className=" w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Story"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="cat" className="text-sm ">
            Choose a category:
          </label>
          <select
            name="cat"
            id="cat"
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md w-auto"
        />
        <div className="flex justify-center items-center">
          <button className="bg-royalblue text-white font-medium rounded-xl p-4 w-36">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
