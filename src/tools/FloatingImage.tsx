"use client";
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

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

        let ctx: gsap.Context;
        import('gsap').then(({ gsap }) => {
            ctx = gsap.context(() => {
                // Create floating animation
                gsap.to(floatingImage, {
                    y: 20,
                    duration: 2,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1
                });

                // Optional subtle rotation
                gsap.to(floatingImage, {
                    rotate: 3,
                    duration: 3,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1
                });
            }, imageRef);
        });

        return () => ctx?.revert();
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
