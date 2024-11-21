import { useEffect, useRef } from 'react';

export const useScrollAnimation = (callback, options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => callback());
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '100px 0px',
        ...options
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [callback, options]);

  return elementRef;
};