import Image from "next/image";
import { Facebook, Instagram, Youtube, Rss } from "lucide-react";
import { cormorant } from "@/components/fonts";
import HeroSection from "@/components/hero";

export default function AboutPage() {
  return (
    <div className="container">
      <HeroSection />
      <div className="flex flex-col items-center text-center mx-auto px-4 py-8 w-3/4 bg-white mt-[50vh]">
        <div className={cormorant.className}>
          <h1 className="text-4xl mb-2">My name is</h1>
          <h2 className="text-5xl font-bold mb-4">Shrey Varshney</h2>
        </div>
        <div className="flex space-x-4 mb-8">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-700 hover:text-black p-2 bg-black rounded"
          >
            <Facebook size={24} className="text-white" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-700 hover:text-black p-2 bg-black rounded"
          >
            <Instagram size={24} className="text-white" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-gray-700 hover:text-black p-2 bg-black rounded"
          >
            <Youtube size={24} className="text-white" />
          </a>
          <a
            href="#"
            aria-label="Blog Feed"
            className="text-gray-700 hover:text-black p-2 bg-black rounded"
          >
            <Rss size={24} className="text-white" />
          </a>
        </div>
        <p className="text-2xl italic text-gray-600 mb-8 max-w-lg border-t-2 border-b-2 py-4 border-">
          Turning code into real-world impact, one line at a time.
        </p>
        <p className="max-w-2xl text-gray-700 leading-relaxed">
          I’m Shrey Varshney, a B.Tech CSE student at VIT Bhopal with a passion
          for problem-solving and full-stack development. From topping my course
          to building real-time apps like Little Champs ChatApp for preschools,
          I thrive on delivering meaningful tech solutions. Ranked in the top 1%
          globally on LeetCode (Guardian level), I’ve also achieved Rank 248 out
          of 29,120 in Biweekly Contest 148. I'm currently exploring AI-assisted
          stock analysis tools using React, TypeScript, and Next.js.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Project Preview 1"
              width={300}
              height={300}
              className="opacity-50"
            />
          </div>
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Project Preview 2"
              width={300}
              height={300}
              className="opacity-50"
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed">
        <p className="mb-4">
          Whether you're just starting out or looking to level up, here are some
          essential steps to becoming a strong software developer:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>
            <strong>Master the Fundamentals:</strong> Understand core computer
            science concepts like data structures, algorithms, and system
            design. These are the backbone of scalable software.
          </li>
          <li>
            <strong>Write Code Every Day:</strong> Consistency matters.
            Platforms like LeetCode or GitHub help you stay sharp and build a
            portfolio of practical skills.
          </li>
          <li>
            <strong>Build Real Projects:</strong> Apply your knowledge to
            meaningful projects. From chat apps to dashboards, real-world coding
            teaches much more than tutorials.
          </li>
          <li>
            <strong>Read and Review Code:</strong> Explore open-source projects
            and learn from how experienced developers write, structure, and
            optimize code.
          </li>
          <li>
            <strong>Understand Version Control:</strong> Learn Git thoroughly.
            Version control is a non-negotiable skill for collaborative and
            professional software development.
          </li>
          <li>
            <strong>Practice Clean Code Principles:</strong> Write readable,
            maintainable code. Follow conventions, comment smartly, and refactor
            when needed.
          </li>
          <li>
            <strong>Stay Curious and Keep Learning:</strong> Tech evolves fast.
            Stay up-to-date with frameworks, languages, and development
            practices relevant to your field.
          </li>
        </ul>
        <p>
          Becoming a great developer is a journey, not a destination. Focus on
          problem-solving, build with intent, and keep pushing your boundaries.
          The more you build, the better you become.
        </p>
      </div>
    </div>
  );
}
