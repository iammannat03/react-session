import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const JokeBox = () => {
  const [joke, setJoke] = useState("ffnewifnwei");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;
    const fetchJoke = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      if (isMounted) {
        setJoke(data);
        setIsLoading(false);
      }
    };
    fetchJoke();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className="text-white px-10 py-3 w-full flex flex-col gap-y-3 rounded-lg">
      <h2 className="text-xl font-semibold text-purple-200">
        Jokes only a Potato would laugh at
      </h2>
      <div className="flex items-start gap-x-2">
        <ChevronRight className="h-5 w-5 mt-1" />
        {isLoading ? (
          <Skeleton className={"w-full h-20 bg-white/15"} />
        ) : (
          <div>
            <h3 className="text-lg font-bold">
              {joke.setup}
            </h3>
            <p>{joke.punchline}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JokeBox;
