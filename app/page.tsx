import Image from "next/image";
import { School, Notebook, FolderGit} from 'lucide-react';
import Animation from "./dashboard/components/utility";
import Modals from "./dashboard/modals/modals";
import ProfileInfo from "./dashboard/components/ProfileInfo";

const AboutMeText = () => {
  return(
    <>
    <h2 className="font-serif font-bold text-left text-lg">About me</h2>
    <hr className="mt-2 "/>
    <div className={`mt-4 p-3 pt-2 md:p-4 md:pt-2 bg-white h-auto md:h-[40%] rounded-md border-2 
        border-gray-300 shadow-lg ${Animation.hover(110)} overflow-auto w-full`}>
          <div className="flex items-center gap-2">
            <Notebook size={24} color="Orange" className={Animation.hover(110)}/>
            <p className="font-bold font-serif text-left text-sm md:text-md">Student</p>
          </div>
          <p className="font-serif text-left text-xs text-gray-400">March 16, 2005</p>
          <p className="font-serif text-left text-xs md:text-sm mt-1">Currently studying in <b>Ateneo de Davao University for a Bachelor&apos;s 
            degree in BS Computer Science, </b>
            and is expected to graduate in <b>2028.</b> Likes to watch movies, anime, and play video games on spare time. Started to gain
            knowledge and experience in coding during the pandemic era. Realized that this is the path to pursue in college. Still on the road
            to learn branches of Computer Science. Currently not too sure on which specific area to specialize in.</p>
          <p className="font-serif text-left text-xs md:text-sm mt-2">As of the moment, specific interests <b>include AWS, cybersecurity, web development, software
            engineering, artificial intelligence, and machine learning.</b> Looking forward to explore the vast field of Computer Science and finally
            find the right specialization to focus on in the future. Currently enhancing skills in web development using <b>Next.js and React.js</b> frameworks
            as part of school projects. Hoping to gain more experience and knowledge to get ready for the industry after graduation.
          </p>
          <p className="font-serif text-left text-xs md:text-sm mt-2">Skills include some proficiency with <b>java, javascript, c, c++, python, 
            css, html, react.js, next.js, mysql, postgresql and basic understanding of AWS services.</b> This also includes knowledge in <b> OOP concepts, 
            data structures, algorithms, web development, and database management.</b>
          </p>
        </div>
    </>
  )
}

const FirstColumnInfo = () => {
  return(
    <div id="education" className={`bg-white rounded-md border-2 border-gray-300 shadow-lg p-2 h-full w-[65%] 
          overflow-auto hover:w-[150%] transition-all duration-500 ease-in-out hover:scale-150 hover:z-10 relative`}>
            <div className="flex items-center gap-2">
              <School size={24} color="Orange" className={Animation.hover(110)}/>
              <p className="font-bold font-serif text-left text-md">
                Academic Journey
              </p>
            </div>
            <ul className="list-disc list-inside ml-2">
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b>Cotabato City Institute</b> (Kindergarten to Grade School)</span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2010-2017</span>
              </li>
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b>Cotabato City Institute</b> (High School)</span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2017-2021</span>
              </li>
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b>Ateneo de Davao University Senior High School</b> (Senior High)</span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2021-2025</span>
              </li>
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b>Ateneo de Davao University</b> (College)</span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2025-Present</span>
              </li>
            </ul>
            <Modals/>
          </div>
  )
}
const SecondColumnInfo = () => {
  return(
    <div className={`bg-white rounded-md border-2 border-gray-300 shadow-lg p-2 h-full w-[50%]
          ${Animation.hover(110)} overflow-auto`}>
            <div className="flex items-center gap-2">
              <FolderGit size={24} color="Orange" className={Animation.hover(110)}/>
              <p className="font-bold font-serif text-left text-md">
                Previous Projects
              </p>
            </div>
            <ol className="list-decimal list-inside ml-2">
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b><a href="https://youtu.be/PCNXiosG_eM" target="_blank" className="hover:text-blue-500 hover:underline">MIL Advocacy</a></b></span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2023</span>
              </li>
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b><a href="https://youtu.be/cE51R2_VNEI?si=bjfNv84wjsFZF7SC" target="_blank" className="hover:text-blue-500 hover:underline">YOGUTAN | Rambutan Yogurt Fermentation</a></b></span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2023</span>
              </li>
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b><a href="https://youtu.be/szPcKa0hLBA?si=dRO9KM4BJVnBFiIL" target="_blank" className="hover:text-blue-500 hover:underline">Earthquake Preparedness Infomercial – Admin Foyer</a></b></span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2023</span>
              </li>
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b><a href="https://muhasinbiruar.github.io/ITC/index.html" target="_blank" className="hover:text-blue-500 hover:underline">Intro To Computing Project</a></b></span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2024</span>
              </li>
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b><a href="https://github.com/MuhasinBiruar/Enrollment-System" target="_blank" className="hover:text-blue-500 hover:underline">Information Management Enrollment System</a></b></span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2025</span>
              </li>
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b><a href="https://muhasinbiruar.github.io/EDP_activity/" target="_blank" className="hover:text-blue-500 hover:underline">Event-Driven Programming Login Activity</a></b></span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2026</span>
              </li>
              <li className="font-serif text-xs md:text-sm mt-1 flex justify-between items-center">
                <span className="list-item"><b><a href="https://muhasinbiruar.github.io/EDP_Prelim-Exam/" target="_blank" className="hover:text-blue-500 hover:underline">Event-Driven Programming To-Do-List Application (Prelim Exam)</a></b></span>
                <span className={`text-gray-400 font-bold ${Animation.hover(115)}`}>2026</span>
              </li>
            </ol>
          </div>
  )
}
const TwoColumnInfo = () => {
  return(
    <div className="flex flex-row justify gap-4 h-[45%] mt-4">
          <FirstColumnInfo/>
          <SecondColumnInfo/>
        </div>
  )
}

const AboutMe = () => {
  return(
    <div className="flex flex-col p-8 pl-30 mt-5 ml-[-20%] md:ml-0 md:mt-0 pt-0 w-[120%] h-full md:w-[85%]">
        <AboutMeText/>
        <TwoColumnInfo/>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col p-8 m-screen md:flex-row h-full md:h-200">
      <ProfileInfo/>      
      <AboutMe/>
    </div>
  );
}
