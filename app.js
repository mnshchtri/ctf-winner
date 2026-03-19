/* ── The Last footprint — React App (transpiled via Babel CDN) ──────── */
/* NOTE: This file is loaded as type="text/babel" in index.html          */

const { useState, useEffect, useRef } = React;

/* ── Logo cluster ──────────────────────────────────────────────────── */
const CTFLogos = ({ className = "h-16 md:h-28" }) => (
    <div className={`flex flex-row items-center justify-center gap-4 md:gap-8 ${className} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
        <img src="images/bg-remove-logo.png" className="h-full w-auto object-contain filter brightness-110" alt="The Last footprint" />
        <img src="images/ing-logo-removebg.png" className="h-[75%] md:h-[85%] w-auto object-contain filter brightness-110" alt="ING Logo" />
        <img src="images/inosphere-logo-removebg.png" className="h-[75%] md:h-[85%] w-auto object-contain filter brightness-110" alt="Inosphere Logo" />
    </div>
);

/* ── SVG Icons ─────────────────────────────────────────────────────── */
const TrophyIcon = ({ size = 24, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
);

const PlayIcon = ({ size = 24, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
);

const UserIcon = ({ size = 24, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const EyeIcon = ({ size = 24, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const EyeOffIcon = ({ size = 24, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
);

/* ── Countdown ─────────────────────────────────────────────────────── */
const Countdown = ({ onComplete }) => {
    const [count, setCount] = useState(12);
    const timerAudioRef = useRef(null);

    useEffect(() => {
        const audio = new Audio('sound/timer-sound.mp3');
        audio.loop = true;
        timerAudioRef.current = audio;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => console.log("Audio play blocked:", e));
        }
        return () => {
            if (timerAudioRef.current) {
                timerAudioRef.current.pause();
                timerAudioRef.current.currentTime = 0;
            }
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prev => {
                if (prev <= 1) { clearInterval(timer); onComplete(); return 0; }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full fixed top-0 left-0 z-[100] overflow-hidden" style={{background: 'rgba(56,56,56,0.55)'}}>
            <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#44a6cc] rounded-full blur-[100px] md:blur-[180px] opacity-20 animate-pulse-slow"></div>

            <div className="relative flex flex-col items-center justify-center">
                <svg className="absolute w-[300px] h-[300px] md:w-[550px] md:h-[550px]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#44a6cc" strokeWidth="1" strokeLinecap="round" className="countdown-circle opacity-60" />
                </svg>

                <div className="z-10 flex flex-col items-center px-4">
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#44a6cc] to-transparent mb-6"></div>
                    <p className="text-[#44a6cc] font-mono text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase opacity-70 text-center">Decryption Sequence</p>
                    <h1 className="text-6xl md:text-8xl font-mono font-bold text-white tracking-widest transition-all duration-300">
                        00:{count < 10 ? '0' + count : count}
                    </h1>
                    <p className="mt-4 font-mono text-[8px] md:text-[10px] text-slate-400 tracking-[0.2em] uppercase text-center hidden md:block">
                        Status: decrypting_winner_metadata... {Math.random().toString(36).substring(7).toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    );
};

/* ── Winner Card ───────────────────────────────────────────────────── */
const WinnerCard = ({ rank, player, delay, isRevealed, onAnimationEnd }) => {
    if (!isRevealed) return <div className="w-full max-w-sm hidden md:block opacity-0"></div>;

    let cardClasses = "glass-panel rounded-2xl p-8 flex flex-col items-center justify-center reveal-anim w-full max-w-sm mx-auto transition-all duration-500 hover:-translate-y-2 winner-card";
    let rankColor = "", medalName = "", rankTextClass = "";

    if (rank === 1) {
        cardClasses += " winner-1 order-1 md:order-2 md:-translate-y-12 z-20 md:scale-105";
        rankColor = "#fbbf24"; medalName = "CHAMPION"; rankTextClass = "rank-1-text";
    } else if (rank === 2) {
        cardClasses += " winner-2 order-2 md:order-1 md:translate-y-8 z-10";
        rankColor = "#94a3b8"; medalName = "RUNNER UP"; rankTextClass = "rank-2-text";
    } else {
        cardClasses += " winner-3 order-3 md:order-3 md:translate-y-16 z-10";
        rankColor = "#b45309"; medalName = "2ND RUNNER UP"; rankTextClass = "rank-3-text";
    }

    return (
        <div className={cardClasses} style={{ animationDelay: `${delay}ms` }} onAnimationEnd={onAnimationEnd}>
            <div className="absolute top-4 left-4 opacity-30 font-mono text-xs tracking-widest">RANK_0{rank}</div>
            <div className="absolute top-4 right-4 opacity-30 font-mono text-xs">[{medalName}]</div>

            <div className="mt-6 mb-4 relative animate-float">
                <div className="absolute inset-0 blur-xl opacity-30" style={{ backgroundColor: rankColor }}></div>
                <TrophyIcon size={56} color={rankColor} />
            </div>

            <h2 className={`text-5xl font-bold mb-2 ${rankTextClass} rank-number`}>
                {rank}{rank === 1 ? 'st' : rank === 2 ? 'nd' : 'rd'}
            </h2>

            <div className="mt-4 text-center w-full relative">
                <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2 font-mono flex items-center justify-center gap-2">
                    <span className="w-4 h-px bg-slate-600"></span> OPERATIVE ALIAS <span className="w-4 h-px bg-slate-600"></span>
                </h3>
                <h4 className="text-3xl font-bold text-white tracking-wide mt-2 mb-2 break-all">{player}</h4>
            </div>
        </div>
    );
};

/* ── Admin Panel ───────────────────────────────────────────────────── */
const AdminPanel = ({ winners, setWinners, onStart }) => {
    const [showNames, setShowNames] = useState({ 1: false, 2: false, 3: false });

    const handleChange = (rank, value) => {
        setWinners(prev => ({ ...prev, [rank]: { ...prev[rank], player: value } }));
    };

    const toggleShow = (rank) => {
        setShowNames(prev => ({ ...prev, [rank]: !prev[rank] }));
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 relative z-10 w-full overflow-y-auto">
            <div className="glass-panel p-6 md:p-10 rounded-2xl max-w-4xl w-full relative z-20 my-8">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 mb-8 pb-6 border-b border-[#44a6cc]/20">
                    <div className="bg-[#0d1f2e]/80 border border-[#44a6cc]/30 rounded-xl px-6 py-4 flex items-center justify-center gap-4 md:gap-8 w-full">
                        <img src="images/bg-remove-logo.png" className="h-10 md:h-16 w-auto object-contain brightness-125" alt="The Last footprint" />
                        <div className="w-px h-8 bg-[#44a6cc]/30"></div>
                        <img src="images/ing-logo-removebg.png" className="h-8 md:h-12 w-auto object-contain brightness-125" alt="ING" />
                        <div className="w-px h-8 bg-[#44a6cc]/30"></div>
                        <img src="images/inosphere-logo-removebg.png" className="h-8 md:h-12 w-auto object-contain brightness-125" alt="Inosphere" />
                    </div>
                    <div className="text-center mt-2">
                        <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white uppercase">The Last Footprint Awards</h1>
                        <p className="text-[#44a6cc] text-xs md:text-sm font-mono mt-1 tracking-widest">SYS.ADMIN // SECURE CONNECTION</p>
                    </div>
                </div>

                {/* Input Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[1, 2, 3].map(rank => (
                        <div key={rank} className="bg-white/5 rounded-xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                            <div className={`absolute top-0 left-0 w-full h-1 ${rank === 1 ? 'bg-gradient-to-r from-amber-400 to-amber-600' : rank === 2 ? 'bg-gradient-to-r from-slate-300 to-slate-500' : 'bg-gradient-to-r from-orange-400 to-orange-700'}`}></div>
                            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2 font-mono">
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${rank === 1 ? 'bg-amber-500/20 text-amber-400' : rank === 2 ? 'bg-slate-400/20 text-slate-300' : 'bg-orange-600/20 text-orange-400'}`}>
                                    {rank}
                                </span>
                                {rank === 1 ? 'FIRST' : rank === 2 ? 'SECOND' : 'THIRD'} PLACE
                            </h3>
                            <div className="space-y-2">
                                <label className="block text-xs text-slate-400 font-mono tracking-wider">OPERATIVE ALIAS</label>
                                <div className="relative flex items-center">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                                        <UserIcon size={16} />
                                    </div>
                                    <input 
                                        type={showNames[rank] ? "text" : "password"}
                                        className="input-premium pl-10 pr-10" 
                                        value={winners[rank].player} 
                                        onChange={(e) => handleChange(rank, e.target.value)} 
                                        placeholder="Enter alias..." 
                                    />
                                    <button 
                                        onClick={() => toggleShow(rank)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-[#44a6cc] transition-colors focus:outline-none"
                                        title={showNames[rank] ? "Hide alias" : "Show alias"}
                                    >
                                        {showNames[rank] ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center border-t border-white/10 pt-8">
                    <button onClick={onStart} className="btn-premium flex items-center gap-3 text-lg">
                        <PlayIcon size={20} /> BEGIN CEREMONY
                    </button>
                </div>
            </div>
        </div>
    );
};

/* ── Winner Reveal Stage ───────────────────────────────────────────── */
const WinnerRevealStage = ({ winners }) => {
    const [revealed, setRevealed] = useState({ 3: false, 2: false, 1: false });
    const congratsAudioRef = useRef(new Audio('sound/congratulations.mp3'));

    useEffect(() => {
        const playCongrats = () => {
            congratsAudioRef.current.currentTime = 0;
            congratsAudioRef.current.play().catch(e => console.log("Congrats play blocked", e));
        };

        const t3 = setTimeout(() => { setRevealed(prev => ({...prev, 3: true})); playCongrats(); }, 800);
        const t2 = setTimeout(() => { setRevealed(prev => ({...prev, 2: true})); playCongrats(); }, 4500);
        const t1 = setTimeout(() => { setRevealed(prev => ({...prev, 1: true})); playCongrats(); }, 9500);

        return () => {
            clearTimeout(t3); clearTimeout(t2); clearTimeout(t1);
            congratsAudioRef.current.pause();
        };
    }, []);

    const triggerConfetti = () => {
        if (window.confetti) {
            const end = Date.now() + 8000;
            const colors = ['#44a6cc', '#1c5070', '#fbbf24', '#ffffff'];
            (function frame() {
                confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors });
                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors });
                if (Date.now() < end) requestAnimationFrame(frame);
            })();
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-4 relative z-10 w-full overflow-y-auto pb-16">
            {/* Header */}
            <div className="relative md:absolute top-0 w-full flex flex-col items-center z-20 pt-8 pb-4 md:pt-6 mb-6 md:mb-0">
                <div className="bg-[#0d1f2e]/80 border border-[#44a6cc]/30 rounded-xl px-6 py-3 flex items-center justify-center gap-4 md:gap-8 mb-4">
                    <img src="images/bg-remove-logo.png" className="h-8 md:h-12 w-auto object-contain brightness-125" alt="The Last footprint" />
                    <div className="w-px h-6 bg-[#44a6cc]/30"></div>
                    <img src="images/ing-logo-removebg.png" className="h-6 md:h-10 w-auto object-contain brightness-125" alt="ING" />
                    <div className="w-px h-6 bg-[#44a6cc]/30"></div>
                    <img src="images/inosphere-logo-removebg.png" className="h-6 md:h-10 w-auto object-contain brightness-125" alt="Inosphere" />
                </div>
                <div className="h-px w-48 md:w-64 bg-gradient-to-r from-transparent via-[#44a6cc] to-transparent opacity-50 mb-3"></div>
                <p className="text-[#44a6cc] font-mono text-xs md:text-sm tracking-[0.3em] uppercase opacity-90 text-center font-bold">The Last footprint — Final Standings</p>
            </div>

            {/* Podium */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-6 w-full max-w-7xl h-auto md:h-[60vh] pb-12 mt-4 md:mt-40">
                <WinnerCard rank={2} player={winners[2].player} delay={0} isRevealed={revealed[2]} />
                <WinnerCard rank={1} player={winners[1].player} delay={0} isRevealed={revealed[1]} onAnimationEnd={triggerConfetti} />
                <WinnerCard rank={3} player={winners[3].player} delay={0} isRevealed={revealed[3]} />
            </div>
        </div>
    );
};

/* ── App Root ──────────────────────────────────────────────────────── */
const App = () => {
    const [stage, setStage] = useState('admin');
    const [winners, setWinners] = useState({
        1: { player: 'NULL_POINTER' },
        2: { player: 'SEGFAULT_KID' },
        3: { player: 'DROP_TABLES' }
    });

    return (
        <div className="min-h-screen w-full font-sans antialiased text-slate-200">
            {stage === 'admin' && <AdminPanel winners={winners} setWinners={setWinners} onStart={() => setStage('countdown')} />}
            {stage === 'countdown' && <Countdown onComplete={() => setStage('reveal')} />}
            {stage === 'reveal' && <WinnerRevealStage winners={winners} />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
