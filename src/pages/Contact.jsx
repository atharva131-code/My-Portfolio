import { useState } from "react";
import { Link } from "react-router-dom";

// ── DATA ──────────────────────────────────────────────
const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "atharvamishra131@gmail.com",
    href: "mailto:atharvamishra131@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 7275683504",
    href: "tel:+917275683504",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Raebareli, Uttar Pradesh, India",
    href: null,
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "atharva131-code",
    href: "https://github.com/atharva131-code",
  },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-20 animate-fadeUp">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-accent text-xs font-semibold tracking-[3px] uppercase mb-3">Get In Touch</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Contact info  */}
          <div>
            <p className="text-neutral-400 leading-relaxed mb-7">
              I'm currently open to entry-level developer roles and internship
              opportunities.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="bg-card border border-white/[0.07] rounded-xl px-5 py-4 flex items-center gap-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-[11px] text-neutral-600 uppercase">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm text-accent hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ONLY ADDED THIS */}
            <div className="flex gap-3 mt-6">
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

          </div>

          {/* RIGHT Form  */}
          <div className="bg-card border border-white/[0.07] rounded-xl p-8">

            {submitted ? (
              <div className="text-center py-10">
                <span className="text-4xl block mb-4">✅</span>
                <h3 className="text-xl text-white mb-2">Message Sent!</h3>
                <p className="text-neutral-400">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl text-white">Send a Message</h3>

                <input
                  type="text"
                  name="name"
                  placeholder="Atharva"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary border border-white/[0.07] rounded-lg px-4 py-3 text-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary border border-white/[0.07] rounded-lg px-4 py-3 text-white"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="bg-secondary border border-white/[0.07] rounded-lg px-4 py-3 text-white"
                />

                <button
                  type="submit"
                  className="px-6 py-3 bg-accent text-black rounded-lg font-semibold"
                >
                  Send Message →
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;