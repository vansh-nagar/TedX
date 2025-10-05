import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Assuming Next.js for client-side navigation with <Link>

//daksh
const involvementOptions = [
  {
    title: "Apply to be a Speaker",
    description:
      "TEDxBITJaipur is all about ideas worth spreading. If you're thinking of submitting an idea, we've compiled all the information and guidelines you need to prepare.",
    link: "/apply-for-speakers",
    linkText: "Apply",
    buttonVariant: "default",
  },
  {
    title: "Become a Campus Ambassador",
    description:
      "Represent TEDxBITJaipur at your college or university. As a Campus Ambassador, you'll help spread ideas, promote events, and build a community of thinkers on your campus.",
    link: "/campus-amb",
    linkText: "Apply Now",
    buttonVariant: "default",
  },
  {
    title: "Become a Volunteer",
    description:
      "At TEDxBITJaipur, nothing we do is possible without our amazing team of volunteers. Find out more about how you can join our team and contribute on event day.",
    link: "/join-teamx",
    linkText: "More Info",
    buttonVariant: "default",
  },
];
const page = () => {
  return (
    <div>
      <div className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden">
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQG1TPbzjKLBtA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1696339002650?e=2147483647&v=beta&t=KoYAa-2KO3haBpdbo0HzIqi-Ll-vivWYWEv3naa4H4s"
          alt="TEDx Talks background"
          className=" h-full w-full object-cover"
        />
        
      </div>

      <div className="w-full bg-[#E62B1F] py-10 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-12 xl:px-24">
        <div className="max-w-6xl mx-auto text-white">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8 md:mb-10 leading-relaxed drop-shadow-sm">
            There are lots of ways to be involved with the{" "}
            <b className="font-extrabold">TEDxBITJaipur</b> community to fit
            your passions and schedule, from helping to{" "}
            <b className="font-extrabold">
              organise our events and volunteer on the day
            </b>
            , to{" "}
            <b className="font-extrabold">sharing your ideas from our stage</b>.
          </p>

          <Separator className="bg-white/50 my-6 md:my-8 w-16 md:w-24" />

          <div className="space-y-3 md:space-y-4">
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-light italic drop-shadow-sm">
              "TEDxBITJaipur has been an incredible experience. I feel
              privileged to help enable unheard voices from the{" "}
              <b className="not-italic font-semibold">
                Jaipur ecosystem and beyond
              </b>
              , to contribute to real change and be at the forefront of{" "}
              <b className="not-italic font-semibold">
                new perspectives and ideas worth spreading
              </b>
              ."
            </blockquote>

            <p className="text-sm sm:text-base md:text-lg font-bold pt-2">
              Daksh Gupta, Licensee & Organizer
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-12 xl:px-24 text-foreground relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
            How to Get Involved
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {involvementOptions.map((option, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <CardTitle className="text-xl md:text-2xl font-bold text-primary">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0 my-4 text-muted-foreground">
                  <p className="text-sm md:text-base">{option.description}</p>
                </CardContent>
                <CardFooter className="p-0">
                  <Link href={option.link} passHref>
                    <Button
                      variant="default"
                      className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
                    >
                      <span>{option.linkText}</span>
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
