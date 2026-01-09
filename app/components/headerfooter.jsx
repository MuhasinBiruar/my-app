import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* This is our new header */}
      <div className="pt-2 pb-2 sticky top-0 border-b border-t bg-gray-700 text-white shadow-2xl"> 
        <div className="flex justify-between"> {/* This is for fixing and positioning*/}
          <div className="relative top-1 ml-4"> {/* Spacing and margin*/}
            <span className="text-2xl font-bold">Dashboard</span>
          </div>
          <nav className=" mr-4 text-lg pt-1 pb-1 gap-2 mt-1 mb-1">
            <Link className="p-2 rounded mr-2 hover:bg-blue-500 hover:text-white" href="/">Home</Link>
            <Link className="p-2 rounded mr-2 hover:bg-blue-500 hover:text-white" href="/about">About</Link>
            <Link className="p-2 rounded mr-2 hover:bg-blue-500 hover:text-white" href="/contact">Contact</Link>
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
      <div className="fixed bottom-0 w-full border-b border-t bg-gray-700 text-white text-center shadow-2xl"> 
        This is the footer
      </div>
      {/* End of Footer and start of the main div */}
    </>
  );
}