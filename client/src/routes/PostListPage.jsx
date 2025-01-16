import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Cyber Sphere</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden bg-royalblue text-sm text-white px-4 py-2 mb-4 rounded-2xl"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
