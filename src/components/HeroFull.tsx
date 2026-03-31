import React, { useState } from 'react';
import { FaultyTerminalBackground } from './FaultyTerminalBackground';
import { RefreshCw, Play, Pause, Settings2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function HeroFull() {
  const [key, setKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const [config, setConfig] = useState({
    scale: 1.5,
    scanlineIntensity: 1.0,
    glitchAmount: 1.2,
    curvature: 0.1,
    brightness: 1.0,
    tint: '#ffffff',
  });

  return (
    <div className="relative w-full h-screen min-h-[600px] bg-[#010102] overflow-hidden rounded-none lg:rounded-3xl border border-white/10">
      <FaultyTerminalBackground
        key={key}
        scale={config.scale}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={1}
        pause={isPaused}
        scanlineIntensity={config.scanlineIntensity}
        glitchAmount={config.glitchAmount}
        flickerAmount={1}
        noiseAmp={1}
        chromaticAberration={2}
        dither={0.1}
        curvature={config.curvature}
        tint={config.tint}
        mouseReact={true}
        mouseStrength={0.5}
        pageLoadAnimation={true}
        brightness={config.brightness}
        className="absolute inset-0 z-0"
      />

      <svg className="hidden">
        <filter id="glass-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>

      <div className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-4 md:gap-5 z-20">
        {['ABOUT', 'PROJECTS', 'EXPERIENCE'].map((item) => (
          <motion.button
            key={item}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            className="px-10 md:px-12 py-4 md:py-4.5 bg-white/[0.02] backdrop-blur-[40px] border border-white/10 text-white/60 text-[15px] md:text-[16px] font-mono font-bold tracking-[0.25em] uppercase hover:text-white transition-all shadow-xl cursor-pointer relative overflow-hidden group"
            style={{
              borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
            }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{ filter: 'url(#glass-noise)' }} />
            <span className="relative z-10">{item}</span>
            <motion.div
              variants={{
                initial: { scale: 0, x: '-50%', y: '-50%', opacity: 0 },
                hover: { scale: 1.5, x: '-50%', y: '-50%', opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 w-20 md:w-28 h-20 md:h-28 bg-gradient-to-tr from-blue-500/30 via-purple-600/20 to-transparent rounded-full blur-2xl pointer-events-none"
            />
          </motion.button>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center p-6 md:p-12 lg:p-16 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100, filter: 'blur(20px)' }}
          animate={{
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 1.8, ease: 'easeOut' },
            x: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 1.8 },
            y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="max-w-xl p-10 md:p-12 lg:p-16 bg-white/[0.01] backdrop-blur-[60px] border border-white/5 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] pointer-events-auto relative overflow-hidden group"
        >
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{ filter: 'url(#glass-noise)' }} />
          <div className="absolute -top-20 -left-20 w-[240px] h-[240px] md:w-[300px] md:h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[240px] h-[240px] md:w-[300px] md:h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.45em] text-white/80 mb-7"
            >
              3D Design // UI/UX Design // AIGC
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-5xl md:text-6xl lg:text-[5.8rem] font-mono tracking-tighter leading-[0.85] mb-7 md:mb-9"
            >
              WEIQI
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/60 to-white/10">
                HAN
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1.2 }}
              className="space-y-6"
            >
              <p className="text-white/70 font-mono text-xs md:text-sm leading-relaxed max-w-md">
                Master of Creative Media (HCI) @ CityU HK.
                Architect turned Interaction Designer.
                Synthesizing spatial logic with digital entropy to craft immersive human-machine experiences.
              </p>

              <div className="flex items-center gap-6 pt-4">
                <div className="h-[1px] w-16 bg-gradient-to-r from-white/20 to-transparent" />
                <div className="flex flex-wrap gap-1">
                  {['HCI Researcher', 'Designer', 'AIGC Developer'].map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.75 }}
                      transition={{ delay: 1.5 + i * 0.1 }}
                      className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.18em] text-white"
                    >
                      {skill}
                      {i < 3 ? ' · ' : ''}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-4 md:gap-6 z-20">
        <motion.button
          whileHover={{ scale: 1.2, rotate: 180, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          whileTap={{ scale: 0.8 }}
          onClick={() => setShowControls(!showControls)}
          className="p-4 md:p-6 bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-full text-white/40 hover:text-white transition-all shadow-2xl cursor-pointer"
        >
          <Settings2 size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          whileTap={{ scale: 0.8 }}
          onClick={() => setKey((prev) => prev + 1)}
          className="p-4 md:p-6 bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-full text-white/40 hover:text-white transition-all shadow-2xl cursor-pointer"
        >
          <RefreshCw size={20} className={key > 0 ? 'animate-spin-slow' : ''} />
        </motion.button>
      </div>

      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="absolute right-6 md:right-12 bottom-28 md:bottom-36 w-80 md:w-96 bg-black/30 backdrop-blur-[80px] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-12 text-white z-30 shadow-[0_80px_160px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{ filter: 'url(#glass-noise)' }} />

            <div className="flex items-center justify-between mb-8 md:mb-12 relative z-10">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/50">
                Configuration
              </h3>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              >
                {isPaused ? <Play size={18} /> : <Pause size={18} />}
              </button>
            </div>

            <div className="space-y-8 md:space-y-10 relative z-10">
              {[
                { label: 'Scale', key: 'scale', min: 0.5, max: 4, step: 0.1 },
                { label: 'Glitch', key: 'glitchAmount', min: 0, max: 5, step: 0.1 },
                { label: 'Curvature', key: 'curvature', min: 0, max: 0.5, step: 0.01 },
                { label: 'Brightness', key: 'brightness', min: 0, max: 2, step: 0.1 },
              ].map((param) => (
                <div key={param.key} className="space-y-3 md:space-y-4">
                  <div className="flex justify-between text-[10px] uppercase text-white/60 font-mono tracking-[0.18em]">
                    <span>{param.label}</span>
                    <span>
                      {(config as any)[param.key].toFixed(param.step < 0.1 ? 2 : 1)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={param.min}
                    max={param.max}
                    step={param.step}
                    value={(config as any)[param.key]}
                    onChange={(e) =>
                      setConfig({ ...config, [param.key]: parseFloat(e.target.value) })
                    }
                    className="w-full accent-white/20 bg-white/10 h-[2px] rounded-full appearance-none cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 30px rgba(255,255,255,1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(2);
          background: #60a5fa;
        }
      `}</style>
    </div>
  );
}

