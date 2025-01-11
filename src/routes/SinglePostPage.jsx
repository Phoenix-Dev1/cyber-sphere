import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className=" flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-royalblue " to="/test">
              John Doe
            </Link>
            <span>on </span>
            <Link className="text-royalblue ">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error illo
            itaque, ipsum minus minima asperiores ad dolores possimus aliquam
            numquam harum eligendi enim sequi delectus facere officia voluptas.
            Quaerat
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" width="600" className="rounded-2xl" />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in
            praesentium maiores numquam, maxime illum explicabo repellat esse,
            expedita quod deleniti voluptate eaque magnam ipsa. Exercitationem
            non quam quaerat architecto! Ullam quia officia obcaecati veniam
            earum aliquid laboriosam! Quae ab eaque aspernatur, provident
            eligendi qui rerum fugiat inventore a necessitatibus deleniti
            facilis. Quis inventore fuga praesentium ex illum incidunt labore.
            Voluptate quaerat nemo, minima sequi, aperiam laboriosam tenetur
            odit dolorem enim reiciendis commodi a libero modi porro quis
            eligendi nihil, suscipit animi officiis. Reiciendis obcaecati
            doloribus rerum excepturi tempora deserunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in
            praesentium maiores numquam, maxime illum explicabo repellat esse,
            expedita quod deleniti voluptate eaque magnam ipsa. Exercitationem
            non quam quaerat architecto! Ullam quia officia obcaecati veniam
            earum aliquid laboriosam! Quae ab eaque aspernatur, provident
            eligendi qui rerum fugiat inventore a necessitatibus deleniti
            facilis. Quis inventore fuga praesentium ex illum incidunt labore.
            Voluptate quaerat nemo, minima sequi, aperiam laboriosam tenetur
            odit dolorem enim reiciendis commodi a libero modi porro quis
            eligendi nihil, suscipit animi officiis. Reiciendis obcaecati
            doloribus rerum excepturi tempora deserunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in
            praesentium maiores numquam, maxime illum explicabo repellat esse,
            expedita quod deleniti voluptate eaque magnam ipsa. Exercitationem
            non quam quaerat architecto! Ullam quia officia obcaecati veniam
            earum aliquid laboriosam! Quae ab eaque aspernatur, provident
            eligendi qui rerum fugiat inventore a necessitatibus deleniti
            facilis. Quis inventore fuga praesentium ex illum incidunt labore.
            Voluptate quaerat nemo, minima sequi, aperiam laboriosam tenetur
            odit dolorem enim reiciendis commodi a libero modi porro quis
            eligendi nihil, suscipit animi officiis. Reiciendis obcaecati
            doloribus rerum excepturi tempora deserunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in
            praesentium maiores numquam, maxime illum explicabo repellat esse,
            expedita quod deleniti voluptate eaque magnam ipsa. Exercitationem
            non quam quaerat architecto! Ullam quia officia obcaecati veniam
            earum aliquid laboriosam! Quae ab eaque aspernatur, provident
            eligendi qui rerum fugiat inventore a necessitatibus deleniti
            facilis. Quis inventore fuga praesentium ex illum incidunt labore.
            Voluptate quaerat nemo, minima sequi, aperiam laboriosam tenetur
            odit dolorem enim reiciendis commodi a libero modi porro quis
            eligendi nihil, suscipit animi officiis. Reiciendis obcaecati
            doloribus rerum excepturi tempora deserunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in
            praesentium maiores numquam, maxime illum explicabo repellat esse,
            expedita quod deleniti voluptate eaque magnam ipsa. Exercitationem
            non quam quaerat architecto! Ullam quia officia obcaecati veniam
            earum aliquid laboriosam! Quae ab eaque aspernatur, provident
            eligendi qui rerum fugiat inventore a necessitatibus deleniti
            facilis. Quis inventore fuga praesentium ex illum incidunt labore.
            Voluptate quaerat nemo, minima sequi, aperiam laboriosam tenetur
            odit dolorem enim reiciendis commodi a libero modi porro quis
            eligendi nihil, suscipit animi officiis. Reiciendis obcaecati
            doloribus rerum excepturi tempora deserunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in
            praesentium maiores numquam, maxime illum explicabo repellat esse,
            expedita quod deleniti voluptate eaque magnam ipsa. Exercitationem
            non quam quaerat architecto! Ullam quia officia obcaecati veniam
            earum aliquid laboriosam! Quae ab eaque aspernatur, provident
            eligendi qui rerum fugiat inventore a necessitatibus deleniti
            facilis. Quis inventore fuga praesentium ex illum incidunt labore.
            Voluptate quaerat nemo, minima sequi, aperiam laboriosam tenetur
            odit dolorem enim reiciendis commodi a libero modi porro quis
            eligendi nihil, suscipit animi officiis. Reiciendis obcaecati
            doloribus rerum excepturi tempora deserunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in
            praesentium maiores numquam, maxime illum explicabo repellat esse,
            expedita quod deleniti voluptate eaque magnam ipsa. Exercitationem
            non quam quaerat architecto! Ullam quia officia obcaecati veniam
            earum aliquid laboriosam! Quae ab eaque aspernatur, provident
            eligendi qui rerum fugiat inventore a necessitatibus deleniti
            facilis. Quis inventore fuga praesentium ex illum incidunt labore.
            Voluptate quaerat nemo, minima sequi, aperiam laboriosam tenetur
            odit dolorem enim reiciendis commodi a libero modi porro quis
            eligendi nihil, suscipit animi officiis. Reiciendis obcaecati
            doloribus rerum excepturi tempora deserunt?
          </p>
        </div>
        {/* Menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex  flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="/userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                width="48"
                height="48"
              />
              <Link to="" className="text-royalblue">
                John Doe
              </Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
