import { useEffect, useState } from 'react';

export default function Cursor() {  // Changed to default export
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      <div 
        className="absolute w-8 h-8 rounded-full bg-blue-500/30 border-2 border-blue-500 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className="absolute w-2 h-2 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-50 ease-out"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
}