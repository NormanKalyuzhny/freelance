export const Footer = () => {
  return (
    <div className="footerBlock flex flex-col justify-between items-center h-18 px-16 mb-8">
      <div className="social-icons flex items-center gap-4 ml-5">
        <div className="w-8 stroke-[#43b2ef] [stroke-dasharray:55] [stroke-dashoffset:55] hover:[stroke-dashoffset:0] cursor-pointer">
          <a href="https://www.artstation.com/spiritu_interore" target="_blank" rel="noopener noreferrer">
            <svg className="transition-all duration-500 ease-in-out hover:fill-[#43b2ef]" fill="var(--font-color)" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
              <title>ArtStation</title>
              <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
            </svg>
          </a>
        </div>
        <div className=" flex items-center cursor-pointer">
          <a href="https://www.youtube.com/@SpirituInteriore" target="_blank" rel="noopener noreferrer">
            <svg className="w-10 stroke-(--font-color) hover:stroke-red-500 hover:rotate-360 transition-all duration-500 ease-in-out" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
              <title>YouTube</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M74 130V62l60 34-60 34Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Norman Kalyuzhny.{`\u00A0`}</p>
        
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};
