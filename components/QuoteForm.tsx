"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useState } from "react";
import { sendTelegramLead } from "@/lib/api";

const formSchema = zod.object({
  phone: zod.string().min(10, { message: "Please enter a valid phone number (min 10 digits)." }),
  name: zod.string().min(2, { message: "Name must be at least 2 characters." }),
  email: zod.string().email({ message: "Please enter a valid email address." }),
  message: zod.string().min(5, { message: "Message must be at least 5 characters." }),
});

type FormValues = zod.infer<typeof formSchema>;

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    const sourceUrl = typeof window !== "undefined" ? window.location.href : "Unknown";

    const result = await sendTelegramLead({
      formType: "Quote",
      name: data.name,
      phone: data.phone,
      service: "General Locksmith Quote Requested (Contact Form)",
      message: `${data.message} (Email: ${data.email})`,
      sourceUrl,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus({ success: true, message: "Thank you! Your quote request has been sent successfully." });
      reset();
    } else {
      setSubmitStatus({ success: false, message: result.error || "Failed to send request. Please try again." });
    }
  };

  return (
    <div className="bg-zinc-900/90 border border-zinc-800 p-8 rounded-lg max-w-xl w-full">
      <h3 className="text-3xl font-serif font-bold text-white mb-2">Quick Message</h3>
      <p className="text-zinc-400 mb-6 font-sans text-sm">Need a locksmith fast? Get a quote or schedule a visit.</p>

      {submitStatus && (
        <div
          className={`p-4 mb-6 rounded text-sm font-sans ${
            submitStatus.success ? "bg-green-900/50 text-green-300 border border-green-800" : "bg-brand-red/20 text-red-400 border border-brand-red/50"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
              Your Name <span className="text-brand-yellow">*</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="John Doe"
              className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-650 font-sans focus:outline-none focus:border-brand-yellow transition"
            />
            {errors.name && <p className="text-xs text-brand-red mt-1 font-sans">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
              Phone Number <span className="text-brand-yellow">*</span>
            </label>
            <input
              type="text"
              {...register("phone")}
              placeholder="+1 (555) 000-0000"
              className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-650 font-sans focus:outline-none focus:border-brand-yellow transition"
            />
            {errors.phone && <p className="text-xs text-brand-red mt-1 font-sans">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
            Email Address <span className="text-brand-yellow">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="john@example.com"
            className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-650 font-sans focus:outline-none focus:border-brand-yellow transition"
          />
          {errors.email && <p className="text-xs text-brand-red mt-1 font-sans">{errors.email.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
            Message <span className="text-brand-yellow">*</span>
          </label>
          <textarea
            rows={4}
            {...register("message")}
            placeholder="How can we help you? (e.g. Locked out of apartment, need to rekey locks, repair ignition...)"
            className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-650 font-sans focus:outline-none focus:border-brand-yellow transition resize-none"
          ></textarea>
          {errors.message && <p className="text-xs text-brand-red mt-1 font-sans">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-black py-4 rounded font-sans font-bold tracking-wider uppercase text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {isSubmitting ? "Sending Request..." : "Schedule Now ↗"}
        </button>
      </form>
    </div>
  );
}
