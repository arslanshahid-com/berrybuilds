import Image from "next/image";
import cardImage from "/public/card-image.jpg";
import Tag from "./Tag";
import Link from "next/link";

function ProjectCard({ project }) {
  console.log("prkject", project)
  return (
    <>
      <div className="bg-gradient-to-b from-[#1a082e] to-black rounded-2xl border border-gray-800 shadow-lg">
        <Link href={`/project/${project?.id}`}>
          <div className="relative h-40 bg-black">
            <Image
              src={project?.image}
              alt="Image Name"
              width={200}
              height={200}
              priority
              className="w-full h-full object-cover opacity-80"
            />

            <span className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white text-sm font-medium px-3 py-1 rounded-full">
              {project?.category}
            </span>
          </div>

          <div className="p-5">
            <h2 className="text-lg font-semibold text-white mb-2">
              {project?.title}
            </h2>
            <p className="text-gray-400 text-sm mb-4">{project?.desc}</p>

            <div className="flex flex-wrap gap-2">
              {project.tag.map((data, index) => (
                <Tag key={index} name={data.name} />
              ))}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default ProjectCard;
