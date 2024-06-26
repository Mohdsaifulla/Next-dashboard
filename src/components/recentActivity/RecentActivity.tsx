import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const RecentActivity = () => {
  return (
    <div className="text-white pt-6">
      <Card
        x-chunk="dashboard-05-chunk-1"
        className="lg:w-[427px] lg:h-full sm:w-[250px] sm:h-full w-full h-full bg-[#161E54] overflow-hidden"
      >
        <CardTitle className="text-4xl shadow-2xl bg-[#1B204A] overflow-hidden rounded-lg px-2 py-2">
          Recent Activity
        </CardTitle>
        <div className="flex flex-col gap-4 px-2 py-2">
          <p className="text-gray-200 px-2 py-2">10.40AM Fri 10 Sept 2021</p>
          <h1 className="text-xl px-2 py-2 text-white">You Posted a New Job</h1>
          <p className="text-gray-100 px-2 py-2">
            Kindly check the requirements and terms of work and make sure
            everyting is right.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col  justify-between px-2 py-2 lg:items-center">
          <h1 className="text-gray-100 px-2">Today you makes 12 Activity</h1>
          <Button className="bg-[#FF5151] rounded-lg my-1 px-2 mx-2 w-40">
            See All Activity
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default RecentActivity;
