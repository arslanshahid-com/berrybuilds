import FeaturedCard from "../../components/FeaturedCard";
import ImageCarousel from "../../components/ImageCarousel";
// import featuredData from "../data/featuredData.json";
import productDetailData from "../../data/productDetail.json";
import Image from "next/image";
import profilePic from "/public/profile_pic.png";
import Tag from "../../components/Tag";
import {
  CodeXml,
  Zap,
  Key,
  CircleCheck,
  Users,
  LayoutDashboard,
  TabletSmartphone,
} from "lucide-react";
import TechStack from "../../components/TechStack";

const iconMap = {
  CodeXml: <CodeXml color="blue" />,
  Zap: <Zap color="blue" />,
  Key: <Key color="blue" />,
  CircleCheck: <CircleCheck color="blue" />,
  Users: <Users color="blue" />,
  LayoutDashboard: <LayoutDashboard color="blue" />,
  TabletSmartphone: <TabletSmartphone color="blue" />,
};


function Project({params}) {
  return (
    <div className="bg-black text-white">
   
      
      <div className="container mx-auto px-4">
        <ImageCarousel />
        <div className="grid grid-cols-[1000px_1fr] gap-4 pt-30 pb-20">
          <div className="content">
            <Tag name={productDetailData.category} />
            {
              console.log("detail data", productDetailData)
            }
            <h1 className="text-5xl font-bold my-5">{productDetailData.title}</h1>
            <h2 className="text-3xl mb-2 font-bold">Overview</h2>
            <p>
              {productDetailData.desc}
            </p>
            <h2 className="text-3xl mt-10 font-bold mb-5">Key Features</h2>
            <div className="grid grid-cols-2 gap-5">
              {productDetailData.keyFeatures.map((item, index) => (
                <FeaturedCard
                  key={index}
                  icon={iconMap[item.icon]}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
            <h2 className="text-3xl font-bold my-10">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {productDetailData.TechStack.map((item, index)=>(
                <TechStack key={index} name={item.name} />
              ))}
            </div>
          </div>
          <div className="sidebar">
            <h2 className="text-3xl font-bold mb-5">Developers</h2>
            <div className="bg-gradient-to-r from-[#0B071F] to-[#170E19] p-5 rounded-lg">
              <div className="text-center">
                <Image
                  src={profilePic}
                  alt="Image Name"
                  className="w-24 h-24 rounded-full object-cover m-auto"
                />
                <h2 className="text-xl font-bold my-3">
                  {productDetailData.user.name}
                </h2>
                <p className="text-sm mb-5">{productDetailData.user.designation}</p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <a href={productDetailData.user.linkdin} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#120E31] text-blue-500 rounded text-center hover:bg-blue-500 hover:text-white">Linkdin</a>
                <a href={"tel:"+productDetailData.user.phone} className="p-2 bg-[#211529] text-purple-500 rounded text-center hover:bg-purple-900 hover:text-white">Call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
