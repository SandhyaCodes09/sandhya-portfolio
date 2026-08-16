import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiDatabase,
  FiMonitor,
} from "react-icons/fi";

const highlights = [
  {
    icon: <FiCode />,
    title: "Frontend",
    text: "React, JavaScript, Tailwind CSS",
  },
  {
    icon: <FiLayers />,
    title: "Backend",
    text: "Node.js, Express & REST APIs",
  },
  {
    icon: <FiDatabase />,
    title: "Database",
    text: "MongoDB & MySQL",
  },
  {
    icon: <FiMonitor />,
    title: "Development",
    text: "Responsive & user-focused applications",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-3">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Building digital experiences
            <span className="block text-gray-500">
              with code & creativity.
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-300 text-lg leading-8">
              I'm a Computer Science Engineering student and a
              passionate Full Stack Developer who enjoys building
              modern and practical web applications.
            </p>

            <p className="mt-5 text-gray-500 leading-8">
              My development journey has given me hands-on experience
              with both frontend and backend technologies. I enjoy
              turning ideas into clean, responsive and functional
              digital experiences.
            </p>

            <p className="mt-5 text-gray-500 leading-8">
              Currently, I'm focused on strengthening my development
              skills, building real-world projects and growing as a
              professional software developer.
            </p>

            {/* Small Info */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                B.Tech CSE
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                Full Stack Development
              </span>

              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                MERN Stack
              </span>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-violet-400/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center text-xl mb-5 group-hover:bg-violet-500/20 transition-colors">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;