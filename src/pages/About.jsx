import { Link } from "react-router-dom";

// ── DATA ──────────────────────────────────────────────
const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Lucknow Public College of Professional Studies",
    year: "2023 – 2026",
    current: true,
  },
  {
    degree: "Intermediate",
    institution: "BSS Public School",
    year: "2022 – 2023",
    current: false,
  },
  {
    degree: "High School",
    institution: "St. Joseph Montessori School",
    year: "2020 – 2021",
    current: false,
  },
];

const activities = [
  {
    icon: "🎭",
    title: "Co-Head, Drama Club",
    desc: "Led and coordinated college drama activities, managed team performances, and organized cultural events.",
  },
  {
    icon: "🏏",
    title: "Cricket Team Member",
    desc: "Active participant in local cricket tournaments.",
  },
];

// ── COMPONENT ─────────────────────────────────────────
function About() {
  return (
    <section className="py-20 animate-fadeUp">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-accent text-xs font-semibold tracking-[3px] uppercase mb-3">About Me</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Who I Am</h2>

        <div className="bg-card border border-white/[0.07] rounded-xl p-7 mb-14 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200">
          <p className="text-neutral-400 leading-[1.9]">
            I'm a motivated final-year BCA student from Raebareli, Uttar Pradesh,
            with a strong foundation in web development built through self-learning
            and hands-on projects.
          </p>

          {/* ✅ ONLY ADDED THIS */}
          <div className="flex gap-3 mt-6">
            <Link
              to="/projects"
              className="px-5 py-2 bg-accent text-black rounded-lg text-sm font-semibold hover:bg-[#00b387] transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-5 py-2 border border-white/[0.15] text-white rounded-lg text-sm hover:border-accent hover:text-accent transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* ── Education ── */}
        <div className="mb-14">
          <h3 className="text-xl font-semibold text-white pb-3 border-b border-white/[0.07] mb-5">
            Education
          </h3>

          <div className="flex flex-col gap-4">
            {education.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-white/[0.07] rounded-xl px-6 py-5 flex justify-between items-start"
              >
                <div>
                  <p className="text-white font-semibold mb-1">{item.degree}</p>
                  <p className="text-sm text-neutral-400">{item.institution}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs text-neutral-600">{item.year}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.current
                      ? "bg-accent/10 text-accent"
                      : "bg-white/5 text-neutral-500"
                  }`}>
                    {item.current ? "Current" : "Completed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Activities ── */}
        <div>
          <h3 className="text-xl font-semibold text-white pb-3 border-b border-white/[0.07] mb-5">
            Co-Curricular Activities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {activities.map((item, i) => (
              <div key={i} className="bg-card border border-white/[0.07] rounded-xl p-6">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;