"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Users, Code2 } from "lucide-react"
import { useState } from "react"

const hackathons = [
  {
    title: "GDG AI Hackathon",
    organizer: "Google Developer Group Polimi",
    period: "May 2025",
    description:
      "Participated in an AI Hackathon organized by Google Developer Group Polimi, developing innovative AI-driven solutions in a competitive, collaborative environment. Worked with cutting-edge technologies to create impactful applications.",
    tags: ["Google AI", "MongoDB", "Next.js"],
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    icon: Trophy,
    impact: "Developed innovative AI-driven solutions",
    category: "AI Development",
    achievement: "Participant",
  },
]

export function HackathonsSection() {
  const [hoveredHackathon, setHoveredHackathon] = useState<number | null>(null)

  return (
    <section id="hackathons" className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/50 to-pink-50/50 dark:from-orange-900/10 dark:via-red-900/10 dark:to-pink-900/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Hackathons</span> & Competitions
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competitive programming and collaborative innovation experiences that showcase my problem-solving skills
          </p>
        </div>

        {/* Vertical Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredHackathon(index)}
              onHoverEnd={() => setHoveredHackathon(null)}
            >
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`bg-gradient-to-r ${hackathon.bgColor} border border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative group`}
                >
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${hackathon.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="flex flex-col md:flex-row">
                    {/* Left side - Icon and Achievement */}
                    <div className="md:w-1/4 p-6 flex flex-col items-center justify-center bg-white/50 dark:bg-slate-800/50">
                      <motion.div
                        className={`p-4 rounded-full bg-gradient-to-r ${hackathon.color} text-white shadow-lg mb-4`}
                        animate={{
                          rotate: hoveredHackathon === index ? 360 : 0,
                          scale: hoveredHackathon === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <hackathon.icon className="h-8 w-8" />
                      </motion.div>
                      <Badge
                        variant="outline"
                        className={`bg-gradient-to-r ${hackathon.color} text-white border-0 shadow-sm mb-2`}
                      >
                        {hackathon.category}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200"
                      >
                        🏆 {hackathon.achievement}
                      </Badge>
                    </div>

                    {/* Right side - Content */}
                    <div className="md:w-3/4 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl leading-tight text-slate-800 dark:text-slate-200">
                            {hackathon.title}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1 text-slate-600 dark:text-slate-400"
                          >
                            <Calendar className="h-3 w-3" />
                            <span>{hackathon.period}</span>
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <Users className="h-4 w-4" />
                          <span>{hackathon.organizer}</span>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0">
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                          {hackathon.description}
                        </p>

                        {/* Impact highlight */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`bg-gradient-to-r ${hackathon.color} bg-opacity-10 rounded-lg p-3 mb-4 border-l-4 border-orange-500`}
                        >
                          <p
                            className={`text-sm font-medium bg-gradient-to-r ${hackathon.color} bg-clip-text text-transparent`}
                          >
                            🚀 {hackathon.impact}
                          </p>
                        </motion.div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {hackathon.tags.map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className="hover:shadow-md transition-shadow duration-200 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1"
                              >
                                <Code2 className="h-3 w-3" />
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
