"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import {
  ComicPanel,
  SpeechBubble,
  SoundEffect,
  ChapterHeader,
  NarratorBox,
  MangaAvatar,
  MangaSpeedLines,
} from "./comic";

const ROLES = [
  "ML Engineer",
  "Deep Learning Developer",
  "Data Scientist",
  "AI Researcher",
] as const;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 px-4 md:px-8">
      <ComicPanel
        variant="splash"
        className="max-w-6xl mx-auto relative overflow-visible"
        animate={false}
      >
        {/* Speed Lines Background */}
        <MangaSpeedLines className="opacity-20" direction="center" />

        {/* Narrator Box - Opening */}
        <NarratorBox position="top-left" className="mb-8 z-10 relative">
          In a world of data and algorithms, one engineer dared to push the boundaries of what machines could learn...
        </NarratorBox>

        {/* Chapter Header */}
        <ChapterHeader
          chapterNumber={1}
          title="The Awakening"
          subtitle="Where the journey begins..."
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
          {/* Left side - Avatar with effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Action burst behind avatar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 action-burst opacity-30" />
            </div>

            <MangaAvatar expression="determined" size="xl" showSparkles />
          </motion.div>

          {/* Right side - Info */}
          <div className="relative z-10 space-y-6">
            {/* Name with sound effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <SoundEffect text="WHOOSH!" size="md" color="blue" className="mb-4" />

              <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-bangers)] text-[#1a1a1a] tracking-wide">
                Dharun Prasanth S
              </h1>
            </motion.div>

            {/* Role in thought bubble */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <SpeechBubble type="thought" className="inline-block" animate={false}>
                <div className="font-[family-name:var(--font-bangers)] text-2xl md:text-3xl text-[#4a6fa5] min-h-[40px]">
                  &lt;{displayText}
                  <span className="animate-pulse">|</span>/&gt;
                </div>
              </SpeechBubble>
            </motion.div>

            {/* Description bubble */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <SpeechBubble tailPosition="left" animate={false}>
                <p className="text-[#1a1a1a] text-lg leading-relaxed">
                  Building production ML systems that serve real users. Passionate about computer vision,
                  generative AI, and creating innovative products!
                </p>
              </SpeechBubble>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-[#b5544a] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-lg tracking-wide comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <span>Get In Touch</span>
                <Mail size={18} />
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-[#f5f0e1] text-[#1a1a1a] border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-lg tracking-wide comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <span>View Quests</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#4a6fa5] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-lg tracking-wide comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <span>Download CV</span>
                <Download size={18} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Power Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 pt-8 border-t-4 border-[#1a1a1a] border-dashed"
        >
          <h3 className="text-center font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6">
            POWER STATS
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { number: "2+", label: "Years Experience", icon: "🎮" },
              { number: "10+", label: "Projects Built", icon: "🏆" },
              { number: "3", label: "Awards Won", icon: "🌟" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                className="bg-[#f5f0e1] border-[3px] border-[#1a1a1a] p-4 comic-shadow min-w-[120px] text-center"
              >
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-3xl font-[family-name:var(--font-bangers)] text-[#b5544a]">
                  {stat.number}
                </div>
                <div className="text-sm text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-8 h-12 border-[3px] border-[#1a1a1a] rounded-full flex justify-center pt-2 bg-[#f5f0e1]">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-2 h-2 bg-[#b5544a] rounded-full"
            />
          </div>
          <span className="text-xs text-[#8b7355] font-[family-name:var(--font-bangers)] tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>
      </ComicPanel>

      {/* Panel gutter */}
      <div className="panel-gutter h-4 max-w-6xl mx-auto" />
    </section>
  );
};

export default Hero;
