import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

const education = [
{
  degree: "B.Tech — Computer Science & Engineering",
  institute: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  duration: "2023 — 2026",
  description:
    "Completed Bachelor of Technology in Computer Science & Engineering with a focus on software development, web technologies and problem solving.",
  icon: <FiBookOpen />,
},
  {
    degree: "Diploma — Information Technology",
    institute: "Diploma in Information Technology",
    duration: "Completed — 2023",
    description:
      "Completed diploma in Information Technology and developed a strong foundation in programming, databases and web development.",
    icon: <FiAward />,
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative py-28 px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-3">
            Education
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            My academic journey
            <span className="block text-gray-500">
              and foundation in technology.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-violet-400/60 via-white/10 to-transparent" />

          <div className="space-y-10">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative pl-14"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full border border-violet-400/30 bg-[#0a0a0a] flex items-center justify-center text-violet-400 z-10">
                  {item.icon}
                </div>

                {/* Card */}
                <div className="group p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-violet-400/20 transition-all duration-300">

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-violet-400 text-sm">
                        {item.institute}
                      </p>
                    </div>

                    <span className="w-fit px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-5 text-gray-500 leading-7">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;