import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

serve(async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: corsHeaders }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return new Response(
        JSON.stringify({ error: "Enter a valid email address" }),
        { status: 400, headers: corsHeaders }
      );
    }

    // ✅ Check if API key exists
    const apiKey = Deno.env.get("SENDGRID_API_KEY");
    if (!apiKey) {
      console.error("SENDGRID_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: corsHeaders }
      );
    }

    console.log("Attempting to send email to:", email);

    // ✅ Send email via SendGrid
    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: email }],
          },
        ],
        from: {
          email: "wingoraventures@gmail.com", // ✅ Your verified sender
          name: "Wingora ventures",
        },
        subject: "Your subscription is successful 🎉",
        content: [
          {
            type: "text/html",
            value: `
              <h2>Welcome to Wingora 🚀</h2>
              <p>Thank you for subscribing!</p>

              <p>
                <strong>Wingora</strong> delivers
                <br />
                <em>AI-driven business solutions for startups and growing brands.</em>
              </p>

              <p>You'll receive:</p>
              <ul>
                <li>AI automation insights</li>
                <li>Business growth strategies</li>
                <li>Exclusive updates</li>
              </ul>

              <p>We're excited to grow with you 💡</p>

              <br />
              <strong>– Team Wingora</strong>
            `,
          },
        ],
      }),
    });

    // ✅ Better error logging
    if (!res.ok) {
      const errorBody = await res.text();
      console.error("SendGrid API error:", {
        status: res.status,
        statusText: res.statusText,
        body: errorBody
      });
      
      return new Response(
        JSON.stringify({ 
          error: "Failed to send email", 
          details: errorBody 
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    // ✅ FIX: SendGrid returns 202 with empty body, so don't parse JSON
    console.log("Email sent successfully! Status:", res.status);

    return new Response(
      JSON.stringify({ success: true, message: "Subscription successful" }),
      { status: 200, headers: corsHeaders }
    );
    
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email",
        message: err.message 
      }),
      { status: 500, headers: corsHeaders }
    );
  }
});