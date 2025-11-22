"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import LogoText from "./logoText";
import { Trocchi } from "next/font/google";

const trocchi = Trocchi({
  variable: "--font-trocchi",
  subsets: ["latin"],
  weight: ["400"]
});
export default function NavbarComponent() {
  const pathname = usePathname();
  const navItems = [
    {
      name: "Portfolio",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full ${trocchi.className}`}>
      <Navbar className="top-2">
        {/* Desktop Navigation */}
        <NavBody>
          <LogoText />
          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => {
              const isActive = item.link === '/' ? pathname === '/' : pathname.startsWith(item.link);
              return (
                <motion.div
                  key={`mobile-link-${idx}`}
                  className="relative w-full"
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "relative block px-4 py-2 rounded-full transition-all duration-300",
                      isActive
                        ? "dark:text-white text-black opacity-100"
                        : "text-neutral-600 dark:text-neutral-300 opacity-70"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="mobile-nav-pill"
                        className="absolute inset-0 bg-neutral-800 dark:bg-neutral-200 rounded-full -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="block">{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
            <div className="flex w-full justify-center">
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
