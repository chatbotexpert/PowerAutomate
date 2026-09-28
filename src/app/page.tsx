import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-20 min-h-[calc(100vh-4rem)]">
      <div className="glass-card max-w-4xl w-full p-10 md:p-20 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-foreground">
          Automate Your <br />
          <span className="text-primary">Business Workflows</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
          Leverage Microsoft Power Automate to eliminate manual tasks, connect your tools, and accelerate your growth with custom automated solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link 
            href="/hire-developers"
            className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
          >
            Hire Developers
          </Link>
          <Link 
            href="/services"
            className="px-8 py-4 rounded-full bg-white/40 text-foreground font-semibold text-lg border border-white/60 hover:bg-white/70 transition-all shadow-sm w-full sm:w-auto"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
