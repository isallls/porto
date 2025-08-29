"use client";
import { useEffect, useState } from "react";

export default function Footer(){
    return (
        <section className="px-3 pb-3 fixed bottom-0 bg-gray-950 w-full rounded-t-2xl">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-8">Worked with</p>
          <div className="flex items-center justify-start space-x-12 opacity-60">
            <div className="text-gray-500 text-lg font-medium">ClickUp</div>
            <div className="text-gray-500 text-lg font-medium">Dropbox</div>
            <div className="text-gray-500 text-lg font-medium">PAYCHEX</div>
            <div className="text-gray-500 text-lg font-medium">elastic</div>
            <div className="text-gray-500 text-lg font-medium">stripe</div>
          </div>
        </div>
      </section>
    )
}