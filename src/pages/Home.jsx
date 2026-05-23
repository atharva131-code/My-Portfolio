import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[calc(100vh-70px)] flex items-center animate-fadeUp">
      <div className="max-w-5xl mx-auto px-6 w-full py-16">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-center">

          {/* left side main intro */}
          <div>

            <span className="block text-accent text-xs font-semibold tracking-[3px] uppercase mb-3">
              Hey there, I'm
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">
              Atharva <br />
              <span className="text-accent">Mishra</span>
            </h1>

            <p className="text-lg text-neutral-400 mb-5">
              Full Stack Developer &amp; BCA Final Year Student
            </p>

            <p className="text-neutral-400 max-w-md leading-relaxed mb-9">
              I build clean, responsive, and interactive web applications.
              Passionate about modern full stack tech and always eager to learn
              and grow as a developer.
            </p>

            {/* buttons section */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                to="/projects"
                className="px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-[#00b387] hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent text-white border border-white/[0.15] rounded-lg hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>

            {/* small stats info */}
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-white">4+</p>
                <p className="text-xs text-neutral-600">Projects</p>
              </div>

              <div className="w-px h-9 bg-white/[0.07]" />

              <div>
                <p className="text-2xl font-bold text-white">6+</p>
                <p className="text-xs text-neutral-600">Technologies</p>
              </div>

              <div className="w-px h-9 bg-white/[0.07]" />

              <div>
                <p className="text-2xl font-bold text-white">2026</p>
                <p className="text-xs text-neutral-600">Graduating</p>
              </div>
            </div>

          </div>

          {/* right side profile card */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="bg-card border border-white/[0.07] rounded-2xl p-9 text-center w-full max-w-[300px] hover:border-accent/30 hover:-translate-y-1 transition-all duration-200">

              {/* initials circle */}
              <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center text-accent text-2xl font-bold mx-auto mb-4">
                AM
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">Atharva Mishra</h3>
              <p className="text-sm text-neutral-600 mb-5">Raebareli, Uttar Pradesh, India</p>

              {/* tech stack tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-5">
                {["React", "Node.js", "MongoDB"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* email link */}
              <a
                href="mailto:atharvamishra131@gmail.com"
                className="text-accent text-xs hover:underline break-all"
              >
                atharvamishra131@gmail.com
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;