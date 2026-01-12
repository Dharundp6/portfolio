"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ComicPanel,
  SpeechBubble,
  ChapterHeader,
  NarratorBox,
  MangaAvatar,
} from "./comic";

const About = () => {
  const abilities = [
    { icon: "🧠", label: "Deep Learning", desc: "PyTorch, TensorFlow, CNNs", power: 90 },
    { icon: "🤖", label: "Generative AI", desc: "RAG, LangChain, LLMs", power: 88 },
    { icon: "👁️", label: "Computer Vision", desc: "YOLOv8, OpenCV", power: 85 },
    { icon: "🚀", label: "Production ML", desc: "FastAPI, Docker, CI/CD", power: 82 },
  ];

  return (
    <section id="about" className="py-8 px-4 md:px-8">
      <ComicPanel className="max-w-6xl mx-auto">
        {/* Narrator Box */}
        <NarratorBox position="top-left" className="mb-6">
          Every hero has a beginning. This is the origin story...
        </NarratorBox>

        {/* Chapter Header */}
        <ChapterHeader
          chapterNumber={2}
          title="Origin Story"
          subtitle="The making of an ML Engineer"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8">
          {/* Left side - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#d4a84b] opacity-20 rounded-full blur-xl" />
              <div className="comic-panel p-6 bg-[#faf7f0]">
                <MangaAvatar expression="thinking" size="lg" />
              </div>
            </div>

            {/* Character info card */}
            <div className="comic-panel p-4 w-full max-w-xs">
              <h4 className="font-[family-name:var(--font-bangers)] text-xl text-center text-[#1a1a1a] mb-2">
                CHARACTER PROFILE
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-[#e8dcc8] pb-1">
                  <span className="text-[#8b7355]">Name:</span>
                  <span className="font-semibold text-[#1a1a1a]">Dharun Prasanth</span>
                </div>
                <div className="flex justify-between border-b border-[#e8dcc8] pb-1">
                  <span className="text-[#8b7355]">Class:</span>
                  <span className="font-semibold text-[#1a1a1a]">ML Engineer</span>
                </div>
                <div className="flex justify-between border-b border-[#e8dcc8] pb-1">
                  <span className="text-[#8b7355]">Location:</span>
                  <span className="font-semibold text-[#1a1a1a]">Glasgow, UK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8b7355]">Status:</span>
                  <span className="font-semibold text-[#6b8e4e]">Open to Quests!</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Story in speech bubbles */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <SpeechBubble tailPosition="left">
                <p className="text-[#1a1a1a] leading-relaxed">
                  I&apos;ve spent the last few years building production ML systems: RAG pipelines,
                  embedding architectures, real-time inference APIs that serve real users every day.
                </p>
              </SpeechBubble>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <SpeechBubble tailPosition="left">
                <p className="text-[#1a1a1a] leading-relaxed">
                  The most interesting problems sit at the intersection of{" "}
                  <span className="font-bold text-[#4a6fa5]">cutting-edge ML</span> and{" "}
                  <span className="font-bold text-[#7a5c91]">delightful user experiences</span>!
                </p>
              </SpeechBubble>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <SpeechBubble tailPosition="left">
                <p className="text-[#1a1a1a] leading-relaxed">
                  Currently finishing my MSc at the University of Glasgow, looking for a role where
                  I can push the boundaries of generative AI!
                </p>
              </SpeechBubble>
            </motion.div>
          </div>
        </div>

        {/* Abilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t-4 border-[#1a1a1a] border-dashed"
        >
          <h3 className="text-center font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6">
            ABILITIES UNLOCKED
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {abilities.map((ability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="comic-panel p-4 hover:translate-x-1 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{ability.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-[family-name:var(--font-bangers)] text-lg text-[#1a1a1a]">
                      {ability.label}
                    </h4>
                    <p className="text-xs text-[#8b7355] font-[family-name:var(--font-courier-prime)] mb-2">
                      {ability.desc}
                    </p>
                    <div className="power-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ability.power}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className="power-bar-fill"
                      />
                    </div>
                    <span className="text-xs font-[family-name:var(--font-bangers)] text-[#b5544a]">
                      PWR: {ability.power}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ComicPanel>

      {/* Panel gutter */}
      <div className="panel-gutter h-4 max-w-6xl mx-auto" />
    </section>
  );
};

export default About;
