"use client";
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FloatingImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const FloatingImage = ({ src, alt, width, height }: FloatingImageProps) => {
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const floatingImage = imageRef.current;
        if (!floatingImage) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        let ctx = gsap.context(() => {
            gsap.to(floatingImage, {
                y: 20,
                duration: 2,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                scrollTrigger: {
                    trigger: floatingImage,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause resume pause"
                }
            });

            gsap.to(floatingImage, {
                rotate: 3,
                duration: 3,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                scrollTrigger: {
                    trigger: floatingImage,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause resume pause"
                }
            });
        }, imageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={imageRef} className="flex items-center justify-center">
            <Image 
                src={src} 
                alt={alt} 
                width={width} 
                height={height} 
                className="rounded-full shadow-lg shadow-black/20 w-[clamp(160px,28vw,400px)]"
            />
        </div>
    );
};

export default FloatingImage;
