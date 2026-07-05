"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useState } from "react";
import { sendTelegramLead } from "@/app/actions/telegram";

const bookingSchema = zod.object({
  name: zod.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: zod.string().min(10, { message: "Please enter a valid phone number." }),
  serviceType: zod.string().min(1, { message: "Please select a service type." }),
  dateTime: zod.string().min(1, { message: "Please select date and time." }),
  location: zod.string().min(5, { message: "Please provide a service location in the Bronx." }),
  message: zod.string().optional(),
});

type BookingValues = zod.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    const sourceUrl = typeof window !== "undefined" ? window.location.href : "Unknown";

    const result = await sendTelegramLead({
      formType: "Booking",
      name: data.name,
      phone: data.phone,
      service: data.serviceType,
      message: `Preferred Date/Time: ${data.dateTime}
Location: ${data.location}
Additional Details: ${data.message || "None"}`,
      sourceUrl,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus({ success: true, message: "Your booking request has been submitted. A technician will contact you shortly to confirm." });
      reset();
    } else {
      setSubmitStatus({ success: false, message: result.error || "Failed to submit booking. Please try again." });
    }
  };

  const serviceOptions = [
    { value: "", label: "Select Service Needed" },
    { value: "Emergency Lockout (Home/Car/Office)", label: "Emergency Lockout (Home/Car/Office)" },
    { value: "Residential Lock Rekeying", label: "Residential Lock Rekeying" },
    { value: "Smart Lock Installation", label: "Smart Lock Installation" },
    { value: "Commercial Master Key System", label: "Commercial Master Key System" },
    { value: "Panic Bar Repair/Installation", label: "Panic Bar Repair/Installation" },
    { value: "Car Key Replacement / Fob Programming", label: "Car Key Replacement / Fob Programming" },
    { value: "Ignition Repair/Replacement", label: "Ignition Repair/Replacement" },
    { value: "Safe Unlocking", label: "Safe Unlocking" },
    { value: "Mailbox Lock Replacement", label: "Mailbox Lock Replacement" },
  ];

  return (
    <div className="bg-brand-dark border border-zinc-800 p-8 rounded-lg max-w-xl w-full text-white shadow-2xl">
      <h3 className="text-3xl font-serif font-bold text-brand-yellow mb-2 uppercase tracking-wide">Book a Locksmith</h3>
      <p className="text-zinc-400 mb-6 font-sans text-sm">Schedule a professional locksmith service in the Bronx.</p>

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

        {/* Service Type and Date/Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
              Service Type <span className="text-brand-yellow">*</span>
            </label>
            <select
              {...register("serviceType")}
              className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-brand-yellow transition"
            >
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.serviceType && <p className="text-xs text-brand-red mt-1 font-sans">{errors.serviceType.message}</p>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
              Preferred Date & Time <span className="text-brand-yellow">*</span>
            </label>
            <input
              type="datetime-local"
              {...register("dateTime")}
              className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white font-sans focus:outline-none focus:border-brand-yellow transition"
            />
            {errors.dateTime && <p className="text-xs text-brand-red mt-1 font-sans">{errors.dateTime.message}</p>}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
            Service Location (Bronx Address) <span className="text-brand-yellow">*</span>
          </label>
          <input
            type="text"
            {...register("location")}
            placeholder="e.g. 1510 Castle Hill Ave, Bronx, NY 10462"
            className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-650 font-sans focus:outline-none focus:border-brand-yellow transition"
          />
          {errors.location && <p className="text-xs text-brand-red mt-1 font-sans">{errors.location.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">
            Additional Details (Optional)
          </label>
          <textarea
            rows={3}
            {...register("message")}
            placeholder="Any specific details we should know?"
            className="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-650 font-sans focus:outline-none focus:border-brand-yellow transition resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-black py-4 rounded font-sans font-bold tracking-wider uppercase text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {isSubmitting ? "Submitting Booking..." : "Request Booking ↗"}
        </button>
      </form>
    </div>
  );
}
