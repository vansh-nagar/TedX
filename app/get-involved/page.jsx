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

const involvementOptions = [
  {
    title: "Apply to Speak",
    description:
      "TEDxBITJaipur is all about ideas worth spreading. If you're thinking of submitting an idea, we've compiled all the information and guidelines you need to prepare.",
    link: "/apply-for-speakers",
    linkText: "Apply",
    buttonVariant: "default",
  },
  {
    title: "Campus Ambassador",
    description:
      "Represent TEDxBITJaipur at your college or university. As a Campus Ambassador, you'll help spread ideas, promote events, and build a community of thinkers on your campus.",
    link: "/apply-for-camput-ambassador",
    linkText: "Apply Now",
    buttonVariant: "default",
  },
  {
    title: "Volunteer",
    description:
      "At TEDxBITJaipur, nothing we do is possible without our amazing team of volunteers—we call them TeamX. Find out more about how you can join our team and contribute on event day.",
    link: "/join-teamx",
    linkText: "More Info",
    buttonVariant: "default",
  },
  {
    title: "Partner with Us",
    description:
      "Support innovation and ideas by becoming a TEDxBITJaipur partner. We offer various partnership opportunities for organizations looking to engage with our diverse community of thinkers and changemakers.",
    link: "/partner-with-us",
    linkText: "Learn More",
    buttonVariant: "default",
  },
];
const page = () => {
  return (
    <div>
      <img
        src="https://i.pinimg.com/736x/6b/07/34/6b0734b008170511071242537fce89c7.jpg"
        alt=""
        className=" h-[85vh] w-full      object-cover"
      />

      <div className="w-full bg-[#E62B1F] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-24">
        {/* Content wrapper to center and control maximum width */}
        <div className="max-w-6xl mx-auto text-white">
          {/* Main Text Block */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-10 leading-relaxed drop-shadow-sm">
            There are lots of ways to be involved with the{" "}
            <b className="font-extrabold">TEDxBITJaipur</b> community to fit
            your passions and schedule, from helping to{" "}
            <b className="font-extrabold">
              organise our events and volunteer on the day
            </b>
            , to{" "}
            <b className="font-extrabold">sharing your ideas from our stage</b>.
          </p>

          <Separator className="bg-white/50 my-8 w-24" />

          {/* Quote Block */}
          <div className="space-y-4">
            <blockquote className="text-lg sm:text-xl md:text-2xl font-light italic  drop-shadow-sm">
              “TEDxBITJaipur has been an incredible experience. I feel
              privileged to help enable unheard voices from the{" "}
              <b className="not-italic font-semibold">
                Jaipur ecosystem and beyond
              </b>
              , to contribute to real change and be at the forefront of{" "}
              <b className="not-italic font-semibold">
                new perspectives and ideas worth spreading
              </b>
              .”
            </blockquote>

            <p className="text-base sm:text-lg font-bold pt-2">
              Daksh Gupta, Licensee & Organizer
            </p>
          </div>
        </div>
      </div>

      <div className=" py-16 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-24 text-foreground relative">
        <div className=" mx-auto">
          {/* Main Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
            How to Get Involved
          </h2>

          {/* Three-column layout for involvement options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {involvementOptions.map((option, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-primary">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0 mb-6 text-muted-foreground">
                  <p>{option.description}</p>
                </CardContent>
                <CardFooter className="p-0">
                  <Link href={option.link} passHref>
                    <Button
                      variant="default" // Primary button style
                      className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                    >
                      {option.linkText}
                      <ArrowRight className="h-4 w-4" />
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
