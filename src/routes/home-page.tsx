import { Link } from "react-router-dom";

interface ClubDetails {
  title: string;
  section: string;
  timing: string;
  description: string;
  website: string;
  trivia?: string;
}

type Club = ClubDetails & {
  attended?: boolean;
};

const clubs: Club[] = [
  {
    title: "Club of Programmers",
    section: "COPS",
    timing: "10:00 AM - 11:00 AM",
    description:
      "Some decently sized text about cops and its activities and a lot of other stuff.",
    website: "https://www.copsiitbhu.co.in/",
    trivia:
      "Some interesting trivia about club or achievements or something else.",
    attended: true,
  },
  {
    title: "Robotics Club",
    section: "ROBO",
    timing: "11:00 AM - 12:00 PM",
    description:
      "Some decently sized text about robotics and its activities and a lot of other stuff.",
    website: "",
    attended: false,
  },
  {
    title: "The Quant Club",
    section: "QUANT",
    timing: "12:00 PM - 01:00 PM",
    description:
      "Some decently sized text about quant club and its activities and a lot of other stuff.",
    website: "",
    attended: true,
  },
  {
    title: "Business Club",
    section: "BIZ",
    timing: "02:00 PM - 03:00 PM",
    description:
      "Some decently sized text about business club and its activities and a lot of other stuff.",
    website: "",
    attended: false,
  },
  {
    title: "Club of Sustainability and Innovation",
    section: "CSI",
    timing: "03:00 PM - 04:00 PM",
    description:
      "Some decently sized text about csi and its activities and a lot of other stuff.",
    website: "",
    attended: false,
  },
  {
    title: "Astronomy Club",
    section: "ASTRO",
    timing: "04:00 PM - 05:00 PM",
    description:
      "Some decently sized text about astro club and its activities and a lot of other stuff.",
    website: "",
    attended: true,
  },
  {
    title: "Society of Automotive Engineers",
    section: "SAE",
    timing: "05:00 PM - 06:00 PM",
    description:
      "Some decently sized text about sae and its activities and a lot of other stuff.",
    website: "",
    attended: false,
  },
];

function ClubCard({ club }: { club: Club }) {
  return (
    <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
      <div className="text-xl font-bold">{club.title}</div>
      <div className="text-sm italic text-gray-600">a.k.a {club.section}</div>
      <div className="mt-2 text-lg">{club.timing}</div>
      <div className="mt-2">{club.description}</div>
      <div className="mt-4 flex space-x-4">
        {club.attended ? (
          <a className="rounded-lg border border-green-600 px-4 py-2 text-green-600">
            Attended
          </a>
        ) : (
          <Link
            to="/verify"
            className="rounded-lg bg-green-600 px-4 py-2 text-white"
          >
            Verify Attendance
          </Link>
        )}

        <a href={club.website} target="_blank" rel="noopener noreferrer">
          <button className="rounded-lg bg-orange-600 px-4 py-2 text-white">
            Club Website
          </button>
        </a>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <div className="">
        <div className="font-serif text-5xl md:text-6xl lg:text-7xl">Science &</div>
        <div className="font-serif text-5xl md:text-6xl lg:text-7xl">Technology Council</div>
        <div className="mt-4 font-serif text-2xl md:text-3xl lg:text-4xl">IIT (BHU) Varanasi</div>
        <div className="mt-4 text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi
          corrupti aliquid amet obcaecati adipisci temporibus. Commodi,
          cupiditate quidem. Veritatis eaque vero asperiores nam eligendi omnis
          voluptas rerum praesentium molestiae.
        </div>
      </div>
      <div className="mt-8">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600">Schedule</div>
        <div className="mt-4 grid grid-cols-1 gap-4">
          {clubs.map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;