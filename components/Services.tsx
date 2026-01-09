import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-[100px] px-5 bg-[#0a0a0a] text-center relative">
        <div id="price" className="absolute top-0 transform -translate-y-20"></div>

        <div className="max-w-[600px] mx-auto w-full">
            <h3 className="text-wholook-gold font-bold text-2xl mb-8">MENU & PRICE</h3>
            
            <ul className="p-0 m-0 list-none text-left w-full">
                <li className="flex justify-between items-center py-4 border-b border-[#1a1a1a]">
                    <span className="font-medium text-white text-lg">남자 컷</span>
                    <span className="font-bold text-wholook-gold text-lg">33,000원</span>
                </li>
                <li className="flex justify-between items-center py-4 border-b border-[#1a1a1a]">
                    <span className="font-medium text-white text-lg">여자 컷</span>
                    <span className="font-bold text-wholook-gold text-lg">44,000원</span>
                </li>
                <li className="flex justify-between items-center py-4 border-b border-[#1a1a1a]">
                    <span className="font-medium text-white text-lg">모든 펌 <span className="text-xs text-wholook-gold border border-wholook-gold px-1 rounded ml-1">EVENT</span></span>
                    <span className="font-bold text-wholook-gold text-lg">99,000원</span>
                </li>
                <li className="flex justify-between items-center py-4 border-b border-[#1a1a1a]">
                    <span className="font-medium text-white text-lg">염색 <span className="text-xs text-wholook-gold border border-wholook-gold px-1 rounded ml-1">EVENT</span></span>
                    <span className="font-bold text-wholook-gold text-lg">66,000원</span>
                </li>
            </ul>
            
            <p className="text-[13px] text-[#666] mt-6 text-center break-keep">
                * N pay 예약 후 리뷰 작성 시 할인이 적용된 금액입니다.<br/>
                * 기장 및 디자이너 직급에 따라 추가 금액이 발생할 수 있습니다.
            </p>
        </div>
    </section>
  );
};

export default Services;