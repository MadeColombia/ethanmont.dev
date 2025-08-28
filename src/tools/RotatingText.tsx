"use client"
import { useLayoutEffect, useRef } from 'react';

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

        let ctx: gsap.Context;
        import('gsap/TextPlugin').then(TextPlugin => {
            import('gsap').then(({gsap}) => {
                gsap.registerPlugin(TextPlugin);
                ctx = gsap.context(() => {
                    const tl = gsap.timeline({ repeat: -1 });

                    words.forEach((word) => {
                        // Animate text in
                        tl.to(rotatingText, {
                            duration: 0.6,
                            text: word,
                            ease: "power1.out",
                        });

                        // Hold the text
                        tl.to(rotatingText, {
                            duration: (interval / 1000) - 0.6,
                            immediateRender: false
                        });
                    });
                }, textRef);
            })
        });

        return () => ctx?.revert();
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
