import { Link } from "react-router-dom";

// DATA 
const techSkills = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js","Next.js"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js","JWT Authentication", "Socket.IO"],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["MongoDB"],
  },
  {
    category: "Tools",
    icon: "✏️",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Deployment (Netlify, Vercel, Render)" ," AI"]
  },
  {
    category: "Core Skills",
    icon: "🧠",
    skills: ["Logical Thinking", "Problem Solving"],
  },
];

const softSkills = [
  { icon: "💬", label: "Communication" },
  { icon: "📋", label: "Strategic Planning" },
  { icon: "📚", label: "Willingness to Learn" },
  { icon: "⏰", label: "Time Management" },
];

// PAGE COMPONENT 
function Skills() {
  return (
    <section className="py-20 animate-fadeUp">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-accent text-xs font-semibold tracking-[3px] uppercase mb-3">Expertise</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Technical Skills</h2>

        {/* ✅ ONLY ADDED NAVIGATION */}
        <div className="flex gap-3 mb-8">
          <Link
            to="/"
            className="px-5 py-2 border border-white/[0.15] text-white rounded-lg text-sm hover:border-accent hover:text-accent transition"
          >
            Home
          </Link>

          <Link
            to="/projects"
            className="px-5 py-2 bg-accent text-black rounded-lg text-sm font-semibold hover:bg-[#00b387] transition"
          >
            View Projects
          </Link>
        </div>

        {/* ── Tech skill cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {techSkills.map((cat, i) => (
            <div
              key={i}
              className="bg-card border border-white/[0.07] rounded-xl p-6 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold">{cat.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Soft skills ── */}
        <div>
          <h3 className="text-xl font-semibold text-white pb-3 border-b border-white/[0.07] mb-5">
            Soft Skills
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-white/[0.07] rounded-xl px-5 py-4 flex items-center gap-3 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-white font-medium text-[15px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;