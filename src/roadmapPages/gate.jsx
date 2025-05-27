import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Interoduction to Gate",
    details: [
      "Know about Gate",
      "opportunityes after the gate exam",
      "get the syllabus of Gate"
    ],
    color: "from-green-400 to-green-600"
  },
  {
    id: "02",
    title: "What is approch to complete subject",
    details: ["complete the subject compltetely accoring to syllabus","solve the DPP or solve prcatice sets","revise in each two monthes"],
    color: "from-teal-400 to-teal-600"
  },
  {
    id: "03",
    title: "Time to compelete the syllabus of gate",
    details: ["try to cover the syllabus till septempber"],
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "04",
    title: "what do after the compeltion of the syllabus",
    details: ["solve more and more problems","revise each subject atleat 3-4 times","take a testSeries and start attempting the tests","make the sort notes of every subject","solve the pyqs"],
    color: "from-indigo-400 to-indigo-600"
  },
  {
    id: "05",
    title: "ways to do the subject revise",
    details: ["take the pyq and start sloving", "revise theory if you are making mistake on pyqs"],
    color: "from-purple-400 to-purple-600"
  },
  {
    id: "06",
    title: "How to make sort notes",
    details: ["Don't make short notes on first revision", "first do two or three revision then make the sort notes"],
    color: "from-pink-400 to-pink-600"
  },
  {
    id: "07",
    title: "How to attempt the tests",
    details: ["befor attempting the test first revise all subject fromt sortnotes","After the attempting the test mark down the mistakes","make a chart in which you note down your test marks"],
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
                {/* Diamond */}
                <div
                  className={`w-20 h-20 bg-gradient-to-b ${step.color} text-white flex items-center justify-center font-bold text-xl transform rotate-45 z-10`}
                >
                  <span className="transform -rotate-45">{step.id}</span>
                </div>

                {/* Content Card */}
                <div
                  className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-2/3"
                >
                  <h2 className="text-x2 font-semibold text-gray-800 dark:text-white mb-2">
                    {step.title}
                  </h2>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
                    {step.details.map((item, i) => (
                      <li key={i}>{item}</li>
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
