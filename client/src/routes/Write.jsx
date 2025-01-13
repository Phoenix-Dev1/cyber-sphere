import { useUser, useAuth } from "@clerk/clerk-react";
import LoginPage from "./LoginPage.jsx";
import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Write = () => {
  //Validating user signIn
  const { isLoaded, isSignedIn } = useUser();

  // Getting the ReactQuill form content
  const [value, setValue] = useState();

  // Navigate to the newely created post after success
  const navigate = useNavigate();

  // Getting user token for auth to post a new post
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    // On success
    onSuccess: (res) => {
      toast.success("Post Published");
      navigate(`/${res.data.slug}`);
    },
  });

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

  //Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    console.log(data);

    // Adding the new post to the DB
    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <button className=" w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="cat" className="text-sm ">
            Choose a category:
          </label>
          <select
            name="category"
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
          value={value}
          onChange={setValue}
          className="flex-1 rounded-xl bg-white shadow-md w-auto"
        />
        <div className="flex justify-center items-center">
          <button
            disabled={mutation.isPending}
            className="bg-royalblue text-white font-medium rounded-xl p-4 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {mutation.isPending ? "Loading" : "Send"}
          </button>
          {mutation.isError && <span>{mutation.error.message}</span>}
        </div>
      </form>
    </div>
  );
};

export default Write;
