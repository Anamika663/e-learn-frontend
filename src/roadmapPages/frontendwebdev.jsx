import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Intro to Web Development",
    details: [
      {
        text: "How websites work",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM"
      },
      {
        text: "Frontend vs Backend",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM"
      },
      {
        text: "Code editors (VS Code)",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM"
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
        link: "https://www.youtube.com/watch?v=BsDoLVMnmZs"
      },
      {
        text: "CSS",
        link: "https://www.youtube.com/watch?v=MSICFljRcb4"
      },
      {
        text: "JavaScript",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM"
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
        link: "https://www.youtube.com/watch?v=tJ5Yfw183pI"
      },
      {
        text: "NPM",
        link: "https://www.youtube.com/watch?v=QWRYPiwhKW0"
      },
      {
        text: "VS Code",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM"
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
        link: "https://www.youtube.com/watch?v=xJ5e1Okx7eE"
      },
      {
        text: "Tailwind CSS",
        link: "https://www.youtube.com/watch?v=6gvGLgi_6bw"
      },
      {
        text: "React Router",
        link: "https://www.youtube.com/watch?v=6gvGLgi_6bw"
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
        link: "https://www.youtube.com/watch?v=QWRYPiwhKW0"
      },
      {
        text: "API integration",
        link: "https://www.youtube.com/watch?v=QWRYPiwhKW0"
      },
      {
        text: "Token handling",
        link: "https://www.youtube.com/watch?v=QWRYPiwhKW0"
      }
    ],
    color: "from-purple-400 to-purple-600"
  },
  {
    id: "06",
    title: "Projects & Deployment",
    details: [
      {
        text: "Build & deploy projects",
        link: "https://www.youtube.com/watch?v=xJ5e1Okx7eE"
      },
      {
        text: "Vercel/Render",
        link: "https://www.youtube.com/watch?v=xJ5e1Okx7eE"
      },
      {
        text: "Resume‑ready",
        link: "https://www.youtube.com/watch?v=xJ5e1Okx7eE"
      }
    ],
    color: "from-yellow-400 to-yellow-600"
  }
];

export default function FrontendWebDev() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Frontend Developer Roadmap
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
                <div
                  className={`w-20 h-20 bg-gradient-to-b ${step.color} text-white flex items-center justify-center font-bold text-xl transform rotate-45 z-10`}
                >
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
