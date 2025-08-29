"use client";
import { useEffect, useState } from "react";

export default function Nav(){
    return(
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
    )
}