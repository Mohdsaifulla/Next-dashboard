import { CalendarForm } from "../Calender";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Schedule = () => {
  return (
    <div>
      <Card x-chunk="dashboard-05-chunk-1" className="md:w-[427px] lg:h-full  md:h-full  w-full h-full p-8">
        <div className="flex justify-between p-2">
          <CardTitle className="text-2xl">Upcoming Shedule</CardTitle>
          <div>
            <CalendarForm />
          </div>
        </div>
        <p className="text-sm opacity-[50%] p-2">Priority</p>
        <Card className="flex justify-between p-2 my-2 bg-[#FAFAFA]">
          <div>
            <h1 className="text-xl">Review candidate application</h1>
            <p className="text-xs">Today.11.30 AM</p>
          </div>
          <div>...</div>
        </Card>
        <p className="text-sm opacity-[50%] p-2">Others</p>
        <Card className="flex justify-between p-2 my-2 bg-[#FAFAFA]">
          <div>
            <h1 className="text-xl">Interview with candidates</h1>
            <p className="text-xs">Today.10.30 AM</p>
          </div>
          <div>...</div>
        </Card>

        <Card className="flex justify-between p-2 bg-[#FAFAFA]">
          <div>
            <h1 className="text-xl">
              Short meeting with product designer from IT Department
            </h1>
            <p className="text-xs">Today.09.15 AM</p>
          </div>
          <div>...</div>
        </Card>
        <CardFooter className="flex items-center justify-center relative top-[50px] text-red-500 border-t">
          <p className="">Create a New Schedule</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Schedule;
