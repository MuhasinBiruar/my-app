'use client'
import { useState } from "react";
//import Image from "next/image";

export default function Home() {
  const [buttonText, setButtonText] = useState("copy");
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopyEmail = () => {
    const email = "mxebiruar@addu.edu.ph";
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setButtonText("copied!");
    setTimeout(() => {
      setButtonText("copy");
      setIsCopied(false);
    }, 400);
  }

  return (
    <div id="taskForm" className="w-full min-h-screen flex flex-col justify-center items-center drop-shadow-xl drop-shadow-black transition-all duration-500">
    <div className="relative w-full md:w-[50%] h-10 md:h-14 flex justify-center items-center">
        <input 
            id="taskInput"
            name="taskInput" 
            type="text" disabled
            value="mxebiruar@addu.edu.ph" 
            className="w-full h-full rounded-full pl-6 pr-32 bg-[#f0ece9] placeholder-gray-400 text-gray-600 focus:outline-none focus:ring-2 
            focus:ring-blue-300 transition-all duration-200 ease-in-out"
        />
        <input 
            id="submitButton" 
            name="submitButton" 
            type="button" 
            value={buttonText}
            className={`absolute right-0 top-0 h-full w-40 px-10 text-white font-bold rounded-r-full cursor-pointer transition-all duration-500 ease-in-out ${
              isCopied ? 'bg-green-500 scale-x-105' : 'bg-gray-400 hover:bg-blue-800'
            }`}
            onClick={handleCopyEmail}
        />
    </div>
</div>
  );
}
