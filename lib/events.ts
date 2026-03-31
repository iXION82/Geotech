export interface AppEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  type: 'upcoming' | 'past';
  imagePath: string;
  registrationLink?: string;
}

export const eventsData: AppEvent[] = [
  {
    id: "tech-symposium-2026",
    title: "Annual Geotechnical Symposium 2026",
    date: "November 15, 2026",
    time: "09:00 AM - 05:00 PM",
    location: "Golden Jubilee Lecture Theater, IIT ISM",
    description: "Join us for our flagship annual symposium featuring keynote lectures from industry leaders, technical paper presentations, and a robust networking session focusing on sustainable foundation engineering.",
    type: "upcoming",
    imagePath: "/geotech surveying.jpg",
    registrationLink: "#"
  },
  {
    id: "workshop-ground-improvement",
    title: "Workshop: Advanced Ground Improvement",
    date: "December 05, 2026",
    time: "10:00 AM - 03:00 PM",
    location: "Geology Laboratory, IIT ISM",
    description: "A hands-on workshop detailing the latest methodologies in deep soil mixing, vibro-compaction, and geosynthetic applications. Ideal for graduating seniors and industry professionals.",
    type: "upcoming",
    imagePath: "/Lab4.png",
    registrationLink: "#"
  },
  {
    id: "inaugural-ceremony-2023",
    title: "IGS Dhanbad Chapter Inauguration",
    date: "August 20, 2023",
    location: "Main Auditorium, IIT ISM",
    description: "The official inaugural ceremony of the Indian Geotechnical Society Dhanbad Local Chapter, attended by national executives, academicians, and founding members.",
    type: "past",
    imagePath: "/Tittle2.webp"
  },
  {
    id: "guest-lecture-slope-stability",
    title: "Guest Lecture: Rock Slope Stability",
    date: "February 10, 2024",
    location: "Department of Mining Engineering",
    description: "An insightful session discussing advanced empirical and numerical modeling techniques for massive open-pit mine slopes and early warning systems.",
    type: "past",
    imagePath: "/geotech surveying2.jpg"
  },
  {
    id: "field-visit-dam-2024",
    title: "Technical Field Visit: Maithon Dam",
    date: "September 15, 2024",
    location: "Maithon, Jharkhand",
    description: "A practical field execution demonstrating seepage monitoring and earth dam stability assessment protocols currently employed in the region.",
    type: "past",
    imagePath: "/geotech surveying3.jpg"
  }
];
