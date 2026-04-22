import React, { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* CSS to hide the dot on mobile */}
      <style>{`
        .mouse-dot {
          display: block;
        }

        /* Hides the dot for screens smaller than 900px (Mobile/Tablets) */
        @media (max-width: 900px) {
          .mouse-dot {
            display: none !important;
          }
        }
      `}</style>

      <div
        ref={dotRef}
        className="mouse-dot" // Added class name here
        style={{
          width: '14px',
          height: '14px',
          backgroundColor: '#f4531c',
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'top 0.15s ease-out, left 0.15s ease-out', 
        }}
      />
    </>
  );
};

export default MouseFollower;