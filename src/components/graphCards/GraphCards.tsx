import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const GraphCards = ({ title, num, need }: any) => {
  return (
    <div>
      <div>
        <Card x-chunk="dashboard-05-chunk-1" className="flex lg:w-[312px] lg:h-[190px] w-full h-full p-4" >
          <div>
            <CardHeader className="pb-2">
              <CardDescription>{title}</CardDescription>
              <CardTitle className="text-4xl">{num}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">{need}</div>
            </CardContent>
          </div>
          <div>
            <Image
              src="/graph.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GraphCards;
