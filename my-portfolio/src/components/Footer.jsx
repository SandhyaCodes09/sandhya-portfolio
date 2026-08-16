import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6">
      <div className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-5">

        <div className="text-center sm:text-left">
          <p className="text-white font-medium">
            Sandhya<span className="text-violet-400">.</span>
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Full Stack / MERN Developer
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/SandhyaCodes09"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <FiGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/sandhya-verma-97447a255/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <FiLinkedin size={19} />
          </a>

          <a
            href="#home"
            className="ml-2 w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
          >
            <FiArrowUp size={17} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Sandhya Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;