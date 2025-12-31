import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

/* Neon Border Animation – lightweight & safe */
const AnimatedBorder = ({ delay = 0 }) => (
  <motion.span
    className="absolute inset-0 rounded-xl pointer-events-none"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay }}
  >
    <motion.span
      className="absolute inset-0 rounded-xl"
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      transition={{
        duration: 1.6,
        delay,
        ease: "easeInOut",
      }}
      style={{
        border: "1px solid #6366f1",
        boxShadow: "0 0 20px rgba(99,102,241,0.6)",
      }}
    />
  </motion.span>
);

export default function OurProcess() {
  const processSteps = [
    {
      step: "1️⃣ Consultation",
      description:
        "We understand your business goals, challenges, and opportunities to ensure AI fits your vision.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
    },
    {
      step: "2️⃣ Strategy & Planning",
      description:
        "We design a clear, tailored AI strategy aligned with your operations and growth plans.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    },
    {
      step: "3️⃣ Development & Implementation",
      description:
        "Our team builds, tests, and deploys reliable AI systems that integrate seamlessly.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    },
    {
      step: "4️⃣ Support & Optimization",
      description:
        "We continuously monitor, improve, and optimize your system for best long-term results.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800",
    },
  ];

  return (
    <section
      id="process"
      className="flex flex-col items-center scroll-mt-28"
    >
      <SectionTitle
        title="How We Work"
        description="A simple, transparent process designed to deliver reliable AI solutions and measurable business impact."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-18 max-w-6xl mx-auto">
        {processSteps.map((item, index) => (
          <motion.div
            key={item.step}
            className="relative group border border-slate-800 p-6 rounded-xl overflow-hidden"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
            }}
          >
            {/* Neon Border Animation */}
            <AnimatedBorder delay={index * 0.2} />

            {/* Image */}
            <img
              src={item.image}
              alt={item.step}
              className="w-full h-40 object-cover rounded-lg mb-5 opacity-90 group-hover:opacity-100 transition"
            />

            <h3 className="text-indigo-500 font-semibold text-lg">
              {item.step}
            </h3>

            <p className="text-slate-100 text-base mt-4 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
