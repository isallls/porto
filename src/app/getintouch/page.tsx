"use client"





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
       <main className="flex flex-col items-center justify-center px-8 py-16 max-w-4xl mx-auto text-center">
  {/* Intro */}
  <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
  <p className="text-gray-400 mb-8 max-w-2xl">
    Saya selalu terbuka untuk berdiskusi, berkolaborasi, atau sekadar ngobrol soal teknologi dan pengembangan web. 
    Jangan ragu untuk menghubungi saya melalui email atau media sosial di bawah ini.
  </p>

  {/* Contact Buttons */}
  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="mailto:faisalsdr09@gmail.com"
      className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
    >
      📧 Email Me
    </a>
    <a
      href="https://wa.me/+6282123792002"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition"
    >
      💼 Whatsapp
    </a>
    <a
      href="https://github.com/username"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-900 transition"
    >
      🐙 GitHub
    </a>
  </div>
</main>


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
