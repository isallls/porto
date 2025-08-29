"use client";
import Image from "next/image";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaCloud 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiLaravel, 
  SiTailwindcss, 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiMysql 
} from "react-icons/si";

import SocialMedia from "../components/SocialMedia";
import NavList from "../components/Nav"; // pastikan file sesuai

const projects = [
  {
    name: "Portfolio Pribadi",
    description: "Website pribadi untuk menampilkan portfolio dan pengalaman saya sebagai web developer.",
    tech: ["HTML5", "CSS3", "TypeScript", "Next.js", "TailwindCSS"],
    techIcons: [FaHtml5, FaCss3Alt, SiTypescript, SiNextdotjs, SiTailwindcss],
    image: "/images/porto/porto.png",
    link: "https://faisal-portfolio.com",
  },
  {
    name: "Movie Tokko Web",
    description: "Website sederhana untuk pencarian film menggunakan OMDb API dengan CSS native.",
    tech: ["HTML5", "CSS3", "OMDb API"],
    techIcons: [FaHtml5, FaCss3Alt],
    image: "/images/porto/movie.png",
    link: "https://toko-online.com",
  },
  {
    name: "API Sistem Pakar",
    description: "Sistem deteksi penyakit menggunakan metode forward chaining.",
    tech: ["Laravel", "MySQL"],
    techIcons: [SiLaravel, SiMysql],
    image: "/images/porto/image.png",
    link: "https://github.com/isallls/sistem-pakar-api",
  },
  {
    name: "Weather Now",
    description: "Aplikasi laporan cuaca kota-kota di Indonesia menggunakan OpenWeather API dan TailwindCSS.",
    tech: ["TailwindCSS", "OpenWeather API"],
    techIcons: [SiTailwindcss, FaCloud],
    image: "/images/porto/weather.png",
    link: "https://github.com/isallls/weather-now",
  },
  {
    name: "Wifi Voucher Menggunakan Mikrotik",
    description: "Wifi Yang bisa di jadikan voucher untuk internet",
    tech: [],
    techIcons: [],
    image: "/images/porto/voucher.png",
    link: "https://github.com/isallls/weather-now",
  }
];


export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Navigation */}
      <header className="w-full px-8 py-6">
        <NavList/>
      </header>
      {/* Main Content */}
      <main className="">
        <section className="bg-gray-950 text-gray-200 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-emerald-400 mb-12">
          📂 My Projects
        </h2>

        <div className="flex flex-col gap-12">
          {projects.map((proj, idx) => (
            <div key={idx} className="flex flex-col md:flex-row bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
              {/* Thumbnail */}
              <div className="relative md:w-1/3 h-64 md:h-auto">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-400 mb-2">{proj.name}</h3>
                  <p className="text-gray-300 mb-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {proj.techIcons.map((Icon, i) => (
                      <Icon key={i} size={28} className="text-gray-400 hover:text-emerald-400 transition" />
                    ))}
                  </div>
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-5 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-xl text-white font-medium text-center"
                >
                  Lihat Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      </main>

      {/* Worked With Section */} 
      <section className="px-3 pb-3 bottom-0 bg-gray-950 w-full rounded-t-2xl">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-8">Worked with</p>
          <div className="flex items-center justify-start space-x-12 opacity-60">
            <div className="text-gray-500 text-lg font-medium">Vs Code</div>
          </div>
        </div>
      </section>
    </div>
  )
}
