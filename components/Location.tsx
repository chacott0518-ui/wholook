import React from 'react';
import { MapPin, Clock, Sparkles, Stethoscope, Wifi, Armchair, Coffee, CreditCard, UserCheck, Scissors } from 'lucide-react';

const Location: React.FC = () => {
  const facilities = [
    { icon: <Sparkles size={20} />, name: "헤어스파" }, { icon: <Stethoscope size={20} />, name: "두피클리닉" },
    { icon: <Wifi size={20} />, name: "무선 인터넷" }, { icon: <Armchair size={20} />, name: "대기공간" },
    { icon: <Coffee size={20} />, name: "웰컴티" }, { icon: <CreditCard size={20} />, name: "간편결제" },
    { icon: <UserCheck size={20} />, name: "우선예약" }, { icon: <Scissors size={20} />, name: "1:1 케어" },
  ];

  return (
    <section id="location" className="py-24 bg-black scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 text-white text-center">
        <h2 className="text-4xl font-bold mb-16 tracking-widest uppercase">LOCATION</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          
          {/* 왼쪽 박스: ADDRESS */}
          <div className="bg-[#111] p-10 rounded-3xl border border-white/5 flex flex-col items-center justify-center min-h-[350px]">
            {/* 1. 제목 라인 */}
            <div className="flex items-center gap-3 mb-8 text-[#FF9D00]">
              <MapPin size={24} />
              <h4 className="text-white font-bold text-xl uppercase tracking-widest">ADDRESS</h4>
            </div>
            
            {/* 2. 본문 라인 (중앙 집중) */}
            <div className="mb-8">
              <p className="text-white text-[1.1rem] font-medium leading-tight mb-2">서울 성동구 성수동2가 317-10</p>
              <p className="text-gray-500 text-sm leading-tight">(성수역 3번 출구 도보 5분)</p>
            </div>

            {/* 3. 버튼 라인 */}
            <a 
              href="https://map.naver.com/p/entry/place/2039421472?lng=127.0566416&lat=37.5424167&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202601090143&locale=ko&svcName=map_pcv5&entry=plt&searchType=place&c=15.00,0,0,0,dh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#FF9000] text-black font-bold rounded-xl hover:bg-[#e68000] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl no-underline"
            >
              네이버 지도보기 →
            </a>
          </div>

          {/* 오른쪽 박스: OPENING HOURS (완벽 대칭 조정) */}
          <div className="bg-[#111] p-10 rounded-3xl border border-white/5 flex flex-col items-center justify-center min-h-[350px]">
            {/* 1. 제목 라인 (왼쪽과 mb-8 동일) */}
            <div className="flex items-center gap-3 mb-8 text-[#FF9D00]">
              <Clock size={24} />
              <h4 className="text-white font-bold text-xl uppercase tracking-widest">OPENING HOURS</h4>
            </div>
            
            {/* 2. 본문 라인 (왼쪽 주소 1,2행과 높이를 정확히 맞춤) */}
            <div className="mb-8">
              <p className="text-white text-[1.45rem] font-light leading-tight mb-2">10:00 - 20:00</p>
              <p className="text-[#FF9D00] font-bold text-[0.75rem] tracking-[0.15em] uppercase leading-tight">LAST BOOKING 19:00</p>
            </div>

            {/* 3. 버튼 라인 (왼쪽과 완벽 수평) */}
            <a 
              href="https://map.naver.com/p/entry/place/2039421472?lng=127.0566416&lat=37.5424167&placePath=/review?additionalHeight=76&fromPanelNum=1&locale=ko&svcName=map_pcv5&timestamp=202601090150&additionalHeight=76&timestamp=202601090143&locale=ko&svcName=map_pcv5&from=map&fromPanelNum=1&entry=plt&searchType=place&c=15.00,0,0,0,dh"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#FF9000] text-black font-bold rounded-xl hover:bg-[#e68000] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl no-underline"
            >
              네이버 리뷰보기 →
            </a>
          </div>
        </div>

        {/* 하단 시설 정보 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((f, i) => (
            <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10 flex items-center justify-center gap-3 text-gray-400">
              <span className="text-[#FF9D00]">{f.icon}</span>
              <span className="text-xs font-medium">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;