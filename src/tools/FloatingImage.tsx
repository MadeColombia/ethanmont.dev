"use client"
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface FloatingImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const FloatingImage = ({ src, alt, width, height }: FloatingImageProps) => {
    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;

        // Create floating animation
        gsap.to(image, {
            y: 20,
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        });

        // Optional subtle rotation
        gsap.to(image, {
            rotate: 3,
            duration: 3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        });

        return () => {
            // Cleanup animations when component unmounts
            gsap.killTweensOf(image);
        };
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
