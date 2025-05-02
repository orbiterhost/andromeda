import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imagesLoadedRef = useRef(false);

  const imagePaths = [
    '/images/ASCII (3).png',
    '/images/ASCII (4).png',
    '/images/ASCII (5).png',
    '/images/ASCII (6).png',
    '/images/ASCII (7).png',
    '/images/ASCII (8).png',
    '/images/ASCII (9).png',
    '/images/ASCII (10).png',
    '/images/ASCII (11).png',
    '/images/ASCII (12).png',
    '/images/ASCII (13).png',
    '/images/ASCII (14).png',
    '/images/ASCII (15).png',
    '/images/ASCII (16).png',
    '/images/ASCII (17).png',
    '/images/ASCII (18).png',
    '/images/ASCII (19).png',
    '/images/ASCII (20).png',
    '/images/ASCII (21).png',
    '/images/ASCII (22).png',
    '/images/ASCII (23).png',
    '/images/ASCII (24).png',
    '/images/ASCII (25).png',
    '/images/ASCII (26).png',
    '/images/ASCII (27).png',
    '/images/ASCII (28).png',
    '/images/ASCII (29).png',
    '/images/ASCII (30).png',
    '/images/ASCII (31).png'
  ];

  useEffect(() => {
    // Create image elements on client side only
    if (!imagesLoadedRef.current && imageContainerRef.current) {
      imagePaths.forEach((path, index) => {
        const img = document.createElement('img');
        img.src = path;
        img.className = 'absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out';
        if (index === 0) {
          img.classList.add('opacity-100'); // Active image
        }
        img.alt = 'Andromeda Galaxy';
        // The null check is already performed in the if condition above
        imageContainerRef.current?.appendChild(img);
      });
      imagesLoadedRef.current = true;
    }

    // Set up animation
    const intervalId = setInterval(() => {
      if (imageContainerRef.current) {
        // Use type assertion to tell TypeScript this is an HTMLElement
        const images = imageContainerRef.current.querySelectorAll('img');
        images[activeImageIndex]?.classList.remove('opacity-100');
        images[activeImageIndex]?.classList.add('opacity-0');
        const nextIndex = (activeImageIndex + 1) % images.length;
        images[nextIndex]?.classList.remove('opacity-0');
        images[nextIndex]?.classList.add('opacity-100');
        setActiveImageIndex(nextIndex);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [activeImageIndex]);

  return (
    <section className="w-full h-screen bg-black overflow-hidden flex justify-center items-center">
      <div ref={imageContainerRef} className="relative w-full h-full">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl md:text-5xl sm:text-3xl xs:text-2xl font-bold uppercase tracking-widest text-center w-[90%] z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
          ANDROMEDA
        </h1>
      </div>
    </section>
  );
}
