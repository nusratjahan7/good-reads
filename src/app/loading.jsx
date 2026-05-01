const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-7">

            {/* Book animation */}
            <div className="relative w-20 h-24">
                <div className="absolute bottom-0 left-2 w-10 h-20 bg-(--rust) rounded-l-sm" />
                <div className="absolute bottom-0 left-2 w-16 h-20 bg-(--rust)/20 rounded-r-lg border border-(--rust)/30">
                    <div className="absolute top-3.5 left-2.5 w-11 h-px bg-(--gold)/40" />
                    <div className="absolute top-5 left-2.5 w-8 h-px bg-(--gold)/20" />
                </div>
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bottom-0 left-7 w-px bg-(--gold)/50 rounded origin-bottom"
                        style={{
                            height: `${52 + i * 4}px`,
                            animation: `pageFan 1.5s ease-in-out infinite`,
                            animationDelay: `${i * 0.12}s`,
                        }}
                    />
                ))}
            </div>

            {/* Dots */}
            <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-(--gold)"
                        style={{
                            animation: `bounce 1s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Text */}
            <div className="text-center">
                <p className="font-serif text-xl text-(--gold) tracking-widest">
                    Good Reads
                </p>
                <p className="text-xs text-(--rust) tracking-[0.3em] uppercase !mt-1 animate-pulse">
                    Opening the library...
                </p>
            </div>

            <style>{`
                @keyframes pageFan {
                    0%, 100% { transform: translateX(0) rotate(0deg); }
                    50% { transform: translateX(10px) rotate(18deg); }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); opacity: 0.35; }
                    50% { transform: translateY(-8px); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Loading;