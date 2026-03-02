'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  show: boolean;
  message: string;
  onDismiss?: () => void;
}

export function Toast({ show, message, onDismiss }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2"
        >
          <div
            className="gold-border flex items-center gap-3 rounded-xl bg-[#0f0f0f] px-6 py-4 shadow-premium"
            role="alert"
          >
            <span className="font-medium text-[#c9a227]">✓</span>
            <p className="text-sm text-white">{message}</p>
            {onDismiss && (
              <button
                type="button"
                onClick={onDismiss}
                className="ml-2 text-zinc-400 hover:text-white"
                aria-label="Dismiss"
              >
                ×
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
