import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-400 mt-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                
                {/* Brand Section */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <a href="#home">
                        <img
                            className="h-12 w-auto"
                            src="/assets/Screenshot_2025-12-30_135254-removebg-preview.png"
                            width={180}
                            height={48}
                            alt="Wingora Ventures Logo"
                        />
                    </a>
                    <p className="text-sm/7 mt-6">
                        AI-driven business solutions for startups and growing brands.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-semibold mb-5 text-white">Quick Links</h2>
                        <a className="hover:text-slate-300 transition" href="#services">Our Services</a>
                        <a className="hover:text-slate-300 transition" href="#about">About Us</a>
                        <a className="hover:text-slate-300 transition" href="#why-us">Why Choose Us</a>
                        <a className="hover:text-slate-300 transition" href="#contact">Contact Us</a>
                    </div>
                </div>

                {/* Contact Section */}
                <div>
                    <h2 className="font-semibold text-white mb-5">Contact Us</h2>
                    <div className="text-sm space-y-3">
                        <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:Wingoraventures@gmail.com" className="hover:text-slate-300 transition break-all">
                                Wingoraventures@gmail.com
                            </a>
                        </div>
                        <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+916238912027" className="hover:text-slate-300 transition">
                                +91 6238912027
                            </a>
                        </div>
                        <div className="flex items-start space-x-3">
                            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Kerala, India</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <p className="py-4 text-center border-t mt-6 border-slate-700">
                Copyright 2025 ©{" "}
                <a href="#home" className="text-indigo-400 hover:text-indigo-300 transition">
                    Wingora Ventures
                </a>
                . All Rights Reserved.
            </p>
        </motion.footer>
    );
}