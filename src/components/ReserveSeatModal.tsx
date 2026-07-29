"use client";

import { useState, useEffect } from "react";
import { FiX, FiCheckCircle, FiAlertCircle, FiSend, FiCopy, FiCheck, FiUploadCloud, FiFileText } from "react-icons/fi";
import { FaLandmark } from "react-icons/fa";

interface ReserveSeatModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export default function ReserveSeatModal({
  isOpen,
  onClose,
  defaultCourse = "Norani Qaida & Basic Quran for Kids ($10/mo)",
}: ReserveSeatModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse,
    message: "",
  });

  const [screenshotBase64, setScreenshotBase64] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Lock background page scroll completely when popup modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const payload = {
        ...formData,
        paymentScreenshot: screenshotBase64,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message || "We will confirm your seat within 24 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: defaultCourse,
          message: "",
        });
        setScreenshotBase64("");
        setFileName("");
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to submit reservation.");
      }
    } catch (err) {
      setStatus("error");
      setResponseMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[999] w-screen h-screen min-h-screen flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto bg-sage-950/98 backdrop-blur-2xl animate-in fade-in duration-200 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-4xl bg-cream-50 sm:rounded-3xl rounded-none shadow-2xl border border-sage-300 overflow-hidden flex flex-col my-auto max-h-screen sm:max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-sage-900 text-cream-50 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between border-b border-sage-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold-400 flex-shrink-0 bg-sage-950 p-0.5 shadow-md">
              <img
                src="/logo.png"
                alt="Huzaifa's Online Quran Classes Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-extrabold text-gold-400 uppercase tracking-widest block leading-tight">
                Huzaifa's Online Quran Classes
              </span>
              <h2 className="font-serif font-bold text-base sm:text-xl text-cream-50 leading-tight">
                Reserve Your Quran Seat
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-sage-800 text-cream-100 flex items-center justify-center hover:bg-sage-700 hover:text-gold-400 transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Hidden Scrollbar */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 font-sans [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Meezan Bank Info Box */}
          <div className="bg-sage-900 text-cream-50 rounded-xl p-3.5 sm:p-4 border border-gold-500/40 space-y-2.5 shadow-sm">
            <div className="flex items-center gap-2 border-b border-sage-800 pb-2">
              <FaLandmark className="text-gold-400 text-sm flex-shrink-0" />
              <h3 className="font-serif font-bold text-xs sm:text-sm text-gold-400">
                Meezan Bank Account Details
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="bg-sage-950/70 p-2.5 rounded-lg border border-sage-800">
                <span className="text-sage-300 font-bold block uppercase text-[9px] tracking-wider">
                  Receiver Name
                </span>
                <span className="text-cream-50 font-extrabold text-xs sm:text-sm block mt-0.5">
                  Huzaifa Khan
                </span>
              </div>

              <div className="bg-sage-950/70 p-2.5 rounded-lg border border-sage-800">
                <span className="text-sage-300 font-bold block uppercase text-[9px] tracking-wider">
                  Bank Name
                </span>
                <span className="text-cream-50 font-extrabold text-xs sm:text-sm block mt-0.5">
                  Meezan Bank
                </span>
              </div>

              <div className="bg-sage-950/70 p-2.5 rounded-lg border border-sage-800 flex items-center justify-between col-span-2 md:col-span-1">
                <div>
                  <span className="text-sage-300 font-bold block uppercase text-[9px] tracking-wider">
                    Account Number
                  </span>
                  <span className="text-gold-400 font-mono font-extrabold text-xs sm:text-sm block mt-0.5 select-all">
                    03260113711856
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("03260113711856", "account")}
                  className="p-1.5 rounded bg-gold-400/20 text-gold-400 hover:bg-gold-400/30 transition-colors"
                  title="Copy Account Number"
                >
                  {copiedField === "account" ? <FiCheck className="w-3.5 h-3.5 text-green-400" /> : <FiCopy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="bg-sage-950/70 p-2.5 rounded-lg border border-sage-800 flex items-center justify-between col-span-2 md:col-span-1">
                <div className="min-w-0 flex-1">
                  <span className="text-sage-300 font-bold block uppercase text-[9px] tracking-wider">
                    IBAN
                  </span>
                  <span className="text-gold-400 font-mono font-extrabold text-[11px] sm:text-xs block mt-0.5 select-all break-all">
                    PK40MEZN0003260113711856
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("PK40MEZN0003260113711856", "iban")}
                  className="p-1.5 rounded bg-gold-400/20 text-gold-400 hover:bg-gold-400/30 transition-colors flex-shrink-0"
                  title="Copy IBAN"
                >
                  {copiedField === "iban" ? <FiCheck className="w-3.5 h-3.5 text-green-400" /> : <FiCopy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Feedback Toasts */}
          {status === "success" && (
            <div className="p-3.5 rounded-xl bg-sage-100 border border-sage-300 text-sage-900 text-xs flex items-start gap-2.5">
              <FiCheckCircle className="text-sage-700 w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-sm">Seat Reserved Successfully!</p>
                <p className="font-bold text-sage-900 mt-0.5">{responseMsg}</p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-start gap-2.5">
              <FiAlertCircle className="text-red-600 w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-sm">Reservation Error</p>
                <p className="font-semibold text-red-800 mt-0.5">{responseMsg}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Huzaifa Khan"
                  className="w-full px-3 py-2 rounded-lg bg-cream-100 border border-sage-300 text-xs font-bold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="huzaifa@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-cream-100 border border-sage-300 text-xs font-bold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 326 0113711"
                  className="w-full px-3 py-2 rounded-lg bg-cream-100 border border-sage-300 text-xs font-bold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                  Selected Program *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-cream-100 border border-sage-300 text-xs font-extrabold text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-700"
                >
                  <option value="Norani Qaida & Basic Quran for Kids ($10/mo)">
                    Norani Qaida & Basic Quran ($10/mo)
                  </option>
                  <option value="Quran Reading & Tajweed Rules ($20/mo)">
                    Quran Reading & Tajweed ($20/mo)
                  </option>
                  <option value="Full Quran Hifz Program ($50/mo)">
                    Full Quran Hifz Program ($50/mo)
                  </option>
                </select>
              </div>
            </div>

            {/* Payment Screenshot File Upload */}
            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                Upload Payment Screenshot / Receipt Proof
              </label>
              <div className="relative border border-dashed border-sage-300 rounded-lg p-2.5 bg-cream-100 hover:bg-sage-50 transition-colors text-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                <div className="flex items-center justify-center gap-2">
                  <FiUploadCloud className="text-gold-600 w-4 h-4 flex-shrink-0" />
                  {fileName ? (
                    <span className="text-xs font-extrabold text-sage-900 flex items-center gap-1 truncate">
                      <FiFileText /> {fileName}
                    </span>
                  ) : (
                    <span className="text-xs font-extrabold text-sage-900">
                      Click to upload payment screenshot (PNG, JPG, PDF)
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                Preferred Schedule / Notes
              </label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know your preferred study days or timezone..."
                className="w-full px-3 py-2 rounded-lg bg-cream-100 border border-sage-300 text-xs font-semibold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm hover:bg-sage-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-sage-600 disabled:opacity-50"
            >
              <FiSend className="w-4 h-4 text-gold-400" />
              <span>{status === "loading" ? "Submitting..." : "Submit & Reserve Seat"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
