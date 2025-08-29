"use client"
import Image from "next/image";
import TechStack from "../components/techStack";

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

      {/* Main Content */}
      <main className=" px-8 py-16 max-w-7xl mx-auto">
        <div className="grid items-center grid-cols-2 justify-between px-8 py-16 max-w-7xl mx-auto">
            <div>
                <Image src="/images/profile.png" alt="Foto Profil" width={500} height={500} className="rounded-full shadow-lg object-cover"/>
            </div>
            <div className="bg-gray-900 text-gray-200 rounded-2xl shadow-lg p-10 max-w-4xl mx-auto mt-12">
                <h1 className="text-4xl font-bold mb-6 text-green-400 border-b border-gray-700 pb-2">about me</h1>
                <p className="text-gray-400 leading-relaxed mb-10">
                    Saya adalah seorang <span className="text-white font-semibold">Full Stack developer </span> 
                    yang gemar membangun antarmuka modern dan fungsional, dengan fokus pada 
                    pengalaman pengguna dan performa aplikasi. Perkembangan dunia teknologi 
                    selalu menjadi inspirasi bagi saya untuk terus belajar dan beradaptasi, 
                    karena setiap perubahan membuka peluang baru untuk berinovasi. 
                    Bagi saya, menulis kode bukan hanya pekerjaan, tetapi juga cara 
                    untuk menghadirkan ide menjadi nyata dan memberi nilai tambah bagi banyak orang.
                </p>
                <div className="grid grid-cols-2 gap-6 text-sm">
                    <div className="space-y-3">
                        <div>
                            <span className="font-semibold text-white">Nama: </span>
                            <span className="text-gray-400">Faisal</span>
                        </div>
                    <div>
                        <span className="font-semibold text-white">Email: </span>
                        <span className="text-gray-400">faisalsdr09@gmail.com</span>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <span className="font-semibold text-white">Experience: </span>
                            <span className="text-gray-400">1 year</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <span className="font-semibold text-white">Email: </span>
                            <span className="text-gray-400">faisalsdr09@gmail.com</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <span className="font-semibold text-white">phone: </span>
                            <span className="text-gray-400">0821 2379 2002</span>
                        </div>
                    </div>
                        <span className="font-semibold text-white">Language: </span>
                        <span className="text-gray-400">Indonesia, English</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-900 text-gray-200 rounded-2xl shadow-lg p-10 max-w-3xl mx-auto mt-12">
            <h1 className="text-3xl font-bold text-center mb-8 text-green-400">
                Educations
            </h1>
            <ul className="space-y-6">
                <li className="relative pl-6 border-l border-gray-700">
                <span className="absolute -left-3 top-1.5 w-3 h-3 bg-green-400 rounded-full"></span>
                <div className="flex flex-col">
                    <span className="text-lg font-semibold text-white">SMK Cengkareng 2</span>
                    <span className="text-gray-400">Teknik Komputer & Jaringan</span>
                    <span className="text-sm text-gray-500">2019 - 2021</span>
                </div>
                </li>

                <li className="relative pl-6 border-l border-gray-700">
                <span className="absolute -left-3 top-1.5 w-3 h-3 bg-green-400 rounded-full"></span>
                <div className="flex flex-col">
                    <span className="text-lg font-semibold text-white">Bina Sarana Informatika</span>
                    <span className="text-gray-400">Teknologi Informasi</span>
                    <span className="text-sm text-gray-500">2022-Now</span>
                </div>
                </li>
            </ul>
        </div>
        <div className="bg-gray-900 text-gray-200 rounded-2xl shadow-lg p-8 max-w-5xl mx-auto mt-12">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-400">
            Certificates
        </h1>

        {/* Scroll horizontal */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            
            {/* Sertifikat 1 */}
            <a 
            href="https://drive.google.com/file/d/1ion8QeH39Z1lLD-vq5ojmw9A6gA-edYW/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="min-w-[250px] flex-shrink-0 bg-gray-800 rounded-xl p-2 shadow-md hover:scale-105 transition-transform"
            >
            <img 
                src="/images/micro.png" 
                alt="" 
                className="rounded-lg w-full h-40 object-cover"
            />
            <div className="mt-2">
                <h2 className="text-lg font-semibold">Microcredentials</h2>
                <p className="text-gray-400 text-sm">Introduction to Cloud and Artificial Intelligence </p>
                <span className="text-gray-500 text-xs">2024</span>
            </div>
            </a>

            {/* Sertifikat 2 */}

            <a 
            href="https://drive.google.com/file/d/1hoBvEY-0yRmb2Q3E2gz3dDukXVwi6PcZ/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="min-w-[250px] flex-shrink-0 bg-gray-800 rounded-xl p-2 shadow-md hover:scale-105 transition-transform"
            >
            <img 
                src="/images/digitalents.png" 
                alt="FreeCodeCamp Certificate" 
                className="rounded-lg w-full h-40 object-cover"
            />
            <div className="mt-2">
                <h2 className="text-lg font-semibold">Digitalents</h2>
                <p className="text-gray-400 text-sm">Introduction to Cloud and Artificial Intelligence</p>
                <span className="text-gray-500 text-xs">2024</span>
            </div>
            </a>
            
            <a 
            href="https://drive.google.com/file/d/1BEEJ2tzNg8uhfVStTNZr7TomXbNtJlzv/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="min-w-[250px] flex-shrink-0 bg-gray-800 rounded-xl p-2 shadow-md hover:scale-105 transition-transform"
            >
            <img 
                src="/images/mtnca.png" 
                alt="FreeCodeCamp Certificate" 
                className="rounded-lg w-full h-40 object-cover"
            />
            <div className="mt-2">
                <h2 className="text-lg font-semibold">Mtcna</h2>
                <p className="text-gray-400 text-sm">MTCNA</p>
                <span className="text-gray-500 text-xs">2024</span>
            </div>
            </a>
        </div>
        </div>
        <div>
        </div>
        <div>
            <TechStack/>
        </div>



        
        
      </main>

      {/* Worked With Section */} 
      <section className="px-3 pb-3  bottom-0 bg-gray-950 w-full rounded-t-2xl">
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
