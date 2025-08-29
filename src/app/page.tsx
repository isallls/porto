"use client"

import Nav from "./components/Nav"
import SocialMedia from "./components/SocialMedia"
import Image from "next/image";




export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Navigation */}
      <header className="w-full px-8 py-6">
        <nav className="flex justify-between items-center bg-gray-950 rounded-b-2xl ">
          <div className="flex space-x-8 text-gray-300">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/About" className="hover:text-white transition-colors">about</a>
            <a href="/porto" className="hover:text-white transition-color  s">Porto</a>
            {/* <a href="#" className="hover:text-white transition-colors">Recent Work</a> */}
            <a href="/getintouch" className="hover:text-white transition-colors">Get In Touch</a>
          </div>  
          <div className="flex space-x-4 text-gray-400">
            <span>ID</span>
          </div>
        </nav>
      </header>

      <main className="flex items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-8 py-16 max-w-7xl mx-auto">
  {/* Text Section */}
  <div className="flex-1 max-w-2xl text-center md:text-left">
    {/* Nama dengan gradient */}
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
      Faisal Sidauruk
    </h1>

    {/* Intro */}
    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
      "Saya adalah seorang Full Stack Developer yang bersemangat mengubah ide menjadi solusi digital yang nyata. Dengan memanfaatkan teknologi modern seperti Next.js, Laravel, dan berbagai framework lainnya, saya membangun aplikasi web yang cepat, responsif, dan berfokus pada pengalaman pengguna. Bagi saya, teknologi bukan hanya alat, tetapi juga jembatan untuk menghadirkan inovasi yang memberi dampak positif dan nilai tambah di setiap proyek yang saya kerjakan."
    </p>

    {/* Social Media */}
    <div className="flex justify-center md:justify-start gap-6 mb-8">
      <SocialMedia />
    </div>

    {/* Button */}
    <a
  href="https://drive.google.com/file/d/1CHw9CQ7irNlHBZmOpDIEN6lRZvzN0Yhc/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-green-600 hover:bg-green-700 text-white px-2 py-2 w-32 rounded-xl text-lg font-semibold transition-all flex items-center gap-3 shadow-lg hover:shadow-green-500/30"
>
  See CV
  <span className="transform group-hover:translate-x-1 transition"></span>
</a>

  </div>

  {/* Profile Image */}
  <div className="flex-shrink-0 mt-12 md:mt-0 md:ml-16">
    <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-green-500/30 via-gray-800 to-blue-500/30 shadow-2xl">
      <img 
        src="/images/homepicture/home.png" 
        alt="Professional headshot" 
        className="w-full h-full object-cover"
      />
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-transparent animate-pulse"></div>
    </div>
  </div>
</div>

        {/* <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Faisal Sidauruk
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex p-4">
            <SocialMedia/>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors flex items-center gap-2">
            Download cv
            <span>›</span>
          </button>
        </div>
        
        <div className="flex-shrink-0 ml-16">
          <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0a673f22-e4c2-4bb2-9f3f-0a5fc92d1365.png" 
              alt="Professional headshot" 
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}


      </main>

      {/* Worked With Section */} 
      <section className="px-3 pb-3 fixed bottom-0 bg-gray-950 w-full rounded-t-2xl">
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
