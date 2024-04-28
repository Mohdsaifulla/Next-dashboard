import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const GraphCards = ({ title, num, men, women, month }: any) => {
  return (
    <div>
      <div className="">
        <Card
          x-chunk="dashboard-05-chunk-1"
          className="flex md:w-[312px] md:h-[190px] w-full p-4"
        >
          <div>
            <CardHeader className="pb-2 py-2">
              <CardDescription className="">{title}</CardDescription>
              <CardTitle className="text-4xl">{num}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex w-20">
                {men}
              </div>
              <div className="text-xs text-muted-foreground flex">{women}</div>
            </CardContent>
          </div>
          <div className=" px-2 flex flex-col justify-center items-center">
            <Image
              src="/graph.png"
              width={320}
              height={200}
              alt="Picture of the author"
            />
            <div className="rounded-lg bg-[#FFEFE7] px-1">
              <p>{month}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GraphCards;
