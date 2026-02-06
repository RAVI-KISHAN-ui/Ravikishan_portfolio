import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Clock, ArrowRight, CheckCircle2, Shield, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_oggs1ph";
const EMAILJS_TEMPLATE_ID = "template_mzdjjv7";
const EMAILJS_PUBLIC_KEY = "bs33y6sqfsp1jjz-p";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kishanravi@gmail.com",
    href: "mailto:kishanravi@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "RAVI-KISHAN-ui",
    href: "https://github.com/RAVI-KISHAN-ui",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ravi-kishan",
    href: "https://www.linkedin.com/in/ravi-kishan-a880a5328/",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // OTP verification states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [otpExpiry, setOtpExpiry] = useState(0);

  // Cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  // OTP expiry timer
  useEffect(() => {
    if (otpExpiry > 0) {
      const timer = setTimeout(() => setOtpExpiry(otpExpiry - 1), 1000);
      return () => clearTimeout(timer);
    } else if (otpExpiry === 0 && otpSent && !isEmailVerified) {
      setOtpSent(false);
      setOtp("");
    }
  }, [otpExpiry, otpSent, isEmailVerified]);

  // Reset verification when email changes
  useEffect(() => {
    if (isEmailVerified) {
      setIsEmailVerified(false);
      setOtpSent(false);
      setOtp("");
      setOtpExpiry(0);
    }
  }, [formData.email]);

  const handleSendOtp = async () => {
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSendingOtp(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-otp", {
        body: { email: formData.email },
      });

      if (error) throw error;

      if (data.error) {
        if (data.cooldownRemaining) {
          setCooldown(data.cooldownRemaining);
        }
        throw new Error(data.error);
      }

      setOtpSent(true);
      setOtpExpiry(300); // 5 minutes
      setCooldown(60); // 60 second cooldown for resend

      toast({
        title: "OTP Sent! 📧",
        description: `Verification code sent to ${formData.email}. Check your inbox!`,
      });
    } catch (error: any) {
      console.error("Send OTP error:", error);
      toast({
        title: "Failed to send OTP",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit code.",
        variant: "destructive",
      });
      return;
    }

    setIsVerifyingOtp(true);

    try {
      const { data, error } = await supabase.functions.invoke("verify-otp", {
        body: { email: formData.email, otp },
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      setIsEmailVerified(true);
      setOtpSent(false);
      setOtpExpiry(0);

      toast({
        title: "Email Verified! ✅",
        description: "Your email has been verified. You can now send your message.",
      });
    } catch (error: any) {
      console.error("Verify OTP error:", error);
      toast({
        title: "Verification failed",
        description: error.message || "Invalid or expired OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isEmailVerified) {
      toast({
        title: "Email not verified",
        description: "Please verify your email before sending a message.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsEmailVerified(false);
      setOtpSent(false);
      setOtp("");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Contact
          </motion.span>
          <h2 className="section-title">Let's Work <span className="gradient-text">Together</span></h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card rounded-3xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-5 border border-border">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Based in</p>
                <p className="font-medium">India</p>
              </div>
              <div className="bg-card rounded-2xl p-5 border border-border">
                <Clock className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Response time</p>
                <p className="font-medium">Within 24h</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 border border-border">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl"
                  />
                </div>

                {/* Email Field with OTP Verification */}
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block flex items-center gap-2">
                    Your Email
                    {isEmailVerified && (
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        <CheckCircle2 size={12} />
                        Verified
                      </span>
                    )}
                  </label>
                  
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isEmailVerified}
                        className={`bg-secondary/50 border-border focus:border-primary h-12 rounded-xl ${
                          isEmailVerified ? "border-emerald-500/50 bg-emerald-500/5" : ""
                        }`}
                      />
                      {isEmailVerified && (
                        <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                      )}
                    </div>
                    
                    {!isEmailVerified && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleSendOtp}
                        disabled={isSendingOtp || cooldown > 0 || !formData.email}
                        className="h-12 px-4 rounded-xl whitespace-nowrap border-primary/30 hover:bg-primary/10"
                      >
                        {isSendingOtp ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : cooldown > 0 ? (
                          `Wait ${cooldown}s`
                        ) : otpSent ? (
                          "Resend OTP"
                        ) : (
                          <>
                            <Shield size={16} className="mr-1" />
                            Send OTP
                          </>
                        )}
                      </Button>
                    )}
                  </div>

                  {/* OTP Input */}
                  <AnimatePresence>
                    {otpSent && !isEmailVerified && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 p-4 bg-secondary/30 rounded-xl border border-border"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm text-muted-foreground">
                            Enter the 6-digit code sent to your email
                          </p>
                          {otpExpiry > 0 && (
                            <span className="text-xs text-primary font-medium">
                              Expires in {formatTime(otpExpiry)}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Input
                            type="text"
                            maxLength={6}
                            placeholder="000000"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                            className="flex-1 bg-background border-border focus:border-primary h-12 rounded-xl text-center text-lg tracking-[0.5em] font-mono"
                          />
                          <Button
                            type="button"
                            onClick={handleVerifyOtp}
                            disabled={isVerifyingOtp || otp.length !== 6}
                            className="h-12 px-6 rounded-xl bg-primary hover:bg-primary/90"
                          >
                            {isVerifyingOtp ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              "Verify"
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, goals, and timeline..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary resize-none rounded-xl"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full h-14 btn-primary text-base rounded-xl"
                  disabled={isSubmitting || !isEmailVerified}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </span>
                  ) : !isEmailVerified ? (
                    <span className="flex items-center gap-2">
                      <Shield size={18} />
                      Verify Email to Send
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </Button>

                {!isEmailVerified && (
                  <p className="text-xs text-muted-foreground text-center">
                    Email verification helps prevent spam and ensures your message reaches me.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
