import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col p-8 md:flex-row h-full md:h-200">
      <div className="w-full md:w-[20%]">
        <div className=" bg-gray-600 h-full md:h-[40%] rounded-lg shadow-2xl border-2 border-gray-400 p-8 w-full
        transition-transform duration-300 ease-in-out hover:scale-110">
          <Image src="/s7xn4xUQ.jpg" alt="profile picture" width={160} height={160} className="ml-3 w-40 rounded-full shadow-xl 
         shadow-orange-300 border-2 border-amber-200" />
          <h2 className="mt-8 text-center font-serif text-orange-300">Muhaisin Xavier E. Biruar</h2>
        </div>
        <div className="pt-2 pl-2 w-full h-[20%] bg-gray-600 rounded-lg mt-8 transition-transform duration-300 ease-in-out
        hover:scale-110 shadow-2xl border-2 border-gray-400">
            <p className="text-left text-orange-300 font-serif text-sm">Computer Science Student / 2nd year</p>
            <p className="text-left text-orange-300 font-serif text-sm">20 Years Old</p>
            <p className="text-left text-orange-300 font-serif text-sm">Davao City, Philippines</p>
            <p className="text-left text-orange-300 font-serif text-sm hover:text-blue-500 underline">
              <a href="https://www.facebook.com/hyder3162005" target="_blank">Facebook</a></p>
            <p className="text-left text-orange-300 font-serif text-sm hover:text-blue-500 underline">
              <a href="https://www.linkedin.com/in/muhaisin-xavier-biruar-69336a341/" target="_blank">LinkedIn</a></p>
            <p className="text-left text-orange-300 font-serif text-sm hover:text-blue-500 underline">
              <a href="https://github.com/MuhasinBiruar" target="_blank">GitHub</a></p>
        </div>
      </div>
      
      <div className="p-8 pl-30 pt-0 w-full h-full md:w-[85%]">
        <h2 className="font-serif font-bold text-left text-lg">About me</h2>
        <hr className="mt-2 "/>
        <div className="h-full mt-4 p-4 pt-2 bg-white md:h-[40%] rounded-md border-2 
        border-gray-300 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
          <p className="font-bold font-serif text-left text-md">Student</p>
          <p className="font-serif text-left text-xs text-gray-400">March 16, 2005</p>
          <p className="font-serif text-left text-sm mt-1">Currently studying in <b>Ateneo de Davao University for a Bachelor's 
            degree in BS Computer Science, </b>
            and is expected to graduate in <b>2028.</b> Likes to watch movies, anime, and play video games on spare time. Started to gain
            knowledge and experience in coding during the pandemic era. Realized that this is the path to pursue in college. Still on the road
            to learn branches of Computer Science. Currently not too sure on which specific area to specialize in.</p>
          <p className="font-serif text left text-sm mt-2">As of the moment, specific interests <b>include AWS, cybersecurity, web development, software
            engineering, artificial intelligence, and machine learning.</b> Looking forward to explore the vast field of Computer Science and finally
            find the right specialization to focus on in the future. Currently enhancing skills in web development using <b>Next.js and React.js</b> frameworks
            as part of school projects. Hoping to gain more experience and knowledge to get ready for the industry after graduation.
          </p>
          <p className="font-serif text-left text-sm mt-2">Skills include some proficiency with <b>java, javascript, c, c++, python, 
            css, html, react.js, next.js, mysql, postgresql and basic understanding of AWS services.</b> This also includes knowledge in <b> OOP concepts, 
            data structures, algorithms, web development, and database management.</b>
          </p>
        </div>
        <div className="flex gap-4 h-[45%] mt-4">
          <div className="bg-white rounded-md border-2 border-gray-300 shadow-lg p-2 h-full w-[50%]
          transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="font-bold font-serif text-left text-md">
              Beepes
            </p>
          </div>
          <div className="bg-white rounded-md border-2 border-gray-300 shadow-lg p-2 h-full w-[50%]
          transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="font-bold font-serif text-left text-md">
              Beepes2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
