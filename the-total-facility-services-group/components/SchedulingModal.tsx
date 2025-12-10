import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchedulingModal: React.FC<SchedulingModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Load the Acuity script dynamically to ensure it runs when modal opens
    if (isOpen) {
      const script = document.createElement('script');
      script.src = "https://embed.acuityscheduling.com/js/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-darker/90 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl h-[85vh] bg-brand-dark border border-brand-glassBorder rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-float">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-brand-glassBorder bg-brand-dark/50">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            Schedule Your Walkthrough
          </h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 overflow-y-auto bg-white">
          <iframe 
            src="https://app.acuityscheduling.com/schedule.php?owner=35455135&ref=embedded_csp" 
            title="Schedule Appointment" 
            width="100%" 
            height="800" 
            frameBorder="0" 
            className="w-full min-h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SchedulingModal;