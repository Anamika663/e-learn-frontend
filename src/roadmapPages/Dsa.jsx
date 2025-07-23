import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Learn an Object‑Oriented Programming Language",
    details: [
      {
        text: "How compilers work",
        link: "https://www.youtube.com/watch?v=vP8xIaFZUXM"
      },
      {
        text: "Basic syntax of the selected language",
        link: "https://www.youtube.com/watch?v=Q7pHG24PsH0"
      },
      {
        text: "How collections work",
        link: "https://www.youtube.com/watch?v=FWQNMFHKz7A"
      }
    ],
    color: "from-green-400 to-green-600"
  },
  {
    id: "02",
    title: "Learn Basic Linear Data Structures",
    details: [
      { text: "Array", link: "https://www.youtube.com/watch?v=Kkr18vbFXpo" },
      { text: "Linked List", link: "https://www.youtube.com/watch?v=1imFWPkz-EQ" },
      { text: "String", link: "https://www.youtube.com/watch?v=Kkr18vbFXpo" },
      { text: "Stack", link: "https://www.youtube.com/watch?v=1imFWPkz-EQ" },
      { text: "Queue", link: "https://www.youtube.com/watch?v=Kkr18vbFXpo" }
    ],
    color: "from-teal-400 to-teal-600"
  },
  {
    id: "03",
    title: "Learn Basic Non‑Linear Data Structures",
    details: [
      { text: "Tree", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "Graph", link: "https://www.youtube.com/watch?v=G3md31tYnQ8" }
    ],
    color: "from-blue-400 to-blue-600"
  },
  {
    id: "04",
    title: "Learn Advanced Non‑Linear Data Structures",
    details: [
      { text: "Binary Tree", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "AVL Tree", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "Heap", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "Disjoint Set Union", link: "https://www.youtube.com/watch?v=adXBDLco78Q" }
    ],
    color: "from-indigo-400 to-indigo-600"
  },
  {
    id: "05",
    title: "Learn Basic Algorithms on Linear Data Structures",
    details: [
      { text: "Linear Search", link: "https://www.youtube.com/watch?v=Kkr18vbFXpo" },
      { text: "Traversal", link: "https://www.youtube.com/watch?v=Kkr18vbFXpo" },
      { text: "Insertion in Linked List", link: "https://www.youtube.com/watch?v=1imFWPkz-EQ" },
      { text: "Deletion in Linked List", link: "https://www.youtube.com/watch?v=1imFWPkz-EQ" },
      { text: "Two Pointer Technique", link: "https://www.youtube.com/watch?v=Kkr18vbFXpo" }
    ],
    color: "from-purple-400 to-purple-600"
  },
  {
    id: "06",
    title: "Learn Advanced Algorithms on Linear Data Structures",
    details: [
      { text: "Binary Search", link: "https://www.youtube.com/watch?v=Kkr18vbFXpo" },
      { text: "Dynamic Programming", link: "https://www.youtube.com/watch?v=FWQNMFHKz7A" },
      { text: "Greedy Algorithm", link: "https://www.youtube.com/watch?v=FWQNMFHKz7A" },
      { text: "Sliding Window Technique", link: "https://www.youtube.com/watch?v=Kkr18vbFXpo" }
    ],
    color: "from-pink-400 to-pink-600"
  },
  {
    id: "07",
    title: "Learn Algorithms on Trees",
    details: [
      { text: "Inorder Traversal", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "Preorder Traversal", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "Postorder Traversal", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "Level Order Traversal", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "Insertion in Tree", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "Deletion in Tree", link: "https://www.youtube.com/watch?v=adXBDLco78Q" },
      { text: "Heapify", link: "https://www.youtube.com/watch?v=adXBDLco78Q" }
    ],
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: "08",
    title: "Learn Algorithms on Graphs",
    details: [
      { text: "DFS", link: "https://www.youtube.com/watch?v=7jDCxMQW1GA" },
      { text: "BFS", link: "https://www.youtube.com/watch?v=bHdK9OBVD00" },
      { text: "Topological Sort", link: "https://www.youtube.com/watch?v=G3md31tYnQ8" }
    ],
    color: "from-indigo-400 to-indigo-600"
  },
  {
    id: "09",
    title: "Learn Advanced Algorithms",
    details: [
      { text: "Disjoint Set Union", link: "https://www.youtube.com/watch?v=FWQNMFHKz7A" },
      { text: "Dynamic Programming", link: "https://www.youtube.com/watch?v=FWQNMFHKz7A" }
    ],
    color: "from-green-400 to-green-600"
  }
];

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Data Structures & Algorithms Roadmap
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
