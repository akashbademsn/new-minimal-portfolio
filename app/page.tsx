"use client"

import Image from "next/image"
import { ExternalLink, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const isDark = theme === "dark"

  return (
    <div
      className={`flex min-h-screen items-center justify-center p-4 transition-colors duration-500 sm:p-6 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`fixed right-4 top-4 rounded-full border-2 p-2.5 transition-all duration-300 hover:scale-110 sm:right-6 sm:top-6 sm:p-3 ${
          isDark
            ? "border-white bg-black text-white hover:bg-white hover:text-black"
            : "border-black bg-white text-black hover:bg-black hover:text-white"
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
      </button>

      <div className="w-full max-w-2xl">
        <div className="space-y-6 text-center sm:space-y-8">
          <div
            className={`mx-auto h-40 w-40 overflow-hidden rounded-full border-2 transition-colors duration-500 sm:h-48 sm:w-48 md:h-64 md:w-64 ${
              isDark ? "border-white" : "border-black"
            }`}
          >
            <Image
              src="/images/design-mode/akash-bade.jpg"
              alt="Profile"
              width={256}
              height={256}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="space-y-2">
            <h1
              className={`text-3xl font-bold uppercase leading-tight tracking-tight transition-colors duration-500 sm:text-4xl md:text-5xl lg:text-6xl ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Akash Bade 
            </h1>
            <p
              className={`text-sm uppercase tracking-wide transition-colors duration-500 sm:text-base md:text-lg ${
                isDark ? "text-white/60" : "text-black/60"
              }`}
            >
              Director of Mushroom Seed Nepal and Research Center         
            </p>
          </div>

          <p
            className={`mx-auto max-w-xl px-2 text-base leading-relaxed transition-colors duration-500 sm:px-0 md:text-lg ${
              isDark ? "text-white/80" : "text-black/80"
            }`}
          >
            I founded <a className="text-foreground px-1.5 bg-secondary" href="https://www.mushroomnepal.com" target="_blank">Mushroom Seed Nepal and Research Center</a> to provide premium-quality mushroom seeds and species, develop native mushrooms for commercial cultivation, and create value-added mushroom products in Nepal. Our team has successfully adapted locally found mushrooms for production. Through this organization, I aim to promote sustainable agriculture and advance mushroom farming across the country.
          </p>

          

          <div
            className={`flex flex-col items-center gap-4 border-t pt-6 transition-colors duration-500 sm:pt-8 ${
              isDark ? "border-white/10" : "border-black/10"
            }`}
          >
            <h2
              className={`text-xs font-bold uppercase tracking-wide transition-colors duration-500 sm:text-sm ${
                isDark ? "text-white/60" : "text-black/60"
              }`}
            >
              CONNECT
            </h2>
            <SocialLinks isDark={isDark} />
          </div>

          
        </div>
      </div>
    </div>
  )
}
