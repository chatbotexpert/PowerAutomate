import Image from 'next/image';
import Link from 'next/link';

export default function HireDevelopers() {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-8 py-12 max-w-7xl mx-auto">
      {/* Page Hero */}
      <section className="w-full mb-16 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <div className="w-2 h-2 bg-[#0055ff]"></div>
          <span className="text-[#0055ff] font-bold text-sm tracking-wider uppercase">
            HashTurn / Business automation
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0a1930] mb-4">
          Meet your automation <br className="hidden md:block" /> development partner
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Meet the people behind HashTurn's automation work and explore the skills relevant to your next workflow, application or integration.
        </p>
      </section>

      {/* Developer Profiles Section (Fiverr Style Grid) */}
      <div className="w-full border-t border-gray-200 pt-12">
        <div className="flex flex-col mb-10">
          <h2 className="text-4xl font-bold text-[#404145] mb-2">Hire the Best Power Automate Experts</h2>
          <p className="text-[#62646a] text-lg">Work with top-quality freelance power automate experts who will get your project done just right.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Zeeshan B", level: "Level 2 ✦✦", rating: "4.8", reviews: "167", title: "Power Automate | Excel VBA | Macro...", tags1: ["Offers hourly rates", "Automations & Agents"], tags2: ["Microsoft Excel", "Power Apps", "+4"], online: true, avatar: "/zeeshan.webp" },
            { name: "Rehana Ghaffar", level: "Level 2 ✦✦", rating: "4.9", reviews: "123", title: "RPA Developer | Desktop Workflows", tags1: ["Offers hourly rates", "RPA"], tags2: ["Power Automate Desktop", "Automation Strategy", "+3"], online: true, avatar: "/rehana.webp" },
            { name: "Maaz Ahmad", level: "Top Rated ✦✦✦", rating: "5.0", reviews: "204", title: "Automation Engineer | Power Automate", tags1: ["Offers hourly rates", "Automation"], tags2: ["Power Automate Desktop", "Excel automation", "+2"], online: true, avatar: "/maaz.webp" },
            { name: "Iqra Ahsan", level: "Top Rated ✦✦✦", rating: "5.0", reviews: "156", title: "SharePoint Architect | Microsoft 365", tags1: ["Offers hourly rates", "SharePoint"], tags2: ["Microsoft 365", "Architecture", "+5"], online: true, avatar: "/iqra.webp" },
            { name: "Aqsa Wazeer", level: "Level 2 ✦✦", rating: "4.9", reviews: "112", title: "RPA Developer | Legacy Automation", tags1: ["Offers hourly rates", "RPA"], tags2: ["Power Automate Desktop", "Legacy Systems", "+2"], online: true, avatar: "/aqsa.jpg" },
            { name: "Zohaib Rashid", level: "Level 2 ✦✦", rating: "4.8", reviews: "94", title: "Automation Engineer | Business", tags1: ["Offers hourly rates", "Business Solutions"], tags2: ["Power Apps", "Dataverse", "SharePoint"], online: true, avatar: "/zohaib.webp" },
            { name: "Habibullah", level: "Level 2 ✦✦", rating: "5.0", reviews: "135", title: "Full Stack Automation Engineer", tags1: ["Offers hourly rates", "API Integration"], tags2: ["Power Automate", "Custom Connectors", "Web Apps"], online: true, avatar: "/habibullah.jpg" },
            { name: "Voxtus", level: "Level 2 ✦✦", rating: "5.0", reviews: "82", title: "Transforming Business with Microso...", tags1: ["Offers hourly rates", "Cloud Management"], tags2: ["Power BI", "Power automate", "Power Apps", "+5"] }
          ].map((dev, i) => (
            <div key={i} className="bg-white border border-[#e4e5e7] rounded-lg p-5 flex flex-col justify-between hover:shadow-[0_2px_15px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              
              {/* Header Info */}
              <div className="flex gap-4 mb-4">
                <div className="relative shrink-0">
                  <Image src={dev.avatar || "/avatar.jpg"} alt={dev.name} width={50} height={50} className="rounded-full object-cover w-[50px] h-[50px]" />
                  {dev.online && (
                    <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#1dbf73] border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex flex-col justify-center overflow-hidden w-full">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                    <h3 className="font-bold text-[#404145] text-[15px] truncate max-w-[120px]">{dev.name}</h3>
                    <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${dev.level.includes('Pro') ? 'bg-[#e8ebff] text-[#4a73e8]' : dev.level.includes('CHOICE') ? 'bg-black text-white' : 'text-[#62646a] bg-[#f5f5f5]'}`}>
                      {dev.level}
                    </span>
                    <div className="flex items-center text-[13px] text-[#404145] ml-auto shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#ffb33e] mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <strong>{dev.rating}</strong>
                      <span className="text-[#74767e] ml-1">({dev.reviews})</span>
                    </div>
                  </div>
                  <p className="text-[#62646a] text-[14px] truncate">{dev.title}</p>
                </div>
              </div>

              {/* Tags Section */}
              <div className="flex flex-col gap-2 mb-5">
                <div className="flex flex-wrap gap-2">
                  {dev.tags1.map((tag, j) => (
                    <span key={j} className="text-[#62646a] bg-transparent border border-[#e4e5e7] px-3 py-1 rounded-full text-[12px] font-medium flex items-center gap-1">
                      {tag.includes('hourly') && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {dev.tags2.map((tag, j) => (
                    <span key={j} className={`px-3 py-1 rounded-full text-[12px] font-medium ${tag.includes('+') ? 'text-[#62646a] hover:underline cursor-pointer' : 'text-[#62646a] bg-transparent border border-[#e4e5e7]'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Portfolio Thumbnails & CTA */}
              <div className="mt-auto">
                <div className="flex gap-2 mb-4">
                  <div className="relative w-2/3 h-[90px] rounded bg-gray-100 overflow-hidden">
                    <Image src="/hero_graphic.jpg" alt="Portfolio" fill className="object-cover opacity-80 mix-blend-multiply" />
                  </div>
                  <div className="relative w-1/3 h-[90px] rounded bg-[#333] overflow-hidden flex items-center justify-center cursor-pointer group">
                    <Image src="/hero_graphic.jpg" alt="More" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
                    <span className="relative text-white font-bold text-[14px] flex flex-col items-center leading-tight">
                      <span>+{(i + 3) * 2}</span>
                      <span className="text-[12px]">More</span>
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Link href={`/hire-developers/${dev.name.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').toLowerCase()}`} className="px-4 py-2 border border-[#404145] text-[#404145] text-[14px] font-bold rounded-md hover:bg-[#f5f5f5] transition-colors">
                    See profile
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
