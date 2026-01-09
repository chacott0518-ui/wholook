import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, RefreshCw } from 'lucide-react';
import { getStyleConsultation } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const AIStyleConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하세요! 후룩 성수 AI 스타일리스트입니다. 고객님의 얼굴형, 모발 상태, 평소 스타일을 알려주시면 찰떡같은 헤어스타일을 추천해드릴게요!' }
  ]);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim() || loadingState === LoadingState.LOADING) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg as ChatMessage]);
    const currentInput = input;
    setInput('');
    setLoadingState(LoadingState.LOADING);
    try {
      const prompt = `User Input: ${currentInput}\n\nPlease provide a recommendation considering "WHO LOOK" styles like Layered Cut or Hippie Perm if suitable.`;
      const responseText = await getStyleConsultation(prompt);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: '죄송합니다. 오류가 발생했습니다.' }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <section id="ai-consult" className="py-24 bg-gradient-to-b from-black to-gray-900 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9D00]/10 text-[#FF9D00] text-sm font-medium mb-4 border border-[#FF9D00]/20">
            <Sparkles size={16} /> Beta Service
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">AI Style Consultant</h2>
        </div>
        <div className="bg-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-700' : 'bg-[#FF9D00] text-black'}`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-gray-800' : 'bg-white/10 text-gray-100 border border-white/5'}`}>{msg.text}</div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
            <input className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF9D00]" placeholder="질문을 입력하세요..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
            <button onClick={handleSend} className="p-3 bg-[#FF9D00] text-black rounded-xl hover:bg-white transition-all"><Send size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStyleConsultant;