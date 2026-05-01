import React from 'react';

const Loading = () => {
    return (
              <div className="flex flex-col items-center justify-center min-h-screen gap-6">

            {/* Book animation */}
            <div className="relative w-20 h-24">
                {/* Book base */}
                <div className="absolute bottom-0 w-20 h-20 bg-(--rust)/20 rounded-r-lg border border-(--rust)/30" />

                {/* Pages */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bottom-0 left-1/2 w-[1px] bg-(--rust)/40 origin-bottom rounded"
                        style={{
                            height: `${50 + i * 6}px`,
                            animation: `pageFan 1.4s ease-in-out infinite`,
                            animationDelay: `${i * 0.12}s`,
                        }}
                    />
                ))}

                {/* Book cover */}
                <div className="absolute bottom-0 left-0 w-10 h-20 bg-(--rust) rounded-l-sm rounded-r-none border border-(--rust) flex items-center justify-center">
                    <div className="w-[2px] h-10 bg-white/20 rounded" />
                </div>

                {/* Shine */}
                <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/10 animate-ping" />
            </div>

            {/* Dots */}
            <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-(--rust)"
                        style={{
                            animation: `bounce 1s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Text */}
            <div className="text-center">
                <p className="font-serif text-xl text-(--rust) tracking-widest">
                    Good Reads
                </p>
                <p className="text-xs text-(--rust) tracking-[0.3em] uppercase !mt-1 animate-pulse">
                    Opening the library...
                </p>
            </div>

            <style>{`
                @keyframes pageFan {
                    0%, 100% { transform: translateX(0px) rotate(0deg); }
                    50% { transform: translateX(8px) rotate(15deg); }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); opacity: 0.4; }
                    50% { transform: translateY(-8px); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Loading;