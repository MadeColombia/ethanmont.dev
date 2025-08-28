"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

interface RotatingTextProps {
    words: string[];
    interval?: number;
}

const RotatingText = ({ words, interval = 3000 }: RotatingTextProps) => {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1 });
            
            words.forEach((word) => {
                // Animate text in
                tl.to(textRef.current, {
                    duration: 0.6,
                    text: word,
                    ease: "power1.out",
                });
                
                // Hold the text
                tl.to(textRef.current, {
                    duration: (interval / 1000) - 0.6,
                    immediateRender: false
                });
            });
        });

        return () => ctx.revert();
    }, [words, interval]);

    return (
        <span className="inline-block place-items-start font-bold">
            <span 
                ref={textRef}
                className="inline-block"
            >
                {words[0]}
            </span>
        </span>
    );
};

export default RotatingText;
