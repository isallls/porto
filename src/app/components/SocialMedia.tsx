"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex gap-6 p-4 justify-center">
      {/* GitHub */}
      <a
        href="https://github.com/username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition"
      >
        <FaGithub size={32} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition"
      >
        <FaLinkedin size={32} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/fsallls"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-500 transition"
      >
        <FaInstagram size={32} />
      </a>
    </div>
  );
}
