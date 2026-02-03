
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { siteContent } from '../content/siteContent';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { chatWidget } = siteContent;
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: chatWidget.initialMessage }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await geminiService.askAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-slate-900 p-5 flex justify-between items-center">
            <div className="flex items-center gap-3 text-white">
              <Bot size={22} className="text-orange-400" />
              <span className="font-black text-sm uppercase tracking-widest">{chatWidget.title}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="h-96 overflow-y-auto p-5 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-rose-600 text-white rounded-tr-none shadow-lg shadow-rose-600/20' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl text-xs font-bold border border-slate-200 animate-pulse text-slate-400">
                  {chatWidget.typing}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={chatWidget.placeholder}
              className="flex-1 bg-slate-50 border-none rounded-2xl px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-rose-500 outline-none transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-slate-900 text-white p-3 rounded-2xl hover:bg-rose-600 transition-all disabled:opacity-50 shadow-md"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-brand-gradient text-white p-5 rounded-[2rem] shadow-2xl shadow-rose-500/30 hover:scale-110 transition-transform active:scale-95 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors"></div>
          <MessageSquare size={28} className="relative z-10" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
