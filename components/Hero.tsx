import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-wholook-black text-center">
      {/* Background Image: Reverted to the previous woman model */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop" 
          alt="WHO LOOK Main Model" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Overlay: background: rgba(0, 0, 0, 0.4) for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 flex flex-col items-center">
        {/* Font size clamp(40px, 10vw, 70px) */}
        <h1 className="text-white leading-[1.1] mb-0 font-extralight" style={{ fontSize: 'clamp(40px, 10vw, 70px)' }}>
          Changes<br />
          <span className="text-wholook-gold font-bold">Beautifies You!</span>
        </h1>
        
        <p className="text-[#eee] mt-[20px] text-[16px] tracking-[0.3em] font-light">
          WHO LOOK SEONGSU
        </p>
      </div>
    </section>
  );
};

export default Hero;