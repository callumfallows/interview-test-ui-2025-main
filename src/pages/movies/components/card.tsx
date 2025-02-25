import { Calendar, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../../components/ui/card";

interface MovieCardProps {
  img: string;
  title: string;
  tagline: string;
  release_date: string;
}

export function MovieCard({ img, title, tagline, release_date }: MovieCardProps) {
  const handleLike = () => {
    console.log("Liked");
  };

  const handleDislike = () => {
    console.log("Disliked");
  };

  return (
    <Card className="w-full max-w-sm flex flex-col justify-around">
      <CardHeader className="p-0">
        <div className="h-40 overflow-hidden">
          <img
            src={img}
            alt={title}
            width="50px"
            height="50px"
            className="aspect-3/2 w-full object-cover radius-lg"
          />
        </div>
        <div className="flex p-4 py-2 flex-row items-center justify-start gap-2">
          <Calendar className="h-4 w-4" />
          <div>
            <p className="text-xs font-bold">Released</p>
            <p className="text-xs">{release_date}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground">{tagline}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full p-4 pt-0">
        <div className="p-0 flex w-full gap-2">
          <Button
            variant="outline"
            className="w-full bg-green-200 hover:bg-green-300 focus:bg-green-400"
            onClick={handleLike}
          >
            <ThumbsUp className="mr-2 h-4 w-4" />
            Like
          </Button>
          <Button
            variant="outline"
            className="w-full bg-red-200 hover:bg-red-300 focus:bg-red-400"
            onClick={handleDislike}
          >
            <ThumbsDown className="mr-2 h-4 w-4" />
            Dislike
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
