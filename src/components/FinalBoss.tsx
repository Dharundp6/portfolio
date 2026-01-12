"use client";

import { motion } from "framer-motion";
import {
  ComicPanel,
  ChapterHeader,
  NarratorBox,
  SoundEffect,
  SpeechBubble,
  MangaAvatar,
  MangaSpeedLines,
} from "./comic";

const FinalBoss = () => {
  const challenges = [
    {
      boss: "The Complexity Beast",
      icon: "🐉",
      description:
        "Faced with overwhelmingly complex ML architectures that seemed impossible to implement.",
      victory:
        "Broke down problems into smaller components, built modular systems that scaled.",
      reward: "Systematic Thinking",
    },
    {
      boss: "The Data Dragon",
      icon: "🔥",
      description:
        "Battled with messy, incomplete datasets that threatened to derail projects.",
      victory:
        "Mastered data augmentation, preprocessing pipelines, and quality validation.",
      reward: "Data Mastery",
    },
    {
      boss: "The Deployment Demon",
      icon: "👹",
      description:
        "Struggled to move models from notebooks to production systems.",
      victory:
        "Conquered Docker, CI/CD, and API design to ship reliable ML services.",
      reward: "Production Skills",
    },
  ];

  const awards = [
    {
      title: "Wise-Ai-Thon 2024",
      achievement: "1st Place Winner",
      icon: "🏆",
      description: "Smart Agriculture AI Solution",
    },
    {
      title: "NUS Research Presentation",
      achievement: "Selected Speaker",
      icon: "🎤",
      description: "Multimodal AI Research",
    },
    {
      title: "CEEW Publication",
      achievement: "Co-Author",
      icon: "📚",
      description: "Computer Vision Research",
    },
  ];

  return (
    <section id="achievements" className="py-8 px-4 md:px-8">
      <ComicPanel variant="action" className="max-w-6xl mx-auto relative overflow-hidden">
        {/* Speed Lines Background */}
        <MangaSpeedLines className="opacity-10" direction="center" />

        {/* Sound Effect */}
        <div className="flex justify-center mb-4 relative z-10">
          <SoundEffect text="BOSS BATTLE!" size="lg" color="red" rotate={-3} />
        </div>

        {/* Chapter Header */}
        <ChapterHeader
          chapterNumber={6}
          title="Final Boss"
          subtitle="The ultimate challenges await..."
        />

        {/* Narrator Box */}
        <NarratorBox position="top-left" className="mt-6 mb-8 relative z-10">
          Every hero must face their greatest challenges. These are the battles
          that forged true strength...
        </NarratorBox>

        {/* Boss Battles */}
        <div className="space-y-6 mt-8 relative z-10">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="comic-panel p-6 md:p-8 bg-[#faf7f0]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                {/* Boss Info */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <span className="text-4xl">{challenge.icon}</span>
                    <h3 className="font-[family-name:var(--font-bangers)] text-2xl text-[#b5544a]">
                      {challenge.boss}
                    </h3>
                  </div>
                  <SpeechBubble type="shout" className="inline-block">
                    <p className="text-sm text-[#1a1a1a]">{challenge.description}</p>
                  </SpeechBubble>
                </div>

                {/* VS Indicator */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="action-burst w-16 h-16 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bangers)] text-xl text-[#b5544a]">
                      VS
                    </span>
                  </div>
                </div>

                {/* Victory */}
                <div className="text-center md:text-right">
                  <SoundEffect
                    text="VICTORY!"
                    size="sm"
                    color="yellow"
                    className="mb-3"
                  />
                  <SpeechBubble tailPosition="right" className="inline-block">
                    <p className="text-sm text-[#1a1a1a]">{challenge.victory}</p>
                  </SpeechBubble>
                  <div className="mt-3">
                    <span className="inline-block px-4 py-2 bg-[#6b8e4e] text-white border-[3px] border-[#1a1a1a] font-[family-name:var(--font-bangers)]">
                      +{challenge.reward}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Boss Defeated Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 relative z-10"
        >
          <div className="flex flex-col items-center gap-6">
            <SoundEffect text="BOSS DEFEATED!" size="lg" color="yellow" />
            <MangaAvatar expression="celebrating" size="lg" showSparkles />
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t-4 border-[#1a1a1a] border-dashed relative z-10"
        >
          <h3 className="text-center font-[family-name:var(--font-bangers)] text-2xl text-[#8b7355] mb-6">
            TROPHIES COLLECTED
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="comic-panel p-6 text-center bg-gradient-to-b from-[#d4a84b]/20 to-transparent"
              >
                <span className="text-5xl mb-3 block">{award.icon}</span>
                <h4 className="font-[family-name:var(--font-bangers)] text-xl text-[#1a1a1a] mb-1">
                  {award.title}
                </h4>
                <span className="inline-block px-3 py-1 bg-[#b5544a] text-white text-xs font-[family-name:var(--font-bangers)] border-2 border-[#1a1a1a] mb-2">
                  {award.achievement}
                </span>
                <p className="text-sm text-[#8b7355] font-[family-name:var(--font-courier-prime)]">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Total Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center relative z-10"
        >
          <div className="comic-panel p-6 bg-[#d4a84b]">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#1a1a1a]">
                  3
                </span>
                <p className="text-sm text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                  Bosses Defeated
                </p>
              </div>
              <div className="text-center">
                <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#1a1a1a]">
                  3
                </span>
                <p className="text-sm text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                  Trophies Won
                </p>
              </div>
              <div className="text-center">
                <span className="font-[family-name:var(--font-bangers)] text-4xl text-[#1a1a1a]">
                  ∞
                </span>
                <p className="text-sm text-[#5c4d3c] font-[family-name:var(--font-courier-prime)]">
                  Lessons Learned
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </ComicPanel>

      {/* Panel gutter */}
      <div className="panel-gutter h-4 max-w-6xl mx-auto" />
    </section>
  );
};

export default FinalBoss;
