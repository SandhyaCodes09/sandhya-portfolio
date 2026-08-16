import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "REST API", icon: <SiPostman /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
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
            Technical Skills
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Technologies I work with
            <span className="block text-gray-500">
              to bring ideas to life.
            </span>
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
              }}
              className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-white mb-5">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-black/20 hover:border-violet-400/30 hover:bg-violet-500/5 transition-all duration-300"
                  >
                    <span className="text-lg text-violet-400">
                      {skill.icon}
                    </span>

                    <span className="text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 p-6 rounded-2xl border border-violet-400/10 bg-gradient-to-r from-violet-500/[0.06] to-blue-500/[0.04]"
        >
          <p className="text-gray-400 text-sm leading-7">
            I continuously explore new technologies and best practices
            to improve the performance, usability and maintainability of
            the applications I build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;