import { useRef } from "react";
import { NameSvg } from "./NameSvg";
import NestedCirclesContainer from "./nestedCircles/Circles";


function MainPage() {
  const container = useRef<HTMLDivElement>(null);

  const SKILLS = ['UI','UX','React','Next.Js','Node.Js','JS','TypeScript','2D Art','2D Animation','3D Modeling','3D Design']
  const skillsMap = SKILLS.map((item,index)=><div 
    key={`skill-${index}`}
    className="text-sm bg-(--tag-color) px-2 py-1 rounded-md"
  >
    {item.toUpperCase()}
  </div>)
  const TOOLS = ['CSS','Tailwind','Framer Motion','Blender','CSP','SQLite']
  const toolsMap = TOOLS.map((item,index)=><div 
    key={`skill-${index}`}
    className="text-sm bg-(--tag-color) px-2 py-1 rounded-md"
  >
    {item.toUpperCase()}
  </div>)

  return (
    <main ref={container} className="mainContainer relative">
      <div className="relative">
        <div className="bgGradient absolute inset-0 -z-1"></div> 
        <div className="@container flex flex-col items-center">
          <div className=" @max-[550px]:scale-90 max-[480px]:mb-16 transition-scale duration-300 mt-10 h-22">
            <NameSvg/>
          </div>
        </div>
        <div className="flex justify-center w-full text-[1.2rem] px-4 @container">
          <div className="flex  justify-center max-w-[1000px] gap-6 @[800px]:gap-20 @max-[515px]:flex-col ">
            <div className="leftContainer w-full flex justify-center ">
              <div className="max-w-120">
                <p>
                  Creative thinking, deep passion in everything related to graphics and design. Great experience in testing allows me to monitor the quality of ideas realization.
                </p>
                <div className="flex gap-2 mt-4">
                  <div className="flex items-start">
                    <p className="">Other projects:</p> 
                  </div>
                  <div className="flex @min-[515px]:flex-col @max-[515px]:gap-2">
                    <a href="https://spirituinteriore.vercel.app" className="hover:underline hover:text-yellow-300" target="_blank" rel="noopener noreferrer">React</a>
                    <a href="https://spiritu-den.vercel.app" className="hover:underline hover:text-yellow-300" target="_blank" rel="noopener noreferrer">Next.Js</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightContainer w-full flex justify-center h-full ">
              <div className="max-w-120">
                <h3 className="text-2xl mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">{skillsMap}</div>
                
                <h3 className="text-2xl mb-2 mt-4 ">Tools</h3>
                <div className="flex flex-wrap gap-2">{toolsMap}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NestedCirclesContainer/>
    </main>
  );
}

export default MainPage;