import FeaturedCard from "../components/FeaturedCard";
import ImageCarousel from "../components/ImageCarousel";
import featuredData from "../data/featuredData.json";
import Tag from "../components/Tag";
import {
  CodeXml,
  Zap,
  Key,
  CircleCheck,
  Users,
  LayoutDashboard,
  TabletSmartphone,
} from "lucide-react";

const iconMap = {
  CodeXml: <CodeXml color="blue" />,
  Zap: <Zap color="blue" />,
  Key: <Key color="blue" />,
  CircleCheck: <CircleCheck color="blue" />,
  Users: <Users color="blue" />,
  LayoutDashboard: <LayoutDashboard color="blue" />,
  TabletSmartphone: <TabletSmartphone color="blue" />,
};
function Project() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4">
        <ImageCarousel />
        <div className="grid grid-cols-[1000px_1fr] gap-4 pt-30 pb-20">
          <div className="content">
            <Tag name={"Sports"} />
            <h1 className="text-5xl font-bold my-5">SnookerHub</h1>
            <h2 className="text-3xl mb-2 font-bold">Overview</h2>
            <p>
              Snooker hub is the modern web platform desgined to digitalize and
              streamline snooker club management. It allows users to explore
              nearby clubs make table reservation, and stay connected with
              snooker events, all through a seek, responsive and user-friendly
              interface.
            </p>
            <h2 className="text-3xl mt-10 font-bold mb-5">Key Features</h2>
            <div className="grid grid-cols-2 gap-5">
              {featuredData.map((item, index) => (
                <FeaturedCard
                  key={index}
                  icon={iconMap[item.icon]}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
          <div className="sidebar">sidebar</div>
        </div>
      </div>
    </div>
  );
}
export default Project;
