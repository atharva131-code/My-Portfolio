import { Link } from "react-router-dom";

// project ka data yaha store hai
const projects = [
  {
  title: "College Website",
  desc: "Developed a fully functional college website using the MERN stack with responsive frontend pages, admin dashboard, authentication system, and dynamic content management features.",
  tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
  type: "Full Stack",
  featured: true,
},
  {
    title: "Weather App",
    desc: "Fetches and displays real-time weather data using the OpenWeather API.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    type: "Frontend",
    featured: false,
  },
  {
    title: "Spotify Clone",
    desc: "A responsive replica of the Spotify UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    featured: false,
  },
  {
    title: "Twitter Clone (X UI)",
    desc: "A responsive replica of Twitter (X) UI.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    type: "Frontend",
    featured: false,
  },
];

// ek single project card banane ka component
function ProjectCard({ project }) {
  return (
    <div
      className={`
      relative flex flex-col gap-4 rounded-xl border p-7
      hover:-translate-y-1 transition-all duration-200
      ${
        project.featured
          ? "bg-gradient-to-br from-card to-[#0f2920] border-accent/40"
          : "bg-card border-white/[0.07] hover:border-accent/30"
      }
    `}
    >
      {/* agar featured hai toh tag dikhao */}
      {project.featured && (
        <span className="absolute -top-3 left-5 bg-accent text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">
          Featured Project
        </span>
      )}

      {/* project type */}
      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs w-fit">
        {project.type}
      </span>

      {/* project title */}
      <h3 className="text-white text-lg font-semibold">
        {project.title}
      </h3>

      {/* short description */}
      <p className="text-sm text-neutral-400 flex-1">
        {project.desc}
      </p>

      {/* tech stack list */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-1 text-xs bg-white/5 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// main projects page
function Projects() {
  return (
    <section className="py-20 animate-fadeUp">
      <div className="max-w-5xl mx-auto px-6">

        {/* heading section */}
        <p className="text-accent text-xs uppercase mb-3">Portfolio</p>
        <h2 className="text-3xl text-white mb-12">Projects I've Built</h2>

        {/* navigation buttons */}
        <div className="flex gap-3 mb-8">
          <Link
            to="/"
            className="px-5 py-2 border border-white/[0.15] text-white rounded-lg text-sm hover:border-accent hover:text-accent transition"
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="px-5 py-2 bg-accent text-black rounded-lg text-sm font-semibold hover:bg-[#00b387] transition"
          >
            Contact Me
          </Link>
        </div>

        {/* project cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;