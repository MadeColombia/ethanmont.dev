import VideoTitle from "@/components/VideoTitle";
import NavBar from "@/components/NavBar";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="magicpattern grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-4 w-auto">
      <div className="fixed top-0 left-0 right-0 z-50 lg:mx-24 md:mx-12 sm:mx-6 my-2 ">
            <NavBar/>
      </div>
      <div className="col-span-4 sm:col-span-8 md:col-span-12 mt-50 space-y-30">
        <VideoTitle 
          firstVideo="/videoTitle1.mp4"
          secondVideo="/videoTitle2.mp4"
        />
        <AboutMe 
          imagePath="/ethanmontprofile.png"
        />
      </div>
</main>
  );
}
