// In the future, this data can be fetched from an API/Database when the admin portal is built.
export interface MemberData {
  id: string;
  name: string;
  role: string; // Committee role
  organization?: string;
  designation?: string;
  department?: string;
  specialization?: string;
  email?: string;
  membershipId?: string;
  membershipCategory?: string;
  aboutText?: string;
  imagePath: string;
}

export const membersData: MemberData[] = [
  {
    id: "sarat-kumar-das",
    name: "Dr. SARAT KUMAR DAS",
    role: "Chairman",
    organization: "IIT (ISM) Dhanbad",
    designation: "PROFESSOR",
    specialization: "Geoenvironmental engineering",
    email: "saratdas@iitism.ac.in",
    membershipId: "1985",
    membershipCategory: "Life Member",
    imagePath: "/members/sarat-kumar-das.jpg"
  },
  {
    id: "anil-kumar-choudhary",
    name: "Dr. ANIL KUMAR CHOUDHARY",
    role: "Co-Chairman",
    organization: "NIT, Jamshedpur",
    designation: "Professor",
    department: "Civil Engineering Department",
    specialization: "Geotechnical Engineering",
    email: "drakchoudharycivil@gmail.com",
    membershipId: "0512",
    membershipCategory: "Life Fellow",
    aboutText: "Dr. Anil Kumar Choudhary is Professor of Civil Engineering at National Institute of Technology Jamshedpur. He graduated in 1990 with a first-class degree with distinction in Civil Engineering from NIT Jamshedpur. He earned his M.Tech in Civil Engineering (Soil Mechanics & Foundation Engineering) from NIT Rourkela in 1992 and secured 1st Rank in the University. He completed his Ph.D in Civil Engineering (Geotechnical Engineering) in 2003.\n\nHe has over 30 years of teaching, research and consultancy experience in the field of Geotechnical Engineering. His primary areas of research include Geosynthetics, ground improvement, soil-structure interaction, and pavement engineering. He has authored more than 100 research papers, including 15 referred Journal Publications, and holds two patents. \n\nHe has been honored with Dr. K.S.Krishnan Research Fellowship, the IGS – Shri B. N. Gupta Biennial Award (2015), and the Eminent Engineer Award (2018). As a Consulting Geotechnical Engineer, he has provided solutions to challenging field problems for many engineering organizations.",
    imagePath: "/members/anil-kumar-choudhary.png"
  },
  {
    id: "sowmiya-chawla",
    name: "Dr. SOWMIYA CHAWLA",
    role: "Honorary Secretary",
    organization: "IIT (ISM) Dhanbad",
    designation: "Associate Professor",
    department: "Dept. of Civil Engineering",
    email: "sowmiya@iitism.ac.in",
    membershipId: "2934",
    membershipCategory: "Life Member",
    imagePath: "/members/sowmiya-chawla.jpg"
  },
  {
    id: "vishwas-khatri",
    name: "Dr. VISHWAS KHATRI",
    role: "Treasurer",
    organization: "Indian Institute of Technology (ISM)",
    department: "Department of Civil Engineering",
    email: "vishuiisc@gmail.com",
    membershipId: "4858",
    membershipCategory: "Life Member",
    imagePath: "/members/vishwas-khatri.jpg"
  },
  {
    id: "swapnil-mishra",
    name: "Dr. SWAPNIL MISHRA",
    role: "Member",
    organization: "IIT ISM Dhanbad",
    designation: "Assistant Professor",
    department: "Dept. of Mining Engineering",
    email: "swapnilmishraa@gmail.com",
    membershipId: "3755",
    membershipCategory: "Life Member",
    imagePath: "/members/swapnil-mishra.png"
  },
  {
    id: "brahmdeo-yadav",
    name: "Dr. BRAHMDEO YADAV",
    role: "Member",
    specialization: "GEO TECHNICAL ENGG.",
    email: "bdyadv05@gmail.com",
    membershipId: "0051",
    membershipCategory: "Donor Fellow",
    imagePath: "/members/brahmdeo-yadav.jpg"
  },
  {
    id: "siddhartha-sengupta",
    name: "Dr. SIDDHARTHA SENGUPTA",
    role: "Member",
    organization: "BIT Mesra",
    email: "siddhartha@bitmesra.ac.in",
    membershipId: "3996",
    membershipCategory: "Life Member",
    imagePath: "/members/siddhartha-sengupta.png"
  },
  {
    id: "abhinandan-kumar",
    name: "Er. ABHINANDAN KUMAR",
    role: "Member",
    email: "abhi_nandan2020@rediffmail.com",
    membershipId: "1690",
    membershipCategory: "Life Member",
    imagePath: "/members/abhinandan-kumar.png"
  }
];

export function getMemberById(id: string): MemberData | undefined {
  return membersData.find(m => m.id === id);
}
