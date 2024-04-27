import Announcement from "../announcement/Announcement";
import GraphCards from "../graphCards/GraphCards";
import RecentActivity from "../recentActivity/RecentActivity";
import Schedule from "../schedule/Schedule";
import UpperCard from "../upperCards/UpperCard";

const MainDashboard = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-4 ">
      <div>
        <h1 className="text-2xl font-bold px-2 pt-2">Dashboard</h1>
        <div>
          <div className="flex sm:flex-row flex-col gap-8 justify-center items-center p-8">
            <UpperCard
              title={"Available Position"}
              num={"24"}
              need={"4 Urgently needed"}
              color={"#FFEFE7"}
            />
            <UpperCard
              title={"Job Open"}
              num={"10"}
              need={"4 Active hiring"}
              color={"#E8F0FB"}
            />
            <UpperCard
              title={"New Empoyees"}
              num={"24"}
              need={"4 Department"}
              color={"#FDEBF9"}
            />
          </div>
          <div className="flex sm:flex-row flex-col  p-8 mx-1 gap-8 w-full justify-center items-center">
            <GraphCards
              title={"New Empoyees"}
              num={"24"}
              need={"4 Department"}
            />
            <GraphCards
              title={"New Empoyees"}
              num={"24"}
              need={"4 Department"}
            />
          </div>
          <div className="flex justify-center items-center">
            <Announcement />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-col sm:flex-row flex-col">
        <RecentActivity />
        <Schedule />
      </div>
    </div>
  );
};

export default MainDashboard;
