import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function TrustedCompanies() {
    return (
        <section className="flex flex-col items-center" id="why-us">
            <SectionTitle title="Why Choose Wingora Ventures?" description="We work as your technology partner, not just a service provider — delivering scalable, AI-driven solutions for long-term growth." />
            <motion.div className="relative max-w-5xl py-20 md:py-26 mt-18 md:w-full overflow-hidden mx-2 md:mx-auto border border-indigo-900 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#401B98]/5 to-[#180027]/10 rounded-3xl p-4 md:p-10 text-white"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="absolute pointer-events-none top-10 -z-1 left-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[180px]"></div>
                <div className="absolute pointer-events-none bottom-10 -z-1 right-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[180px]"></div>
                <div className="flex flex-col items-center md:items-start max-md:text-center md:flex-1">
                    <a href="#contact" className="group flex items-center gap-2 rounded-full text-sm p-1 pr-3 text-indigo-300 bg-indigo-200/15">
                        <span className="bg-indigo-600 text-white text-xs px-3.5 py-1 rounded-full">
                            FREE
                        </span>
                        <p className="flex items-center gap-1">
                            <span>Book a free consultation today </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right group-hover:translate-x-0.5 transition duration-300"><path d="m9 18 6-6-6-6" /></svg>
                        </p>
                    </a>
                    <h1 className="text-3xl font-medium max-w-xl mt-5 bg-gradient-to-r from-white to-[#b6abff] text-transparent bg-clip-text">System-driven, not people-dependent.</h1>
                    <p className="text-base text-slate-400 max-w-lg mt-4">
                        We build smart systems that operate 24/7 — combining AI automation, custom strategies, and transparent support to help your business scale efficiently.
                    </p>
                    <button className="flex items-center gap-1 text-sm px-6 py-2.5 border border-indigo-400 hover:bg-indigo-300/10 active:scale-95 transition rounded-full mt-6">
                        Start Your AI Journey
                        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4243 5.42426C12.6586 5.18995 12.6586 4.81005 12.4243 4.57574L8.60589 0.757359C8.37157 0.523045 7.99167 0.523045 7.75736 0.757359C7.52304 0.991674 7.52304 1.37157 7.75736 1.60589L11.1515 5L7.75736 8.39411C7.52304 8.62843 7.52304 9.00833 7.75736 9.24264C7.99167 9.47696 8.37157 9.47696 8.60589 9.24264L12.4243 5.42426ZM0 5L0 5.6L12 5.6V5V4.4L0 4.4L0 5Z" fill="white" />
                        </svg>
                    </button>
                </div>
                
                {/* Tech Icons Grid */}
                <div className="md:ml-8 max-md:mt-10 flex-shrink-0">
                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                        {/* AI Brain Icon */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl md:rounded-2xl backdrop-blur-sm border border-indigo-400/30 flex items-center justify-center hover:scale-105 transition-transform">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        
                        {/* Automation Gear Icon */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl md:rounded-2xl backdrop-blur-sm border border-purple-400/30 flex items-center justify-center hover:scale-105 transition-transform">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        
                        {/* Analytics Chart Icon */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl md:rounded-2xl backdrop-blur-sm border border-blue-400/30 flex items-center justify-center hover:scale-105 transition-transform">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        
                        {/* Code/Development Icon */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl md:rounded-2xl backdrop-blur-sm border border-green-400/30 flex items-center justify-center hover:scale-105 transition-transform">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        
                        {/* Cloud/Scale Icon */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-xl md:rounded-2xl backdrop-blur-sm border border-indigo-400/30 flex items-center justify-center hover:scale-105 transition-transform">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                        </div>
                        
                        {/* Rocket/Growth Icon */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500/20 to-rose-600/20 rounded-xl md:rounded-2xl backdrop-blur-sm border border-pink-400/30 flex items-center justify-center hover:scale-105 transition-transform">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}