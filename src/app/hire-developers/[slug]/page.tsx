import Image from 'next/image';
import Link from 'next/link';

// Detailed dummy data with 20 services and review items
const developersData: Record<string, any> = {
  'zeeshan-b': {
    name: 'Zeeshan B',
    handle: '@zeeshaanbillal',
    avatar: '/zeeshan.webp',
    title: 'Power Automate | Excel VBA | Macro | Apps Script Expert',
    rating: '4.8',
    reviews: '167',
    level: 'Level 2 ✦✦',
    location: 'Pakistan',
    languages: 'English, Hindi, Urdu',
    hourlyRate: 'PKR 11,646.47',
    about: 'I help businesses automate manual work using Microsoft Power Automate, SharePoint, Power Apps, Excel VBA, Apps Script, Python, and SQL. My work focuses on building reliable business workflows such as approval systems, reporting automation, data processing, document generation, and API integrations.',
    skills: ['Automations & Agents', 'Microsoft Excel expert', 'Power Apps expert', 'Power automate expert', 'Microsoft SharePoint expert', '+2'],
    services: [
      { title: 'Automations & Agents', desc: 'I will use power automate, sharepoint, ms forms and other power apps to automate workflows', price: 'PKR 5,824', rating: '4.7', reviews: '135' },
      { title: 'Data Scraping', desc: 'I will scrape website data using power automate desktop', price: 'PKR 8,735', rating: '4.9', reviews: '12' },
      { title: 'Formulas & Macros', desc: 'I will be your microsoft excel vba, formula, macros, google sheets specialist', price: 'PKR 2,912', rating: '4.9', reviews: '10' },
      { title: 'Automations & Agents', desc: 'I will automate manual business processes using uipath rpa flows', price: 'PKR 4,368', rating: '5.0', reviews: '3' },
      { hourlyCard: true, price: 'PKR 11,646' }
    ],
    experience: [
      { title: 'Power Automate Consultant', company: 'Fiverr', duration: 'Oct 2022 - Present • 3 yrs 11 mos', desc: 'Delivered custom automation and workflow solutions using Power Automate, Power Automate Desktop, Python, and APIs. Developed RPA solutions, integrated third-party systems, automated business processes, and optimised workflows for clients across multiple industries.' },
      { title: 'Loan Processing Assistant', company: 'Mortgage Loan Center • Freelance', duration: 'Aug 2024 - Jun 2026 • 1 yr 10 mos', desc: 'Developed end-to-end automation workflows to enhance business efficiency.\n\nAutomated web data scraping processes to collect and organize valuable insights.\n\nIntegrated AI-powered content rewriting and image generation using APIs, streamlining creative tasks.\n\nAutomated blog posting on WordPress, reducing manual effort and improving content publishing speed.\n\nDesigned and deployed CRM task automation via Power Automate, triggered by email events to enhance customer engagement and response time.\n\nLeveraged cutting-edge technologies to optimise operational processes, saving time and resources.' }
    ],
    detailedReviews: [
      { initial: 'M', name: 'masvidahealth', location: 'United States', rating: 5, time: '2 months ago', text: 'It was a great experience working with HashTurn Team on a Microsoft Forms and Power Automate project. From the beginning, they demonstrated strong technical expertise and a deep understanding of workflow automation. They quickly understood the requirements, identified opportunities to improve the process,...', duration: '12 days', category: 'Automations & Agents', ongoing: true },
      { initial: 'N', name: 'noelmartinez975', location: 'United Arab Emirates', rating: 5, time: '2 weeks ago', text: 'Hi Zeeshan. Thank you for the opportunity to work on Microsoft 365 automation project. I really appreciated the last project I gave and you deliver fast. Again. Thank you, til next project!', duration: '1 day', category: 'Automations & Agents', ongoing: true },
      { initial: 'Z', name: 'zhannasam', location: 'Canada', rating: 5, time: '2 weeks ago', text: 'Amazing experience, it was not the easiest task to complete, but he did it very well. Working amazing, saving a lot of time for me. He created automatic generation of pdfs with the logics that I needed. Thank you!', duration: '5 days', category: 'Automations & Agents', ongoing: false },
      { initial: 'E', name: 'ellteatx', location: 'United States', rating: 5, time: '2 months ago', text: 'Great Job Zeeshan, he automated a workflow by integrating two different booking systems, decreasing repetitive tasks! He completed this with a few zoom sessions, I like that I was able to watch an see what he was doing the entire time! Thanks again we will be working together again soon!', duration: '2 days', category: 'Automations & Agents', ongoing: false },
    ]
  },
  'rehana-ghaffar': {
    name: 'Rehana Ghaffar',
    handle: '@rehanaghaffar',
    avatar: '/rehana.webp',
    title: 'RPA Developer',
    rating: '4.9',
    reviews: '123',
    level: 'Level 2 ✦✦',
    location: 'United Kingdom',
    languages: 'English',
    hourlyRate: 'PKR 10,500',
    about: 'RPA Developer at HashTurn. Rehana specialises in robotic process automation and desktop workflows. Rehana focuses on automating repetitive work in legacy systems and desktop applications using Power Automate Desktop and RPA tools.',
    skills: ['Power Automate Desktop', 'RPA', 'Automation Strategy', '+3'],
    services: [
      { title: 'Desktop Flow Development', desc: 'I will build reliable attended or unattended desktop flows using Power Automate.', price: 'PKR 10,000', rating: '5.0', reviews: '34' },
      { title: 'Legacy System Integration', desc: 'I will automate data entry and extraction for older applications with no APIs.', price: 'PKR 15,000', rating: '4.8', reviews: '12' },
      { title: 'Web Scraping (RPA)', desc: 'I will scrape complex websites that require login and CAPTCHA handling.', price: 'PKR 8,500', rating: '4.9', reviews: '41' },
      { title: 'Excel Macro to RPA', desc: 'I will migrate your complex Excel VBA macros into robust RPA workflows.', price: 'PKR 12,000', rating: '5.0', reviews: '8' },
      { title: 'Exception Handling in PAD', desc: 'I will add advanced try/catch logic to your failing desktop flows.', price: 'PKR 5,000', rating: '4.7', reviews: '22' },
      { title: 'SAP Automation', desc: 'I will automate SAP GUI interactions using Power Automate Desktop.', price: 'PKR 25,000', rating: '5.0', reviews: '5' },
      { title: 'Invoice Processing Bot', desc: 'I will create an RPA bot to read PDF invoices and enter them into your accounting system.', price: 'PKR 20,000', rating: '4.9', reviews: '19' },
      { title: 'Citrix/RDP Automation', desc: 'I will build surface automation workflows for virtual machines (Citrix/RDP).', price: 'PKR 30,000', rating: '4.8', reviews: '7' },
      { title: 'RPA Infrastructure Setup', desc: 'I will configure on-premises data gateways and virtual machines for RPA.', price: 'PKR 18,000', rating: '5.0', reviews: '11' },
      { title: 'Data Migration Bot', desc: 'I will automate the transfer of thousands of records between systems securely.', price: 'PKR 22,000', rating: '4.9', reviews: '16' },
      { title: 'Daily Reporting Bot', desc: 'I will create a bot that runs daily to fetch data, generate reports, and email them.', price: 'PKR 7,500', rating: '5.0', reviews: '45' },
      { title: 'Email Triage Automation', desc: 'I will build an attended bot to help you sort and respond to complex emails faster.', price: 'PKR 9,000', rating: '4.8', reviews: '27' },
      { title: 'CRM Data Cleansing', desc: 'I will use RPA to identify and merge duplicate records in your CRM.', price: 'PKR 14,000', rating: '4.9', reviews: '14' },
      { title: 'RPA Bot Maintenance', desc: 'I will fix and maintain your existing broken Power Automate Desktop bots.', price: 'PKR 6,000', rating: '4.7', reviews: '33' },
      { hourlyCard: true, price: 'PKR 10,500' }
    ],
    experience: [
      { title: 'Senior RPA Developer', company: 'HashTurn', duration: '2023 - Present', desc: 'Leading the development of desktop automation solutions for enterprise clients. Specialising in unattended bots running on virtual machines.' },
      { title: 'Automation Engineer', company: 'TechFlow Solutions', duration: '2021 - 2023', desc: 'Developed and maintained over 50 automated workflows using UiPath and Power Automate Desktop for the finance and HR departments.' }
    ],
    detailedReviews: [
      { initial: 'S', name: 'sarah_j', location: 'Canada', rating: 5, time: '1 month ago', text: 'Rehana is an absolute expert in Power Automate Desktop. She fixed a flow that 3 other developers gave up on. Highly recommended!', duration: '3 days', category: 'Desktop Flows', ongoing: false }
    ]
  },
  'maaz-ahmad': {
    name: 'Maaz Ahmad',
    handle: '@maazahmad',
    avatar: '/maaz.webp',
    title: 'Automation Engineer',
    rating: '5.0',
    reviews: '204',
    level: 'Top Rated ✦✦✦',
    location: 'United States',
    languages: 'English, Urdu',
    hourlyRate: 'PKR 12,000',
    about: 'Maaz Ahmad is an Automation Engineer at HASHTURN, focused on Power Automate Desktop and the everyday work between business applications, spreadsheets and document workflows.',
    skills: ['Power Automate Desktop', 'Desktop workflows', 'Excel automation', 'Document workflows'],
    services: [
      { title: 'Excel to Web Automation', desc: 'I will automate data entry from Excel spreadsheets directly into web forms using PAD.', price: 'PKR 12,000', rating: '5.0', reviews: '56' },
      { title: 'PDF Data Extraction', desc: 'I will extract structured data from PDF invoices and save it to Excel/SharePoint.', price: 'PKR 9,500', rating: '4.9', reviews: '34' },
      { title: 'Automated Daily Reports', desc: 'I will build a desktop flow to gather data, generate a report, and email it.', price: 'PKR 8,000', rating: '5.0', reviews: '22' },
      { title: 'SharePoint Document Routing', desc: 'I will automate the routing of documents within SharePoint based on metadata.', price: 'PKR 14,000', rating: '4.8', reviews: '15' },
      { title: 'Custom Desktop Flows', desc: 'I will build a custom Power Automate Desktop flow tailored to your specific process.', price: 'PKR 15,000', rating: '5.0', reviews: '41' },
      { title: 'API Integration via PAD', desc: 'I will integrate legacy desktop software with modern web APIs.', price: 'PKR 20,000', rating: '4.9', reviews: '19' },
      { title: 'Email Attachment Downloader', desc: 'I will automate downloading email attachments and saving them to specific folders.', price: 'PKR 5,000', rating: '5.0', reviews: '88' },
      { title: 'Data Scraping Bot', desc: 'I will build a web scraper to collect pricing data daily and save it to Excel.', price: 'PKR 11,000', rating: '4.7', reviews: '27' },
      { title: 'Invoice Approval Workflow', desc: 'I will build an automated invoice approval workflow linking Outlook and Teams.', price: 'PKR 18,000', rating: '4.9', reviews: '14' },
      { title: 'Excel Macro Troubleshooting', desc: 'I will fix and optimize your existing broken Excel VBA scripts and macros.', price: 'PKR 6,500', rating: '5.0', reviews: '31' },
      { title: 'Dynamic PDF Generation', desc: 'I will automatically generate PDF contracts from Excel data rows.', price: 'PKR 10,000', rating: '4.8', reviews: '25' },
      { title: 'File Organization Bot', desc: 'I will create a bot that automatically renames and organizes files on your PC.', price: 'PKR 4,500', rating: '5.0', reviews: '42' },
      { title: 'Scheduled Task Automation', desc: 'I will configure your PAD flows to run on a reliable unattended schedule.', price: 'PKR 7,500', rating: '4.9', reviews: '17' },
      { title: 'CRM Data Sync', desc: 'I will automate syncing data between your local Excel files and your CRM system.', price: 'PKR 16,000', rating: '4.8', reviews: '11' },
      { hourlyCard: true, price: 'PKR 12,000' }
    ],
    experience: [
      { title: 'Automation Engineer', company: 'HASHTURN', duration: '2022 - Present', desc: 'Designing and deploying robust Power Automate Desktop workflows for clients globally, specializing in document automation and legacy application integration.' },
      { title: 'Data Analyst & Automator', company: 'Freelance', duration: '2020 - 2022', desc: 'Automated data processing and reporting tasks using Excel VBA and Power Automate, saving clients hundreds of manual hours.' }
    ],
    detailedReviews: [
      { initial: 'D', name: 'david_miller', location: 'United States', rating: 5, time: '3 weeks ago', text: 'Maaz built an incredibly complex Excel to Web data entry bot for us. It runs flawlessly every day and saves us 4 hours of manual typing. Great communication and technical skills!', duration: '7 days', category: 'Desktop workflows', ongoing: true },
      { initial: 'A', name: 'anna_k', location: 'Germany', rating: 5, time: '1 month ago', text: 'Very fast delivery and exactly what I needed for my PDF extraction task.', duration: '2 days', category: 'Document workflows', ongoing: false }
    ]
  },
  'iqra-ahsan': {
    name: 'Iqra Ahsan',
    handle: '@iqraahsan',
    avatar: '/iqra.webp',
    title: 'SharePoint Architect',
    rating: '5.0',
    reviews: '156',
    level: 'Top Rated ✦✦✦',
    location: 'Canada',
    languages: 'English',
    hourlyRate: 'PKR 14,000',
    about: 'SharePoint Architect at HashTurn. Iqra designs robust and scalable SharePoint architectures, intranets, and document management systems integrated with Microsoft 365.',
    skills: ['SharePoint', 'Microsoft 365', 'Architecture', 'Power Apps', 'Migration'],
    services: [
      { title: 'SharePoint Intranet Design', desc: 'I will design and build a modern, responsive SharePoint intranet for your company.', price: 'PKR 25,000', rating: '5.0', reviews: '42' },
      { title: 'SharePoint Migration', desc: 'I will migrate your files from Google Workspace/On-Prem to SharePoint Online safely.', price: 'PKR 35,000', rating: '4.9', reviews: '18' },
      { title: 'Document Management System', desc: 'I will set up a structured DMS with metadata, versioning, and retention policies.', price: 'PKR 20,000', rating: '5.0', reviews: '31' },
      { title: 'SharePoint Permissions Setup', desc: 'I will audit and configure secure permission levels across your SharePoint tenant.', price: 'PKR 15,000', rating: '4.8', reviews: '27' },
      { title: 'Custom SharePoint Lists', desc: 'I will create complex relational SharePoint lists with calculated columns and views.', price: 'PKR 8,000', rating: '5.0', reviews: '55' },
      { title: 'PowerApps Integration', desc: 'I will customize your SharePoint list forms using Power Apps for a better UI.', price: 'PKR 18,000', rating: '4.9', reviews: '22' },
      { title: 'SharePoint Approval Workflows', desc: 'I will build multi-stage approval flows using Power Automate connected to SharePoint.', price: 'PKR 16,000', rating: '5.0', reviews: '39' },
      { title: 'Teams & SharePoint Sync', desc: 'I will configure Microsoft Teams to perfectly sync and structure your SharePoint sites.', price: 'PKR 12,000', rating: '4.7', reviews: '14' },
      { title: 'SharePoint Hub Sites', desc: 'I will organize your disparate sites into a unified Hub Site architecture.', price: 'PKR 22,000', rating: '5.0', reviews: '19' },
      { title: 'External Guest Access', desc: 'I will configure secure extranets for sharing documents with clients and vendors.', price: 'PKR 10,000', rating: '4.9', reviews: '33' },
      { title: 'SharePoint Training', desc: 'I will provide a 2-hour live training session on SharePoint admin best practices.', price: 'PKR 14,000', rating: '5.0', reviews: '45' },
      { title: 'Metadata & Taxonomy', desc: 'I will design a taxonomy framework (Term Store) for consistent tagging.', price: 'PKR 17,000', rating: '4.8', reviews: '11' },
      { title: 'SharePoint Branding', desc: 'I will apply custom themes, logos, and branding to your modern SharePoint sites.', price: 'PKR 9,000', rating: '4.9', reviews: '26' },
      { title: 'Troubleshooting & Support', desc: 'I will fix synchronization, permission, or workflow errors in your SharePoint environment.', price: 'PKR 7,500', rating: '5.0', reviews: '61' },
      { hourlyCard: true, price: 'PKR 14,000' }
    ],
    experience: [
      { title: 'SharePoint Architect', company: 'HASHTURN', duration: '2021 - Present', desc: 'Leading enterprise-level SharePoint deployments, data migrations, and custom intranet solutions for Fortune 500 clients.' },
      { title: 'M365 Consultant', company: 'Cloud Solutions Inc', duration: '2018 - 2021', desc: 'Managed Microsoft 365 migrations and configured secure document management environments.' }
    ],
    detailedReviews: [
      { initial: 'R', name: 'robert_tech', location: 'United Kingdom', rating: 5, time: '2 weeks ago', text: 'Iqra completely transformed our chaotic file server into a beautifully organized SharePoint Intranet. Our team loves it!', duration: '14 days', category: 'SharePoint', ongoing: false },
      { initial: 'L', name: 'lisa_m', location: 'Australia', rating: 5, time: '1 month ago', text: 'Excellent communication and deep knowledge of Microsoft 365 architecture. Fixed our permissions mess in no time.', duration: '3 days', category: 'Architecture', ongoing: true }
    ]
  }
};

export default async function DeveloperProfile({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const dev = developersData[slug] || developersData['zeeshan-b']; // Fallback to Zeeshan if not found

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      {/* Sticky Header Nav */}
      <div className="bg-white sticky top-20 z-40 border-b border-[#e4e5e7] shadow-[0_1px_5px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center gap-8 text-[15px] font-semibold text-[#62646a]">
          <Link href="#about" className="text-[#404145] border-b-2 border-[#222325] h-full flex items-center">About Me</Link>
          <Link href="#services" className="hover:text-[#404145] h-full flex items-center">Services</Link>
          <Link href="#portfolio" className="hover:text-[#404145] h-full flex items-center">Portfolio</Link>
          <Link href="#reviews" className="hover:text-[#404145] h-full flex items-center">Reviews</Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 pb-20">
        
        {/* Left Main Content */}
        <div className="flex flex-col gap-12">
          
          {/* Profile Header */}
          <section className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative shrink-0">
              <Image src={dev.avatar || "/avatar.jpg"} alt={dev.name} width={150} height={150} className="rounded-full object-cover w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] border border-[#e4e5e7]" />
            </div>
            <div className="flex flex-col pt-2">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold text-[#404145]">{dev.name}</h1>
                <span className="text-[#62646a] text-lg">{dev.handle}</span>
              </div>
              
              <div className="flex items-center gap-2 text-[15px] mb-3">
                <div className="flex items-center font-bold text-[#404145]">
                  <svg className="w-4 h-4 text-[#ffb33e] mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  {dev.rating}
                </div>
                <span className="text-[#74767e] underline cursor-pointer">({dev.reviews})</span>
                <span className="text-[#e4e5e7]">|</span>
                <span className="text-[#404145] font-semibold">{dev.level}</span>
              </div>
              
              <p className="text-[#404145] text-lg mb-4">{dev.title}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-[14px] text-[#62646a]">
                <div className="flex items-center gap-1">
                  🌍 {dev.location}
                </div>
                <div className="flex items-center gap-1">
                  🗣️ {dev.languages}
                </div>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section id="about" className="pt-4 border-t border-[#e4e5e7]">
            <h2 className="text-2xl font-bold text-[#404145] mb-4">About me</h2>
            <p className="text-[#62646a] text-[15px] leading-relaxed mb-6">{dev.about}</p>
            
            <h3 className="text-[15px] font-bold text-[#404145] mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {dev.skills.map((skill: string, idx: number) => (
                <span key={idx} className="border border-[#e4e5e7] text-[#62646a] px-3 py-1.5 rounded-full text-[13px] hover:bg-[#f5f5f5] cursor-pointer font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Services - Grid of items */}
          <section id="services" className="pt-4 border-t border-[#e4e5e7]">
            <h2 className="text-2xl font-bold text-[#404145] mb-6">See my services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {dev.services.map((service: any, idx: number) => {
                if (service.hourlyCard) {
                  return (
                    <div key={idx} className="bg-[#f7f7f7] border border-[#e4e5e7] rounded-md overflow-hidden hover:shadow-[0_2px_15px_rgba(0,0,0,0.1)] transition-shadow p-6 flex flex-col justify-center h-full">
                      <h3 className="font-bold text-[#404145] text-lg mb-2">Want to work on an hourly basis?</h3>
                      <p className="text-[#62646a] text-md mb-8">Tell {dev.name} what you need.</p>
                      
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-[#404145] font-bold text-lg">{service.price} <span className="text-sm font-normal text-[#62646a]">/ hour</span></span>
                        <button className="text-[13px] font-bold text-[#404145] border border-[#404145] px-4 py-2 rounded hover:bg-[#404145] hover:text-white transition-colors">
                          Ask about hourly orders
                        </button>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={idx} className="bg-white border border-[#e4e5e7] rounded-md overflow-hidden hover:shadow-[0_2px_15px_rgba(0,0,0,0.1)] transition-shadow group cursor-pointer flex flex-col h-full">
                    <div className="flex p-4 gap-4 flex-grow">
                      <div className="w-[120px] h-[80px] bg-gray-200 rounded shrink-0 relative overflow-hidden">
                         <Image src="/hero_graphic.jpg" alt={service.title} fill className="object-cover mix-blend-multiply opacity-80" />
                      </div>
                      <div className="w-[calc(100%-136px)]">
                        <h3 className="font-bold text-[#404145] text-[15px] mb-1 group-hover:text-[#0055ff] truncate" title={service.title}>{service.title}</h3>
                        <p className="text-[#62646a] text-[13px] line-clamp-2 mb-2">{service.desc}</p>
                        <div className="flex items-center text-[12px] text-[#404145] font-bold">
                          <svg className="w-3 h-3 text-[#ffb33e] mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          {service.rating} <span className="text-[#74767e] font-normal ml-1">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-[#e4e5e7] p-3 flex justify-between items-center bg-[#fafafa]">
                      <span className="text-[12px] text-[#62646a]">From <strong className="text-[14px] text-[#404145]">{service.price}</strong> <span className="text-[12px]">/ project</span></span>
                      <button className="text-[13px] font-bold text-[#404145] border border-[#404145] px-3 py-1 rounded hover:bg-[#404145] hover:text-white transition-colors">
                        More details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {dev.services.length > 5 && (
              <div className="mt-6">
                <button className="text-[#404145] font-bold text-[15px] underline">Show all ({dev.services.length})</button>
              </div>
            )}
          </section>

          {/* Portfolio */}
          <section id="portfolio" className="pt-4 border-t border-[#e4e5e7]">
            <h2 className="text-2xl font-bold text-[#404145] mb-6">Portfolio</h2>
            <div className="bg-white border border-[#e4e5e7] rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="relative h-[250px] bg-gray-100 rounded overflow-hidden">
                  <Image src="/hero_graphic.jpg" alt="Portfolio" fill className="object-cover" />
                </div>
                <div className="flex gap-2 h-[80px]">
                  <div className="relative w-1/3 bg-gray-100 rounded overflow-hidden"><Image src="/hero_graphic.jpg" alt="Th" fill className="object-cover" /></div>
                  <div className="relative w-1/3 bg-gray-100 rounded overflow-hidden"><Image src="/hero_graphic.jpg" alt="Th" fill className="object-cover" /></div>
                  <div className="relative w-1/3 bg-[#f5f5f5] rounded flex flex-col items-center justify-center font-bold text-[#404145] text-sm cursor-pointer border border-[#e4e5e7] hover:bg-gray-100">
                    +1 <br /> Projects
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="text-[13px] text-[#62646a] mb-2">From: April 2026</div>
                <h3 className="text-xl font-bold text-[#404145] mb-4">AI-Powered Outlook Email to Microsoft Planner Task</h3>
                <p className="text-[#62646a] text-[15px] mb-6">Standard out-of-the-box Microsoft Power Automate connectors fall short when handling complex, long-term email threads. The main obstacles included: Preventing Duplicates: A simple email trigger creates a brand-new task for every reply...</p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="border border-[#e4e5e7] text-[#62646a] px-3 py-1 rounded-full text-[12px]">Roofing</span>
                  <span className="border border-[#e4e5e7] text-[#62646a] px-3 py-1 rounded-full text-[12px]">Technology Consulting</span>
                  <span className="border border-[#e4e5e7] text-[#62646a] px-3 py-1 rounded-full text-[12px]">Software Development</span>
                  <span className="border border-[#e4e5e7] text-[#62646a] px-3 py-1 rounded-full text-[12px]">Marketing Automation</span>
                  <span className="border border-[#e4e5e7] text-[#62646a] px-3 py-1 rounded-full text-[12px]">AI Development</span>
                </div>
                <div className="flex justify-between border-t border-[#e4e5e7] pt-4">
                  <div>
                    <div className="text-[12px] text-[#62646a]">Project cost</div>
                    <div className="font-bold text-[#404145]">$400 - $600</div>
                  </div>
                  <div>
                    <div className="text-[12px] text-[#62646a]">Project duration</div>
                    <div className="font-bold text-[#404145]">1-7 days</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="pt-4 border-t border-[#e4e5e7]">
            <h2 className="text-2xl font-bold text-[#404145] mb-6">Work experience</h2>
            <div className="flex flex-col gap-8">
              {dev.experience.map((exp: any, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded bg-[#1dbf73] text-white flex items-center justify-center font-bold text-2xl shrink-0">
                    fi
                  </div>
                  <div>
                    <h3 className="font-bold text-[16px] text-[#404145]">{exp.title}</h3>
                    <div className="text-[14px] text-[#62646a] mb-1">{exp.company}</div>
                    <div className="text-[13px] text-[#b5b6ba] mb-3">{exp.duration}</div>
                    <p className="text-[14px] text-[#404145] leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="pt-4 border-t border-[#e4e5e7]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#404145]">{dev.reviews} Reviews</h2>
              <div className="flex items-center text-[18px] font-bold text-[#404145]">
                <div className="flex mr-2 text-black">
                  ★★★★★
                </div>
                {dev.rating}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                {[
                  { stars: 5, count: 149, width: '90%' },
                  { stars: 4, count: 10, width: '10%' },
                  { stars: 3, count: 3, width: '3%' },
                  { stars: 2, count: 2, width: '2%' },
                  { stars: 1, count: 3, width: '3%' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3 mb-2 text-[14px] text-[#404145]">
                    <span className="font-bold w-[50px]">{row.stars} Stars</span>
                    <div className="flex-grow h-2 bg-[#e4e5e7] rounded-full overflow-hidden">
                      <div className="h-full bg-[#222325]" style={{ width: row.width }}></div>
                    </div>
                    <span className="text-[#62646a] w-[40px]">({row.count})</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-bold text-[#404145] mb-3 text-[15px]">Rating Breakdown</h4>
                <div className="flex justify-between items-center text-[14px] text-[#62646a] mb-2">
                  <span>Seller communication level</span>
                  <span className="font-bold text-[#404145] flex items-center gap-1">★ 4.8</span>
                </div>
                <div className="flex justify-between items-center text-[14px] text-[#62646a] mb-2">
                  <span>Quality of delivery</span>
                  <span className="font-bold text-[#404145] flex items-center gap-1">★ 4.8</span>
                </div>
                <div className="flex justify-between items-center text-[14px] text-[#62646a]">
                  <span>Value of delivery</span>
                  <span className="font-bold text-[#404145] flex items-center gap-1">★ 4.7</span>
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-[#e4e5e7] pb-4 mb-2">
                <div className="w-1/2">
                  <input type="text" placeholder="Search reviews" className="w-full border border-[#e4e5e7] p-2 text-sm rounded-l focus:outline-none" />
                </div>
                <div className="text-sm text-[#62646a]">Sort By: <strong>Most relevant</strong></div>
              </div>

              {dev.detailedReviews?.map((rev: any, idx: number) => (
                <div key={idx} className="border border-[#e4e5e7] rounded-md p-6 bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${idx % 2 === 0 ? 'bg-[#913831]' : 'bg-[#e4e5e7] text-[#404145]'}`}>
                        {rev.initial}
                      </div>
                      <div>
                        <div className="font-bold text-[#404145] text-[15px]">{rev.name}</div>
                        <div className="text-[12px] text-[#62646a] flex items-center gap-1">
                          🇺🇸 {rev.location}
                        </div>
                      </div>
                    </div>
                    {rev.ongoing && (
                      <span className="text-[12px] font-bold text-[#62646a] bg-[#f5f5f5] px-2 py-1 rounded-full">Ongoing collaboration</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3 text-[13px] text-[#62646a]">
                    <span className="text-black text-sm">★★★★★</span> <span className="font-bold text-[#404145]">{rev.rating}</span> <span className="w-1 h-1 rounded-full bg-[#c5c6c9]"></span> {rev.time}
                  </div>
                  
                  <p className="text-[#404145] text-[15px] leading-relaxed mb-4">
                    {rev.text}
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-4 mb-4">
                    <div className="text-[13px]">
                      <div className="font-bold text-[#404145]">{rev.duration}</div>
                      <div className="text-[#62646a] text-[11px]">Duration</div>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] font-bold text-[#404145] bg-[#f5f5f5] px-3 py-1.5 rounded cursor-pointer hover:bg-gray-200">
                       <Image src="/hero_graphic.jpg" alt="Service" width={20} height={15} className="object-cover rounded-sm" />
                       {rev.category}
                    </div>
                  </div>

                  <div className="text-[13px] font-bold text-[#404145]">
                    Helpful? <span className="text-[#62646a] ml-2 cursor-pointer hover:underline">👍 Yes</span> <span className="text-[#62646a] ml-2 cursor-pointer hover:underline">👎 No</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar - Pricing Card */}
        <div className="hidden lg:block relative">
          <div className="sticky top-[120px] bg-white border border-[#e4e5e7] rounded-sm p-6 shadow-[0_1px_5px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <Image src={dev.avatar || "/avatar.jpg"} alt={dev.name} width={40} height={40} className="rounded-full w-10 h-10 object-cover" />
              <div>
                <h3 className="font-bold text-[#404145]">{dev.name}</h3>
                <div className="text-[15px] font-bold text-[#404145]">{dev.hourlyRate} <span className="font-normal text-[#62646a]">/hour</span></div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-[13px] text-[#62646a] mb-6">
              <div className="w-2 h-2 rounded-full bg-[#1dbf73]"></div>
              Offline • 04:11 PM local time
            </div>

            <button className="w-full bg-[#222325] hover:bg-[#404145] text-white font-bold py-3 px-4 rounded mb-3 transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              Contact me
            </button>
            <button className="w-full bg-white hover:bg-[#f5f5f5] text-[#404145] border border-[#404145] font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Book a consultation
            </button>
            
            <div className="text-center mt-4 text-[13px] text-[#62646a]">
              Average response time: <strong>1 hour</strong>
            </div>
          </div>
        </div>

      </div>

      {/* Full Width Footer Mockup */}
      <footer className="w-full border-t border-[#e4e5e7] bg-white pt-12 pb-6 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-[15px] text-[#74767e] mb-12 leading-loose">
          <div className="flex flex-col gap-4">
            <strong className="text-[#404145] mb-2 text-[16px]">Categories</strong>
            <span className="hover:underline cursor-pointer">Graphics & Design</span>
            <span className="hover:underline cursor-pointer">Digital Marketing</span>
            <span className="hover:underline cursor-pointer">Writing & Translation</span>
            <span className="hover:underline cursor-pointer">Video & Animation</span>
            <span className="hover:underline cursor-pointer">Music & Audio</span>
            <span className="hover:underline cursor-pointer">Programming & Tech</span>
            <span className="hover:underline cursor-pointer">AI Services</span>
            <span className="hover:underline cursor-pointer">Consulting</span>
            <span className="hover:underline cursor-pointer">Data</span>
            <span className="hover:underline cursor-pointer">Business</span>
            <span className="hover:underline cursor-pointer">Personal Growth & Hobbies</span>
            <span className="hover:underline cursor-pointer">Photography</span>
            <span className="hover:underline cursor-pointer">Finance</span>
            <span className="hover:underline cursor-pointer">End-to-End Projects</span>
            <span className="hover:underline cursor-pointer">Service Catalog</span>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-[#404145] mb-2 text-[16px]">For Clients</strong>
            <span className="hover:underline cursor-pointer">How HashTurn Works</span>
            <span className="hover:underline cursor-pointer">Customer Success Stories</span>
            <span className="hover:underline cursor-pointer">Quality Guide</span>
            <span className="hover:underline cursor-pointer">HashTurn Guides</span>
            <span className="hover:underline cursor-pointer">HashTurn Answers</span>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-[#404145] mb-2 text-[16px]">For Developers</strong>
            <span className="hover:underline cursor-pointer">Become a HashTurn Developer</span>
            <span className="hover:underline cursor-pointer">Become an Agency</span>
            <span className="hover:underline cursor-pointer">Community Hub</span>
            <span className="hover:underline cursor-pointer">Forum</span>
            <span className="hover:underline cursor-pointer">Events</span>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-[#404145] mb-2 text-[16px]">Business Solutions</strong>
            <span className="hover:underline cursor-pointer">HashTurn Pro</span>
            <span className="hover:underline cursor-pointer">Project Management Service</span>
            <span className="hover:underline cursor-pointer">Expert Sourcing Service</span>
            <span className="hover:underline cursor-pointer">AutoDS - Dropshipping Tool</span>
            <span className="hover:underline cursor-pointer">Digis - Software Development</span>
            <span className="hover:underline cursor-pointer">AI store builder</span>
            <span className="hover:underline cursor-pointer">HashTurn Logo Maker</span>
            <span className="hover:underline cursor-pointer">Contact Sales</span>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-[#404145] mb-2 text-[16px]">Company</strong>
            <span className="hover:underline cursor-pointer">About HashTurn</span>
            <span className="hover:underline cursor-pointer">Help Center</span>
            <span className="hover:underline cursor-pointer">Trust & Safety</span>
            <span className="hover:underline cursor-pointer">Social Impact</span>
            <span className="hover:underline cursor-pointer">Careers</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer text-[#404145]">Do not sell or share my personal<br/>information</span>
            <span className="hover:underline cursor-pointer">Partnerships</span>
            <span className="hover:underline cursor-pointer">Creator Network</span>
            <span className="hover:underline cursor-pointer">Affiliates</span>
            <span className="hover:underline cursor-pointer">Invite a Friend</span>
            <span className="hover:underline cursor-pointer">Press & News</span>
            <span className="hover:underline cursor-pointer">Investor Relations</span>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto border-t border-[#e4e5e7] pt-6 flex flex-col md:flex-row justify-between items-center text-[#b5b6ba] text-[14px]">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="font-bold text-[#404145] text-2xl tracking-tighter">HASHTURN.</span>
            <span>© HashTurn International Ltd. 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-[#74767e]">
              <span className="hover:text-[#404145] cursor-pointer">TikTok</span>
              <span className="hover:text-[#404145] cursor-pointer">Insta</span>
              <span className="hover:text-[#404145] cursor-pointer">LinkedIn</span>
              <span className="hover:text-[#404145] cursor-pointer">Facebook</span>
              <span className="hover:text-[#404145] cursor-pointer">Pinterest</span>
              <span className="hover:text-[#404145] cursor-pointer">X</span>
            </div>
            <div className="flex items-center gap-4 font-semibold text-[#62646a]">
              <span className="hover:text-[#404145] cursor-pointer flex items-center gap-1">🌐 English</span>
              <span className="hover:text-[#404145] cursor-pointer">Rs PKR</span>
              <span className="hover:text-[#404145] cursor-pointer text-lg rounded-full border border-[#b5b6ba] w-6 h-6 flex items-center justify-center">⚙</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating Chat Button (Mobile/Desktop) */}
      <div className="fixed bottom-6 left-6 bg-white border border-[#e4e5e7] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-2 pr-5 flex items-center gap-3 cursor-pointer hover:bg-gray-50 z-50 transition-transform hover:-translate-y-1">
        <div className="relative">
          <Image src="/avatar.jpg" alt={dev.name} width={40} height={40} className="rounded-full w-10 h-10 object-cover" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#1dbf73] border-2 border-white rounded-full"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-[14px] text-[#404145]">Message {dev.name}</span>
          <span className="text-[11px] text-[#62646a]">Online • Avg. response time: 1 Hour</span>
        </div>
      </div>
    </div>
  );
}
