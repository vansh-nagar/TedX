"use client";
import { RiArrowRightLine } from "@remixicon/react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  const accordionData = [
    {
      title: (
        <span className="flex items-center gap-2 ">
          .What a TEDx talk is NOT
        </span>
      ),
      content: (
        <div className="space-y-2">
          <ul className="list-disc pl-5">
            <li>
              TEDx talks are <b>not</b> motivational speeches.
            </li>
            <li>
              TEDx talks are not just storytelling about a personal journey. If
              you are including your personal story, it must lead to a new
              surprising idea or concept to qualify for consideration.
            </li>
            <li>
              TEDx talks are not a promotional opportunity to showcase your
              company or brand.
            </li>
            <li>TEDx talks are not religious or political.</li>
          </ul>
        </div>
      ),
    },
    {
      title: (
        <span className="flex items-center gap-2"> What is a TEDx Talk?</span>
      ),
      content: (
        <div className="space-y-2">
          <p>
            A TEDx Talk is a showcase for speakers presenting great, well-formed
            ideas in under 18 minutes.
          </p>
          <p>
            <b>Why under 18 minutes?</b>
            <br />
            This short talk model works, since it only demands the audience’s
            attention for a short period of time, decreasing the chance of minds
            wandering or daydreaming about lunch. In fact, some of our greatest
            TED Talks have been as short as 5 minutes long!
          </p>
          <p>
            <b>What is a great, well-formed idea?</b>
            <br />
            It can actually be one of two things:
            <ul className="list-disc ml-6">
              <li>
                Something that’s new and surprising; an idea or invention that
                your audience has never heard about.
              </li>
              <li>
                A great basic idea (that your audience has maybe already heard)
                with a compelling new argument behind it that challenges beliefs
                and perspectives.
              </li>
            </ul>
            In other words, an idea isn’t just a story or a list of facts. A
            good idea takes certain evidence or observations and draws a larger
            conclusion.
          </p>
        </div>
      ),
    },
    {
      title: (
        <span className="flex items-center gap-2"> Types of TEDx Talks</span>
      ),
      content: (
        <div>
          <p>
            When searching for speakers, you can keep in mind these seven
            different types of talks — not every speaker’s talk has to be
            exactly the same.
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <b>The big idea:</b> The talks that make one or two very strong
              points, and it’s important.
            </li>
            <li>
              <b>The tech demo:</b> An onstage look at some clever new invention
              that the speaker was a part of creating.
            </li>
            <li>
              <b>The performance:</b> Music, dance, magic, puppetry, or some
              other performance to captivate your audience.
            </li>
            <li>
              <b>The artist’s statement:</b> In these talks, artists showcase
              their art and explain the meaning and process behind what they
              create.
            </li>
            <li>
              <b>The “dazzle with wonder”:</b> These talks are mainly about the
              amazement of science and discovery.
            </li>
            <li>
              <b>The small idea:</b> These talks are not about one big,
              world-changing idea, but instead a very engaging take on an
              interesting topic.
            </li>
            <li>
              <b>The “issue” talk:</b> These talks expose your audience to an
              issue that they may not otherwise know much about.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: (
        <span className="flex items-center gap-2">
          {" "}
          TEDx Content Guidelines
        </span>
      ),
      content: (
        <div className="space-y-2">
          <p>
            TED offers speakers a platform to provide information directly to
            millions of people around the world. It’s a responsibility we take
            seriously. First and foremost, that information has to be accurate
            at the time of publication.
          </p>
          <p>
            If a talk does not follow the Content Guidelines or Copyright
            Guidelines and the organizer chooses to upload the talk, TEDx
            reserves the right to add an editorial flag describing how the talk
            falls outside the guidelines or to decline its publication.
          </p>
          <p>
            <b>All TED and TEDx talk must follow:</b>
          </p>
          <ul className="list-disc ml-6">
            <li>No commercial agenda</li>
            <li>No political agendas or inflammatory rhetoric</li>
            <li>No religious agenda</li>
            <li>No bad science</li>
          </ul>
          <p>
            <a
              href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/speakers-program/prepare-your-speaker/tedx-content-guidelines-fact-checking-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline"
            >
              See TEDx Content Guidelines here.
            </a>
          </p>
          <p>
            <a
              href="https://pb-assets.tedcdn.com/system/baubles/files/000/008/465/original/TEDx_Copyright_Guidelines_final.pdf?1588610363"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline"
            >
              See TEDx Copyright Guidelines (PDF)
            </a>
          </p>
        </div>
      ),
    },
    {
      title: <span className="flex items-center gap-2"> No Bad Science</span>,
      content: (
        <div className="space-y-2">
          <p>
            TED and TEDx are platforms for showcasing and explaining genuine
            advances in science that are backed by research. Scientific claims
            by speakers should be based on data that has survived scrutiny by
            experts in the field. Speakers should be transparent about the basis
            for any factual claims, and the scientific evidence for them.
          </p>
          <p>
            <b>Claims made using scientific language should:</b>
            <ul className="list-disc ml-6">
              <li>Be testable experimentally</li>
              <li>Have been published in a peer-reviewed, respected journal</li>
              <li>
                Be based on theories that are also considered credible by
                experts in the field
              </li>
              <li>
                Be backed up by experiments that have generated enough data to
                convince other experts of its legitimacy
              </li>
              <li>
                Have proponents who are secure enough to acknowledge areas of
                doubt and need for further investigation
              </li>
              <li>
                Not fly in the face of the broad existing body of scientific
                knowledge
              </li>
              <li>
                Be presented by a speaker who has the right scientific
                qualifications
              </li>
              <li>
                Show clear respect for the scientific method and scientific
                thinking generally.
              </li>
            </ul>
          </p>
          <p>
            <b>Claims made using scientific language should not:</b>
            <ul className="list-disc ml-6">
              <li>Be so obscure or mysterious as to be untestable.</li>
              <li>
                Be considered ridiculous by credible scientists in the field.
              </li>
              <li>
                Be based on experiments that can not be reproduced by others.
              </li>
              <li>
                Be based on data that do not convincingly corroborate the
                experimenter’s theoretical claims.
              </li>
              <li>Come from overconfident advocates.</li>
              <li>
                Use over-simplified interpretations of legitimate studies.
              </li>
              <li>
                Include imprecise vocabulary. (Phrases like “quantum
                consciousness,” personal “energy fields,” “crystal healing”, and
                the like, should be considered major red flags.)
              </li>
              <li>
                Abandon evidence-based thinking or be dismissive of the
                scientific method.
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: (
        <span className="flex items-center gap-2">
          .TEDx Fact-Checking Guide
        </span>
      ),
      content: (
        <div className="space-y-2">
          <p>
            <b>What is fact-checking, and why does it matter?</b>
          </p>
          <p>
            Fact-checking means going through a script’s empirical claims —
            basically, anything that can be verified in the real world — and
            making sure that they are as accurate as possible. There are real
            consequences to the talks you produce, since people will often
            change their behavior based on a talk that they watch. So, you want
            to be sure you are not accidentally sharing misinformation or
            disinformation on your TEDx stage. It protects the reputations of
            you, the speaker, the event, and TED at-large.
          </p>
          <p>
            <a
              href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/speakers-program/prepare-your-speaker/tedx-fact-checking-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline"
            >
              See more details here.
            </a>
          </p>
        </div>
      ),
    },
    {
      title: (
        <span className="flex items-center gap-2">
          .TEDx Speaker Expectation by TED
        </span>
      ),
      content: (
        <div className="space-y-2">
          <p>
            <b>Speaker fees and ineligible speakers:</b>
            <ul className="list-disc ml-6">
              <li>TEDx events may neither pay nor charge speakers.</li>
              <li>
                Sponsors of the TEDx event cannot be speakers and can never
                present from the stage.
              </li>
              <li>
                Organizers cannot be speakers at TEDx events to which they
                contribute.
              </li>
            </ul>
          </p>
          <p>
            <b>No commercial agenda:</b>
            <br />
            Speakers cannot promote their own products, books, or businesses, or
            those of a company which employs them. Talks can only feature
            technology, product demos, or books that inform an idea presented in
            a talk.
          </p>
          <p>
            <b>Copyright:</b>
            <br />
            Every talk’s content must be in compliance with copyright law.
            Speakers must inform you beforehand of any third-party material that
            will be used in their presentations and seek written permissions to
            copyrighted materials when applicable. TED cannot assist with this
            process nor act as a consultant on individual cases. Read these
            Copyright Guidelines to ensure as speaker you clear everything with
            permission before we record your TEDx talk.{" "}
          </p>
          <p>
            <b>Talks are thoughtful, not divisive:</b>
            <br />
            No talks with an inflammatory political or religious agenda, nor
            polarizing “us vs them” language. TED and TEDx seek to build
            consensus and provide outside-the-box thinking, not to revisit
            familiar, unresolvable disputes on these topics.
          </p>
          <p>
            <b>Speaker content guidelines:</b>
            <ul className="list-disc ml-6">
              <li>
                All talks should comply with TEDx{" "}
                <a
                  href="http://ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/speakers-program/prepare-your-speaker/tedx-content-guidelines-fact-checking-guide"
                  target="_blank"
                  className="text-red-600 underline"
                >
                  Content Guidelines
                </a>{" "}
                and{" "}
                <a
                  href="https://pb-assets.tedcdn.com/system/baubles/files/000/008/465/original/TEDx_Copyright_Guidelines_final.pdf?1588610363"
                  target="_blank"
                  className="text-red-600 underline"
                >
                  Copyright Guidelines
                </a>{" "}
              </li>
              <li>
                If a talk does not follow the Content Guidelines or Copyright
                Guidelines, organizers have the discretion to withhold the talk.
                TEDx organizers must inform both TED staff and the speaker(s)
                that they have made this decision, along with their reasoning.
              </li>
              <li>
                If a talk does not follow the Content Guidelines or Copyright
                Guidelines and the organizer chooses to upload the talk, TED
                reserves the right to add an editorial flag describing how the
                talk falls outside the guidelines or to decline its publication.
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: (
        <span className="flex items-center gap-2">
          .What We Expect From Our Speakers
        </span>
      ),
      content: (
        <div className="space-y-4">
          <p>
            At <b>TEDxBITJaipur</b>, a talk is more than a performance — it’s a
            process of thoughtful discovery, crafted with care and intention.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You’ll join us on stage in January 2026, delivering a talk that
              speaks to both heart and mind.
            </li>
            <li>Talks should reflect clarity, originality, and purpose.</li>
            <li>
              Be open — to collaboration, coaching, and creative dialogue.
            </li>
            <li>
              Attend speaker curation and development sessions from September to
              December 2025.
            </li>
            <li>
              Follow the spirit of TED: No promotion. No politics. Just ideas
              worth spreading.
            </li>
            <li>
              Above all, bring your most authentic self to the stage — the rest,
              we’ll build together.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: (
        <span className="flex items-center gap-2">
          .How to Prepare For Your Talk
        </span>
      ),
      content: (
        <div className="space-y-2">
          <p>
            At TEDxBITJaipur, we’re building a stage for voices that often go
            unheard — the thinkers, the tinkerers, the quiet revolutionaries. We
            seek speakers who bring not just ideas, but the courage to reframe
            perspectives and move hearts. Whether you’re a first-time speaker or
            a seasoned storyteller, what matters most is the power of your idea
            and your willingness to shape it with intention.
          </p>
          <p>
            TEDx events, including ours, are fully volunteer-led — powered by
            passion, not profit. Every speaker is guided through a thoughtful
            curation journey to ensure their talk reaches its full potential.
          </p>
          <p>
            <b>
              Before submitting your application, here are a few important
              notes:
            </b>
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Please take time to understand and honor all TED, TEDx, and
              TEDxBITJaipur content guidelines.
            </li>
            <li>
              Familiarize yourself with the spirit of our event theme (P.S. we
              might share a hint if you message us!) and consider how your idea
              might resonate with the theme’s depth.
            </li>
            <li>
              Ask yourself: <i>“Why me?”</i> and <i>“Why now?”</i> What makes
              your story or insight urgent, fresh, and transformative in this
              moment?
            </li>
            <li>
              We encourage applicants with a connection to Jaipur or the broader
              Indian ecosystem, though applications are welcome from everywhere.
            </li>
            <li>
              Know that submitting your talk idea is only the beginning. If
              selected, you’ll work closely with our curation team to develop,
              refine, and rehearse your talk.
            </li>
            <li>
              We receive a high volume of applications and review each with
              care. While we may not be able to respond to every entry
              individually, please know that your voice matters and is
              appreciated.
            </li>
          </ul>
          <p>
            Remember, TEDxBITJaipur isn’t just about the talk — it’s about the
            idea, the energy, and the community you help create. We’re excited
            to see what you’ll bring to the stage.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-[#f7dcdc] mt-[100px] p-4 sm:p-6 md:p-10 max-sm:p-1">
      {/* Left Section */}
      <div className="flex flex-col p-4 sm:p-6 md:p-10 w-full md:w-1/2 justify-start text-white z-50 ">
        <h1 className="text-4xl sm:text-3xl md:text-4xl text-red-600 font-bold mb-4 ">
          <span> APPLY TO BE A</span>
          <br />{" "}
          <span className=" underline text-white text-7xl">SPEAKER!</span>
        </h1>
        <p className="mb-4 text-base sm:text-lg">
          If you believe in the power of ideas to move minds, shift
          perspectives, and spark meaningful change — this is your moment.
        </p>
        <p className="mb-4 text-base sm:text-lg">
          TEDxBITJaipur is inviting bold thinkers, quiet visionaries, and
          curious changemakers to be a part of our 2026 speaker lineup. If
          you're a researcher, artist, entrepreneur, educator, or someone with a
          lived experience that the world needs to hear — we welcome your story.
        </p>
        <p className="mb-4 text-base sm:text-lg">
          We’ve chosen a theme that threads together complexity, connection, and
          curiosity. Want a hint? Slide into our inbox — we just might share a
          glimpse into the world we’re weaving.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfcDk9BrCnCN_s_b7gVw2VFBks80Dw-sKUWOgVgXeKeVOtMog/viewform?usp=dialog"
            target="_blank"
            className="px-4 sm:px-6 py-2 shadow-md border-4 border-red-700 bg-red-700 font-bold text-white rounded-xl group relative flex gap-4 hover:pr-12 transition-all duration-300 overflow-hidden"
            type="button"
          >
            Apply Now
            <RiArrowRightLine className="w-4 absolute right-4 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
          <a
            href="mailto:speakers@tedxbitjaipur.com?subject=SPEAKER%20INQUIRY%20%7C%20TEDxBITJaipur"
            className="px-4 sm:px-6 py-2 shadow-md border-4 border-[#eb0028] text-white rounded-xl group relative flex gap-4 hover:pr-12 transition-all duration-300 overflow-hidden"
            type="button"
          >
            Contact Us
            <RiArrowRightLine className="w-4 absolute right-4 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-10 bg-[#1a1a1a]/30 backdrop-blur-xl rounded-t-3xl md:rounded-l-3xl md:rounded-t-none mt-6 md:mt-0 z-50">
        <img src="/banner.png" className="rounded-2xl mb-10" alt="" />
        <h2 className="text-lg sm:text-xl mb-4 text-white font-semibold italic">
          Please read these instructions below before applying.
        </h2>
        <div className="space-y-2">
          <Accordion type="single" collapsible className="w-full text-white">
            {accordionData.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    {item.title.props.children.slice(1)}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-6 text-xs sm:text-sm text-white">
          <p>
            <span className="text-2xl font-semibold">Got questions?</span>
            <br /> Email our Curation Team at{" "}
            <a href="mailto:speakers@tedxbitjaipur.com?subject=SPEAKER%20INQUIRY%20%7C%20TEDxBITJaipur">
              <b className="text-red-500">speakers@tedxbitjaipur.com</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
