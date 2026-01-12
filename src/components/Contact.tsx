"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import {
  ComicPanel,
  ChapterHeader,
  NarratorBox,
  SoundEffect,
  SpeechBubble,
  MangaAvatar,
} from "./comic";

const Contact = () => {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "dharunjagan009@gmail.com",
      href: "mailto:dharunjagan009@gmail.com",
      emoji: "📧",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+44 7887768789",
      href: "tel:+447887768789",
      emoji: "📱",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "dharun-prasanth",
      href: "https://linkedin.com/in/dharun-prasanth-300429211",
      emoji: "💼",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Dharundp6",
      href: "https://github.com/Dharundp6",
      emoji: "🐙",
    },
  ];

  return (
    <section id="contact" className="py-8 px-4 md:px-8">
      <ComicPanel className="max-w-6xl mx-auto">
        {/* Sound Effect */}
        <div className="flex justify-center mb-4">
          <SoundEffect
            text="TO BE CONTINUED..."
            size="lg"
            color="blue"
            rotate={0}
          />
        </div>

        {/* Chapter Header */}
        <ChapterHeader
          chapterNumber={7}
          title="Epilogue"
          subtitle="The story doesn't end here..."
        />

        {/* Narrator Box */}
        <NarratorBox position="top-left" className="mt-6 mb-8">
          And so our hero stands ready for the next adventure. But every great
          story needs a sequel...
        </NarratorBox>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Left - Avatar and Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <MangaAvatar expression="celebrating" size="lg" showSparkles />

            <SpeechBubble tailPosition="top" className="max-w-sm">
              <p className="text-[#1a1a1a] leading-relaxed text-center">
                I&apos;m looking for ML Engineer opportunities where I can build
                innovative AI products. Let&apos;s create something amazing
                together!
              </p>
            </SpeechBubble>
          </motion.div>

          {/* Right - Contact Methods */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-bangers)] text-xl text-[#8b7355] mb-4">
              WAYS TO REACH THE HERO:
            </h3>

            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={
                  contact.label === "Email" || contact.label === "Phone"
                    ? "_self"
                    : "_blank"
                }
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-4 p-4 comic-panel hover:translate-x-2 hover:-translate-y-1 transition-transform"
              >
                <span className="text-2xl">{contact.emoji}</span>
                <div className="flex-1">
                  <span className="block text-xs uppercase tracking-wider text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                    {contact.label}
                  </span>
                  <span className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a]">
                    {contact.value}
                  </span>
                </div>
                <span className="text-[#4a6fa5]">{contact.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Status Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t-4 border-[#1a1a1a] border-dashed"
        >
          <div className="comic-panel p-6 bg-[#d4a84b]/20">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="text-[#1a1a1a] font-semibold">
                  Glasgow, Scotland
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#6b8e4e] animate-pulse" />
                <span className="text-[#1a1a1a] font-semibold">
                  Open to Opportunities
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#6b8e4e] font-bold text-xl">✓</span>
                <span className="text-[#1a1a1a] font-semibold">
                  UK Graduate Route Visa Eligible
                </span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-[family-name:var(--font-bangers)] text-2xl text-[#1a1a1a] mb-2">
                Let&apos;s Build Something Amazing!
              </h3>
              <p className="text-[#8b7355] mb-6 font-[family-name:var(--font-courier-prime)]">
                No sponsorship required for UK-based roles
              </p>

              <a
                href="mailto:dharunjagan009@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#b5544a] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)] text-xl comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <span>Say Hello</span>
                <span className="text-2xl">👋</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* To Be Continued */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <span className="font-[family-name:var(--font-bangers)] text-3xl text-[#8b7355] tracking-widest">
            TO BE CONTINUED...
          </span>
        </motion.div>
      </ComicPanel>

      {/* Panel gutter */}
      <div className="panel-gutter h-4 max-w-6xl mx-auto" />
    </section>
  );
};

export default Contact;
