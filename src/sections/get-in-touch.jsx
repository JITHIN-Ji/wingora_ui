import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import SectionTitle from "../components/section-title"; 

// Supabase config
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function GetInTouch() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.business || !formData.message) {
            setSubmitStatus("error");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const { error } = await supabase.from("contact_submissions").insert([
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    business_type: formData.business,
                    message: formData.message,
                    submitted_at: new Date().toISOString()
                }
            ]);

            if (error) throw error;

            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                business: "",
                message: ""
            });

            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error("Submit error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center py-12 px-4 scroll-mt-24"
        >
            
            <SectionTitle
                title="Let's Build a Smarter Business Together"
                description="Whether you're a startup, a solo founder, or a growing company — we help you move from manual work to smart systems."
            />

            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto text-slate-400 mt-10 w-full">
                {/* Name */}
                <div>
                    <label className="font-medium text-slate-200">Your name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-lg bg-transparent text-slate-200 placeholder:text-slate-400 border border-slate-700 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="font-medium text-slate-200">Email address</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-lg bg-transparent text-slate-200 placeholder:text-slate-400 border border-slate-700 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="font-medium text-slate-200">Phone number</label>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-lg bg-transparent text-slate-200 placeholder:text-slate-400 border border-slate-700 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition"
                    />
                </div>

                {/* Business */}
                <div>
                    <label className="font-medium text-slate-200">Business type</label>
                    <div className="relative">
                        <select
                            name="business"
                            value={formData.business}
                            onChange={handleChange}
                            className="w-full mt-2 p-3 pr-10 rounded-lg bg-transparent text-slate-200 placeholder:text-slate-400 border border-slate-700 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition appearance-none"
                        >
                            <option value="">Select your business type</option>
                            <option value="startup">Startup</option>
                            <option value="small-business">Small Business</option>
                            <option value="growing-company">Growing Company</option>
                            <option value="enterprise">Enterprise</option>
                            <option value="solo-founder">Solo Founder</option>
                        </select>

                        {/* Dropdown arrow */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                    <label className="font-medium text-slate-200">Tell us about your project</label>
                    <textarea
                        name="message"
                        rows={6}
                        placeholder="Describe your business challenges or what you need help with..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-lg bg-transparent text-slate-200 placeholder:text-slate-400 border border-slate-700 resize-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition"
                    />
                </div>

                {/* Success */}
                {submitStatus === "success" && (
                    <div className="sm:col-span-2 flex items-center gap-2 text-green-500 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <CheckCircle2 className="size-5" />
                        <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                )}

                {/* Error */}
                {submitStatus === "error" && (
                    <div className="sm:col-span-2 flex items-center gap-2 text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <AlertCircle className="size-5" />
                        <span>Please fill in all required fields and try again.</span>
                    </div>
                )}

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-max flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowUpRight className="size-4.5" />
                </button>
            </div>
        </section>
    );
}
