import { getMemberById, membersData } from "@/lib/members";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ProfileImage } from "@/components/ui/ProfileImage";

// Generate static params so these pages can be statically exported/pre-rendered
export async function generateStaticParams() {
  return membersData.map((member) => ({
    id: member.id,
  }));
}

export default async function MemberProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = getMemberById(id);

  if (!member) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col relative w-full">
      <Navbar isLight={true} />
      
      <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex-grow">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <Link href="/members" className="inline-flex items-center text-sm font-semibold tracking-widest text-[#6d8a67] hover:text-stone-800 transition-colors uppercase mb-12">
            &larr; Back to Committee
          </Link>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            
            {/* Left Column: Image and Basic Details */}
            <div className="w-full md:w-1/3 flex flex-col gap-8 shrink-0">
              <div className="relative w-full aspect-square bg-white border border-stone-200 shadow-sm rounded-sm overflow-hidden p-4">
                 <ProfileImage 
                   src={member.imagePath}
                   alt={member.name}
                   className="object-cover rounded-sm"
                   wrapperClassName="w-full h-full"
                 />
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 border border-stone-200 shadow-sm rounded-sm">
                 <h3 className="text-sm font-medium tracking-widest text-[#96a495] uppercase mb-6 border-b border-stone-100 pb-2">Membership Details</h3>
                 
                 <div className="flex flex-col gap-4">
                   {member.membershipId && (
                     <div>
                       <p className="text-xs text-stone-500 uppercase tracking-wide">Membership ID</p>
                       <p className="text-base text-stone-800 font-medium">{member.membershipId}</p>
                     </div>
                   )}
                   {member.membershipCategory && (
                     <div>
                       <p className="text-xs text-stone-500 uppercase tracking-wide">Category</p>
                       <p className="text-base text-stone-800 font-medium">{member.membershipCategory}</p>
                     </div>
                   )}
                   {member.email && (
                     <div>
                       <p className="text-xs text-stone-500 uppercase tracking-wide">Contact</p>
                       <a href={`mailto:${member.email}`} className="text-base text-[#6d8a67] hover:text-stone-900 transition-colors font-medium break-all">{member.email}</a>
                     </div>
                   )}
                 </div>
              </div>
            </div>

            {/* Right Column: Name, Role, About */}
            <div className="w-full md:w-2/3 pt-4">
               <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-stone-900 leading-[1.1] mb-4 uppercase">
                 {member.name}
               </h1>
               
               <div className="flex flex-wrap items-center gap-4 mb-10">
                 <span className="bg-[#6d8a67] text-white px-4 py-1 text-sm font-bold tracking-widest uppercase rounded-sm shadow-sm">
                   {member.role}
                 </span>
                 {member.department && (
                   <span className="text-stone-500 text-sm md:text-base font-medium">{member.department}</span>
                 )}
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-stone-200 mb-10">
                  {member.designation && (
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Designation</p>
                      <p className="text-lg text-stone-800 font-medium">{member.designation}</p>
                    </div>
                  )}
                  {member.organization && (
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Organization</p>
                      <p className="text-lg text-stone-800 font-medium">{member.organization}</p>
                    </div>
                  )}
                  {member.specialization && (
                    <div className="sm:col-span-2">
                      <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Area of Specialization</p>
                      <p className="text-lg text-stone-800 font-medium">{member.specialization}</p>
                    </div>
                  )}
               </div>

               {member.aboutText && (
                 <div>
                   <h3 className="text-2xl font-serif text-stone-800 mb-6">About</h3>
                   <div className="prose prose-stone max-w-none">
                     {member.aboutText.split('\n\n').map((paragraph, idx) => (
                       <p key={idx} className="text-stone-600 leading-relaxed max-w-3xl text-lg mb-6">
                         {paragraph.trim()}
                       </p>
                     ))}
                   </div>
                 </div>
               )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
