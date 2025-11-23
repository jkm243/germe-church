import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group aspect-square"
            onClick={() => openModal(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-vivid-green-400 transition-colors duration-300 z-10"
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-vivid-green-400 transition-colors duration-300 z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-vivid-green-400 transition-colors duration-300 z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].url}
              alt={images[selectedIndex].alt}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 space-y-2">
              {images[selectedIndex].caption && (
                <p className="text-white text-base md:text-lg font-light leading-relaxed px-4">
                  {images[selectedIndex].caption}
                </p>
              )}
              <p className="text-gray-400 text-sm">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
