import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const UpperCard = ({ title, num, need, color }: any) => {
  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div className={`sm:w-[204px] sm:h-[136px] w-full h-full`} style={cardStyle}>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-4xl">{num}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">{need}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpperCard;
