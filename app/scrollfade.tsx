'use client';
import { motion } from 'framer-motion';

 
import { usePathname } from 'next/navigation';

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname} 
      initial={{ opacity: -20, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}