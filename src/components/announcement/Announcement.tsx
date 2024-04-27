import { CalendarForm } from "../Calender";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const Announcement = () => {
  return (
    <div>
      <Card x-chunk="dashboard-05-chunk-1" className="lg:w-[640px] lg:h-full p-10 w-full h-full">
        <div className="flex justify-between p-2">
          <CardTitle className="text-2xl">Announcement</CardTitle>
          <div>
            <CalendarForm />
          </div>
        </div>
        <p className="text-sm opacity-[50%] p-2">Priority</p>
        <Card className="flex justify-between p-2">
          <div>
            <h1 className="text-xl">Review candidate application</h1>
            <p className="text-xs">Today.11.30 AM</p>
          </div>
          <div>...</div>
        </Card>
        <p className="text-sm opacity-[50%] p-2">Priority</p>
        <Card className="flex justify-between p-2">
          <div>
            <h1 className="text-xl">Interview with candidates</h1>
            <p className="text-xs">Today.10.30 AM</p>
          </div>
          <div>...</div>
        </Card>

        <Card className="flex justify-between p-2">
          <div>
            <h1 className="text-xl">
              Short meeting with product designer from IT Department
            </h1>
            <p className="text-xs">Today.09.15 AM</p>
          </div>
          <div>...</div>
        </Card>
        <CardFooter className="flex items-center justify-center relative top-[50px] text-red-500 border-t">
          <p>Create a New Schedule</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Announcement;
