import RotatingText from '../tools/RotatingText';
import FloatingImage from '../tools/FloatingImage';

interface AboutMeProps {
  imagePath: string;
}

const AboutMe = ({ imagePath }: AboutMeProps) => {
  const roles = [
    "Software Development",
    "Web Development",
    "Mobile Development",
    "AI Development"
  ];

  return (
    <div className="glass rounded-4xl flex flex-col-reverse md:flex-row w-3/5 h-70 md:w-10/12 xl:w-[1100px] md:h-auto xl:h-[460px] justify-between items-center p-[clamp(2rem,5vw,4rem)] mx-auto min-w-[300px] max-w-[1200px] min-h-[00px] relative">
        <div className="font-sans text-center md:text-left md:w-auto xl:w-1/2">
            <h1 className="font-bold text-[clamp(2rem,8vw,3rem)] lg:text-[4rem] -mb-1 sm:-mb-3">Hi! I&apos;m Ethan</h1>
            <p className='font-extralight text-[clamp(0.8rem,1.8vw,1.5rem)] lg:text-[1.3rem] max-w-prose mx-1 md:mx-0'>
              As a Multimedia Engineer, I thrive on transforming complex problems into elegant, user-centric solutions in <RotatingText words={roles} />
            </p>
        </div>
        <div className="relative md:w-5/6 xl:w-1/2 flex justify-center md:justify-end -top-5">
            <FloatingImage 
                src={imagePath} 
                alt="Ethan Mont" 
                width={400} 
                height={400} 
            />
        </div>
    </div>
  );
};

export default AboutMe;
