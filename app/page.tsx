"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronDown,
  Code,
  Database,
  Smartphone,
  Server,
  Award,
  GraduationCap,
  User,
  Briefcase,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "education", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = {
    languages: ["Golang", "Java", "JavaScript", "TypeScript", "C++", "Solidity", "Rust"],
    systems: ["Prometheus", "Grafana", "Docker", "Microservices"],
    frontend: ["React", "Next.js", "Three.js", "WebGL", "Tailwind CSS"],
    backend: ["Go", "Redis", "PostgreSQL", "REST APIs", "JWT Auth", "Web3.js", "Ether.js"],
    smartContract: ["Solidity (Ethereum, Sepolia)", "Rust (Solana)"],
    softSkills: ["Leadership", "Event Management", "Public Speaking", "Teamwork", "Time Management"],
  }

  const projects = [
    {
      title: "Scalable Asynchronous Job Processing System",
      description:
        "Built a distributed task queue in Go using goroutines, per-job synchronization, and controlled concurrency. Implemented per-job timeouts, exponential backoff retries, and a dead-letter queue. Built end-to-end observability using Prometheus metrics and Grafana.",
      tech: ["Go", "Redis", "Docker", "Prometheus", "Grafana"],
      status: "Completed",
    },
    {
      title: "Opensource Compass",
      description:
        "Built a Go microservices backend integrating GitHub API with AI services. Developed an AI-powered onboarding guide generator using Gemini/Groq LPUs. Optimized PostgreSQL database and implemented JWT-based authentication.",
      tech: ["Go", "PostgreSQL", "Docker", "JWT", "REST APIs", "Gemini AI"],
      status: "Completed",
    },
    {
      title: "CampusEx",
      description:
        "Developed a Go backend for a gamified social economy platform, with an event-driven stock engine and auction-based bidding. Built the 'Campus Tea' sentiment analysis pipeline using Llama 3.1 via Groq API to update student stock prices in real time.",
      tech: ["Go", "Next.js", "PostgreSQL", "Three.js", "Docker", "Groq AI"],
      status: "Completed",
    },
  ]

  const achievements = [
    {
      title: "Codeforces Specialist",
      description: "Achieved a maximum rating of 1405",
      icon: Award,
    },
    {
      title: "Global Rank 464",
      description: "CodeChef Starters 162 (Among ~25,000 participants)",
      icon: Award,
    },
    {
      title: "Hackathon Winner",
      description: "DevMatrix (CampusEx selected as winning project)",
      icon: Award,
    },
    {
      title: "Hackathon Winner",
      description: "Reckon 7.0 (OpenSource Compass selected among top teams)",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 shadow-md backdrop-blur-md border-b border-blue-900/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Devang Vaishnav</div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? "text-blue-400" : "text-blue-100/70"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-900/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">Devang Vaishnav</h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 animate-fade-in-delay">
              Software Engineer & Backend Developer
            </p>
            <p className="text-lg text-blue-100/70 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
              Computer Science and Artificial Intelligence student at IIIT Lucknow with a CGPA of 9.05. Passionate about backend systems, distributed architectures, and AI integration.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-3">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20 text-white px-8 py-3 rounded-full"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-white/30 text-blue-600 hover:text-white hover:bg-blue-800/40 hover:border-blue-600 hover:shadow-blue-900/20 px-8 py-3 rounded-full"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6 animate-fade-in-delay-4">
              <a
                href="https://github.com/SpectreKnight69"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/70 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/devang-vaishnav-0680a3327/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/70 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:devang.012006@gmail.com"
                className="text-blue-100/70 hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-200/40" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-950/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <User className="text-blue-400" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-blue-100/70 mb-6">
                  I'm a passionate Computer Science and AI student at IIIT Lucknow with a strong focus on backend systems
                  and artificial intelligence. With a CGPA of 9.05, I've been consistently excelling in my
                  academic journey while building highly scalable projects.
                </p>
                <p className="text-lg text-blue-100/70 mb-6">
                  My expertise spans across multiple domains including distributed task queues, concurrent goroutine design,
                  full-stack web development, and AI integration. I'm particularly interested in scalable backends and intelligent systems.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 border border-blue-700/50">
                    Backend Developer
                  </Badge>
                  <Badge variant="secondary" className="bg-sky-900/50 text-sky-300 border border-sky-700/50">
                    AI Enthusiast
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">
                    Systems Engineer
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-900/20 backdrop-blur-md rounded-lg p-6 border border-blue-800/50">
                  <h3 className="text-xl font-semibold text-white mb-2">Current Focus</h3>
                  <p className="text-blue-200/60">
                    Building highly scalable microservices and exploring the intersection of distributed systems and AI.
                  </p>
                </div>
                <div className="bg-blue-900/20 backdrop-blur-md rounded-lg p-6 border border-blue-800/50">
                  <h3 className="text-xl font-semibold text-white mb-2">Goals</h3>
                  <p className="text-blue-200/60">
                    Solving complex architectural challenges and developing performant, resilient backend solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
              <Code className="text-blue-400" />
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="text-blue-400" size={20} />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-900/50 text-blue-300 border border-blue-700/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Database className="text-blue-400" size={20} />
                    Systems & Observability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.systems.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-sky-900/50 text-sky-300 border border-sky-700/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Smartphone className="text-emerald-600" size={20} />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Server className="text-amber-600" size={20} />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-amber-900/50 text-amber-300 border border-amber-700/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Cpu className="text-blue-400" size={20} />
                    Smart Contract Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.smartContract.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-900/50 text-blue-300 border border-blue-700/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <User className="text-rose-500" size={20} />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.softSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-rose-900/50 text-rose-300 border border-rose-700/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-blue-950/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
              <Briefcase className="text-blue-400" />
              Featured Projects
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50 hover:bg-blue-800/40 hover:border-blue-600 hover:shadow-blue-900/20 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <Badge
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={
                          project.status === "Completed"
                            ? "bg-emerald-900/50 text-emerald-300 border border-emerald-700/50"
                            : "bg-yellow-900/50 text-yellow-300 border border-yellow-700/50"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-200/60 mb-4 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-500/30 text-blue-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
              <GraduationCap className="text-blue-400" />
              Education
            </h2>
            <div className="space-y-6">
              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50">
                <CardHeader>
                  <CardTitle className="text-white">
                    Bachelor of Technology - Computer Science and Artificial Intelligence
                  </CardTitle>
                  <CardDescription className="text-blue-300">
                    Indian Institute of Information Technology, Lucknow • 2024 - 2028
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-100/70">
                      CGPA: <span className="text-emerald-600 font-semibold">9.05</span>
                    </span>
                  </div>
                  <p className="text-blue-200/60">
                    <strong>Relevant Courses:</strong> Object Oriented Programming, Data Structures, Computer Architecture, Databases, Distributed Systems (self-study)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-blue-950/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
              <Award className="text-blue-400" />
              Achievements & Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <achievement.icon className="text-yellow-500" size={24} />
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-200/60 text-base">{achievement.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <User className="text-blue-400" size={24} />
                    Leadership Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold text-white mb-2">HOD - Corporate Relations for IIITL MUN 2025</h3>
                  <CardDescription className="text-blue-200/60 text-base">
                    Led outreach that secured 8+ corporate sponsors, managing partnership pipeline for a 200+ participant national conference.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <Mail className="text-blue-400" />
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100/70 mb-12">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50 hover:bg-blue-800/40 hover:border-blue-600 hover:shadow-blue-900/20 transition-all duration-300 flex-1 min-w-[270px] max-w-[320px]">
                <CardContent className="p-6 text-center">
                  <Mail className="text-blue-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:devang.012006@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base block whitespace-nowrap"
                  >
                    devang.012006@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50 hover:bg-blue-800/40 hover:border-blue-600 hover:shadow-blue-900/20 transition-all duration-300 flex-1 min-w-[270px] max-w-[320px]">
                <CardContent className="p-6 text-center">
                  <Phone className="text-emerald-600 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <a href="tel:+919773457291" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    +91 97734 57291
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50 hover:bg-blue-800/40 hover:border-blue-600 hover:shadow-blue-900/20 transition-all duration-300 flex-1 min-w-[270px] max-w-[320px]">
                <CardContent className="p-6 text-center">
                  <Github className="text-blue-100/70 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold mb-2">GitHub</h3>
                  <a
                    href="https://github.com/SpectreKnight69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    SpectreKnight69
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/20 backdrop-blur-md border border-blue-800/50 hover:bg-blue-800/40 hover:border-blue-600 hover:shadow-blue-900/20 transition-all duration-300 flex-1 min-w-[270px] max-w-[320px]">
                <CardContent className="p-6 text-center">
                  <Linkedin className="text-blue-400 mx-auto mb-4" size={32} />
                  <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/devang-vaishnav-0680a3327/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    Devang Vaishnav
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-blue-900/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-blue-200/40">© 2025 Devang Vaishnav.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 0.8s both;
        }
      `}</style>
    </div>
  )
}
