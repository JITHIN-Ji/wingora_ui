import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function SubscribeNewsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

 const handleSubscribe = async () => {
  if (!isValidEmail(email)) {
    setMessage("❌ Please enter a valid email address");
    return;
  }

  setLoading(true);
  setMessage("");

  let alreadySubscribed = false;

  const { error } = await supabase
    .from("subscribed_users")
    .insert([{ email }]);

  if (error) {
    if (error.code === "23505") {
      alreadySubscribed = true;
    } else {
      setMessage("❌ Something went wrong");
      setLoading(false);
      return;
    }
  }

  // 🔥 ALWAYS send email via Supabase Functions
  const { data: funcData, error: funcError } = await supabase.functions.invoke(
    "send-subscription-email",
    {
      body: JSON.stringify({ email }),
    }
  );

  if (funcError) {
    console.error("Function error:", funcError);
    setMessage("⚠️ Subscribed, but email failed");
  } else {
    setMessage(
      alreadySubscribed
        ? "✅ You're already subscribed. Email sent again 📩"
        : "🎉 Subscription successful! Check your inbox"
    );
  }

  setEmail("");
  setLoading(false);
};

  return (
    <section className="flex flex-col items-center">
      <SectionTitle
        title="Stay Updated with AI Insights"
        description="Get the latest updates on AI automation, business growth strategies, and exclusive tips delivered to your inbox."
      />

      <motion.div
        className="flex items-center justify-center mt-10 border border-slate-700 rounded-full h-14 max-w-xl w-full"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="bg-transparent outline-none px-4 h-full flex-1"
        />

        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="bg-indigo-600 text-white rounded-full h-11 mr-1 px-10 disabled:opacity-60"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </motion.div>

      {message && <p className="mt-4 text-sm text-slate-400">{message}</p>}
    </section>
  );
}
