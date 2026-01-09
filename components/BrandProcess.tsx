import React, { useState } from 'react';

const BrandProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    { id: 1, title: "WELCOME DRINK & CONSULT", description: "전문가와의 1:1 상담을 통해 당신만의 고유한 분위기를 분석합니다.", image: "https://i.pinimg.com/1200x/4c/55/f2/4c55f2599bbc8b8776fc717004863b2a.jpg" },
    { id: 2, title: "CUSTOMER RECORD", description: "개인별 얼굴형과 라이프스타일을 기록하여 시그니처 디자인을 수립합니다.", image: "https://i.pinimg.com/1200x/e8/9b/1d/e89b1d5c0022da39fd53877340d404da.jpg" },
    { id: 3, title: "MASTER STYLING", description: "숙련된 디자이너가 정교한 시술로 완성도 높은 스타일을 구현합니다.", image: "https://i.pinimg.com/1200x/50/95/c1/5095c143307d4e1382001128dc3606e0.jpg" }
  ];

  return (
    <section id="brand" className="py-[100px] px-5 text-center bg-[#050505] scroll-mt-20">
      <div className="max-w-[900px] mx-auto mb-[80px]">
        <h2 className="text-[24px] md:text-[32px] font-light mb-8 tracking-tighter inline-block bg-gradient-to-r from-[#FF9D00] via-[#FFB84D] to-white bg-clip-text text-transparent">
          "누가 잘 어울릴까? 누가 이 스타일을 완성할 수 있을까?"
        </h2>
        <p className="text-[#bbb] max-w-[600px] mx-auto leading-relaxed text-sm">
          이 단순한 질문에서 시작된 <strong className="text-white font-bold">WHO LOOK</strong>은 그 어떤 미용실보다<br />
          '개인의 분위기'와 '자기다움'을 중요하게 생각합니다.
        </p>
      </div>
      <div className="max-w-7xl mx-auto text-left relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} onClick={() => setActiveStep(step.id)} className={`p-8 rounded-lg cursor-pointer transition-all duration-300 ${activeStep === step.id ? 'bg-white/5' : 'opacity-40'}`}>
                <h3 className={`text-xl font-bold mb-3 ${activeStep === step.id ? 'text-[#FF9D00]' : 'text-white'}`}>0{step.id} {step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#111111] border border-white/10 shadow-2xl">
            <img src={steps.find(s => s.id === activeStep)?.image} alt="Brand" className="w-full h-full object-cover transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandProcess;