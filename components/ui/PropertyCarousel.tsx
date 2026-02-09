'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PropertySlide {
  id: string;
  label: string;
  title: string;
  image: string;
}

const slides: PropertySlide[] = [
  { 
    id: '1', 
    label: 'Most Clicked', 
    title: 'Urban Prime Plaza Premiere',
    image: '/img/slider1.png'
  },
  { 
    id: '2', 
    label: 'Most Watchlisted', 
    title: 'Urban Prime Plaza Premiere',
    image: '/img/slider2.png'
  },
  { 
    id: '3', 
    label: 'Hottest Listing', 
    title: 'Urban Prime Plaza Premiere',
    image: '/img/slider1.png'
  },
];

const PropertyCarousel = () => {
  const [currentSlides, setCurrentSlides] = useState<number[]>([0, 0, 0]);

  const handleSlideChange = (carouselIndex: number, slideIndex: number) => {
    const newSlides = [...currentSlides];
    newSlides[carouselIndex] = slideIndex;
    setCurrentSlides(newSlides);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-6">
        {slides.map((slide, carouselIndex) => (
          <div
            key={slide.id}
            className="relative h-56 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="relative w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900">
                <Image
                  src={slide.image}
                  alt={slide.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <div className="text-white">
                <p className="text-xs uppercase tracking-wider text-neutral-300">
                  {slide.label}
                </p>
                <p className="font-semibold text-lg mt-1">{slide.title}</p>
              </div>

              <div className="flex gap-1 mt-4">
                {[0, 1, 2, 3, 4].map((dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => handleSlideChange(carouselIndex, dotIndex)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlides[carouselIndex] === dotIndex
                        ? 'bg-white'
                        : 'bg-white/30'
                    }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;