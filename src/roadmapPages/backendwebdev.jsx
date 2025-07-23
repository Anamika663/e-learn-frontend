import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Intro to Web Development",
    details: [
      {
        text: "How websites work",
        link: "https://www.youtube.com/watch?v=G3e-cpL7ofc" // High-level explanation :contentReference[oaicite:1]{index=1}
      },
      {
        text: "Frontend vs Backend distinction",
        link: "https://www.youtube.com/watch?v=w1T1RXPWp2Y" // Clear difference :contentReference[oaicite:2]{index=2}
      },
      {
        text: "Code editors (VS Code tutorial)",
        link: "https://www.youtube.com/watch?v=WPqXP_kLzpo" // VS Code basics (Net Ninja)
      }
    ],
    color: "from-green-400 to-green-600"
  },
  {
    id: "02",
    title: "Tools",
    details: [
      {
        text: "Git & GitHub",
        link: "https://www.youtube.com/watch?v=RGOj5yH7evk" // freeCodeCamp crash course :contentReference[oaicite:3]{index=3}
      },
      {
        text: "NPM basics",
        link: "https://www.youtube.com/watch?v=jHDhaSSKmB0" // npm tutorial
      },
      {
        text: "VS Code (restated for emphasis)",
        link: "https://www.youtube.com/watch?v=WPqXP_kLzpo"
      }
    ],
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "03",
    title: "Backend Basics",
    details: [
      {
        text: "Node.js fundamentals",
        link: "https://www.youtube.com/watch?v=TlB_eWDSMt4" // Net Ninja crash course :contentReference[oaicite:4]{index=4}
      },
      {
        text: "Express.js quickstart",
        link: "https://www.youtube.com/watch?v=L72fhGm1tfE" // Express intro
      },
      {
        text: "MongoDB introduced",
        link: "https://www.youtube.com/watch?v=ofme2o29ngU" // MongoDB basics
      }
    ],
    color: "from-pink-400 to-pink-600"
  },
  {
    id: "04",
    title: "Authentication + APIs",
    details: [
      {
        text: "JWT authentication guide",
        link: "https://www.youtube.com/watch?v=6ZCU4QetVTs" // JWT crash course :contentReference[oaicite:5]{index=5}
      },
      {
        text: "Building APIs with Express",
        link: "https://www.youtube.com/watch?v=wsSMBss-XfI" // API communication explained :contentReference[oaicite:6]{index=6}
      },
      {
        text: "Handling & verifying tokens",
        link: "https://www.youtube.com/watch?v=bSI2zOQm7qM" // JWT step-by-step :contentReference[oaicite:7]{index=7}
      }
    ],
    color: "from-purple-400 to-purple-600"
  },
  {
    id: "05",
    title: "Projects & Deployment",
    details: [
      {
        text: "Build & deploy Node/Express project",
        link: "https://www.youtube.com/watch?v=ep5crSLD7y4" // Deploy Express on Vercel :contentReference[oaicite:8]{index=8}
      },
      {
        text: "Deploy on Vercel step-by-step",
        link: "https://www.youtube.com/watch?v=yLMODEUPJdU" // Vercel backend deployment :contentReference[oaicite:9]{index=9}
      },
      {
        text: "Prepare resume-ready projects",
        link: "https://www.youtube.com/watch?v=9OlMQpivP2Q" // Full-stack project sample :contentReference[oaicite:10]{index=10}
      }
    ],
    color: "from-yellow-400 to-yellow-600"
  }
];

export default function BackendWebDev() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Backend Developer Roadmap
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
                {/* Diamond */}
                <div className={`w-20 h-20 bg-gradient-to-b ${step.color} text-white flex items-center justify-center font-bold text-xl transform rotate-45 z-10`}>
                  <span className="transform -rotate-45">{step.id}</span>
                </div>
                {/* Content Card */}
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
