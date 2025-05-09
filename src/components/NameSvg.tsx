import { easeInOut, motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "linear",
    },
  },
};

const fillVariants = {
  hidden: {
    fill: 'transparent',
  },
  visible: {
    fill: 'var(--font-color)',
   
  },
};

export const NameSvg = () => {
  const controls = useAnimation();
  const svgRef = useRef<SVGSVGElement>(null); // Explicitly type the ref
  const inView = useInView(svgRef); // Pass the ref to useInView

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="flex gap-2 max-[480px]:flex-col">
      <div className="w-[300px]">
        <motion.svg 
          ref={svgRef} 
          initial="hidden" 
          className="transition-colors duration-[2s] ease-in-out" 
          variants={fillVariants} animate={controls} 
          viewBox="0 -1 428 75" xmlns="http://www.w3.org/2000/svg">
          <g id="svgGroup"  strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="var(--font-color)" strokeWidth="0.25mm">
            <motion.path shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 56.6 1.101 L 56.6 72.501 L 46.1 72.501 L 7.9 13.201 L 7.5 13.201 Q 7.7 16.701 8 21.901 A 185.598 185.598 0 0 1 8.3 32.429 A 201.525 201.525 0 0 1 8.3 32.601 L 8.3 72.501 L 0 72.501 L 0 1.101 L 10.4 1.101 L 48.5 60.201 L 48.9 60.201 Q 48.823 58.976 48.718 56.813 A 685.066 685.066 0 0 1 48.65 55.401 Q 48.5 52.201 48.35 48.401 Q 48.2 44.601 48.2 41.401 L 48.2 1.101 L 56.6 1.101 Z" id="0" vectorEffect="non-scaling-stroke" />
            <motion.path shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 137.53 46.175 A 55.504 55.504 0 0 0 138.3 36.701 Q 138.3 25.601 134.55 17.351 Q 130.8 9.101 123.5 4.551 A 26.234 26.234 0 0 0 122.954 4.219 Q 118.82 1.781 113.633 0.752 A 41.787 41.787 0 0 0 105.5 0.001 Q 100.206 0.001 95.773 1.028 A 28.713 28.713 0 0 0 86.95 4.601 Q 79.6 9.201 76 17.401 A 41.276 41.276 0 0 0 73.139 27.207 A 56.829 56.829 0 0 0 72.4 36.601 A 58.111 58.111 0 0 0 73.114 45.931 A 42.268 42.268 0 0 0 76 56.001 Q 79.6 64.301 86.95 68.901 A 25.976 25.976 0 0 0 88.679 69.892 Q 92.53 71.909 97.3 72.799 A 44.193 44.193 0 0 0 105.4 73.501 A 50.047 50.047 0 0 0 105.988 73.497 Q 116.4 73.375 123.5 68.901 Q 130.8 64.301 134.55 56.051 A 40.452 40.452 0 0 0 137.53 46.175 Z M 81.9 36.701 A 51.906 51.906 0 0 0 82.514 44.941 Q 83.221 49.33 84.742 52.898 A 25.106 25.106 0 0 0 87.6 57.951 A 18.233 18.233 0 0 0 98.305 64.906 Q 101.424 65.676 105.158 65.7 A 37.49 37.49 0 0 0 105.4 65.701 Q 114.551 65.701 119.989 61.34 A 17.322 17.322 0 0 0 123.2 57.951 A 26.998 26.998 0 0 0 127.173 49.585 Q 128.8 43.978 128.8 36.701 A 52.606 52.606 0 0 0 128.197 28.471 Q 126.962 20.691 123.2 15.551 A 17.826 17.826 0 0 0 113.051 8.805 Q 109.977 7.985 106.273 7.909 A 37.298 37.298 0 0 0 105.5 7.901 A 30.185 30.185 0 0 0 98.558 8.648 Q 93.671 9.803 90.266 12.743 A 17.923 17.923 0 0 0 87.65 15.551 A 26.201 26.201 0 0 0 83.547 23.927 Q 82.466 27.569 82.095 31.932 A 56.253 56.253 0 0 0 81.9 36.701 Z" id="1" vectorEffect="non-scaling-stroke" />
            <motion.path shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 154.1 1.101 L 173.8 1.101 A 55.97 55.97 0 0 1 180.731 1.5 Q 188.45 2.466 192.952 5.77 A 16.175 16.175 0 0 1 193.45 6.151 A 16.16 16.16 0 0 1 199.108 15.228 Q 199.778 17.946 199.799 21.191 A 32.515 32.515 0 0 1 199.8 21.401 A 25.72 25.72 0 0 1 199.505 25.409 Q 199.013 28.526 197.7 30.901 A 18.549 18.549 0 0 1 194.648 35.023 A 16.295 16.295 0 0 1 192.35 36.951 Q 189.1 39.201 185.5 40.501 L 205.1 72.501 L 194.6 72.501 L 177.3 43.001 L 163.1 43.001 L 163.1 72.501 L 154.1 72.501 L 154.1 1.101 Z M 173.3 8.901 L 163.1 8.901 L 163.1 35.401 L 173.8 35.401 A 34.791 34.791 0 0 0 178.322 35.128 Q 183.314 34.471 186.154 32.236 A 9.984 9.984 0 0 0 186.5 31.951 Q 190.388 28.598 190.497 22.174 A 21.991 21.991 0 0 0 190.5 21.801 A 18.334 18.334 0 0 0 190.168 18.184 Q 189.743 16.077 188.776 14.494 A 8.8 8.8 0 0 0 186.3 11.851 Q 182.1 8.901 173.3 8.901 Z" id="2" vectorEffect="non-scaling-stroke" />
            <motion.path shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 255.2 72.501 L 247.8 72.501 L 224.3 9.901 L 223.9 9.901 Q 224.13 12.274 224.301 15.908 A 262.013 262.013 0 0 1 224.4 18.251 Q 224.6 23.501 224.6 29.201 L 224.6 72.501 L 216.3 72.501 L 216.3 1.101 L 229.6 1.101 L 251.6 59.601 L 252 59.601 L 274.4 1.101 L 287.6 1.101 L 287.6 72.501 L 278.7 72.501 L 278.7 28.601 Q 278.7 23.401 278.95 18.301 Q 279.174 13.739 279.357 10.697 A 328.457 328.457 0 0 1 279.4 10.001 L 279 10.001 L 255.2 72.501 Z" id="3" vectorEffect="non-scaling-stroke" />
            <motion.path shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 361.1 72.501 L 351.8 72.501 L 343.2 50.401 L 314.9 50.401 L 306.4 72.501 L 297.3 72.501 L 325.2 0.801 L 333.3 0.801 L 361.1 72.501 Z M 340.5 42.401 L 332.5 20.801 Q 332.2 20.001 331.5 17.901 A 112.177 112.177 0 0 1 330.191 13.691 A 122.093 122.093 0 0 1 330.15 13.551 Q 329.652 11.828 329.301 10.721 A 44.761 44.761 0 0 0 329.1 10.101 Q 328.4 13.201 327.5 16.151 Q 326.811 18.409 326.298 19.935 A 61.955 61.955 0 0 1 326 20.801 L 317.9 42.401 L 340.5 42.401 Z" id="4" vectorEffect="non-scaling-stroke" />
            <motion.path shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 427.5 1.101 L 427.5 72.501 L 417 72.501 L 378.8 13.201 L 378.4 13.201 Q 378.6 16.701 378.9 21.901 A 185.598 185.598 0 0 1 379.2 32.429 A 201.525 201.525 0 0 1 379.2 32.601 L 379.2 72.501 L 370.9 72.501 L 370.9 1.101 L 381.3 1.101 L 419.4 60.201 L 419.8 60.201 Q 419.723 58.976 419.618 56.813 A 685.066 685.066 0 0 1 419.55 55.401 Q 419.4 52.201 419.25 48.401 Q 419.1 44.601 419.1 41.401 L 419.1 1.101 L 427.5 1.101 Z" id="5" vectorEffect="non-scaling-stroke" />
          </g>
        </motion.svg>
      </div>
      <div className="w-[200px] max-[480px]:w-[300px]">
        <motion.svg 
          ref={svgRef} 
          initial="hidden" 
          className="transition-colors duration-[2s] ease-in-out" 
          variants={fillVariants} 
          animate={controls} 
          viewBox="472 0 563 75" xmlns="http://www.w3.org/2000/svg">
          <g id="svgGroup"  strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="var(--font-color)" strokeWidth="0.25mm">
            <motion.path shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 495.7 32.201 L 525.1 72.501 L 514.5 72.501 L 489.2 38.401 L 481.9 44.801 L 481.9 72.501 L 472.9 72.501 L 472.9 1.101 L 481.9 1.101 L 481.9 36.301 Q 484.9 32.901 488 29.501 L 494.2 22.701 L 513.5 1.101 L 524 1.101 L 495.7 32.201 Z" id="7" vectorEffect="non-scaling-stroke" />
            <motion.path transform="translate(6, 0)" shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 588.9 72.501 L 579.6 72.501 L 571 50.401 L 542.7 50.401 L 534.2 72.501 L 525.1 72.501 L 553 0.801 L 561.1 0.801 L 588.9 72.501 Z M 568.3 42.401 L 560.3 20.801 Q 560 20.001 559.3 17.901 A 112.177 112.177 0 0 1 557.991 13.691 A 122.093 122.093 0 0 1 557.95 13.551 Q 557.452 11.828 557.101 10.721 A 44.761 44.761 0 0 0 556.9 10.101 Q 556.2 13.201 555.3 16.151 Q 554.611 18.409 554.098 19.935 A 61.955 61.955 0 0 1 553.8 20.801 L 545.7 42.401 L 568.3 42.401 Z" id="8" vectorEffect="non-scaling-stroke" />
            <motion.path transform="translate(5, 0)" shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 638.9 72.501 L 598.7 72.501 L 598.7 1.101 L 607.7 1.101 L 607.7 64.501 L 638.9 64.501 L 638.9 72.501 Z" id="9" vectorEffect="non-scaling-stroke" />
            <motion.path transform="translate(3, 0)" shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 651.2 1.101 L 669.7 36.201 L 688.3 1.101 L 698 1.101 L 674.2 44.801 L 674.2 72.501 L 665.2 72.501 L 665.2 45.201 L 641.4 1.101 L 651.2 1.101 Z" id="10" vectorEffect="non-scaling-stroke" />
            <motion.path transform="translate(6, 0)" shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 762 1.101 L 762 47.301 A 31.425 31.425 0 0 1 760.97 55.475 A 27.016 27.016 0 0 1 759 60.651 A 21.912 21.912 0 0 1 750.231 69.833 A 26.456 26.456 0 0 1 749.85 70.051 A 25.039 25.039 0 0 1 743.348 72.527 Q 740.4 73.227 736.964 73.424 A 48.35 48.35 0 0 1 734.2 73.501 A 39.002 39.002 0 0 1 726.331 72.757 Q 721.575 71.777 717.951 69.504 A 20.894 20.894 0 0 1 713.95 66.251 A 24.496 24.496 0 0 1 707.55 53.427 A 34.837 34.837 0 0 1 707 47.101 L 707 1.101 L 716 1.101 L 716 47.401 A 26.143 26.143 0 0 0 716.525 52.806 Q 717.237 56.177 718.918 58.737 A 14.687 14.687 0 0 0 720.65 60.901 A 14.537 14.537 0 0 0 726.598 64.538 Q 728.933 65.319 731.788 65.576 A 32.584 32.584 0 0 0 734.7 65.701 Q 744.4 65.701 748.75 60.551 A 18.028 18.028 0 0 0 752.632 52.299 A 25.449 25.449 0 0 0 753.1 47.301 L 753.1 1.101 L 762 1.101 Z" id="11" vectorEffect="non-scaling-stroke" />
            <motion.path transform="translate(7, 0)" shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 824.4 64.501 L 824.4 72.501 L 774.9 72.501 L 774.9 65.701 L 812.5 9.101 L 776.1 9.101 L 776.1 1.101 L 823.4 1.101 L 823.4 7.901 L 785.8 64.501 L 824.4 64.501 Z" id="12" vectorEffect="non-scaling-stroke" />
            <motion.path transform="translate(6, 0)" shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 892.6 1.101 L 892.6 72.501 L 883.6 72.501 L 883.6 39.201 L 847 39.201 L 847 72.501 L 838 72.501 L 838 1.101 L 847 1.101 L 847 31.301 L 883.6 31.301 L 883.6 1.101 L 892.6 1.101 Z" id="13" vectorEffect="non-scaling-stroke" />
            <motion.path shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 968.7 1.101 L 968.7 72.501 L 958.2 72.501 L 920 13.201 L 919.6 13.201 Q 919.8 16.701 920.1 21.901 A 185.598 185.598 0 0 1 920.4 32.429 A 201.525 201.525 0 0 1 920.4 32.601 L 920.4 72.501 L 912.1 72.501 L 912.1 1.101 L 922.5 1.101 L 960.6 60.201 L 961 60.201 Q 960.923 58.976 960.818 56.813 A 685.066 685.066 0 0 1 960.75 55.401 Q 960.6 52.201 960.45 48.401 Q 960.3 44.601 960.3 41.401 L 960.3 1.101 L 968.7 1.101 Z" id="14" vectorEffect="non-scaling-stroke" />
            <motion.path shapeRendering="optimizeQuality" initial="hidden" variants={pathVariants} animate={controls} d="M 988.2 1.101 L 1006.7 36.201 L 1025.3 1.101 L 1035 1.101 L 1011.2 44.801 L 1011.2 72.501 L 1002.2 72.501 L 1002.2 45.201 L 978.4 1.101 L 988.2 1.101 Z" id="15" vectorEffect="non-scaling-stroke" />
          </g>
        </motion.svg>
        <motion.p
          initial={{opacity:0,marginTop:50}}
          whileInView={{opacity:1,marginTop:2}} 
          transition={{duration:1, ease:easeInOut}}
          viewport={{ once: true }}
          className="text-2xl text-(--secondary-color)"
        >Jack of All Trades
        </motion.p>
      </div>
  </div>
  );
};
