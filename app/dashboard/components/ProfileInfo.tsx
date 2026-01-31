import Animation from "./utility";
import Image from "next/image";
import { Mail, MapPin, Facebook, Linkedin, Github} from 'lucide-react';

interface ProfileInfoProps {
  className?: string;
  profilePicDivClassName?: string;
  picDivClassName?: string;
  h2ClassName? : string;
  profContactClassName?: string;
  profPClassName?: string;
  profColor?: string;
}

interface ContactInfoProps {
    contactClassName?: string;
    pClassName?: string;
    color?: string;
}

const ContactInfo = ({contactClassName, pClassName, color}: ContactInfoProps) => {
  return (
    <div className={`pt-2 pl-2 w-full h-[20%] bg-gray-600 rounded-lg mt-8 ${contactClassName || ''} ${Animation.hover(110)} shadow-2xl border-2 border-gray-400 overflow-auto`}>
            <p className={`text-left text-orange-300 font-serif text-sm ${pClassName || ''}`}>Computer Science Student / 2nd year</p>
            <div className={`${Animation.divGap(2)}`}>
            <Mail size={12} color={` ${color || "orange"}`} strokeWidth={2.75} className={Animation.hover(110)}/>
            <p className={`text-left text-orange-300 font-serif text-sm ${pClassName || ''}`}>mxebiruar@addu.edu.ph</p>
            </div>
            <div className={`${Animation.divGap(2)}`}>
              <MapPin size={12} color={` ${color || "orange"}`} strokeWidth={2.75} className={Animation.hover(110)}/>
            <p className={`text-left text-orange-300 font-serif text-sm ${pClassName || ''}`}>Davao City, Philippines</p>
            </div>
            <div className={`${Animation.divGap(2)}`}>
            <Facebook size={12} color={` ${color || "orange"}`} strokeWidth={2.75} className={Animation.hover(110)}/>
            <p className={`text-left text-orange-300 font-serif text-sm hover:text-blue-500 underline ${pClassName || ''}`}>
              <a href="https://www.facebook.com/hyder3162005" target="_blank">Facebook</a></p>
            </div>
            <div className={`${Animation.divGap(2)}`}>
            <Linkedin size={12} color={` ${color || "orange"}`} strokeWidth={2.75} className={Animation.hover(110)}/>
            <p className={`text-left text-orange-300 font-serif text-sm hover:text-blue-500 underline ${pClassName || ''}`}>
              <a href="https://www.linkedin.com/in/muhaisin-xavier-biruar-69336a341/" target="_blank">LinkedIn</a></p>
            </div>
            <div className={`${Animation.divGap(2)}`}>
            <Github size={12} color={` ${color || "orange"}`} strokeWidth={2.75} className={Animation.hover(110)}/>
            <p className={`text-left text-orange-300 font-serif text-sm hover:text-blue-500 underline ${pClassName || ''}`}>
              <a href="https://github.com/MuhasinBiruar" target="_blank">GitHub</a></p>
            </div>
        </div>
  )
}

const ProfileInfo = ({ className, profilePicDivClassName, picDivClassName, h2ClassName, profContactClassName, profPClassName, profColor }: ProfileInfoProps) => {
  return(
    <div className={`w-[20%]] mx-auto md:w-[20%] ${className || ''}`}>
        <div className={`bg-gray-600 h-[0%] md:h-[40%] rounded-lg shadow-2xl border-2 border-gray-400 p-8 md:w-full
        transition-transform duration-300 ease-in-out hover:scale-110 ${profilePicDivClassName || ''}`}>
          <Image src="/s7xn4xUQ.jpg" alt="profile picture" width={160} height={160} className={`mx-auto md:w-40 rounded-full shadow-xl 
         shadow-orange-300 border-2 border-amber-200 transition-transform duration-300 ease-in-out hover:scale-120 ${picDivClassName || ''}`} />
          <h2 className={`mt-8 text-center font-serif text-orange-300 ${h2ClassName || ''}`}>Muhaisin Xavier E. Biruar</h2>
        </div>
        <ContactInfo contactClassName={`${profContactClassName || ''}`} pClassName={`${profPClassName || ''}`} color={`${profColor || ''}`} />
      </div>
  )}

export default ProfileInfo;