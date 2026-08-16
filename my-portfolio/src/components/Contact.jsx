import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

const contactItems = [
//   {
//     icon: <FiMail />,
//     label: "Email",
//     value: "vsandhya165@gmail.com",
//     href: "mailto:vsandhya165@gmail.com",
//   },

{
  icon: <FiMail />,
  label: "Email",
  value: "vsandhya165@gmail.com",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=vsandhya165@gmail.com",
},
  {
    icon: <FiGithub />,
    label: "GitHub",
    value: "github.com/SandhyaCodes09",
    href: "https://github.com/SandhyaCodes09",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/sandhya-verma-97447a255",
    href: "https://www.linkedin.com/in/sandhya-verma-97447a255/",
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: "India",
    href: "#",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-3">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Let's build something
            <span className="block text-gray-500">
              meaningful together.
            </span>
          </h2>

          <p className="mt-6 text-gray-500 text-lg leading-8 max-w-2xl">
            I'm always open to discussing new opportunities, projects
            and ideas. Feel free to reach out through any of the
            platforms below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={
                item.href.startsWith("http") ? "_blank" : undefined
              }
              rel={
                item.href.startsWith("http")
                  ? "noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-violet-400/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                <FiArrowUpRight
                  className="text-gray-600 group-hover:text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>

              <p className="mt-6 text-xs uppercase tracking-wider text-gray-600">
                {item.label}
              </p>

              <p className="mt-2 text-sm text-gray-300 truncate">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/[0.08] to-blue-500/[0.05] p-8 sm:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Have a project in mind?
              </h3>

              <p className="mt-2 text-gray-500">
                Let's turn your idea into something useful.
              </p>
            </div>

            {/* <a
              href="mailto:vsandhya165@gmail.com"
            
            
              className="w-fit flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-violet-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
              <FiArrowUpRight />
            </a> */}
            <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=vsandhya165@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="w-fit flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-medium hover:bg-violet-400 hover:text-white transition-all duration-300"
        >
        Get In Touch
        <FiArrowUpRight />
        </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;