"use client";

import { useState } from "react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-sage-950/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-cream-50 rounded-2xl sm:rounded-3xl shadow-2xl border border-sage-300 overflow-hidden max-h-[95vh] sm:max-h-[90vh] flex flex-col my-auto">
        {/* Modal Header */}
        <div className="bg-sage-900 text-cream-50 p-4 sm:p-6 relative flex items-center justify-between border-b border-sage-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-gold-400 flex-shrink-0 bg-sage-950 p-0.5 shadow-md">
              <img
                src="/logo.png"
                alt="Huzaifa's Online Quran Classes Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-extrabold text-gold-400 uppercase tracking-widest block">
                Huzaifa's Online Quran Classes
              </span>
              <h2 className="font-serif font-bold text-lg sm:text-2xl text-cream-50">
                Reserve Your Quran Seat
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sage-800 text-cream-100 flex items-center justify-center hover:bg-sage-700 hover:text-gold-400 transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-5">
          {/* Billing Info Box */}
          <div className="bg-sage-900 text-cream-50 rounded-2xl p-4 sm:p-6 border border-gold-500/40 space-y-4 shadow-md">
            <div className="flex items-center gap-2 border-b border-sage-800 pb-3">
              <FaLandmark className="text-gold-400 text-base sm:text-xl flex-shrink-0" />
              <h3 className="font-serif font-bold text-sm sm:text-lg text-gold-400">
                Meezan Bank Account Details
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-sage-950/70 p-3.5 rounded-xl border border-sage-800">
                <span className="text-sage-300 font-bold block uppercase text-[10px] tracking-wider">
                  Receiver Name
                </span>
                <span className="text-cream-50 font-extrabold text-sm sm:text-base block mt-0.5">
                  Huzaifa Khan
                </span>
              </div>

              <div className="bg-sage-950/70 p-3.5 rounded-xl border border-sage-800">
                <span className="text-sage-300 font-bold block uppercase text-[10px] tracking-wider">
                  Bank Name
                </span>
                <span className="text-cream-50 font-extrabold text-sm sm:text-base block mt-0.5">
                  Meezan Bank
                </span>
              </div>
            </div>

            {/* Full Unclipped Account Number */}
            <div className="bg-sage-950/70 p-3.5 rounded-xl border border-sage-800 flex items-center justify-between gap-3">
              <div>
                <span className="text-sage-300 font-bold block uppercase text-[10px] tracking-wider">
                  Account Number
                </span>
                <span className="text-gold-400 font-mono font-extrabold text-sm sm:text-base block mt-0.5 tracking-wider select-all">
                  03260113711856
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("03260113711856", "account")}
                className="px-3 py-2 rounded-lg bg-gold-400/20 text-gold-400 hover:bg-gold-400/30 transition-colors flex items-center gap-1.5 text-xs font-bold flex-shrink-0"
                title="Copy Account Number"
              >
                {copiedField === "account" ? (
                  <>
                    <FiCheck className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Full Unclipped IBAN */}
            <div className="bg-sage-950/70 p-3.5 rounded-xl border border-sage-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <span className="text-sage-300 font-bold block uppercase text-[10px] tracking-wider">
                  IBAN Number
                </span>
                <span className="text-gold-400 font-mono font-extrabold text-xs sm:text-sm md:text-base block mt-1 tracking-tight select-all break-all whitespace-normal">
                  PK40MEZN0003260113711856
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("PK40MEZN0003260113711856", "iban")}
                className="px-3 py-2 rounded-lg bg-gold-400/20 text-gold-400 hover:bg-gold-400/30 transition-colors flex items-center gap-1.5 text-xs font-bold flex-shrink-0 self-start sm:self-center"
                title="Copy IBAN"
              >
                {copiedField === "iban" ? (
                  <>
                    <FiCheck className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4" />
                    <span>Copy IBAN</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Feedback Toasts */}
          {status === "success" && (
            <div className="p-4 rounded-xl bg-sage-100 border border-sage-300 text-sage-900 text-sm flex items-start gap-3">
              <FiCheckCircle className="text-sage-700 w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-base">Seat Reserved Successfully!</p>
                <p className="text-sm font-bold mt-1 text-sage-900">{responseMsg}</p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm flex items-start gap-3">
              <FiAlertCircle className="text-red-600 w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold">Reservation Error</p>
                <p className="text-xs font-semibold mt-1 text-red-800">{responseMsg}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Huzaifa Khan"
                  className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-bold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="huzaifa@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-bold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 326 0113711"
                  className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-bold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                  Selected Program *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-extrabold text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-700"
                >
                  <option value="Norani Qaida & Basic Quran for Kids ($10/mo)">
                    Norani Qaida & Basic Quran for Kids ($10/mo)
                  </option>
                  <option value="Quran Reading & Tajweed Rules ($20/mo)">
                    Quran Reading & Tajweed Rules ($20/mo)
                  </option>
                  <option value="Full Quran Hifz Program ($50/mo)">
                    Full Quran Hifz Program ($50/mo)
                  </option>
                </select>
              </div>
            </div>

            {/* Payment Screenshot File Upload */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                Upload Payment Screenshot / Receipt Proof
              </label>
              <div className="relative border-2 border-dashed border-sage-300 rounded-xl p-4 bg-cream-100 hover:bg-sage-50 transition-colors text-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                <div className="flex flex-col items-center gap-1.5">
                  <FiUploadCloud className="text-gold-600 w-7 h-7" />
                  {fileName ? (
                    <span className="text-xs font-extrabold text-sage-900 flex items-center gap-1">
                      <FiFileText /> {fileName}
                    </span>
                  ) : (
                    <>
                      <span className="text-xs font-extrabold text-sage-900">
                        Click or drag payment receipt image / screenshot
                      </span>
                      <span className="text-[11px] text-sage-800 font-bold">
                        PNG, JPG, WEBP, or PDF
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1">
                Preferred Schedule / Timezone Notes
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know your preferred study days or timezone..."
                className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-semibold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-full bg-sage-700 text-cream-50 font-extrabold text-base hover:bg-sage-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-sage-600 disabled:opacity-50"
            >
              <FiSend className="w-5 h-5 text-gold-400" />
              <span>{status === "loading" ? "Submitting Reservation..." : "Submit & Reserve Seat"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
