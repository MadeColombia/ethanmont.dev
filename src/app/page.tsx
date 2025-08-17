import VideoTitle from "@/components/VideoTitle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <VideoTitle 
        firstVideo="/videoTitle1.mp4"
        secondVideo="/videoTitle2.mp4"
      />
    </main>
  );
}
