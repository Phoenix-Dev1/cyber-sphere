import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className=" flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="/postImg.jpeg"
          width="735"
          className="rounded-2xl object-cover"
        />
      </div>
      {/* Details */}
      <div className="flex flex-col gap-4 w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-royalblue">John Doe</Link>
          <span>on</span>
          <Link className="text-royalblue">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro
          ex quam, dolorum voluptatum veniam a numquam labore fugit in
          accusantium eum, quibusdam suscipit, ea accusamus laboriosam fugiat
          perspiciatis quaerat!
        </p>
        <Link to="/test" className="underline text-royalblue text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
