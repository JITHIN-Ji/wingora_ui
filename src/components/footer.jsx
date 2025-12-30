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
                        Wingora Ventures is an AI & technology-driven business solutions company helping startups and growing brands operate smarter through automation, intelligent systems, and digital innovation.
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

                {/* Mission Section */}
                <div>
                    <h2 className="font-semibold text-white mb-5">Our Mission</h2>
                    <div className="text-sm space-y-3 max-w-sm">
                        <p>
                            We help businesses reduce manual work, enhance customer experience, and scale efficiently through practical and affordable AI-powered solutions.
                        </p>
                        <p>
                            Our focus is on building strong digital foundations that keep businesses future-ready in a rapidly evolving world.
                        </p>
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
