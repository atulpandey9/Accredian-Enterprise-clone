import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

export default function LeadModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setFormData({ name: "", email: "", phone: "", company: "", domain: "", candidates: "" });
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex overflow-hidden relative z-10 animate-in fade-in zoom-in duration-300">
        
        {/* Left Side: Image */}
        <div className="hidden md:block w-5/12 bg-blue-50 relative">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Consulting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
          <div className="absolute bottom-10 left-8 right-8 text-white">
            <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">Elevate Your Team</h3>
            <p className="text-white/90 drop-shadow-sm font-medium">Join 200+ enterprises transforming their workforce.</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 p-8 md:p-12 relative h-[80vh] overflow-y-auto">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600 font-medium">We have received your enquiry. Our team will contact you shortly.</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Enquire <span className="text-primary">Now</span></h2>
              <p className="text-gray-600 mb-8 font-medium">Fill in your details below and we'll get back to you.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-primary outline-none py-2 transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-primary outline-none py-2 transition-colors" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-primary outline-none py-2 transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Company Name</label>
                  <input required type="text" name="company" value={formData.company} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-primary outline-none py-2 transition-colors" placeholder="Acme Corp" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Select Domain</label>
                    <select required name="domain" value={formData.domain} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-primary outline-none py-2 transition-colors bg-white">
                      <option value="" disabled>Choose Domain</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Product Management">Product Management</option>
                      <option value="Leadership">Leadership Elevation</option>
                      <option value="Tech">Tech & Data Insights</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">No. of Candidates</label>
                    <select required name="candidates" value={formData.candidates} onChange={handleChange} className="w-full border-b-2 border-gray-200 focus:border-primary outline-none py-2 transition-colors bg-white">
                      <option value="" disabled>Select Range</option>
                      <option value="1-10">1 - 10</option>
                      <option value="11-50">11 - 50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-lg font-bold text-lg transition-colors mt-8 flex justify-center items-center cursor-pointer disabled:opacity-70"
                >
                  {status === "loading" ? "Submitting..." : "Submit Enquiry"}
                </button>
                {status === "error" && <p className="text-red-500 text-center mt-2 font-medium">Something went wrong. Please try again.</p>}
              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
