"use client";

import FaceBook from "@/assets/icons/Facebook";
import Github from "@/assets/icons/Github";
import Instagram from "@/assets/icons/Instagram";
import LinkedIn from "@/assets/icons/LinkedIn";
import X from "@/assets/icons/XIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUp,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import Image from "next/image";

const footerLinks = [
    {
        title: "Product",
        links: ["Features", "Pricing", "Documentation", "API Reference"],
    },
    {
        title: "Company",
        links: ["About Us", "Careers", "Blog", "Press Kit"],
    },
    {
        title: "Resources",
        links: ["Community", "Help Center", "Partners", "Status"],
    },
    {
        title: "Legal",
        links: ["Privacy", "Terms", "Cookie Policy", "Licenses"],
    },
];

const socialLinks = [
    { icon: X, label: "Twitter", href: "#" },
    { icon: FaceBook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
];

export function FooterBlock() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const shouldReduceMotion = useReducedMotion();

    return (
        <footer
            aria-labelledby="footer-heading"
            className="relative w-full overflow-hidden border-t border-border bg-card/90 backdrop-blur-xl"
        >
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"

                />
                <div
                    className="absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-[hsl(var(--primary)_/_0.18)] blur-[200px]"

                />
            </div>
            <h2 id="footer-heading" className="sr-only">
                Site footer
            </h2>
            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
                    {/* Brand & Newsletter */}
                    <div

                        className="lg:col-span-2"
                    >
                        <div

                            className="mb-4 inline-flex items-center gap-3"
                        >
                            <div className="relative z-20 shrink-0">
                                                            <Image width={150} height={150} alt="logo" src="/logo.svg" className="object-cover" />
                            </div>
                            <Badge
                                variant="outline"
                                className="text-xs text-muted-foreground"
                            >
                                Since 2026
                            </Badge>
                        </div>
                        <p className="mb-4 max-w-md text-sm text-muted-foreground">
                            Building amazing products with modern technologies. Join us on our
                            journey to create better user experiences.
                        </p>

                        {/* Newsletter */}
                        <div className="mb-4">
                            <p className="mb-2 text-sm font-medium text-foreground">
                                Subscribe to our newsletter
                            </p>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-10 rounded-xl border-border/60 bg-background/60 backdrop-blur placeholder:text-muted-foreground"
                                />
                                <Button
                                    size="sm"
                                    className="h-10 rounded-xl border border-border/60 bg-primary/90 px-4 text-primary-foreground shadow-[0_12px_35px_-20px_rgba(15,23,42,0.7)] hover:bg-primary"
                                    aria-label="Subscribe"
                                >
                                    <Mail className="h-4 w-4" aria-hidden />
                                </Button>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div

                                className="flex items-center gap-2"
                            >
                                <MapPin className="h-4 w-4" aria-hidden />
                                <span>123 Business St, City 12345</span>
                            </div>
                            <div

                                className="flex items-center gap-2"
                            >
                                <Phone className="h-4 w-4" aria-hidden />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div

                                className="flex items-center gap-2"
                            >
                                <Mail className="h-4 w-4" aria-hidden />
                                <span>hello@example.com</span>
                            </div>
                        </div>
                    </div>

                    {footerLinks.map((section, sectionIndex) => (
                        <div key={section.title}>
                            <h4 className="mb-4 text-sm font-semibold text-foreground/90">
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={link}
                                        
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                                
                                            <a href="">
                                        {link}
                                            </a>
                                       
                </li>
            ))}
                        </ul>
    </div>
))}
                </div>

                {/* Divider */}
                <div

                    className="my-10 h-px bg-border/70"
                />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    {/* Social Links */}
                    <div


                        className="flex gap-2"
                    >
                        {socialLinks.map((social, index) => (
                            <Button
                                key={social.label}
                                size="icon"
                                variant="ghost"
                                className="h-9 w-9 rounded-full border border-border/60 bg-white/5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                                aria-label={social.label}
                            >
                                <div>
                                    <social.icon className="h-4 w-4" aria-hidden />
                                </div>
                            </Button>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div

                        className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                        <span>© 2026 Brand. All rights reserved.</span>
                        <Badge variant="outline" className="text-xs">
                            v1.0.0
                        </Badge>
                    </div>

                    {/* Scroll to Top */}
                    <div

                    >
                        <Button
                            size="icon"
                            variant="outline"
                            className="h-9 w-9 rounded-full border-border/60"
                            onClick={scrollToTop}
                        >
                            <div>
                                <ArrowUp className="h-4 w-4" aria-hidden />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}