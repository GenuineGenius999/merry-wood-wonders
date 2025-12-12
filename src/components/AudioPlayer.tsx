import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl?: string;
}

const AudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioUrl) {
      setHasAudio(true);
    }
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current || !hasAudio) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      className="wood-frame p-4 md:p-6 inline-flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {hasAudio && <audio ref={audioRef} src={audioUrl} loop />}
      
      <motion.button
        onClick={togglePlay}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-christmas-red flex items-center justify-center text-cream hover:bg-christmas-red-light transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={!hasAudio}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
      </motion.button>

      <div className="flex flex-col">
        <span className="font-christmas text-lg md:text-xl text-gold">
          {hasAudio ? 'Christmas Music' : 'Add Your Audio'}
        </span>
        <span className="text-sm text-muted-foreground">
          {hasAudio ? (isPlaying ? 'Now Playing' : 'Click to Play') : 'Paste audio URL in code'}
        </span>
      </div>

      {hasAudio && (
        <motion.button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>
      )}

      {/* Animated music notes */}
      {isPlaying && (
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-gold rounded-full"
              animate={{ height: [8, 20, 8] }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AudioPlayer;
