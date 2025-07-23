import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Introduction to GATE",
    details: [
      {
        text: "Know about GATE",
        link: "https://www.youtube.com/watch?v=5XdQXysVJdA" // Made easy GATE overview
      },
      {
        text: "Opportunities after the GATE exam",
        link: "https://www.youtube.com/watch?v=Gt6E3QgiqnQ" // CampusX GATE opportunities explained
      },
      {
        text: "Get the syllabus of GATE",
        link: "https://www.youtube.com/watch?v=bM7yIu_c0yY" // Unacademy GATE syllabus breakdown
      }
    ],
    color: "from-green-400 to-green-600"
  },
  {
    id: "02",
    title: "Approach to Complete Subject",
    details: [
      {
        text: "Cover syllabus fully",
        link: "https://www.youtube.com/watch?v=6MzJ5__UWPQ" // Best GATE study plan by Tech GATE Academy
      },
      {
        text: "Solve DPP / practice sets",
        link: "https://www.youtube.com/watch?v=3IvnoPbpebc" // DPP solving strategy by Made Easy
      },
      {
        text: "Revise every two months",
        link: "https://www.youtube.com/watch?v=l0hXjl1NQfY" // Revision strategy by GateForum
      }
    ],
    color: "from-teal-400 to-teal-600"
  },
  {
    id: "03",
    title: "Time to Complete Syllabus",
    details: [
      {
        text: "Finish by September",
        link: "https://www.youtube.com/watch?v=y1BtvGZi7Fs" // Time management tips by Unacademy
      }
    ],
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "04",
    title: "After Completing Syllabus",
    details: [
      {
        text: "Solve more problems",
        link: "https://www.youtube.com/watch?v=pl1SDTeCG50" // Practice sessions by Made Easy
      },
      {
        text: "Revise each 3–4 times",
        link: "https://www.youtube.com/watch?v=_W9M5zvS2i8" // Multiple revision approach by GATEACT
      },
      {
        text: "Take test series",
        link: "https://www.youtube.com/watch?v=vlQM0IeIez8" // Test series guidance by Made Easy
      },
      {
        text: "Make short notes",
        link: "https://www.youtube.com/watch?v=ShxevgONwGY" // Note-making tips by Adda247
      },
      {
        text: "Solve PYQs",
        link: "https://www.youtube.com/watch?v=9F5mJK5Fc1I" // PYQ solving walkthrough by GateForum
      }
    ],
    color: "from-indigo-400 to-indigo-600"
  },
  {
    id: "05",
    title: "Ways to Revise Subject",
    details: [
      {
        text: "Solve PYQ before revision",
        link: "https://www.youtube.com/watch?v=9F5mJK5Fc1I" // PYQ-first strategy
      },
      {
        text: "Revise theory on mistakes",
        link: "https://www.youtube.com/watch?v=ShxevgONwGY" // Theory correction tips
      }
    ],
    color: "from-purple-400 to-purple-600"
  },
  {
    id: "06",
    title: "How to Make Short Notes",
    details: [
      {
        text: "Don't make notes first revision",
        link: "https://www.youtube.com/watch?v=ZWihJ0_uRW4" // When & how to create notes
      },
      {
        text: "After 2–3 revisions, make notes",
        link: "https://www.youtube.com/watch?v=KGLEKaAE2z8" // Effective notes after revisions
      }
    ],
    color: "from-pink-400 to-pink-600"
  },
  {
    id: "07",
    title: "How to Attempt Tests",
    details: [
      {
        text: "Revise from notes before test",
        link: "https://www.youtube.com/watch?v=T7E-5YHHb_E" // Pre-test revision flow
      },
      {
        text: "Mark down mistakes after test",
        link: "https://www.youtube.com/watch?v=vlQM0IeIez8" // Error logging habits
      },
      {
        text: "Make chart of test marks",
        link: "https://www.youtube.com/watch?v=Zs8Cq3oJp9k" // Performance tracking by GateForum
      }
    ],
    color: "from-yellow-400 to-yellow-600"
  }
];

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        GATE Preparation Roadmap
      </h1>

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col gap-14">
          {steps.map((step, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-12`}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-b ${step.color} text-white flex items-center justify-center font-bold text-xl transform rotate-45 z-10`}
                >
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
