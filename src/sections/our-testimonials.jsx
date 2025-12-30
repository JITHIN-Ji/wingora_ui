import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
    const testimonials = [
        { quote: "Wingora transformed our customer support with AI chatbots. We now handle 3x more inquiries without adding staff!", name: "Rajesh Kumar", role: "Founder, TechStart India", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", },
        { quote: "Their automation systems saved us 20+ hours weekly. We can finally focus on growth instead of repetitive tasks.", name: "Priya Sharma", role: "Operations Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop", },
        { quote: "The website they built is fast, professional, and converts visitors into customers. Best investment we made!", name: "Arjun Nair", role: "CEO, Digital Solutions", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", },
        { quote: "Wingora's digital marketing strategies actually work. We saw 40% increase in qualified leads within 2 months.", name: "Meera Reddy", role: "Marketing Head", image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png", },
        { quote: "They don't just build tools, they build systems that work 24/7. Our business runs smoother than ever.", name: "Vikram Malhotra", role: "Startup Founder", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", },
        { quote: "Professional, transparent, and results-driven. Wingora truly works as a technology partner, not just a vendor.", name: "Anjali Desai", role: "Product Manager", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", },
    ];

    return (
        <section className="flex flex-col items-center" id="testimonials">
            <SectionTitle title="What Our Clients Say" description="Real results from businesses that chose to grow smarter with AI-powered solutions and automation." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div key={testimonial.name} className="group border border-slate-800 p-6 rounded-xl"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <p className="text-slate-100 text-base">{testimonial.quote}</p>
                        <div className="flex items-center gap-3 mt-8 group-hover:-translate-y-1 duration-300">
                            <img className="size-10 rounded-full" src={testimonial.image} alt="user image" />
                            <div>
                                <h2 className="text-gray-200 font-medium">
                                    {testimonial.name}
                                </h2>
                                <p className="text-indigo-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}