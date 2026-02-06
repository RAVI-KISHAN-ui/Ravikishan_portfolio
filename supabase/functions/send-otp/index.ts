import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { otpStore, cleanupExpiredOtps, generateOtp } from "../_shared/otpStore.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface SendOtpRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SendOtpRequest = await req.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Clean up expired OTPs
    cleanupExpiredOtps();

    // Check if there's a recent OTP (cooldown check - 60 seconds)
    const existingOtp = otpStore.get(email);
    if (existingOtp) {
      const timeSinceCreation = Date.now() - (existingOtp.expiresAt - 5 * 60 * 1000);
      if (timeSinceCreation < 60 * 1000) {
        const cooldownRemaining = Math.ceil((60 * 1000 - timeSinceCreation) / 1000);
        return new Response(
          JSON.stringify({ 
            error: "Please wait before requesting a new OTP",
            cooldownRemaining
          }),
          {
            status: 429,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }
    }

    // Generate new OTP
    const otp = generateOtp();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

    // Store OTP
    otpStore.set(email, { otp, expiresAt, attempts: 0 });

    // Send OTP via email
    const emailResponse = await resend.emails.send({
      from: "Ravi Kishan Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Your Verification Code",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0a0a0f; color: #ffffff; padding: 40px 20px; margin: 0;">
          <div style="max-width: 480px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; padding: 40px; border: 1px solid #2a2a4a;">
            <h1 style="color: #ffffff; font-size: 24px; margin: 0 0 8px 0; text-align: center;">Verify Your Email</h1>
            <p style="color: #a0a0b0; font-size: 14px; margin: 0 0 32px 0; text-align: center;">Use the code below to verify your email address</p>
            
            <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
              <p style="font-size: 36px; font-weight: bold; letter-spacing: 8px; margin: 0; color: #ffffff;">${otp}</p>
            </div>
            
            <p style="color: #a0a0b0; font-size: 13px; text-align: center; margin: 0;">
              This code expires in <strong style="color: #6366f1;">5 minutes</strong>
            </p>
            
            <hr style="border: none; border-top: 1px solid #2a2a4a; margin: 32px 0;">
            
            <p style="color: #606070; font-size: 12px; text-align: center; margin: 0;">
              If you didn't request this code, you can safely ignore this email.
            </p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("OTP email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "OTP sent successfully",
        expiresIn: 300 // 5 minutes in seconds
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-otp function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send OTP" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
