import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Intro to Web Development",
    details: [
      {
        text: "How websites work",
        link: "https://www.youtube.com/watch?v=ae6367pPrR4" // by Vishal Rajput 🇮🇳 :contentReference[oaicite:1]{index=1}
      },
      {
        text: "Frontend vs Backend",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM" // CodeWithHarry’s Hindi intro :contentReference[oaicite:2]{index=2}
      },
      {
        text: "Code editors (VS Code)",
        link: "https://www.youtube.com/watch?v=nyEB5_tUEM0" // HindiTechTutorials on editors :contentReference[oaicite:3]{index=3}
      }
    ],
    color: "from-green-400 to-green-600"
  },
  {
    id: "02",
    title: "Basic Frontend",
    details: [
      {
        text: "HTML",
        link: "https://www.youtube.com/watch?v=BsDoLVMnmZs" // CodeWithHarry HTML course :contentReference[oaicite:4]{index=4}
      },
      {
        text: "CSS",
        link: "https://www.youtube.com/watch?v=MSICFljRcb4" // Thapa Technical CSS full course 🇮🇳 :contentReference[oaicite:5]{index=5}
      },
      {
        text: "JavaScript",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM" // CodeWithHarry JS basics :contentReference[oaicite:6]{index=6}
      }
    ],
    color: "from-teal-400 to-teal-600"
  },
  {
    id: "03",
    title: "Tools",
    details: [
      {
        text: "Git & GitHub",
        link: "https://www.youtube.com/watch?v=tJ5Yfw183pI" // CodeWithHarry Git in Hindi :contentReference[oaicite:7]{index=7}
      },
      {
        text: "NPM",
        link: "https://www.youtube.com/watch?v=MSICFljRcb4" // Part of Thapa Technical course :contentReference[oaicite:8]{index=8}
      },
      {
        text: "VS Code",
        link: "https://www.youtube.com/watch?v=nyEB5_tUEM0"
      }
    ],
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "04",
    title: "Frontend Frameworks",
    details: [
      {
        text: "React + Vite",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM" // CodeWithHarry React Hindi intro :contentReference[oaicite:9]{index=9}
      },
      {
        text: "Tailwind CSS",
        link: "https://www.youtube.com/watch?v=MSICFljRcb4"
      },
      {
        text: "React Router",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM"
      }
    ],
    color: "from-indigo-400 to-indigo-600"
  },
  {
    id: "05",
    title: "Authentication + APIs",
    details: [
      {
        text: "JWT login",
        link: "https://www.youtube.com/watch?v=2pn2Bspt6EM" // Geeky Shows JWT Express 🇮🇳 :contentReference[oaicite:10]{index=10}
      },
      {
        text: "API integration",
        link: "https://www.youtube.com/watch?v=SLaXACWR0wg" // JWT Node.js guide in Hindi :contentReference[oaicite:11]{index=11}
      },
      {
        text: "Token handling",
        link: "https://www.youtube.com/watch?v=2pn2Bspt6EM"
      }
    ],
    color: "from-purple-400 to-purple-600"
  },
  {
    id: "06",
    title: "Backend Basics",
    details: [
      {
        text: "Node.js",
        link: "https://www.youtube.com/watch?v=2pn2Bspt6EM" // Node + JWT example :contentReference[oaicite:12]{index=12}
      },
      {
        text: "Express",
        link: "https://www.youtube.com/watch?v=2pn2Bspt6EM"
      },
      {
        text: "MongoDB",
        link: "https://www.youtube.com/watch?v=nyEB5_tUEM0" // tutorial covers full stack basics
      }
    ],
    color: "from-pink-400 to-pink-600"
  },
  {
    id: "07",
    title: "Projects & Deployment",
    details: [
      {
        text: "Build & deploy projects",
        link: "https://www.youtube.com/watch?v=Y-4_9lmr3TE" // Create website free ✔ :contentReference[oaicite:13]{index=13}
      },
      {
        text: "Vercel/Render",
        link: "https://www.youtube.com/watch?v=Y-4_9lmr3TE"
      },
      {
        text: "Resume-ready",
        link: "https://www.youtube.com/watch?v=Y-4_9lmr3TE"
      }
    ],
    color: "from-yellow-400 to-yellow-600"
  }
];

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        E-Learn Developer Roadmap
      </h1>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col gap-14">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-12`}
              >
                <div className={`w-20 h-20 bg-gradient-to-b ${step.color} text-white flex items-center justify-center font-bold text-xl transform rotate-45 z-10`}>
                  <span className="transform -rotate-45">{step.id}</span>
                </div>
                <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-2/3">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {step.title}
                  </h2>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    {step.details.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-indigo-500 transition-colors"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
