import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-[60px] px-[5%] border-t border-[#1a1a1a]">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
        <div className="text-left">
          <h2 className="text-[20px] font-bold text-white mb-5">WHO LOOK</h2>
          <div className="text-[#666] text-[13px] leading-relaxed break-keep">
            <p className="m-1">상호명: 후룩 성수 (WHO LOOK) | 대표자: 김후룩</p>
            <p className="m-1">주소: 서울 성동구 성수동2가 317-10</p>
            <p className="m-1">고객센터: 02-1234-5678 | 사업자등록번호: 123-45-67890</p>
          </div>
        </div>
        
        <div className="flex gap-6 self-start md:self-center">
          <a href="#" className="text-white text-[14px] font-semibold hover:text-wholook-gold no-underline transition-colors">Instagram</a>
          <a href="https://map.naver.com/p/entry/place/2039421472?placePath=/stylist&fromPanelNum=1&additionalHeight=76&timestamp=202601081857&locale=ko&svcName=map_pcv5&c=15.00,0,0,0,dh" target="_blank" rel="noreferrer" className="text-white text-[14px] font-semibold hover:text-wholook-gold no-underline transition-colors">Naver Booking</a>
          <a href="#" className="text-white text-[14px] font-semibold hover:text-wholook-gold no-underline transition-colors">Kakao Channel</a>
        </div>
      </div>
      <p className="text-[11px] text-[#444] text-center md:text-left">
        Copyright © 2024 WHO LOOK Seongsu. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;