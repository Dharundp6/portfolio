"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SoundEffect, NarratorBox } from "@/components/comic";

const education = [
  {
    id: 1,
    degree: "MSc Data Science",
    institution: "University of Glasgow",
    location: "Glasgow, Scotland",
    period: "Sep 2025 - Sep 2026",
    status: "current",
    description:
      "Advanced studies in machine learning, statistical modeling, and data engineering at a Russell Group university.",
    highlights: [
      "Focus on production ML systems and NLP",
      "Research in applied AI and data analytics",
      "Industry-aligned curriculum",
    ],
  },
  {
    id: 2,
    degree: "BSc Data Science",
    institution: "Kumaraguru College of Technology",
    location: "Coimbatore, India",
    period: "Jul 2022 - May 2025",
    status: "completed",
    description:
      "Comprehensive foundation in data science, programming, and statistical analysis with hands-on project experience.",
    highlights: [
      "Strong foundation in Python, SQL, and data analysis",
      "Multiple internships in ML and software engineering",
      "Research presentation at National University of Singapore",
    ],
  },
];

const certifications = [
  {
    title: "AI-Powered Business Analytics",
    issuer: "National University of Singapore",
    icon: "🏛️",
    description: "Advanced analytics and AI applications for business decision-making",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Google",
    icon: "🔧",
    description: "Professional certification in Python automation and scripting",
  },
];

const achievements = [
  {
    title: "1st Place - Wise-Ai-Thon 2024",
    description: "Won first place for Smart Agriculture Advisor solution",
    icon: "🏆",
  },
  {
    title: "Research Presentation at NUS",
    description: "Presented multimodal AI research findings",
    icon: "🎤",
  },
];

export default function EducationPage() {
  return (
    <ChapterLayout
      chapterNumber={5}
      title="Education"
      subtitle="Academic background & certifications"
      prevChapter={{ href: "/chapters/projects", label: "Projects" }}
      nextChapter={{ href: "/chapters/contact", label: "Contact" }}
    >
      {/* Header Effect */}
      <div className="flex justify-center mb-8">
        <SoundEffect text="CREDENTIALS" size="lg" color="yellow" rotate={-3} />
      </div>

      {/* Education Timeline */}
      <ComicPanel className="mb-8">
        <NarratorBox position="top-left" className="mb-6">
          Building expertise through academic rigor and continuous learning.
        </NarratorBox>

        <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6 text-center">
          ACADEMIC JOURNEY
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="comic-panel p-6 relative overflow-hidden"
            >
              {/* Status Badge */}
              {edu.status === "current" && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#6b8e4e] text-white text-xs font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a] animate-pulse">
                    CURRENT
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Degree Info */}
                <div className="md:w-1/3">
                  <h3 className="font-[family-name:var(--font-bangers)] text-2xl text-[#b5544a]">
                    {edu.degree}
                  </h3>
                  <p className="font-[family-name:var(--font-bangers)] text-lg text-[#4a6fa5]">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                    {edu.location}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-[#d4a84b] text-[#1a1a1a] text-sm font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a]">
                    {edu.period}
                  </span>
                </div>

                {/* Description & Highlights */}
                <div className="md:w-2/3">
                  <p className="text-[#5c4d3c] font-[family-name:var(--font-courier-prime)] mb-4">
                    {edu.description}
                  </p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#6b8e4e] font-bold">+</span>
                        <span className="text-sm text-[#1a1a1a]">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ComicPanel>

      {/* Certifications */}
      <ComicPanel className="mb-8">
        <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6 text-center">
          CERTIFICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="comic-panel p-4 flex items-start gap-4"
            >
              <span className="text-3xl">{cert.icon}</span>
              <div>
                <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a]">
                  {cert.title}
                </h3>
                <p className="text-sm text-[#4a6fa5] font-[family-name:var(--font-bangers)]">
                  {cert.issuer}
                </p>
                <p className="text-xs text-[#8b7355] font-[family-name:var(--font-courier-prime)] mt-1">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </ComicPanel>

      {/* Achievements */}
      <ComicPanel>
        <h2 className="font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6 text-center">
          KEY ACHIEVEMENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-[#d4a84b]/20 border-2 border-[#d4a84b]"
            >
              <span className="text-4xl">{achievement.icon}</span>
              <div>
                <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a]">
                  {achievement.title}
                </h3>
                <p className="text-sm text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="https://linkedin.com/in/dharun-prasanth-300429211"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#4a6fa5] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-sm hover:bg-[#3a5f95] transition-colors"
          >
            <Award size={16} />
            View Full Profile
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </ComicPanel>
    </ChapterLayout>
  );
}
