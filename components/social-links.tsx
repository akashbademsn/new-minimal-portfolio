"use client"

import { Twitter, Github, Mail, Globe } from "lucide-react"

interface SocialLinksProps {
  isDark: boolean
}

export function SocialLinks({ isDark }: SocialLinksProps) {
  const links = [
    {
      icon: Twitter,
      href: "https://x.com/jessinvibe",
      label: "Twitter",
      ariaLabel: "Follow on Twitter",
    },
    {
      icon: Globe,
      href: "https://jessinsam.com",
      label: "Portfolio",
      ariaLabel: "Visit portfolio",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      ariaLabel: "View GitHub profile",
    },
    {
      icon: Mail,
      href: "mailto:hello@jessinsam.com",
      label: "Email",
      ariaLabel: "Send an email",
    },
  ]

  return (
    <div className="flex items-center justify-center gap-4">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={link.ariaLabel}
            className={`group relative inline-flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark
                ? "text-white/60 hover:text-white hover:bg-white/10"
                : "text-black/60 hover:text-black hover:bg-black/10"
            }`}
            title={link.label}
          >
            <Icon className="h-5 w-5" />
          </a>
        )
      })}
    </div>
  )
}
