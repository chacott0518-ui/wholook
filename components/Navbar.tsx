import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // 메뉴 아이콘 라이브러리 (설치되어 있다고 가정)

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionMap: Record<string, string> = {
    'BRAND': 'brand-process',
    'DESIGNERS': 'designers',
    'AI CONSULT': 'ai-consult',
    'LOCATION': 'location'
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      }`}
      style={{ 
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        borderBottom: '0px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. 로고 (왼쪽 고정) */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 className="text-xl font-black tracking-tighter text-white">WHO LOOK</h1>
          </div>

          {/* 2. PC 메뉴 (오른쪽 고정) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['BRAND', 'DESIGNERS', 'AI CONSULT', 'LOCATION'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionMap[item])}
                  className="text-white hover:text-[#FF9D00] px-3 py-2 rounded-md text-sm font-bold transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* 3. 모바일 삼단버거 메뉴 버튼 (복구 완료) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#FF9D00] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 열렸을 때 펼쳐지는 레이아웃 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['BRAND', 'DESIGNERS', 'AI CONSULT', 'LOCATION'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(sectionMap[item])}
                className="text-white block px-3 py-2 rounded-md text-base font-bold w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;