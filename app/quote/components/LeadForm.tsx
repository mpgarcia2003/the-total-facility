'use client';

import { useState, useEffect } from 'react';
import { LeadData, QuoteCalculations, ClientInfo } from '../types';
import { Mail, Phone, Building2, User, CheckCircle2 } from 'lucide-react';

interface LeadFormProps {
  quote: QuoteCalculations;
  clientInfo: ClientInfo;
  onSubmit: (data: LeadData) => void;
  onSchedule: () => void;
}

export default function LeadForm({ quote, clientInfo, onSubmit, onSchedule }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    bestTime: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync with ClientInfo changes from the top of the app
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      name: clientInfo.name || prev.name,
      email: clientInfo.email || prev.email,
      phone: clientInfo.phone || prev.phone,
      // Map address to company if company is empty, purely as a helper
      company: (!prev.company && clientInfo.address) ? clientInfo.address : prev.company
    }));
  }, [clientInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send payload to API here
    console.log("LEAD SUBMITTED", { ...formData, quoteDetails: quote });
    
    // Trigger analytics
    console.log("Analytics: lead_submitted");
    
    setSubmitted(true);
    onSubmit(formData);
  };

  const handleChange = (field: keyof LeadData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-teal-400/20 to-slate-900 border border-teal-400/30 rounded-2xl p-10 text-center">
        <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(45,212,191,0.4)]">
          <CheckCircle2 size={40} className="text-slate-900" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">Quote Request Received!</h3>
        <p className="text-slate-300 mb-6">
          Thank you, <span className="text-teal-400">{formData.name}</span>. We have sent a copy of this estimate to 
          <span className="text-teal-400"> {formData.email}</span>.
        </p>
        <p className="text-sm text-slate-400">
          Our representative <strong>{clientInfo.repName}</strong> will contact you shortly to confirm the walkthrough details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">Save This Quote & Schedule</h3>
        <p className="text-slate-400 mb-8">Finalize your request to lock in this estimated pricing.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Your Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-slate-500" size={18} />
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Company / Facility</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 text-slate-500" size={18} />
                <input 
                  required
                  type="text" 
                  value={formData.company}
                  onChange={e => handleChange('company', e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                  placeholder="Acme Academy"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-500" size={18} />
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-slate-500" size={18} />
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Best time to reach you?</label>
            <input 
              type="text" 
              value={formData.bestTime}
              onChange={e => handleChange('bestTime', e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all outline-none"
              placeholder="e.g., Weekday mornings"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-teal-400 to-teal-500 text-slate-900 font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] transition-all transform hover:-translate-y-1"
            >
              Send Formal Proposal
            </button>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                console.log("Analytics: walkthrough_clicked");
                onSchedule();
              }}
              className="flex-1 bg-slate-800 text-white font-bold py-4 rounded-xl border border-slate-700 hover:bg-slate-700 transition-all"
            >
              Schedule Walkthrough
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
