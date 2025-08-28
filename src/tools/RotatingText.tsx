"use client"
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

interface RotatingTextProps {
    words: string[];
    interval?: number;
}

const RotatingText = ({ words, interval = 3000 }: RotatingTextProps) => {
    const textRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        const rotatingText = textRef.current;
        if (!rotatingText) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                repeat: -1,
                scrollTrigger: {
                    trigger: rotatingText,
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play pause resume pause"
                }
            });

            words.forEach((word) => {
                tl.to(rotatingText, {
                    duration: 0.6,
                    text: word,
                    ease: "power1.out",
                });
                tl.to(rotatingText, {
                    duration: (interval / 1000) - 0.6,
                    immediateRender: false
                });
            });
        }, textRef);

        return () => ctx.revert();
    }, [words, interval]);

    return (
        <span className="inline-block place-items-start font-bold">
            <span 
                ref={textRef}
                className="inline-block"
                aria-live="polite"
            >
                {words[0]}
            </span>
        </span>
    );
};

export default RotatingText;
