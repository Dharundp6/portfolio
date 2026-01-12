"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, ExternalLink } from "lucide-react";
import ChapterLayout from "@/components/ChapterLayout";
import { ComicPanel, SpeechBubble, MangaAvatar, SoundEffect } from "@/components/comic";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "dharunjagan009@gmail.com",
    href: "mailto:dharunjagan009@gmail.com",
    description: "Best for detailed inquiries",
    color: "bg-[#b5544a]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/dharun-prasanth",
    href: "https://linkedin.com/in/dharun-prasanth-300429211",
    description: "Let's connect professionally",
    color: "bg-[#4a6fa5]",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Dharundp6",
    href: "https://github.com/Dharundp6",
    description: "See my code in action",
    color: "bg-[#1a1a1a]",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download CV",
    href: "/resume.pdf",
    description: "Full professional details",
    color: "bg-[#6b8e4e]",
  },
];

export default function ContactPage() {
  return (
    <ChapterLayout
      chapterNumber={6}
      title="Contact"
      subtitle="Let's connect"
      prevChapter={{ href: "/chapters/education", label: "Education" }}
    >
      {/* Avatar Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8"
      >
        <MangaAvatar expression="celebrating" size="lg" showSparkles />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-md"
        >
          <SpeechBubble tailPosition="top">
            <p className="text-[#1a1a1a] text-center">
              Thank you for your interest. I&apos;m open to discussing
              opportunities, collaborations, and data science projects.
            </p>
          </SpeechBubble>
        </motion.div>
      </motion.div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.href}
            target={method.label !== "Email" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="group"
          >
            <ComicPanel className="p-0 overflow-hidden hover:translate-x-1 hover:-translate-y-1 transition-transform">
              <div className="flex items-stretch">
                {/* Icon Section */}
                <div
                  className={`${method.color} text-white p-6 flex items-center justify-center`}
                >
                  <method.icon size={32} />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <h3 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a] flex items-center gap-2">
                    {method.label}
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h3>
                  <p className="font-[family-name:var(--font-courier-prime)] text-sm text-[#4a6fa5]">
                    {method.value}
                  </p>
                  <p className="text-xs text-[#8b7355] mt-1">
                    {method.description}
                  </p>
                </div>
              </div>
            </ComicPanel>
          </motion.a>
        ))}
      </div>

      {/* Status Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <ComicPanel className="bg-[#d4a84b]/20">
          <div className="text-center">
            <SoundEffect
              text="AVAILABLE"
              size="md"
              color="yellow"
              className="mb-4"
            />

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f5f0e1] border-2 border-[#1a1a1a]">
                <span className="text-xl">📍</span>
                <span className="font-[family-name:var(--font-bangers)] text-[#1a1a1a]">
                  Glasgow, UK
                </span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-[#f5f0e1] border-2 border-[#1a1a1a]">
                <span className="w-3 h-3 rounded-full bg-[#6b8e4e] animate-pulse" />
                <span className="font-[family-name:var(--font-bangers)] text-[#1a1a1a]">
                  Available for Opportunities
                </span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-[#f5f0e1] border-2 border-[#1a1a1a]">
                <span className="text-[#6b8e4e] font-bold">✓</span>
                <span className="font-[family-name:var(--font-bangers)] text-[#1a1a1a]">
                  UK Graduate Visa
                </span>
              </div>
            </div>

            <p className="text-[#8b7355] font-[family-name:var(--font-courier-prime)] mb-6">
              No sponsorship required for UK-based roles
            </p>

            <a
              href="mailto:dharunjagan009@gmail.com?subject=Let's%20work%20together!"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#b5544a] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-xl comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <Mail size={24} />
              Start a Conversation
            </a>
          </div>
        </ComicPanel>
      </motion.div>

      {/* Closing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="font-[family-name:var(--font-bangers)] text-3xl text-[#8b7355] tracking-widest">
          LET&apos;S CONNECT
        </p>
        <p className="text-sm text-[#5c4d3c] font-[family-name:var(--font-courier-prime)] mt-2">
          Looking forward to hearing from you.
        </p>
      </motion.div>
    </ChapterLayout>
  );
}
