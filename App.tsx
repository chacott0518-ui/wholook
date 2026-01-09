import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandProcess from './components/BrandProcess';
import Designers from './components/Designers';
import AIStyleConsultant from './components/AIStyleConsultant';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black font-sans text-white pb-[60px] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div id="brand-process">
        <BrandProcess />
      </div>
      <div id="designers">
        <Designers />
      </div>
      <div id="ai-consult">
        <AIStyleConsultant />
      </div>
      <div id="location">
        <Location />
      </div>
      </main>
      <Footer />
      
      {/* [최종 해결: 세드로 스포대드 기법]
        - left-0 right-0: 양 끝에 붙임
        - box-shadow: 바른 양양으로 5px씩 주황색 그림자를 뿌려, 브라우저가 렌더링 오차로 생기는 1px 빈틈을 강제로 색칠함!
        */}
        <a
        href="https://map.naver.com/p/entry/place/2039421472?placePath=/stylist?fromPanelNum=1&entry=plt"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 right-0 h-[60px] bg-[#FF9000] text-black flex justify-center items-center font-extrabold no-underline z-[9999] text-lg hover:bg-[#e68000] transform hover:scale-[1.01] transition-all duration-300 shadow-2xl"
        style={{
          width: '100%',
          boxShadow: '0 0 0 5px #FF9D00', // 바른 사방으로 5px 주황색 그림자 확장
          margin: 0,
          padding: 0,
          WebkitAppearance: 'none' // 모바일 브라우저 기본 스타일 간섭 제거
        }}
      >
        네이버 실시간 예약하기
      </a>
    </div>
  );
};

export default App;