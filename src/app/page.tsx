import dynamic from 'next/dynamic';
import NavBar from "@/components/NavBar";

const VideoTitle = dynamic(() => import('@/components/VideoTitle'), { ssr: false });
const AboutMe = dynamic(() => import('@/components/AboutMe'), { ssr: false });

export default function Home() {
  return (
    <main className="magicpattern grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4 w-auto">
      <div className="fixed top-0 left-0 right-0 z-50 lg:mx-24 md:mx-12 sm:mx-6 my-2 ">
            <NavBar/>
      </div>
      <div className="col-span-4 sm:col-span-8 md:col-span-12 mt-50 space-y-30">
        <VideoTitle 
          firstVideo="/videoTitle1.webm"
          secondVideo="/videoTitle2.webm"
        />
        <AboutMe 
          imagePath="/ethanmontprofile.webp"
        />
      </div>
</main>
  );
}
