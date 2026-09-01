import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, ArrowRight, FileText, Lock, CheckCircle2, Download, X, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";

const JOBS = [
  { id: 1, title: "Production Manager", department: "Operations", type: "Full-Time", location: "Ormeau QLD" },
  { id: 2, title: "Quality Assurance Specialist", department: "Quality", type: "Full-Time", location: "Ormeau QLD" },
  { id: 3, title: "Delivery Driver", department: "Logistics", type: "Casual", location: "Melbourne VIC" },
];

export default function Careers() {
  const [showPortal, setShowPortal] = useState(false);
  const [showApplyPortal, setShowApplyPortal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [error, setError] = useState("");
  const [offerData, setOfferData] = useState<any>(null);
  const [isLoadingOffer, setIsLoadingOffer] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (employeeId.trim().length >= 4) {
      setIsLoadingOffer(true);
      setError("");
      try {
        const response = await fetch(`https://offer-letter-app-one.vercel.app/api/v1/public/offers?companyId=6a953d810e972f85771656a9&reference=${employeeId}`);
        const data = await response.json();
        
        if (data.success && data.data) {
          setOfferData(data.data);
          setIsAuthenticated(true);
          setError("");
        } else {
          setError("Incorrect reference number");
        }
      } catch (err) {
        setError("Incorrect reference number");
      } finally {
        setIsLoadingOffer(false);
      }
    } else {
      setError("Please enter a valid Reference Number (min 4 characters)");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmployeeId("");
  };

  const closePortal = () => {
    setShowPortal(false);
    setIsAuthenticated(false);
    setEmployeeId("");
    setError("");
    setOfferData(null);
  };

  const openApplyForm = (jobId: number) => {
    setSelectedJob(jobId);
    setShowApplyPortal(true);
    setApplySuccess(false);
  };

  const closeApplyForm = () => {
    setShowApplyPortal(false);
    setSelectedJob(null);
    setApplySuccess(false);
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplying(true);
    // Fake API call
    setTimeout(() => {
      setIsApplying(false);
      setApplySuccess(true);
      if (e.target instanceof HTMLFormElement) {
        e.target.reset();
      }
      // Auto close after 3s
      setTimeout(() => closeApplyForm(), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 text-accent mb-6">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Join Our Team</span>
            <div className="w-8 h-[1px] bg-accent"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-dark font-bold mb-6">
            Careers at Raybek <span className="italic text-primary">Foods</span>
          </h1>
          <p className="text-foreground/70 text-lg mb-8">
            We are always looking for passionate people to join our growing family. Help us craft the finest gourmet foods in Australia.
          </p>
          <Button 
            onClick={() => setShowPortal(true)} 
            variant="outline" 
            className="rounded-full py-6 px-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <Lock className="w-4 h-4 mr-2" />
            View My Offer Letter
          </Button>
        </motion.div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-serif text-3xl font-bold text-dark mb-8 text-center">Open Positions</h2>
          
          {JOBS.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg shadow-primary/5 border border-primary/10 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary/30 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {job.department}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center text-foreground/60 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
              </div>
              <Button onClick={() => openApplyForm(job.id)} className="rounded-full group-hover:bg-accent transition-colors md:w-auto w-full">
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Apply Form Modal */}
      <AnimatePresence>
        {showApplyPortal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[40px] shadow-2xl overflow-hidden w-full max-w-2xl relative max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={closeApplyForm}
                className="absolute top-6 right-6 w-10 h-10 bg-secondary/50 hover:bg-secondary rounded-full flex items-center justify-center transition-colors z-20"
              >
                <X className="w-5 h-5 text-dark" />
              </button>

              <div className="p-10 md:p-12 relative overflow-y-auto flex-1 min-h-0" data-lenis-prevent="true">
                <AnimatePresence>
                  {applySuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-10 text-center"
                    >
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="font-serif text-3xl font-bold text-dark mb-4">Application Sent!</h3>
                      <p className="text-foreground/70 text-lg">Thank you for applying. We will review your application and get back to you soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-dark text-center mb-2">Apply Now</h2>
                  <p className="text-foreground/60 text-center mb-8">
                    {selectedJob && JOBS.find(j => j.id === selectedJob)?.title}
                  </p>
                  
                  <form onSubmit={handleApply} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-xs uppercase tracking-widest font-bold text-dark/70">First Name</label>
                        <input type="text" id="firstName" required className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-xs uppercase tracking-widest font-bold text-dark/70">Last Name</label>
                        <input type="text" id="lastName" required className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-dark/70">Email Address</label>
                      <input type="email" id="email" required className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-dark/70">Phone Number</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="resume" className="text-xs uppercase tracking-widest font-bold text-dark/70">Resume / CV</label>
                      <input type="file" id="resume" required className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="coverLetter" className="text-xs uppercase tracking-widest font-bold text-dark/70">Cover Letter (Optional)</label>
                      <textarea id="coverLetter" rows={4} className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark resize-none"></textarea>
                    </div>
                    
                    <Button type="submit" size="lg" disabled={isApplying} className="w-full rounded-full py-6 text-sm tracking-wide mt-4 group relative overflow-hidden">
                      <span className={isApplying ? "opacity-0" : "opacity-100 flex items-center"}>
                        Submit Application
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {isApplying && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portal Modal */}
      <AnimatePresence>
        {showPortal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[40px] shadow-2xl overflow-hidden w-full max-w-2xl relative max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={closePortal}
                className="absolute top-6 right-6 w-10 h-10 bg-secondary/50 hover:bg-secondary rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-dark" />
              </button>

              <div className="p-10 md:p-12 overflow-y-auto flex-1 min-h-0" data-lenis-prevent="true">
                {!isAuthenticated ? (
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lock className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-dark text-center mb-2">Employee Portal</h2>
                    <p className="text-foreground/60 text-center mb-8">Enter your Reference Number to securely view your offer letter.</p>
                    
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="employeeId" className="text-xs uppercase tracking-widest font-bold text-dark/70">Reference Number</label>
                        <input 
                          type="text" 
                          id="employeeId" 
                          value={employeeId}
                          onChange={(e) => setEmployeeId(e.target.value)}
                          placeholder="e.g. OFF-2026-000001"
                          className="w-full px-4 py-4 rounded-xl border-2 border-secondary focus:outline-none focus:border-primary focus:ring-0 transition-colors bg-secondary/30 text-dark" 
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                      </div>
                      
                      <Button type="submit" size="lg" disabled={isLoadingOffer} className="w-full rounded-full py-6 text-sm tracking-wide group relative overflow-hidden">
                         <span className={isLoadingOffer ? "opacity-0" : "opacity-100 flex items-center"}>
                          Access Offer Letter
                        </span>
                        {isLoadingOffer && (
                          <span className="absolute inset-0 flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div>
                    <div className="bg-white p-8 rounded-[32px] border border-primary/10 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                        <FileText className="w-48 h-48 text-primary" />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="border-b border-secondary pb-6 mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div className="flex flex-col sm:items-start">
                            <img src="/logo.svg" alt="Raybek Foods Logo" className="h-8 w-auto mb-2" />
                            <div className="text-sm text-foreground/60">Official Formal Offer Letter</div>
                          </div>
                          <div className="text-left sm:text-right flex flex-col sm:items-end">
                            <div className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold mb-2">
                              STATUS: {offerData?.status || "APPROVED"}
                            </div>
                            <div className="text-sm text-foreground/60">Ref: {offerData?.reference}</div>
                            <div className="text-sm text-foreground/60">Date: {new Date(offerData?.createdAt || Date.now()).toLocaleDateString('en-GB')}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-6 text-foreground/80 text-sm leading-relaxed">
                          <div className="whitespace-pre-line text-dark">
                            {offerData?.offerContent || "We are delighted to formally offer you a position."}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
