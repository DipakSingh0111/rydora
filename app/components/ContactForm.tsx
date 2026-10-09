"use client";

import {
  ArrowRight,
  CalendarDays,
  Car,
  ChevronDown,
  CircleCheck,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  User,
  type LucideIcon,
} from "lucide-react";
import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import type { ContactPageData } from "@/types/rydora.types";

const carTypes = ["Hatchback", "Sedan", "SUV", "MUV / MPV", "Luxury", "Wedding Car"];
const durations = ["Few Hours", "1 Day", "2 - 3 Days", "1 Week", "1 Month+"];

export default function ContactForm({ data }: { data?: ContactPageData }) {
  const [sent, setSent] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setFormKey((k) => k + 1);
  };

  if (!data) return null;

  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_10px_40px_rgba(120,60,20,0.08)] sm:p-8">
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#a8521f]">
        <span className="h-px w-6 bg-[#a8521f]" />
        {data.badge}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-[34px]">
        {data.heading.main} <span className="text-[#a8521f]">{data.heading.highlight}</span>
      </h2>
      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-neutral-600">
        {data.description}
      </p>

      <form key={formKey} onSubmit={onSubmit} className="mt-6 grid gap-3.5 sm:grid-cols-2">
        <Field icon={User} name="name" placeholder={data.form.namePlaceholder} required />
        <Field icon={Phone} name="phone" type="tel" placeholder={data.form.phonePlaceholder} required />
        <Field
          icon={Mail}
          name="email"
          type="email"
          placeholder={data.form.emailPlaceholder}
          required
          className="sm:col-span-2"
        />
        <SelectField icon={Car} name="carType" placeholder={data.form.carTypePlaceholder} options={carTypes} />
        <SelectField
          icon={CalendarDays}
          name="duration"
          placeholder={data.form.durationPlaceholder}
          options={durations}
        />
        <Field icon={MapPin} name="pickup" placeholder={data.form.pickupPlaceholder} />
        <Field icon={MapPin} name="dropoff" placeholder={data.form.dropoffPlaceholder} />

        <label className="relative sm:col-span-2">
          <MessageCircle className="pointer-events-none absolute left-3.5 top-3.5 text-neutral-500" size={17} />
          <textarea
            name="message"
            rows={4}
            placeholder={data.form.messagePlaceholder}
            className="w-full resize-y rounded-lg border border-neutral-200 bg-white py-3 pl-10 pr-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-500 focus:border-copper focus:ring-2 focus:ring-copper/20"
          />
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-3 rounded-lg bg-gradient-to-b from-[#b8461f] to-[#9c3812] py-3.5 text-[15px] font-semibold text-white shadow-md shadow-[#9c3812]/30 transition hover:brightness-110 sm:col-span-2"
        >
          {data.form.submitText}
          <ArrowRight size={18} />
        </button>

        {sent && (
          <p
            role="status"
            className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700 sm:col-span-2"
          >
            <CircleCheck size={18} />
            {data.form.successMessage}
          </p>
        )}
      </form>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white py-3 pl-10 pr-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-500 focus:border-copper focus:ring-2 focus:ring-copper/20";

function Field({
  icon: Icon,
  className = "",
  ...props
}: { icon: LucideIcon; className?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`relative ${className}`}>
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" size={17} />
      <input type="text" aria-label={props.placeholder} className={inputClass} {...props} />
    </label>
  );
}

function SelectField({
  icon: Icon,
  name,
  placeholder,
  options,
}: {
  icon: LucideIcon;
  name: string;
  placeholder: string;
  options: string[];
}) {
  const [value, setValue] = useState("");

  return (
    <label className="relative">
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" size={17} />
      <select
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label={placeholder}
        className={`${inputClass} appearance-none pr-9 ${value ? "" : "text-neutral-500!"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-neutral-900">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600" size={17} />
    </label>
  );
}
