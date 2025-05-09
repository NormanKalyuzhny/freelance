
import MainPage from "./components/MainPage";
import { Footer } from "./components/Footer";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ImageSequence from "./components/ImageSequence";

function App() {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  // imagesLoaded - tracking image uploads
  const images = useMemo(() => {
    const loadedImages: HTMLImageElement[] = [];
    const totalImages = 140;
    let loadedCount = 0;

    for (let i = 1; i <= totalImages; i++) {
      const img = new Image();
      img.src = `/imageSequence/${i}.WEBP`;
      // image loading handler
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true); // upload complete
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image ${i}.WEBP`);
      };
      loadedImages.push(img);
    }
    return loadedImages;
  }, []);

  return(
    <div className="w-full flex flex-col justify-between items-center ">
       <AnimatePresence>
        {!imagesLoaded && (
          <motion.div
            key="loading" 
            className="absolute inset-0 flex justify-center items-center z-[100] bg-[var(--bg-color)]"
            initial={{ opacity: 1 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
          >
            LOADING...
          </motion.div>
        )}
      </AnimatePresence>
      {imagesLoaded &&(
        <div className="max-w-[1920px]">
          <ImageSequence setImagesLoaded={setImagesLoaded} imagesLoaded={imagesLoaded} images={images}/>
          <MainPage/>
        </div>
      )}
      <Footer/>
    </div>
  )
}

export default App;