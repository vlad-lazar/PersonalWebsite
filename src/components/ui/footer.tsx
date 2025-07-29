import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/vlad151", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/lazar-vlad",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://x.com/vladlazzar", icon: Twitter }, // Added Twitter/X
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Sokrati.space", href: "/sokrati" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl py-8 md:py-12">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center space-y-2 md:items-start">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Vlad Lazǎr. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
