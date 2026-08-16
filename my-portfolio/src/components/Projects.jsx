import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";

const projects = [
  {
    title: "MERN Job Portal",
    category: "Full Stack Web Application",
    description:
      "A full-stack job portal where users can explore jobs, search by category and location, view job details and manage job-related activities through role-based access.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/projects/TalentBridge.png",
    github: "https://github.com/SandhyaCodes09/mern-job-portal",
    live: "https://mern-job-portal-henna.vercel.app/",
    featured: true,
  },

  {
    title: "Project Approval Workflow System",
    category: "Web Application",
    description:
      "A workflow-based application designed to manage project submissions, approvals and different user roles through a structured process.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
    ],
    image: "/projects/workflow.png",
    github: "https://github.com/SandhyaCodes09/mern-job-portal",
    live: "https://mern-job-portal-henna.vercel.app/",
    featured: false,
  },

  // {
  //   title: "Smart LMS Portal",
  //   category: "Learning Management System",
  //   description:
  //     "A learning management platform designed to organize courses, learning content and user interactions in a structured web application.",
  //   technologies: [
  //     "Laravel",
  //     "PHP",
  //     "MySQL",
  //     "Bootstrap",
  //   ],
  //   image: "/projects/lms.png",
  //   github: "https://github.com/SandhyaCodes09/mern-job-portal",
  //   live: "https://mern-job-portal-henna.vercel.app/",
  //   featured: false,
  // },
];

function Projects() {
  return (
    <section
      id="projects"
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
            Featured Projects
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Things I've built
            <span className="block text-gray-500">
              with code and curiosity.
            </span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] hover:border-violet-400/20 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2">

                {/* Project Image */}
                <div className="relative min-h-[280px] lg:min-h-[360px] bg-gradient-to-br from-violet-500/10 via-black to-blue-500/10 overflow-hidden">

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-600">
                        Project Preview
                      </span>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />

                  {/* Project Number */}
                  <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-sm text-gray-300">
                    0{index + 1}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-center">

                  <p className="text-sm text-violet-400 mb-3">
                    {project.category}
                  </p>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <FiArrowUpRight
                      size={24}
                      className="text-gray-600 group-hover:text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0"
                    />
                  </div>

                  <p className="mt-5 text-gray-500 leading-7">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 mt-7">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithub size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors"
                    >
                      <FiExternalLink size={17} />
                      Live Demo
                    </a>

                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;