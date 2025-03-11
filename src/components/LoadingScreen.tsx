import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import useSound from 'use-sound';

export function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [playRocketSound] = useSound('/sounds/rocket.mp3', {
    volume: 0.5,
    onend: onLoadingComplete
  });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={onLoadingComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: -100 }}
        transition={{ duration: 2 }}
        onAnimationStart={() => playRocketSound()}
      >
        <Rocket className="w-16 h-16 text-white" />
      </motion.div>
    </motion.div>
  );
}