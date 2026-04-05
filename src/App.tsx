import React, { useEffect, useRef, useState } from 'react';
import { useLiveAPI, Mood, PersonalityConfig, PersonalityProfile } from './hooks/useLiveAPI';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, X } from 'lucide-react';

const moodColors: Record<Mood, string> = {
  calm: 'radial-gradient(circle at 30% 30%, #e879f9, #a855f7, #6366f1)',
  happy: 'radial-gradient(circle at 30% 30%, #fde047, #f97316, #ec4899)',
  energetic: 'radial-gradient(circle at 30% 30%, #ef4444, #f97316, #eab308)',
  thoughtful: 'radial-gradient(circle at 30% 30%, #2dd4bf, #0ea5e9, #6366f1)',
  melancholic: 'radial-gradient(circle at 30% 30%, #475569, #312e81, #1e1b4b)',
};

const moodShadows: Record<Mood, string> = {
  calm: '0 0 120px 30px rgba(168, 85, 247, 0.5), inset 0 0 60px rgba(255, 255, 255, 0.4)',
  happy: '0 0 120px 30px rgba(249, 115, 22, 0.5), inset 0 0 60px rgba(255, 255, 255, 0.4)',
  energetic: '0 0 120px 30px rgba(239, 68, 68, 0.5), inset 0 0 60px rgba(255, 255, 255, 0.4)',
  thoughtful: '0 0 120px 30px rgba(14, 165, 233, 0.5), inset 0 0 60px rgba(255, 255, 255, 0.4)',
  melancholic: '0 0 120px 30px rgba(49, 46, 129, 0.5), inset 0 0 60px rgba(255, 255, 255, 0.2)',
};

const moodLabels: Record<Mood, string> = {
  calm: 'Calm',
  happy: 'Happy',
  energetic: 'Energetic',
  thoughtful: 'Thoughtful',
  melancholic: 'Melancholic',
};

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showInterruption, setShowInterruption] = useState(false);
  const [personalityConfig, setPersonalityConfig] = useState<PersonalityConfig>({
    profile: 'companion',
    playfulness: 70,
    expressiveness: 80,
    formality: 30,
  });

  const { isAwake, status, feed, volume, mood, interruptionCount, awaken, sleep } = useLiveAPI(personalityConfig);
  const feedEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of feed
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [feed]);

  // Handle interruption visual feedback
  useEffect(() => {
    if (interruptionCount > 0) {
      setShowInterruption(true);
      const timer = setTimeout(() => setShowInterruption(false), 800);
      return () => clearTimeout(timer);
    }
  }, [interruptionCount]);

  // Calculate orb scale based on volume when awake
  const baseScale = isAwake ? 1.05 : 1;
  const volumeScale = isAwake ? 1 + volume * 1.5 : 1;
  const scale = Math.max(baseScale, volumeScale);

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-[#0a0b0f] border-r border-white/5 flex flex-col z-10 shadow-2xl">
        <div className="p-6 pb-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
          Conversation Feed
        </div>
        <div className="flex-1 overflow-y-auto p-6 pt-0 space-y-6 flex flex-col scrollbar-hide">
          {feed.length === 0 ? (
            <div className="text-white/30 italic text-sm mt-4">Say something to begin...</div>
          ) : (
            feed.map((msg, i) => (
              <div key={i} className={`text-sm leading-relaxed ${msg.role === 'user' ? 'text-white/70' : 'text-purple-300'}`}>
                <div className="text-[10px] font-bold tracking-widest opacity-50 mb-1 uppercase">
                  {msg.role === 'user' ? 'YOU' : 'KOOKIE'}
                </div>
                {msg.text}
              </div>
            ))
          )}
          <div ref={feedEndRef} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        
        {/* Header */}
        <div className="absolute top-20 flex flex-col items-center">
          <h1 className="text-5xl font-light tracking-tight mb-3">Kookie</h1>
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
            Adaptive AI Companion
          </p>
          {isAwake && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider text-white/70 uppercase"
            >
              Mood: {moodLabels[mood]}
            </motion.div>
          )}
        </div>

        {/* Orb Container */}
        <div className="relative flex items-center justify-center h-[400px] w-[400px]">
          {/* Interruption Ripple */}
          <AnimatePresence>
            {showInterruption && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute w-72 h-72 rounded-full border-2 border-white/50 z-20"
              />
            )}
          </AnimatePresence>

          {/* Outer Glow */}
          <motion.div 
            animate={{ 
              scale: isAwake ? [scale, scale * 1.02, scale] : 1,
              opacity: isAwake ? 1 : 0.6
            }}
            transition={{ 
              duration: isAwake ? 0.5 : 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-72 h-72 rounded-full"
            style={{
              background: moodColors[mood],
              boxShadow: isAwake 
                ? moodShadows[mood]
                : '0 0 60px 10px rgba(168, 85, 247, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.1)',
              filter: 'blur(2px)',
              transition: 'background 1s ease-in-out, box-shadow 1s ease-in-out'
            }}
          />
          
          {/* Inner Highlight */}
          <motion.div 
            animate={{ 
              scale: isAwake ? [scale * 0.9, scale * 0.92, scale * 0.9] : 0.9,
            }}
            transition={{ 
              duration: isAwake ? 1.5 : 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-72 h-72 rounded-full mix-blend-overlay"
            style={{
              background: 'radial-gradient(circle at 65% 65%, rgba(255,255,255,0.8) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Controls */}
        <div className="absolute bottom-20 flex flex-col items-center gap-6">
          <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase relative flex items-center justify-center">
            {status}
            <AnimatePresence>
              {showInterruption && (
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-full ml-3 text-red-400 whitespace-nowrap"
                >
                  (Interrupted)
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          
          <button
            onClick={isAwake ? sleep : awaken}
            className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] border border-white/20"
          >
            {isAwake ? 'Put to Sleep' : 'Awaken Kookie'}
          </button>
        </div>

        {/* Settings Button */}
        <button
          onClick={() => setShowSettings(true)}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
        >
          <Settings size={20} />
        </button>

        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-80 bg-[#0a0b0f] border-l border-white/5 shadow-2xl z-50 flex flex-col"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h2 className="text-sm font-bold tracking-widest text-white/70 uppercase">Personality</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 flex-1 overflow-y-auto space-y-8">
                {/* Profile Selection */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Profile</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['companion', 'professional', 'creative', 'mentor'] as PersonalityProfile[]).map((profile) => (
                      <button
                        key={profile}
                        onClick={() => setPersonalityConfig(prev => ({ ...prev, profile }))}
                        className={`py-2 px-3 rounded-lg text-xs font-medium capitalize border transition-all ${
                          personalityConfig.profile === profile
                            ? 'bg-white/10 border-white/20 text-white'
                            : 'bg-transparent border-white/5 text-white/50 hover:bg-white/5'
                        }`}
                      >
                        {profile}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Playfulness Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Playfulness</label>
                    <span className="text-xs text-white/50">{personalityConfig.playfulness}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={personalityConfig.playfulness}
                    onChange={(e) => setPersonalityConfig(prev => ({ ...prev, playfulness: parseInt(e.target.value) }))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between text-[10px] text-white/30">
                    <span>Serious</span>
                    <span>Joking</span>
                  </div>
                </div>

                {/* Expressiveness Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Expressiveness</label>
                    <span className="text-xs text-white/50">{personalityConfig.expressiveness}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={personalityConfig.expressiveness}
                    onChange={(e) => setPersonalityConfig(prev => ({ ...prev, expressiveness: parseInt(e.target.value) }))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between text-[10px] text-white/30">
                    <span>Stoic</span>
                    <span>Emotional</span>
                  </div>
                </div>

                {/* Formality Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Formality</label>
                    <span className="text-xs text-white/50">{personalityConfig.formality}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={personalityConfig.formality}
                    onChange={(e) => setPersonalityConfig(prev => ({ ...prev, formality: parseInt(e.target.value) }))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between text-[10px] text-white/30">
                    <span>Casual</span>
                    <span>Polite</span>
                  </div>
                </div>
                
                {isAwake && (
                  <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60 leading-relaxed">
                    Note: Personality changes will take effect on Kookie's next response.
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
