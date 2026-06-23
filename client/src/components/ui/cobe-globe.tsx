"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

export function CobeGlobe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        let width = 0;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const onResize = () => {
            width = canvas.offsetWidth;
        };
        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvas, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.92, 0.92, 0.92],
            markerColor: [0.32, 0.39, 0.96],
            glowColor: [1, 1, 1],
            markers: [
                { location: [37.7595, -122.4367], size: 0.05 },
                { location: [40.7128, -74.006], size: 0.06 },
                { location: [51.5074, -0.1278], size: 0.05 },
                { location: [28.6139, 77.209], size: 0.06 },
                { location: [35.6762, 139.6503], size: 0.05 },
                { location: [-33.8688, 151.2093], size: 0.04 },
                { location: [1.3521, 103.8198], size: 0.05 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <div className={cn("aspect-square w-full max-w-100", className)}>
            <canvas
                ref={canvasRef}
                className="size-full"
                style={{ contain: "layout paint size" }}
            />
        </div>
    );
}
