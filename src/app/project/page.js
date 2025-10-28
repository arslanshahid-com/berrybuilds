import FeaturedCard from "../components/FeaturedCard";
import ImageCarousel from "../components/ImageCarousel";
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
              <FeaturedCard
                icon={<CodeXml color="blue" />}
                title={"Club and table management"}
                desc={
                  "Club can manage reserve table, schedulle pairing by manually Lorem ipsum dolor sit amet,"
                }
              />
              <FeaturedCard
                icon={<Zap color="blue" />}
                title={"Online Booking System"}
                desc={
                  "Users can reseve table in real time. Lorem ipsum dolor sit amet, "
                }
              />
              <FeaturedCard
                icon={<Key color="blue" />}
                title={"User Account and authentication"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                }
              />
              <FeaturedCard
                icon={<CircleCheck color="blue" />}
                title={"Payment Integration"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                }
              />
              <FeaturedCard
                icon={<Users color="blue" />}
                title={"Contact and Whatsapp Support"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                }
              />
              <FeaturedCard
                icon={<LayoutDashboard color="blue" />}
                title={"Admin Dashboard"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                }
              />
              <FeaturedCard
                icon={<TabletSmartphone color="blue" />}
                title={"Responsive Design"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                }
              />
            </div>
          </div>
          <div className="sidebar">sidebar</div>
        </div>
      </div>
    </div>
  );
}
export default Project;
