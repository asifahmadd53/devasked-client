"use client";

import { ContentLayout } from "@/components/layout/DashboardContent";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { motion, useReducedMotion } from "framer-motion";
import { UploadCloud } from "lucide-react";
import { FormEvent, useState } from "react";

export default function GlassProfileSettingsCard() {
    const shouldReduceMotion = useReducedMotion();
    const [notifications, setNotifications] = useState(true);
    const [newsletter, setNewsletter] = useState(false);
    const [bio, setBio] = useState(
        "Designing expressive interfaces that feel alive."
    );

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <ContentLayout title="Profile settings">
        <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.45,
                ease: shouldReduceMotion ? "linear" : [0.16, 1, 0.3, 1],
            }}
            className="group w-full overflow-hidden relative"
            aria-labelledby="glass-profile-settings-title"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
            />
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                        Profile
                    </div>
                    <h1
                        id="glass-profile-settings-title"
                        className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl"
                    >
                        Profile settings
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Update your avatar, personal details, and notification preferences.
                    </p>
                </div>
                <Badge className="group gap-2 rounded-full border border-border/60 bg-white/5 px-4 py-2 text-muted-foreground transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 hover:text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                    Auto-save enabled
                </Badge>
            </div>

            <form className="grid gap-8 sm:grid-cols-5" onSubmit={handleSubmit}>
                <div className="sm:col-span-2">
                    <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-background/90 p-6 backdrop-blur">
                        <Avatar className="h-24 w-24 border border-border/60">
                            <span className="flex h-full w-full items-center justify-center rounded-full bg-primary/20 text-lg font-semibold text-primary">
                                AP
                            </span>
                        </Avatar>
                        <div className="text-center">
                            <p className="text-sm font-medium text-foreground">Alex Parker</p>
                            <p className="text-xs text-muted-foreground">
                                Lead Product Designer
                            </p>
                        </div>
                        <Button
                            type="button"
                            variant="outline"
                            className="rounded-full border-border/60 bg-white/5 px-4 py-2 text-sm text-foreground"
                        >
                            <UploadCloud className="mr-2 h-4 w-4" />
                            Update avatar
                        </Button>
                    </div>
                </div>

                <div className="space-y-6 sm:col-span-3">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="profile-first-name">First name</Label>
                            <Input
                                id="profile-first-name"
                                defaultValue="Alex"
                                className="border-border/70 bg-background/90 "
                                autoComplete="given-name"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="profile-last-name">Last name</Label>
                            <Input
                                id="profile-last-name"
                                defaultValue="Parker"
                                className="border-border/70 bg-background/90 "
                                autoComplete="family-name"
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="profile-email">Email address</Label>
                            <Input
                                id="profile-email"
                                type="email"
                                defaultValue="alex.parker@example.com"
                                className="border-border/70 bg-background/90 "
                                autoComplete="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="profile-phone">Phone number</Label>
                            <Input
                                id="profile-phone"
                                type="tel"
                                placeholder="+1 (555) 123-4567"
                                className="border-border/70 bg-background/90 "
                                autoComplete="tel"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="profile-bio">Bio</Label>
                        <Textarea
                            id="profile-bio"
                            value={bio}
                            onChange={(event) => setBio(event.target.value)}
                            rows={4}
                            className="border-border/70 bg-background/90 text-sm resize-none"
                            placeholder="Tell us about your role, interests, or current focus."
                        />
                        <p className="text-right text-xs text-muted-foreground">
                            {bio.length}/160 characters
                        </p>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-background/50 p-5 backdrop-blur">
                        <h2 className="text-sm font-medium text-foreground">
                            Notifications
                        </h2>
                        <p className="mb-4 text-xs text-muted-foreground">
                            Choose the updates you want to receive about your workspace.
                        </p>
                        <div className="space-y-3">
                            <label className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                                Enable notifications
                                <Switch
                                    checked={notifications}
                                    onCheckedChange={setNotifications}
                                />
                            </label>
                            <label className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                                Subscribe to newsletter
                                <Switch checked={newsletter} onCheckedChange={setNewsletter} />
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                        <Button
                            type="button"
                            variant="outline"
                                className="border-border/60 h-9 bg-white text-sm text-muted-foreground "
                            onClick={() => window.location.reload()}
                        >
                            Reset changes
                        </Button>
                        <Button
                            type="submit"
                            className="h-9 text-sm "
                            // className="bg-primary text-primary-foreground"
                        >
                            Save settings
                        </Button>
                    </div>
                </div>
            </form>
        </motion.div>
        </ContentLayout>
    );
}
