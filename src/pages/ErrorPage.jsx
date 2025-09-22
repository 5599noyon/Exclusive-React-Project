import React, { useState, useEffect } from 'react';

const ErrorPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });

      // Create sparkle effect
      if (Math.random() > 0.8) {
        const newSparkle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        };
        setSparkles(prev => [...prev, newSparkle]);

        setTimeout(() => {
          setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGoHome = () => {
    // Replace with your actual home page navigation
    window.location.href = '/';
  };

  const FloatingElement = ({ size, delay, top, left }) => (
    <div 
      className={`absolute ${size} bg-white/10 rounded-full`}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        animation: `float 15s infinite linear ${delay}s`,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 animate-pulse" />
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 118, 117, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(250, 177, 160, 0.3) 0%, transparent 50%)
            `,
            animation: 'backgroundMove 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating elements */}
      <FloatingElement size="w-20 h-20" delay="0" top="20" left="10" />
      <FloatingElement size="w-32 h-32" delay="-5" top="60" left="80" />
      <FloatingElement size="w-16 h-16" delay="-10" top="80" left="20" />
      <FloatingElement size="w-24 h-24" delay="-7" top="10" left="70" />

      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-white rounded-full pointer-events-none z-50 animate-ping"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            animationDuration: '1s'
          }}
        />
      ))}

      {/* Main error container */}
      <div 
        className="relative z-10 text-center text-white max-w-2xl mx-auto p-8 backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-2xl transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      >
        {/* 404 Code */}
        <div className="text-8xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
          404
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-light mb-4 drop-shadow-lg animate-bounce">
          Oops! Page Not Found
        </h1>

        {/* Message */}
        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed animate-fade-in">
          The page you're looking for seems to have wandered off into the digital void. 
          Don't worry though, even the best explorers sometimes take a wrong turn.
        </p>

        {/* Home button */}
        <button
          onClick={handleGoHome}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 overflow-hidden"
        >
          <span className="relative z-10">Take Me Home</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
        </button>

        {/* Decorative elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-60 animate-spin" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60 animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-50px) rotate(180deg); opacity: 0.3; }
        }
        
        @keyframes backgroundMove {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(0.5deg); }
          66% { transform: translate(-20px, 20px) rotate(-0.5deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 0.9; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;