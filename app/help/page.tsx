"use client"
import React, { useState, useEffect, useRef } from 'react';

interface Message {
    text: string;
    isPersonal: boolean;
    timestamp: string;
}

const fakeMessages = [
    "Hi there, I'm Fabio and you?",
    'Nice to meet you',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    "That's awesome",
    'Codepen is a nice place to stay',
    "I think you're a nice person",
    'Why do you think that?',
    'Can you explain?',
    "Anyway I've gotta go now",
    'It was a pleasure chat with you',
    'Time to make a new codepen',
    'Bye',
    ':)',
];

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [fakeMessageIndex, setFakeMessageIndex] = useState(0);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const setDate = () => {
        const d = new Date();
        return `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;
    };

    const insertMessage = () => {
        if (input.trim() === '') return;
        setMessages([...messages, { text: input, isPersonal: true, timestamp: setDate() }]);
        setInput('');
        scrollToBottom();
        setTimeout(() => {
            fakeMessage();
        }, 1000 + Math.random() * 20 * 100);
    };

    const fakeMessage = () => {
        if (input !== '') return;
        setMessages((prev) => [
            ...prev,
            { text: fakeMessages[fakeMessageIndex], isPersonal: false, timestamp: setDate() },
        ]);
        setFakeMessageIndex((fakeMessageIndex + 1) % fakeMessages.length)
        scrollToBottom();
    };

    useEffect(() => {
        scrollToBottom();
        const timer = setTimeout(() => {
            if (input !== '') return;
            setMessages((prev) => [
                ...prev,
                { text: fakeMessages[fakeMessageIndex], isPersonal: false, timestamp: setDate() },
            ]);
            setFakeMessageIndex((fakeMessageIndex + 1) % fakeMessages.length)
            scrollToBottom();
        }, 100);
        return () => clearTimeout(timer);
    }, [fakeMessageIndex, input]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            insertMessage();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-900 to-teal-600 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451186859696-371d9477be93?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925')] bg-no-repeat bg-cover filter blur-[80px] scale-125 z-10"></div>
            <div className="w-[300px] h-[80vh] max-h-[500px] bg-black/50 rounded-2xl shadow-lg flex flex-col z-20 overflow-hidden font-sans text-xs leading-tight">
                <div className="flex-none h-12 bg-black/20 text-white uppercase p-2.5 pl-12 relative">
                    <h1 className="text-[10px] font-normal m-0">Fabio Ottaviani</h1>
                    <h2 className="text-[8px] text-white/50 tracking-wide font-normal m-0">Supah</h2>
                    <figure className="absolute top-2 left-2.5 w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-white/24">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg"
                            alt="Avatar"
                            className="w-full h-auto"
                        />
                    </figure>
                </div>
                <div className="flex-1 text-white/50 overflow-y-auto p-2.5 relative">
                    <div className="absolute inset-0">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.isPersonal ? 'justify-end' : 'justify-start'} mb-2 animate-bounce`}
                            >
                                <div
                                    className={`relative max-w-[70%] p-2 rounded-tl-lg rounded-tr-lg ${
                                        msg.isPersonal
                                            ? 'rounded-bl-none bg-gradient-to-r from-green-600 to-cyan-700 text-white text-right'
                                            : 'rounded-br-none bg-black/30 ml-9'
                                    }`}
                                >
                                    {!msg.isPersonal && (
                                        <figure className="absolute bottom-[-15px] left-[-35px] w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-white/24">
                                            <img
                                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg"
                                                alt="Avatar"
                                                className="w-full h-auto"
                                            />
                                        </figure>
                                    )}
                                    <div className="text-[11px]">{msg.text}</div>
                                    <div className="absolute bottom-[-15px] text-[9px] text-white/30">
                                        {msg.timestamp}
                                    </div>
                                    {!msg.isPersonal && (
                                        <div className="absolute bottom-[-6px] left-0 border-t-[6px] border-t-black/30 border-r-[7px] border-r-transparent"></div>
                                    )}
                                    {msg.isPersonal && (
                                        <div className="absolute bottom-[-4px] right-0 border-t-[4px] border-t-cyan-700 border-l-[5px] border-l-transparent"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                <div className="flex-none h-10 bg-black/30 p-2.5 relative">
          <textarea
              className="w-[265px] h-[17px] bg-transparent border-none outline-none text-white/70 text-[11px] resize-none pr-5"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
          />
                    <button
                        className="absolute top-2.5 right-2.5 bg-green-600 text-white text-[10px] uppercase py-1.5 px-2.5 rounded-lg hover:bg-green-700 transition-colors"
                        onClick={insertMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

// Bounce animation keyframes
const bounceKeyframes = `
  @keyframes bounce {
    0% { transform: scale(0); }
    4.7% { transform: scale(0.45); }
    9.41% { transform: scale(0.883); }
    14.11% { transform: scale(1.141); }
    18.72% { transform: scale(1.212); }
    24.32% { transform: scale(1.151); }
    29.93% { transform: scale(1.048); }
    35.54% { transform: scale(0.979); }
    41.04% { transform: scale(0.961); }
    52.15% { transform: scale(0.991); }
    63.26% { transform: scale(1.007); }
    85.49% { transform: scale(0.999); }
    100% { transform: scale(1); }
  }
`;

const style = document.createElement('style');
style.textContent = bounceKeyframes;
document.head.appendChild(style);

export default Chat;