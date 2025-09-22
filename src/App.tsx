import React, { useEffect, useState } from "react";

import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const texts = [
    "Frontend Web Developer",
    "React.js Enthusiast",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Explorer",
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentString = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentString.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="floating-particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              NV
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm xl:text-base"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-3 pt-4">
                {[
                  { name: "Home", id: "hero" },
                  { name: "About", id: "about" },
                  { name: "Experience", id: "experience" },
                  { name: "Projects", id: "projects" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-left py-2"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20 pb-10" // pb-40 (10rem) - zyada space
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-5">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Nishchhal Verma
              </span>
            </h1>
            {/* Profile Image */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  <img
                    src="/20250809_193815(1).jpg"
                    alt="Nishchhal Verma"
                    className="w-full h-full object-cover rounded-full bg-gray-800"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
              </div>
            </div>

            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 font-mono text-green-400 min-h-[40px] sm:min-h-[50px] lg:min-h-[60px] flex items-center justify-center">
              <span className="typing-text">{currentText}</span>
              <span className="animate-pulse ml-1">|</span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Proficient in Frontend Web Development and passionate about
              creating beautiful, interactive web experiences with modern
              technologies and innovative solutions.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
              <a
                href="mailto:nishchhalverma6@gmail.com"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-4 sm:px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Get In Touch</span>
              </a>

              <a
                href="https://github.com/nishchhal6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-4 sm:px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>View Work</span>
              </a>

              {/* New Download CV button */}
              <a
                href="/Frontend-Resume-NV.pdf"
                download
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 px-4 sm:px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/40 text-sm sm:text-base text-white"
              >
                {/* You can use an SVG icon for download here or text only */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4m-4-4V4"
                  />
                </svg>
                <span>Download CV</span>
              </a>
            </div>

            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a
                href="https://github.com/nishchhal6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nishchhalverma6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://instagram.com/nishchhal267"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          <div className="mt-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <button
              onClick={() => scrollTo("about")}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="section-title">About Me</h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="bg-gray-800/50 backdrop-blur p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Personal Info
                    </h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start sm:items-center space-x-3 text-gray-300">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 sm:mt-0 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        Agra, Uttar Pradesh
                      </span>
                    </div>
                    <div className="flex items-start sm:items-center space-x-3 text-gray-300">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5 sm:mt-0 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        +91-8923066929
                      </span>
                    </div>
                    <div className="flex items-start sm:items-center space-x-3 text-gray-300">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 sm:mt-0 flex-shrink-0" />
                      <span className="text-sm sm:text-base break-all">
                        nishchhalverma6@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Full-Stack Web developer with a strong
                  foundation in modern web technologies. Currently pursuing my
                  Bachelor's in Computer Applications while gaining real-world
                  experience as a Frontend Developer Intern at Bharat Economic
                  Forum.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  I love creating intuitive, responsive web applications that
                  provide excellent user experiences. My journey in web
                  development is driven by curiosity and a constant desire to
                  learn and implement the latest technologies.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-cyan-400">
                      15+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Projects
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-green-400">
                      5+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Certifications
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="skill-card">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "tailwindCSS",
                    "TypeScript",
                    "React.js",
                    "Vue.js",
                    "Bootstrap",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-card">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  Backend & More
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MongoDB",
                    "Node.js",
                    "Next.js",
                    "Express.js",
                    "Python",
                    "Angular",
                    "Native",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag bg-green-500/20 text-green-300 border-green-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-card">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git & GitHub",
                    "VS Code",
                    "Chrome DevTools",
                    "Generative AI",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag bg-purple-500/20 text-purple-300 border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="section-title">Education</h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="education-card">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      Bachelor's of Computer Applications
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-2 text-sm sm:text-base">
                      Dr. Bhimrao Ambedkar University, Agra
                    </p>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                      Aug 2023 - Present
                    </p>
                    <div className="mb-3 sm:mb-4 flex flex-wrap gap-2">
                      <span className="achievement-badge text-xs sm:text-sm">
                        Gold Medal in Debate
                      </span>
                      <span className="achievement-badge text-xs sm:text-sm">
                        Udemy Frontend Course
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      <strong>Coursework:</strong> Web Development, VB.NET, AI,
                      Network Security
                    </p>
                  </div>
                </div>
              </div>
              <div className="education-card">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      12th Grade (PCM)
                    </h3>
                    <p className="text-green-400 font-semibold mb-2 text-sm sm:text-base">
                      MD. Jain Inter College
                    </p>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                      Mar 2022 - Mar 2023
                    </p>
                    <div className="mb-3 sm:mb-4">
                      <span className="achievement-badge text-xs sm:text-sm">
                        Gold Medal in Typing Competition
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      <strong>Coursework:</strong> Physics, Chemistry,
                      Mathematics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="section-title">Work Experience</h2>
            <div className="experience-card">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Frontend Developer Intern
                  </h3>
                  <p className="text-purple-400 font-semibold mb-2 text-sm sm:text-base">
                    Bharat Economic Forum
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 sm:mb-6">
                    <span className="text-gray-400 text-sm sm:text-base">
                      Jul 2025 - Present
                    </span>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <span className="text-gray-400 text-sm sm:text-base">
                      Remote
                    </span>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        Identified and fixed bugs across multiple pages of the
                        organization's websites, improving functionality and
                        user experience
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        Enhanced UI/UX design for improved responsiveness and
                        modern user experience, leading to increased user
                        engagement
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        Collaborated closely with the developer committee using
                        VS Code to ensure uniformity and visual consistency
                        across all industry-related pages
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        Contributed to real-world project improvements using
                        TailwindCSS, Typescript and React, enhancing project
                        functionality and user interface
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="section-title">Featured Projects</h2>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "TravelHub",
                  date: "Aug 2025",
                  description:
                    "Modern Travel Booking platform with AI Chatbot for help in Choose best option, Plane, Train and Buses all-in-one platform. Resarvation Management, and user authentication. Built by Me in just 3 Days.",
                  color: "golden",
                  features: [
                    "Plane, Train, Buses",
                    "AI Chatbot",
                    "Reservation Management",
                    "User Authentication",
                    "Database Integration",
                    "Responsive Design",
                  ],
                  link: "https://travel-hub-booking-website.vercel.app/", // yahan apne project ka actual link daal dijiye
                },
                {
                  title: "PC Wallahh",
                  date: "July 2025",
                  description:
                    "E-Commerce Website with user authentication, product management, and order handling. Built by Me.",
                  color: "cyan",
                  features: [
                    "User Authentication",
                    "Product Management",
                    "Database Integration",
                    "Responsive Design",
                  ],
                  link: "https://pcwallahh.netlify.app/", // yahan apne project ka actual link daal dijiye
                },
                {
                  title: "Personal Portfolio",
                  date: "Feb 2024",
                  description:
                    "Responsive portfolio showcasing skills, projects, and contact information with modern design principles.",
                  color: "green",
                  features: [
                    "Responsive Design",
                    "Modern UI/UX",
                    "Mobile-First",
                    "Interactive Elements",
                  ],
                  link: "https://example.com/portfolio",
                },
                {
                  title: "SkillDossier.io",
                  date: "Aug 2025",
                  description:
                    "Skilldossier is a E-Learning Platform Modern Designed Website",
                  color: "purple",
                  features: [
                    "Beautifull Design",
                    "User Friendly UI",
                    "Light/Dark Mode Functionality",
                    "Fully Responsive",
                  ],
                  link: "https://skilldossiers.netlify.app/",
                },
                {
                  title: "FlipCard-Game",
                  date: "Sep 2025",
                  description:
                    "Fully Functional Game with all Dificulty Level and Beautifull UI",
                  color: "blue",
                  features: [
                    "Clean UI",
                    "Responsive For all Screens",
                    "Proper Fuctionality",
                    "React-Lucide Icons",
                  ],
                  link: "https://fliplycards.netlify.app/",
                },
                {
                  title: "Digital Clock App",
                  date: "Apr 2024",
                  description:
                    "Real-time digital clock with styled layout using JavaScript Date object and DOM manipulation.",
                  color: "pink",
                  features: [
                    "Real-time Updates",
                    "DOM Manipulation",
                    "Styled Layout",
                    "Date Object",
                  ],
                  link: "https://fliplycards.netlify.app/",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`project-card project-card-${project.color} animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    <span className="text-xs sm:text-sm text-gray-400">
                      {project.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded-full feature-tag-${project.color}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link mt-4 sm:mt-9 w-full text-sm sm:text-base inline-flex items-center justify-center"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    <span>View Project</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="section-title">Certifications</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: "Web Development",
                  provider: "Hitesh Chaudhary - Udemy",
                  year: "2025",
                  color: "cyan",
                },
                {
                  title: "React JS Complete Course",
                  provider: "Prakash Narsingrao Sakari - GeeksforGeeks",
                  year: "2025",
                  color: "purple",
                },
                {
                  title: "Mastering Generative AI and Chat GPT",
                  provider: "Sahil Garg - GeeksforGeeks",
                  year: "2025",
                  color: "green",
                },
                {
                  title: "Complete Data Science, ML, DL, NLP Bootcamp",
                  provider: "Krish Naik - Udemy",
                  year: "2025",
                  color: "blue",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className={`certification-card certification-card-${cert.color} animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Award
                    className={`w-6 h-6 sm:w-8 sm:h-8 text-${cert.color}-400 mb-3 sm:mb-4`}
                  />
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">
                    {cert.provider}
                  </p>
                  <span className="text-xs sm:text-sm text-gray-400">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="section-title">Get In Touch</h2>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you want to discuss a project, job
                opportunity, or just say hi, feel free to reach out!
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <a
                  href="mailto:nishchhalverma6@gmail.com"
                  className="contact-card contact-card-cyan sm:col-span-2 lg:col-span-1"
                >
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base break-all">
                    nishchhalverma6@gmail.com
                  </p>
                </a>
                <a
                  href="tel:+918923066929"
                  className="contact-card contact-card-green"
                >
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    +91-8923066929
                  </p>
                </a>
                <div className="contact-card contact-card-purple">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Agra, Uttar Pradesh
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-4 sm:space-x-6">
                <a
                  href="https://github.com/nishchhal6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-large"
                >
                  <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nishchhalverma6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-large"
                >
                  <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a
                  href="https://instagram.com/nishchhal267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-large"
                >
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-16 text-center">
        <p className="mb-8 text-2xl sm:text-3xl font-semibold text-transparent bg-gradient-to-r from-green-400 via-cyan-300 to-teal-400 bg-clip-text animate-pulse">
          Want to get my <span className="">full CV?</span>
        </p>
        <a
          href="/Frontend-Resume-NV.pdf"
          download
          className="relative inline-flex items-center space-x-2 px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-green-400 via-cyan-400 to-teal-500 shadow-2xl hover:from-green-500 hover:to-teal-600 text-gray-900 ring-2 ring-green-300 hover:ring-4 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300 animate-glow"
          // style={{
          //   boxShadow:
          //     "0 0 40px 10px rgba(52, 211, 153, 0.25), 0 2px 8px rgba(0,0,0,0.05)",
          // }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4m-4-4V4"
            />
          </svg>
          <span className="tracking-wider">Download CV</span>
          {/* Optional: Animated glowing ring (needs extra CSS below) */}
          <span className="absolute inset-0 rounded-full pointer-events-none animate-pulse-glow"></span>
        </a>
      </footer>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Nishchhal Verma. Made with ❤️ and React.js
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
