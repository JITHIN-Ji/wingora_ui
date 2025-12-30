import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [className, setClassName] = useState("");

    const sectionData = [
        {
            title: "AI Automation",
            description: "Automate repetitive tasks and workflows using AI-powered systems. Less manual work, more efficiency.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&h=400&auto=format&fit=crop",
            align: "object-center",
        },
        {
            title: "AI Chatbots",
            description: "Intelligent chatbots that communicate like humans and convert like sales agents. Never miss a customer again.",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&h=400&auto=format&fit=crop",
            align: "object-center",
        },
        {
            title: "Web Development",
            description: "High-performance websites built for trust, speed, and conversions. A professional digital presence that works for you.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=400&auto=format&fit=crop",
            align: "object-center",
        },
        {
            title: "Digital Marketing",
            description: "Data-driven marketing strategies that generate real business growth. Visibility that converts into revenue.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&h=400&auto=format&fit=crop",
            align: "object-center",
        },
    ];

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sectionData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered, sectionData.length]);

    return (
        <section className="flex flex-col items-center" id="services">
            <SectionTitle
                title="Our Core Services"
                description="Smart AI solutions designed to save time, reduce costs, and scale your business faster."
            />

            {/* Desktop View */}
            <div className="hidden md:flex items-center gap-4 h-100 w-full max-w-5xl mt-18 mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                {sectionData.map((data, index) => (
                    <motion.div key={data.title} className={`relative group flex-grow h-[400px] rounded-xl overflow-hidden ${isHovered && className ? "hover:w-full w-56" : index === activeIndex ? "w-full" : "w-56"} ${className} ${!className ? "pointer-events-none" : ""}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        onAnimationComplete={() => setClassName("transition-all duration-500")}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <img className={`h-full w-full object-cover ${data.align}`} src={data.image} alt={data.title} />
                        <div className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 transition-all duration-300 ${isHovered && className ? "opacity-0 group-hover:opacity-100" : index === activeIndex ? "opacity-100" : "opacity-0"}`}>
                            <h1 className="text-3xl font-semibold">{data.title}</h1>
                            <p className="text-sm mt-2">{data.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden grid grid-cols-1 gap-6 w-full max-w-md mt-12 px-4">
                {sectionData.map((data, index) => (
                    <motion.div
                        key={data.title}
                        className="relative h-[300px] rounded-xl overflow-hidden"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <img className={`h-full w-full object-cover ${data.align}`} src={data.image} alt={data.title} />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                            <h1 className="text-2xl font-semibold">{data.title}</h1>
                            <p className="text-sm mt-2">{data.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}