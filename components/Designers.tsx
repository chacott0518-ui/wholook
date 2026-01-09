import React from 'react';

const Designers: React.FC = () => {
  const designers = [
    {
      id: 1,
      name: "SIYOON",
      role: "DESIGNER", // 요청에 따라 수정
      description: "Hippie Perm & Texture Master",
      instagram: "@siyoon_whoolook",
      image: "https://i.imgur.com/t72BGII.png",
    },
    {
      id: 2,
      name: "JANG MI",
      role: "DESIGNER", // 요청에 따라 수정
      description: "Trend Styling & Perm Expert",
      instagram: "@jangmi_whoolook",
      image: "https://i.imgur.com/lGmKhP8.png",
    },
    {
      id: 3,
      name: "JISOO",
      role: "DESIGNER", // 요청에 따라 수정
      description: "Signature Cut & Color Master",
      instagram: "@jisoo_whoolook",
      image: "https://i.imgur.com/pneEtkh.png",
    }
  ];

  return (
    <section id="our-artists" className="py-24 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-[0.2em] uppercase">Our Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {designers.map((designer) => (
            <div key={designer.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#111111] border border-white/10">
                <img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-full object-contain grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  style={
                    designer.id === 1 ? { transform: 'scale(1.02) translateY(-2px)', transformOrigin: 'top center' } :
                    designer.id === 2 ? { transform: 'scale(0.85) translateY(25px)', transformOrigin: 'top center' } :
                    designer.id === 3 ? { transform: 'scale(1.0) translateY(0px)', transformOrigin: 'top center' } : {}
                  }
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-[#FF9D00] text-xs font-bold mb-1 uppercase tracking-wider">
                    {designer.role}
                  </p>
                  <p className="text-white text-sm leading-relaxed mb-1">
                    {designer.description}
                  </p>
                  <p className="text-[#FF9D00] text-xs font-medium tracking-tight">
                    {designer.instagram}
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-[#FF9D00] text-2xl font-bold tracking-widest mb-1 uppercase">
                  {designer.name}
                </h3>
                <p className="text-gray-400 text-[10px] tracking-[0.3em] font-light uppercase">
                  {designer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designers;