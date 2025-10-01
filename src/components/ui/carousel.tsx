import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";

// Define the props for the Carousel component
interface CarouselProps<T> {
  data: T[]; // The array of data items
  cardCreator: (item: T, index: number) => ReactNode; // Function to render each card
  // These functions need to be provided to access DOM-related measurements
  getItemWidth: () => number;
  getItemGap: () => number;
  getVisibleCount: () => number;
  updateCenterItem: (carouselElement: HTMLElement) => void;
  // Optional class names for styling (assuming Tailwind CSS classes as in the original)
  className?: string;
  trackClassName?: string;
  nextButtonClassName?: string;
  prevButtonClassName?: string;
}

// Helper to determine the centered starting index
const getInitialIndex = (dataLength: number, getVisibleCount: () => number) => {
  const visibleCount = getVisibleCount();
  const centerOffset = Math.floor(visibleCount / 2);
  // Start in the middle of the first cloned set for infinite loop effect
  return dataLength + centerOffset;
};

// The main Carousel component
function Carousel<T>({
  data,
  cardCreator,
  getItemWidth,
  getItemGap,
  getVisibleCount,
  updateCenterItem,
  className = "relative overflow-hidden",
  trackClassName = "flex transition-transform duration-500 ease-in-out",
  nextButtonClassName = "next absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full z-10 shadow-lg cursor-pointer",
  prevButtonClassName = "prev absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/70 hover:bg-white rounded-full z-10 shadow-lg cursor-pointer",
}: CarouselProps<T>) {
  // If no data, render a warning (like the original JS)
  if (data.length === 0) {
    return (
      <div className={className}>
        <div className="carousel-track">
          <p className="text-red-500 text-center col-span-full">
            Data tidak tersedia.
          </p>
        </div>
      </div>
    );
  }

  // 1. State for Carousel Logic
  const initialIndex = getInitialIndex(data.length, getVisibleCount);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 2. Refs for DOM elements and interval management
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<number | null>(null);

  // 3. Extended Data for infinite scroll (data * 3)
  const extendedData = [...data, ...data, ...data];

  // 4. Update Carousel Position (core logic)
  const updateCarousel = useCallback(
    (animate: boolean = true) => {
      const carousel = carouselRef.current;
      const track = trackRef.current;
      if (!carousel || !track) return;

      const itemWidth = getItemWidth();
      const gap = getItemGap();
      const fullItemWidth = itemWidth + gap;

      // Calculate the transform offset to center the currentIndex item
      const offset =
        -(currentIndex * fullItemWidth) +
        (carousel.offsetWidth / 2 - itemWidth / 2);

      // Apply transition and transform
      track.style.transition = animate ? "transform 0.5s ease" : "none";
      track.style.transform = `translateX(${offset}px)`;

      // Update the center item after transition (if animating)
      if (animate) {
        // Use a slight delay to ensure the center item is updated after the CSS transition starts
        const timeout = setTimeout(() => {
          updateCenterItem(carousel);
        }, 250);
        return () => clearTimeout(timeout);
      } else {
        updateCenterItem(carousel);
      }
    },
    [currentIndex, getItemWidth, getItemGap, updateCenterItem]
  );

  // 5. Slide Function
  const slide = useCallback(
    (direction: 1 | -1) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      const nextIndex = currentIndex + direction;
      setCurrentIndex(nextIndex);

      // Logic for snapping back to the cloned set (instant transition)
      // This runs *after* the initial animated slide is complete (500ms)
      const transitionEndTimeout = setTimeout(() => {
        const baseIndex = getInitialIndex(data.length, getVisibleCount);

        let finalIndex = nextIndex;
        // Check if we passed the end of the second cloned set (data * 2)
        if (nextIndex >= data.length * 2 + baseIndex - data.length) {
          finalIndex = baseIndex; // Snap back to the beginning of the first cloned set
          updateCarousel(false); // Instant update
        }
        // Check if we passed the beginning of the first cloned set (data * 0)
        else if (nextIndex < baseIndex - data.length) {
          // Snap back to the end of the second cloned set
          finalIndex = data.length * 2 - 1 + baseIndex - data.length;
          updateCarousel(false); // Instant update
        }

        setCurrentIndex(finalIndex);
        setIsTransitioning(false);
      }, 500);

      return () => clearTimeout(transitionEndTimeout);
    },
    [
      currentIndex,
      isTransitioning,
      data.length,
      getVisibleCount,
      updateCarousel,
    ]
  );

  // 6. Auto-Scroll Control
  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current !== null) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    // Clear any existing interval before starting a new one
    stopAutoScroll();
    const intervalId = setInterval(() => {
      slide(1);
    }, 3000) as unknown as number; // Type assertion for setInterval return
    autoScrollIntervalRef.current = intervalId;
  }, [slide, stopAutoScroll]);

  // 7. Effects

  // Effect to handle initial setup and all state/prop changes
  useEffect(() => {
    // Initial and subsequent position update
    updateCarousel(false);

    // Initial auto-scroll start
    startAutoScroll();

    // Cleanup: Clear interval on component unmount
    return () => {
      stopAutoScroll();
    };
  }, [startAutoScroll, stopAutoScroll, updateCarousel]);

  // Effect for window resize
  useEffect(() => {
    const handleResize = () => {
      if (!isTransitioning) {
        updateCarousel(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isTransitioning, updateCarousel]);

  // Effect for touch events (using local state for dragging)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = 0;
    let isDraggingLocal = false; // Local flag for touch state

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDraggingLocal = true;
      stopAutoScroll();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingLocal) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isDraggingLocal) return;
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          slide(1);
        } else {
          slide(-1);
        }
      }

      isDraggingLocal = false;
      startAutoScroll();
    };

    // Attach event listeners
    track.addEventListener("touchstart", handleTouchStart, { passive: true });
    track.addEventListener("touchmove", handleTouchMove, { passive: false });
    track.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Cleanup
    return () => {
      track.removeEventListener("touchstart", handleTouchStart);
      track.removeEventListener("touchmove", handleTouchMove);
      track.removeEventListener("touchend", handleTouchEnd);
    };
  }, [slide, startAutoScroll, stopAutoScroll]);

  // Effect for keyboard events and hover control
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        stopAutoScroll();
        slide(-1);
        startAutoScroll();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        stopAutoScroll();
        slide(1);
        startAutoScroll();
      }
    };

    const handleMouseEnter = () => stopAutoScroll();
    const handleMouseLeave = () => startAutoScroll();

    carousel.addEventListener("keydown", handleKeyDown);
    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      carousel.removeEventListener("keydown", handleKeyDown);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [slide, startAutoScroll, stopAutoScroll]);

  // 8. Render the Component
  return (
    <div
      ref={carouselRef}
      className={className}
      tabIndex={0} // Makes the carousel focusable for keyboard events
    >
      <div ref={trackRef} className={trackClassName}>
        {extendedData.map((item, index) => (
          <React.Fragment key={index}>
            {cardCreator(item, index)}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={() => {
          stopAutoScroll();
          slide(-1);
          startAutoScroll();
        }}
        className={prevButtonClassName}
        aria-label="Previous slide"
      >
        {"<"}
      </button>

      <button
        onClick={() => {
          stopAutoScroll();
          slide(1);
          startAutoScroll();
        }}
        className={nextButtonClassName}
        aria-label="Next slide"
      >
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
