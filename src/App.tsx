import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code2, Database, Network, Shield, Languages, BookOpen, Sun, Moon, ExternalLink } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: "Programming & Development", items: ["Python", "JavaScript", "HTML", "CSS", "SQL", "MySQL", "GitHub", "Visual Studio Code"] },
    { icon: <Database className="w-6 h-6" />, name: "Database & Analytics", items: ["SQL", "MySQL", "Power BI"] },
    { icon: <Network className="w-6 h-6" />, name: "Networking & Infrastructure", items: ["Cisco", "Juniper", "Active Directory", "Wireshark", "Hyper-V Hypervisor", "Oracle VM VirtualBox"] },
    { icon: <Shield className="w-6 h-6" />, name: "Operating Systems & Support", items: ["Windows", "Mac OS", "Linux", "Remote Desktop Support", "Hardware/Software Troubleshooting"] },
    { icon: <Code2 className="w-6 h-6" />, name: "Software & Tools", items: ["MS Office Suite", "Help Desk Software (Jira, Zendesk)", "Adobe Creative Suite"] }
  ];

  const interests = [
    {
      name: "Football - Tottenham Hotspur",
      description: "As a dedicated Spurs supporter, I live and breathe the beautiful game. The tactical evolution, the passion of the fans, and the rich history of Tottenham Hotspur captivate me. From the glory days to our current journey, supporting Spurs has been an incredible experience filled with unforgettable moments.",
      image: "https://raw.githubusercontent.com/samebg/Official-Portfolio/refs/heads/main/Pictures/football-sport-tottenham-hotspur-premier-league-wallpaper.jpg",
      imageCredit: "Tottenham Hotspur"
    },
    {
      name: "Fitness Journey",
      description: "Fitness is more than just a hobby—it's a commitment to personal growth and well-being. Through consistent training and dedication, I've learned valuable lessons about discipline, perseverance, and the importance of setting and achieving goals. My fitness journey parallels my approach to technology: constant improvement and pushing beyond limits.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      imageCredit: "Photo by Victor Freitas on Unsplash"
    },
    {
      name: "Jazz & Classical Music",
      description: "The timeless melodies of Louis Armstrong and Frank Sinatra transport me to an era of musical excellence. Their artistry, improvisation, and ability to tell stories through music inspire my creative approach to problem-solving in technology. Jazz, like coding, is about finding harmony in complexity.",
      image: "https://media.npr.org/assets/img/2012/01/31/louis-armstrong-3_wide-1f7c381c92278b5957df63c26e9ddab8b14c0502.jpg?s=800&c=85&f=webp",
      imageCredit: "AFP/AFP/Getty Images"
    },
    {
      name: "World Travel",
      description: "Exploring six European countries has opened my mind to diverse perspectives and cultures. France, particularly Marseille and Nice, holds a special place in my heart. These experiences have shaped my global outlook and reinforced my belief in technology's power to connect people across borders.",
      image: "AFP/AFP/Getty Images",
      imageCredit: "Photo by your very own, Sam"
    }
  ];

  const projects = [
    {
      title: "Tottenham HotSam",
      description: "A dedicated platform for Spurs fans to stay updated with game day information, including match schedules, team lineups, and live updates. Built with React and featuring real-time notifications for upcoming matches.",
      tags: ["React", "Real-time Updates", "API Integration"],
      current: true,
      link: "https://tottenham-hotsam.netlify.app",
      linkText: "Visit Tottenham HotSam (Coming Soon)"
    },
    {
      title: "ITIL Quiz",
      description: "A quiz designed to enhance my foundational understanding of ITIL, with a particular focus on IT Service Management (ITSM).",
      tags: ["HTML", "CSS", "JavaScript"],
      current: true,
      link: "https://ebengho.site/quiz/",
      linkText: "Try ITIL Quiz"
    }
  ];

  const futureGoals = [
    {
      title: "Congo ISP Initiative",
      description: "Future goal to establish a reliable Internet Service Provider in Congo to improve connectivity and access to technology.",
      tags: ["Networking", "Infrastructure", "Social Impact"]
    },
    {
      title: "Tech Education Program",
      description: "Vision to develop a program teaching underprivileged children about technology and programming basics.",
      tags: ["Education", "Programming", "Community"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header/Hero Section */}
      <div className="bg-gradient-to-r from-[#132257] to-[#001C3D] dark:from-[#0a1229] dark:to-[#000a14] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('/spurs-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="container mx-auto px-4 py-16 relative">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://raw.githubusercontent.com/samebg/Official-Portfolio/refs/heads/main/Pictures/Mesmilefinal.png"
              alt="Sam Ebengho Lompoko"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">Sam Ebengho Lompoko</h1>
              <h2 className="text-2xl mb-2">Aspiring AI & Software Engineer</h2>
              <p className="text-lg mb-4 text-gray-200">Networking & Cybersecurity Graduate | Passionate About AI, Data Science & Continuous Learning</p>
              <p className="text-xl font-semibold italic mb-4">"Driven to Master Any Challenge"</p>
              <div className="flex gap-4">
                <a href="https://github.com/samebg" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-blue-200 transition-colors transform hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/sam-ebengho-7b5686214" target="_blank" rel="noopener noreferrer"
                   className="hover:text-blue-200 transition-colors transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:samebengho@gmail.com" className="hover:text-blue-200 transition-colors transform hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="tel:+12535279621" className="hover:text-blue-200 transition-colors transform hover:scale-110">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Highlight */}
      <div className="bg-white dark:bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <span className="text-blue-600 dark:text-blue-400">🎉 New Project:</span>
            <a href="#projects" 
               onClick={() => setActiveSection('projects')}
               className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Check out Tottenham HotSam - Your Ultimate Spurs Matchday Companion! (Coming Soon) →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 overflow-x-auto">
            {['about', 'experience', 'education', 'skills', 'interests', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`py-4 px-6 font-medium transition-colors ${
                  activeSection === section
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section className={`${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I'm Sam Ebengho, a passionate Software Engineering student with a strong foundation in Information Systems Networking & Cybersecurity and Technical Support. Currently enrolled in the YearUp program at Seattle Central College, I'm expanding my expertise in software development, with Python as my primary programming language. I am also diving into Artificial Intelligence and Data Science, seeking hands-on learning experiences.
              </p>
              <p>
                With a background as an Office Clerk at Tacoma Community College (2022 - 2024), I developed strong problem-solving, customer service, and data management skills. I thrive in collaborative environments, where I can uplift and support others while tackling technical challenges.
              </p>
              <p>
                I aspire to leverage my skills to make technology more accessible and impactful, both in the U.S. and in my home country, the Congo, where I dream of establishing a reliable Internet Service Provider (ISP) and teaching underprivileged children about technology.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Languages</h3>
              <div className="flex items-center gap-2 dark:text-gray-300">
                <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Fluent English, Fluent French</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={`${activeSection === 'experience' ? 'block' : 'hidden'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Professional Experience</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold dark:text-white">Office Clerk</h3>
              <div className="text-gray-600 dark:text-gray-400 mb-2">Tacoma Community College | Jan. 2022 – Aug. 2024</div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Participated in customer service initiatives, addressing inquiries from several clients daily while maintaining professionalism and attention to detail.</li>
                <li>Improved data entry processes, increasing accuracy rates for the type of records while simultaneously boosting overall departmental efficiency.</li>
                <li>Skillfully connect students and tutors via Zoom, ensuring seamless virtual collaboration.</li>
                <li>Navigate student queries beyond the role, offering solutions and guidance with a knack for creative problem-solving.</li>
                <li>Manage calls, schedule appointments, and expertly handle inquiries, creating a welcoming front desk experience.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={`${activeSection === 'education' ? 'block' : 'hidden'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Education & Training</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Year Up (Seattle Central College)</h3>
                <div className="text-gray-600 dark:text-gray-400 mb-2">Sep. 2024 - Sep. 2025</div>
                <p className="text-gray-700 dark:text-gray-300">Completed coursework in HTML, CSS, Python, Java, and JavaScript.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Tacoma Community College</h3>
                <div className="text-gray-600 dark:text-gray-400 mb-2">Associate of Applied Science - Information Technology, Networking & Cybersecurity | Sept. 2021 - Aug. 2023</div>
                <p className="text-gray-700 dark:text-gray-300">Completed coursework in Networking, Database Implementation, Administration of Networks, Project Management, Introduction to Programming, Database Programming, Internetworking, Client/Server Technology -LANs, Cybersecurity, Incident Response & Intrusion, Service and Support Fundamentals, Security Assessment & Remediation.</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Certifications</h3>
              <div className="flex items-center gap-2 dark:text-gray-300">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Technical Support, Help Desk, CompTIA A Core 1, CompTIA A Core 2, CompTIA Linux+</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`${activeSection === 'skills' ? 'block' : 'hidden'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="p-4 border dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow transform hover:scale-105">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-blue-600 dark:text-blue-400">{skill.icon}</div>
                    <h3 className="text-lg font-semibold dark:text-white">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className={`${activeSection === 'interests' ? 'block' : 'hidden'}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Personal Interests</h2>
            <div className="space-y-8">
              {interests.map((interest) => (
                <div key={interest.name} className="border dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src={interest.image} 
                    alt={interest.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">{interest.name}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{interest.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">{interest.imageCredit}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Image Licensing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All images used in this section are from Unsplash and are licensed under the Unsplash License, which grants free use for commercial and noncommercial purposes. Credits are provided below each image.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={`${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <div className="space-y-8">
            {/* Current Projects */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Current Projects</h2>
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.title} 
                       className="p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {project.linkText} <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Future Goals */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Future Goals</h2>
              <div className="space-y-6">
                {futureGoals.map((goal) => (
                  <div key={goal.title} 
                       className="p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition-all transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{goal.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{goal.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {goal.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;