import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  PricingSettings, 
  RoomType, 
  PorterService, 
  ClientInfo, 
  QuoteCalculations 
} from './types';
import { DEFAULT_PRICING_SETTINGS, DEFAULT_ROOMS, DEFAULT_PORTERS } from './constants';
import { calculateQuote } from './utils/pricing';
import { formatCurrency, formatTime, formatDate } from './utils/format';

// Components
import RoomList from './components/RoomList';
import PorterList from './components/PorterList';
import LeadForm from './components/LeadForm';
import SchedulingModal from './components/SchedulingModal';
import { 
  MapPin, 
  Calendar, 
  User, 
  Sparkles, 
  ArrowRight, 
  LayoutDashboard,
  Clock,
  DollarSign
} from './components/ui/Icons';

const App: React.FC = () => {
  // --- STATE ---
  const [settings, setSettings] = useState<PricingSettings>(DEFAULT_PRICING_SETTINGS);
  const [rooms, setRooms] = useState<RoomType[]>(DEFAULT_ROOMS);
  const [porters, setPorters] = useState<PorterService[]>(DEFAULT_PORTERS);
  
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: '',
    address: '',
    email: '',
    phone: '',
    walkthroughDate: new Date().toISOString().split('T')[0],
    repName: 'Yasmin Peralta'
  });

  const [includeSummer, setIncludeSummer] = useState(false);
  const [includeWinter, setIncludeWinter] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  // --- REFS ---
  const calculatorRef = useRef<HTMLDivElement>(null);

  // --- DERIVED STATE ---
  const quote = useMemo(() => {
    return calculateQuote(rooms, porters, settings, includeSummer, includeWinter);
  }, [rooms, porters, settings, includeSummer, includeWinter]);

  // --- EFFECTS ---
  useEffect(() => {
    console.log("Analytics: quote_started");
  }, []);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenScheduler = () => {
    setIsSchedulerOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-darker text-slate-200 selection:bg-brand-accent selection:text-brand-darker">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-slate-900 to-transparent opacity-80" />
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-[20%] -left-[100px] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-8 md:py-12">
        
        {/* HERO SECTION */}
        <header className="mb-16 md:mb-24 text-center space-y-6 pt-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-accent mb-4">
            <Sparkles size={12} />
            <span>AI-Powered Pricing Engine</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Instant Janitorial Quote <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
              In Under 2 Minutes
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transparent, data-driven facility service pricing for NYC schools and offices. 
            No hidden fees, just precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={scrollToCalculator}
              className="px-8 py-4 bg-brand-accent hover:bg-teal-300 text-slate-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] flex items-center justify-center gap-2"
            >
              Start Instant Quote <ArrowRight size={18} />
            </button>
            <button 
              onClick={handleOpenScheduler}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all"
            >
              Schedule Walkthrough
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start" ref={calculatorRef}>
          
          {/* LEFT COLUMN: CALCULATOR */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Client Info Card */}
            <section className="bg-brand-dark/50 border border-brand-glassBorder rounded-2xl p-6 backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <LayoutDashboard className="text-brand-accent" size={20} /> Project Details
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 uppercase">Client Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-slate-600" size={16} />
                    <input 
                      type="text" 
                      placeholder="Enter Name"
                      value={clientInfo.name}
                      onChange={e => setClientInfo({...clientInfo, name: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-10 text-sm focus:border-brand-accent focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 uppercase">Location Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-slate-600" size={16} />
                    <input 
                      type="text" 
                      placeholder="123 Broadway, NYC"
                      value={clientInfo.address}
                      onChange={e => setClientInfo({...clientInfo, address: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-10 text-sm focus:border-brand-accent focus:outline-none"
                    />
                  </div>
                </div>
                {/* 
                  Walkthrough Date input removed from Project Details as requested implicitly 
                  by focusing on the scheduler iframe. Or we can keep it as a "requested date".
                  The user asked "Is the project details active and working" and then asked to embed the calendar.
                  I'll keep the date field but maybe the calendar is better. 
                  However, keeping the date field allows manual entry if they don't want to use the scheduler right now.
                  I will leave it as is for data collection flexibility.
                */}
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 uppercase">Walkthrough Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-slate-600" size={16} />
                    <input 
                      type="date" 
                      value={clientInfo.walkthroughDate}
                      onChange={e => setClientInfo({...clientInfo, walkthroughDate: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-10 text-sm focus:border-brand-accent focus:outline-none text-slate-300"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 uppercase">Sales Rep</label>
                  <input 
                    type="text" 
                    value={clientInfo.repName}
                    onChange={e => setClientInfo({...clientInfo, repName: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-3 text-sm focus:border-brand-accent focus:outline-none text-brand-accent font-medium"
                  />
                </div>
              </div>
            </section>

            {/* 2. Room Calculator */}
            <section className="bg-brand-dark/50 border border-brand-glassBorder rounded-2xl p-6 backdrop-blur-xl">
              <RoomList rooms={rooms} onChange={setRooms} />
              
              {/* Daily Time Summary */}
              <div className="mt-6 p-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl border border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-accent/10 rounded text-brand-accent">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Total Daily Time</div>
                    <div className="text-sm text-slate-500">Based on room minutes</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{quote.totalDailyMinutes.toLocaleString()} <span className="text-sm font-normal text-slate-500">mins</span></div>
                  <div className="text-sm text-brand-accent font-mono">{quote.totalDailyHours.toFixed(2)} hours</div>
                </div>
              </div>
            </section>

            {/* 3. Porter Services */}
            <section className="bg-brand-dark/50 border border-brand-glassBorder rounded-2xl p-6 backdrop-blur-xl">
              <PorterList porters={porters} onChange={setPorters} />
            </section>

            {/* 4. Configuration (Settings) - HIDDEN RATES, ONLY DAYS VISIBLE */}
            <section className="bg-brand-dark/50 border border-brand-glassBorder rounded-2xl p-6 backdrop-blur-xl space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">3</span>
                <h3 className="text-xl font-semibold text-white">Pricing Parameters</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                  <label className="text-[10px] text-slate-500 uppercase font-bold">Days / Month</label>
                  <input 
                    type="number" 
                    value={settings.daysInMonth}
                    onChange={e => setSettings({...settings, daysInMonth: parseFloat(e.target.value)})}
                    className="w-full md:w-1/2 bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-white focus:border-brand-accent focus:outline-none"
                  />
                  <p className="text-xs text-slate-500">Standard commercial month is 22 days.</p>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN: STICKY SUMMARY */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
            
            {/* Quote Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-1">Estimated Monthly Total</h3>
                  <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    {formatCurrency(quote.grandTotal)}
                    <span className="text-lg text-slate-500 font-normal">/mo</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Subject to walkthrough verification on {formatDate(clientInfo.walkthroughDate)}
                  </p>
                </div>

                <div className="h-px bg-slate-800"></div>

                {/* Line Items */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Cleaning Services ({formatTime(quote.monthlyCleaningHours)} hrs)</span>
                    <span className="text-white font-medium">{formatCurrency(quote.cleaningTotal)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Day Porter ({formatTime(quote.monthlyPorterHours)} hrs)</span>
                    <span className="text-white font-medium">{formatCurrency(quote.porterTotal)}</span>
                  </div>

                  {/* Add-on Toggles in Summary */}
                  <div className="pt-2 space-y-2">
                    <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${includeSummer ? 'bg-brand-accent/10 border-brand-accent text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          checked={includeSummer} 
                          onChange={e => setIncludeSummer(e.target.checked)}
                          className="w-4 h-4 rounded text-brand-accent focus:ring-brand-accent bg-slate-800 border-slate-600"
                        />
                        <span className="text-xs font-semibold uppercase">Summer Strip & Wax</span>
                      </div>
                      <span className="text-sm">{formatCurrency(quote.summerStripCost)}</span>
                    </label>

                    <label className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${includeWinter ? 'bg-brand-accent/10 border-brand-accent text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          checked={includeWinter} 
                          onChange={e => setIncludeWinter(e.target.checked)}
                          className="w-4 h-4 rounded text-brand-accent focus:ring-brand-accent bg-slate-800 border-slate-600"
                        />
                        <span className="text-xs font-semibold uppercase">Winter Wash & Wax</span>
                      </div>
                      <span className="text-sm">{formatCurrency(quote.winterWashCost)}</span>
                    </label>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 5. Lead Capture Section */}
        <div className="mt-16 lg:mt-24 max-w-3xl mx-auto">
          <LeadForm 
            quote={quote} 
            clientInfo={clientInfo} 
            onSubmit={() => {}} 
            onSchedule={handleOpenScheduler}
          />
        </div>

        {/* FOOTER */}
        <footer className="mt-20 text-center text-slate-600 text-sm pb-24 md:pb-8">
          <p>&copy; {new Date().getFullYear()} The Total Facility Services Group. All rights reserved.</p>
        </footer>

      </div>

      {/* MOBILE STICKY CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 p-4 z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase text-slate-400">Est. Total</div>
            <div className="text-xl font-bold text-white">{formatCurrency(quote.grandTotal)}</div>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="bg-brand-accent text-slate-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2"
          >
            Get Quote <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* SCHEDULING MODAL */}
      <SchedulingModal 
        isOpen={isSchedulerOpen} 
        onClose={() => setIsSchedulerOpen(false)} 
      />

    </div>
  );
};

export default App;