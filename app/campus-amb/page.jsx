"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Trophy,
  Handshake,
  Clock,
  Lightbulb,
  GraduationCap,
  Megaphone,
} from "lucide-react";
import LinkNext from "next/link";

const TED_RED = "#EB0028";

const benefitsData = [
  {
    title: "Exclusive Perks",
    icon: Trophy,
    description:
      "Earn complimentary tickets, official merchandise, and exclusive passes to speaker interactions.",
  },
  {
    title: "Unrivalled Networking",
    icon: Handshake,
    description:
      "Connect directly with our speakers, team members, and the vibrant TEDx community across Jaipur.",
  },
  {
    title: "Skill Development",
    icon: GraduationCap,
    description:
      "Develop professional skills in marketing, leadership, event management, and public relations.",
  },
  {
    title: "Official Certification",
    icon: Clock,
    description:
      "Receive an official certificate recognizing your contribution as a TEDxBITJaipur Campus Ambassador.",
  },
];

const responsibilitiesData = [
  "Be the vibrant face of TEDxBITJaipur at your institution, proudly representing our brand and ethos to your peers.",
  "Actively promote the event theme, speaker lineup, and ticket sales through engaging social media campaigns and dynamic on-campus activities.",
  "Efficiently coordinate the sale and distribution of event tickets within your college network, ensuring maximum reach.",
  "Organize and host exciting engagement activities or informative sessions on your campus, fostering the true TEDx spirit.",
  "Provide timely and insightful updates to the TEDxBITJaipur outreach team, ensuring seamless communication and coordination.",
];

//daksh
const faqData = [
  {
    question: "Who is eligible to apply for the Campus Ambassador program?",
    answer:
      "Any enthusiastic student currently enrolled in an undergraduate or postgraduate program at a recognized college or university is eligible. While we prioritize candidates within the Jaipur region, we warmly welcome applications from highly motivated students across India.",
  },
  {
    question: "What is the expected duration of the Campus Ambassador program?",
    answer:
      "The Campus Ambassador program typically spans 2-3 months, intensely leading up to the main TEDxBITJaipur event. Specific program dates will be clearly communicated upon your successful selection.",
  },
  {
    question:
      "Are there special incentives or rewards for outstanding ambassadors?",
    answer:
      "Absolutely! Our top-performing Campus Ambassadors will be honored with special recognition, valuable Letters of Recommendation (LORs), exclusive premium merchandise, and priority invitations to future TEDxBITJaipur events, celebrating their exceptional contributions.",
  },
  {
    question: "How can I submit my application to become a Campus Ambassador?",
    answer:
      "Applying is simple! Click on the prominent 'Apply Now' button on this page, which will direct you to our official application form. Please ensure all contact and educational details are accurately provided to facilitate your selection process.",
  },
];

const page = () => {
  const ApplicationLink = "YOUR_GOOGLE_FORM_LINK_HERE";

  return (
    <div className="bg-background min-h-screen pt-[160px] text-foreground">
      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(-2%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-20">
        <header className="relative text-center py-20 sm:py-24">
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: 'url("/tedx-pattern.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-[#EB0028] mb-5 leading-tight tracking-tight">
              Become a Campus Ambassador
            </h1>
            <div className="max-w-4xl mx-auto mb-10">
              <p className="text-xl sm:text-2xl  font-semibold text-foreground text-center mb-3">
                TEDxBITJaipur Campus Ambassador Program
              </p>
              <div className="bg-[#EB0028] text-white py-4 px-8 shadow-2xl rounded-lg transform skew-y-[-1deg] text-center">
                <p className="text-2xl sm:text-3xl font-extrabold tracking-wider transform skew-y-[1deg]">
                  Spread Ideas That Matter!
                </p>
              </div>
            </div>
            <LinkNext href={ApplicationLink} passHref>
              <Button
                size="xl"
                className={`bg-[#EB0028] hover:bg-red-700 text-primary-foreground font-extrabold h-14 sm:h-16 text-xl sm:text-2xl transition-all duration-300 ease-in-out hover:scale-[1.03] shadow-lg hover:shadow-2xl px-10 rounded-full`}
              >
                Apply Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </LinkNext>
          </div>
        </header>
        <section>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-white">
            Why Join Our Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit, index) => (
              <Card
                key={index}
                className="flex flex-col aspect-square items-center  justify-center    text-center p-1 bg-secondary border border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <benefit.icon className="h-12 w-12 text-[#EB0028]  animate-pulse" />
                <CardTitle className="text-2xl font-bold ">
                  {benefit.title}
                </CardTitle>
                <CardContent className="p-0 text-base text-muted-foreground">
                  {benefit.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="bg-card p-8 sm:p-10 rounded-2xl shadow-xl border border-border">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#EB0028] border-b-2 pb-4 border-[#EB0028]/50">
            Your Role: Key Responsibilities
          </h2>
          <ul className="space-y-6 pl-0 text-lg text-white">
            {responsibilitiesData.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <Megaphone className="h-6 w-6 text-[#EB0028] mt-1 mr-4 shrink-0" />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-5xl mx-auto border-b border-border"
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-t border-border"
              >
                <AccordionTrigger className="text-xl sm:text-2xl font-semibold hover:no-underline text-foreground hover:text-[#EB0028] transition-colors py-5">
                  <Lightbulb className="h-6 w-6 text-[#EB0028] mr-4 shrink-0" />
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-5 sm:p-6 text-lg text-muted-foreground bg-secondary/20 rounded-b-lg border-l-4 border-[#EB0028] mt-1">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="text-center pt-12 pb-16 bg-gradient-to-r from-[#EB0028]/10 to-transparent rounded-2xl shadow-inner">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Amplify Your Impact with TEDxBITJaipur?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't miss this opportunity to be at the forefront of sharing "Ideas
            Worth Spreading." Your journey as a Campus Ambassador starts here!
          </p>
          <LinkNext href={ApplicationLink} passHref>
            <Button
              size="xl"
              className={`bg-[#EB0028] hover:bg-red-700 text-primary-foreground font-extrabold h-16 text-xl sm:text-2xl transition-all duration-300 ease-in-out hover:scale-[1.05] shadow-xl hover:shadow-2xl px-12 rounded-full animate-bounce-slow`}
            >
              <ArrowRight className="mr-4 h-7 w-7" />
              Apply to be an Ambassador
            </Button>
          </LinkNext>
        </section>
      </div>
    </div>
  );
};

export default page;
