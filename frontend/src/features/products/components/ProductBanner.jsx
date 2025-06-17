import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";

const backgrounds = [
  { 
    video: "hero.mp4", 
    heading: "PLUMBING" 
  },
  { 
    video: "hero2.mp4", 
    heading: "SANITARY" 
  },
  { 
    video: "hero3.mp4", 
    heading: "ELECTRICAL" 
  },
];

export const ProductBanner = () => {
  const [videosLoaded, setVideosLoaded] = useState({});
  const videoRefs = useRef([]);
  const theme = useTheme();
  
  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  // Handle video loading and auto-play
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.play().catch(console.error);
      }
    });
  }, []);

  const handleVideoLoad = (index) => {
    setVideosLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        height: "70vh",
      }}
    >
      {/* Horizontal video container */}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} h-full`}>
        {backgrounds.map((bg, index) => (
          <motion.div
            key={index}
            className={`relative ${
              isMobile ? 'w-full h-1/3' : 'w-1/3 h-full'
            } overflow-hidden`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-full object-cover"
              src={bg.video}
              muted
              loop
              playsInline
              onLoadedData={() => handleVideoLoad(index)}
              onError={(e) => console.error(`Video ${index} failed to load:`, e)}
            />
            
            {/* Optional overlay with heading - can be removed for pure video */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h2 className={`text-white font-bold text-center px-4 ${
                isMobile ? 'text-sm' : isTablet ? 'text-lg' : 'text-xl'
              } bona-nova-sc-bold tracking-wider`}>
                {bg.heading}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional play/pause controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => {
            videoRefs.current.forEach(video => {
              if (video) video.play().catch(console.error);
            });
          }}
          className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white px-3 py-1 rounded-md text-sm transition-all duration-300"
        >
          Play All
        </button>
        <button
          onClick={() => {
            videoRefs.current.forEach(video => {
              if (video) video.pause();
            });
          }}
          className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white px-3 py-1 rounded-md text-sm transition-all duration-300"
        >
          Pause All
        </button>
      </div>
    </div>
  );
};