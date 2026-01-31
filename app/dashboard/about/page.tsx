
import ProfileInfo from "../components/ProfileInfo";
export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center min-h-screen py-2">
      <ProfileInfo 
      className="w-[50%]! h-full! flex flex-col gap-75 md:gap-20" 
      profilePicDivClassName="bg-gray-600/600! border-0! w-full! shadow-orange-300/300! hover:scale-100! mt-10!"
      picDivClassName="w-full md:w-80! border-2! border-black! shadow-black! shadow-lg!"
      h2ClassName="mt-15! text-black! font-bold! text-3xl!"
      profContactClassName="bg-gray-300/300! border-0! shadow-orange-300/300! flex! flex-col! gap-2! items-center! justify-center! hover:scale-100! overflow-visible!"
      profPClassName="text-black! font-bold! text-center! text-lg!"
      profColor="black"
      />
    </div>
  );
}

//mt-8 text-center font-serif text-orange-300