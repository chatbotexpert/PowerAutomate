import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-[#0055ff] text-white flex items-center justify-center font-bold text-lg leading-none">
            #
          </div>
          <span className="font-bold text-xl tracking-tight text-[#0a1930] uppercase">
            HASHTURN.
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-800">
          <Link href="/services" className="hover:text-[#0055ff] transition-colors">
            Services
          </Link>
          <Link href="/hire-developers" className="hover:text-[#0055ff] transition-colors">
            Hire Developers
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <Link 
            href="/contact"
            className="hidden md:flex bg-[#0055ff] hover:bg-[#0044cc] text-white px-5 py-2.5 rounded text-sm font-medium transition-colors items-center gap-2"
          >
            Let's talk
            <span className="text-base leading-none">↗</span>
          </Link>
          
          <button className="md:hidden p-2 text-gray-800 ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
