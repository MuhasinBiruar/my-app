import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* This is our new header */}
      <div className="pt-2 pb-2 sticky top-0 border-b border-t bg-gray-700 text-white shadow-2xl "> 
        <div className="flex justify-between"> {/* This is for fixing and positioning*/}
          <div className="relative top-1 ml-4"> {/* Spacing and margin*/}
            <span className="text-2xl font-bold font-serif">Dashboard</span>
          </div>
          <nav className=" mr-4 text-lg pt-1 pb-1 gap-2 mt-1 mb-1 transition-transform duration-300 ease-in-out 
              hover:scale-110">
            <Link className="p-2 rounded mr-2 hover:bg-orange-500 font-serif" href="/">Home</Link>
            <Link className="p-2 rounded mr-2 hover:bg-orange-500 font-serif" href="/about">About</Link>
            <Link className="p-2 rounded mr-2 hover:bg-orange-500 font-serif" href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
      {/* End of Header and start of the main div */}
    </>
  );
}

export function Footer() {
  return (
    <>
      {/* This is our new header */}
      <div className="fixed bottom-0 w-full border-b border-t bg-gray-700 text-white text-center shadow-2xl font-serif"> 
        This is the footer
      </div>
      {/* End of Footer and start of the main div */}
    </>
  );
}