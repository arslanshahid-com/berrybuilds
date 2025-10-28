import ProjectCard from "./components/ProjectCard";
import featuredProductData from "./data/featuredProductData.json";

export default function Home() {
  return (
    <div className="bg-black py-4 text-white ">
      <div className="container mx-auto px-4">
        <div className="page-heading my-10">
          <h1 className="text-4xl font-bold mb-3">Featured Projects</h1>
          <p className="text-gray-300">
            Explore amazing projects built by talented students
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 pb-20">
         
          {
            featuredProductData.map((project, index)=>(
              <ProjectCard key={index} project={project}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
