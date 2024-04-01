import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon, TwitterIcon, Linkedin, Instagram} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-2xl mb-8 font-medium">Hey, I&apos;m Jet Kwok</div>
      <div className="flex flex-col gap-4 prose dark:prose-invert prose-p:m-0">

        <p>
          I am an engineer with a strong background in AI and ML.
          I am a passionate and highly skilled engineer with a deep understanding and a robust
          foundation in Deep Learning.
        </p>
        <p>
          My journey in the world of technology has been marked by a relentless pursuit of knowledge
          and a commitment to delivering innovative solutions. With expertise in a wide range of
          technologies, including Python, PyTorch, OpenCV, C++ and MATLAB. I am well-equipped to
          tackle complex projects and create seamless, user-centric experiences.
          Whether it's algorithm optimization and design, model deployment,
          project operation and maintenance, I thrive on turning challenges into opportunities for
          growth and innovation.
        </p>
        <p>
          I am dedicated to staying at the forefront of the ever-evolving tech landscape,
          with a keen eye for detail and a knack for problem-solving, and leveraging my skills
          to make a meaningful impact in the AI development and operations field.
        </p>
        <p>
          Let&apos;s collaborate and bring your ideas to life!
        </p>
      </div>
      <div className="flex flex-row items-center mt-5 -ml-3">
        <Link
          href="https://github.com/FMVPJet"
          className={cn(buttonVariants({ variant: "link" }), "text-inherit")}
        >
          <GithubIcon className="mr-1 w-5 h-5" /> GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/guojiangtao/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-inherit -ml-3"
          )}
        >
          <Linkedin className="mr-1 w-5 h-5" /> Linkedin
        </Link>
        <Link
          href="https://www.instagram.com/jetkwok_/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-inherit -ml-3"
          )}
        >
          <Instagram className="mr-1 w-5 h-5" /> Instagram
        </Link>
      </div>
    </div>
  );
}
