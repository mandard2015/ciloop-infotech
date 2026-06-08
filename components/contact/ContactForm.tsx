"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/siteConfig";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().max(100).optional(),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().max(32).optional(),
  service: z.string().min(1),
  budget: z.string().max(100).optional(),
  message: z.string().min(10, "Please tell us about your project."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: siteConfig.services[0].title },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading");
    setFeedback(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("success");
      setFeedback("Thanks! Your request has been submitted.");
      reset();
      return;
    }

    setStatus("error");
    setFeedback("There was a problem submitting the form. Please try again.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="name">
            Name
          </label>
          <Input id="name" placeholder="Name" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="company">
            Company
          </label>
          <Input id="company" placeholder="Company" {...register("company")} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" placeholder="Email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="phone">
            Phone
          </label>
          <Input id="phone" placeholder="Phone" {...register("phone")} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="service">
            Service Interested In
          </label>
          <Select id="service" {...register("service")}> 
            {siteConfig.services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </Select>
          {errors.service ? <p className="text-sm text-red-600">This field is required.</p> : null}
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="budget">
            Project Budget
          </label>
          <Input id="budget" placeholder="Project Budget (optional)" {...register("budget")} />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-slate-900" htmlFor="message">
          Message
        </label>
        <Textarea id="message" rows={5} placeholder="Tell us about your project" {...register("message")} aria-invalid={!!errors.message} />
        {errors.message ? <p className="text-sm text-red-600">{errors.message.message}</p> : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        <p className="text-sm text-slate-500">We respond to all inquiries within 24 hours.</p>
      </div>

      {feedback ? (
        <p className={status === "success" ? "text-sm text-emerald-600" : "text-sm text-red-600"} aria-live="polite">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
