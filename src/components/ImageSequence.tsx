import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';
import Lenis from 'lenis';

type imagesLoadedProp = {
  imagesLoaded: boolean;
  setImagesLoaded: Dispatch<SetStateAction<boolean>>;
  images:HTMLImageElement[];
}

function ImageSequence({imagesLoaded,images}:imagesLoadedProp) {
  const ref = useRef<HTMLCanvasElement>(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // render function
  const render = useCallback(
    (index: number) => {
      if (!ref.current || index < 1 || index > images.length) return;

      const ctx = ref.current.getContext('2d');
      if (ctx && images[index - 1] && images[index - 1].complete) {
        ctx.clearRect(0, 0, ref.current.width, ref.current.height); // clear canvas
        ctx.drawImage(images[index - 1], 0, 0);
      }
    },
    [images]
  );

  // transforming scrollYProgress into images index
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, images.length + 20]);

  useMotionValueEvent(currentIndex, 'change', (latest:number) => {
    const roundedIndex = Math.round(latest);
    render(roundedIndex);
  });

  // first frame render
  useEffect(() => {
    if (imagesLoaded && ref.current) {
      render(1); //renders first image, only when all images are loaded
    }
  }, [imagesLoaded, render]);


  return (
    <div ref={container} className="relative max-w-[1920px] h-[400vh] max-[1400px]:h-full"> 
      <canvas
        ref={ref}
        width={1920}
        height={1080}
        className="object-contain w-full sticky top-0"
      />
      <div className='absolute inset-0 flex flex-col justify-evenly items-center -z-1 bg-black text-3xl'/>
    </div>
  );
}

export default ImageSequence;