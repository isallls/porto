"use client";

import { FaPhp, FaHtml5, FaCss3Alt, FaPython, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiLaravel, SiTypescript } from "react-icons/si";

export default function TechStack() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-green-400 text-center mb-8">⚡ Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
        
        <div className="flex flex-col items-center">
          <FaPhp size={50} className="text-indigo-600" />
          <span className="mt-2">PHP</span>
        </div>

        <div className="flex flex-col items-center">
          <SiLaravel size={50} className="text-red-600" />
          <span className="mt-2">Laravel</span>
        </div>

        <div className="flex flex-col items-center">
          <FaHtml5 size={50} className="text-orange-500" />
          <span className="mt-2">HTML</span>
        </div>

        <div className="flex flex-col items-center">
          <FaCss3Alt size={50} className="text-blue-600" />
          <span className="mt-2">CSS</span>
        </div>

        <div className="flex flex-col items-center">
          <SiTypescript size={50} className="text-blue-500" />
          <span className="mt-2">TypeScript</span>
        </div>

        <div className="flex flex-col items-center">
          <FaPython size={50} className="text-blue-400" />
          <span className="mt-2">Python</span>
        </div>

        <div className="flex flex-col items-center">
          <FaGithub size={50} className="text-gray-800 dark:text-white" />
          <span className="mt-2">GitHub</span>
        </div>

        <div className="flex flex-col items-center">
          <SiNextdotjs size={50} className="text-black dark:text-white" />
          <span className="mt-2">Next.js</span>
        </div>

      </div>
    </div>
  );
}
