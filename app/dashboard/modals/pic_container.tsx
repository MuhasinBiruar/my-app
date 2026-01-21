export default function picContainer({children}: {children: React.ReactNode}) {
    return (
        <>
        <div className="bg-gray-500 w-[33.33%] mx-1 h-full rounded-xl cursor-pointer relative  hover:z-full transition-all duration-300 ease-in-out hover:scale-115 hover:z-10 hover:drop-shadow-xl hover:drop-shadow-black">
            {children}
        </div>
        </>
    )}