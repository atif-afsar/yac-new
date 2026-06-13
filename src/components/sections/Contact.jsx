import { useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import RevealAnimation from "../animations/RevealAnimation";
import { cn } from "../../lib/utils";
import { getContactCards, siteConfig } from "../../data/site";

const courseOptions = [
  "Classes 5–10",
  "Class 11 & 12 (Commerce)",
  "Class 11 & 12 (Humanities)",
  "B.Com",
  "Entrance Preparation (CUET / AMU / JMI)",
  "Professional Courses",
  "Not sure yet",
];

const classOptions = [
  "Class 5–8",
  "Class 9–10",
  "Class 11",
  "Class 12",
  "Graduate / University",
  "Entrance Aspirant",
];

const contactIconMap = {
  address: MapPin,
  email: Mail,
  hours: Clock,
};

const contactInfo = getContactCards().map((item) => ({
  ...item,
  icon: contactIconMap[item.id] ?? Phone,
}));

const initialForm = {
  name: "",
  phone: "",
  email: "",
  course: "",
  studentClass: "",
  message: "",
};

function Field({ label, id, required, children, className }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
        {required && <span className="text-yac-red"> *</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass = cn(
  "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3",
  "text-sm text-neutral-900 placeholder:text-neutral-400",
  "transition-colors duration-200",
  "focus:border-yac-red/50 focus:outline-none focus:ring-2 focus:ring-yac-red/15"
);

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[0-9+\s-]{10,15}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.course) next.course = "Please select a course.";
    if (!form.message.trim()) next.message = "Please tell us how we can help.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    const { recipient, subject } = siteConfig.contact.form;

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim() || "Not provided",
            course: form.course,
            studentClass: form.studentClass || "Not provided",
            message: form.message.trim(),
            _subject: subject,
            _template: "table",
            _captcha: "false",
            ...(form.email.trim() && { _replyto: form.email.trim() }),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send enquiry.");
      }

      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-x-clip bg-zinc-50 py-20 text-neutral-900 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yac-red/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-yac-red/5 blur-3xl sm:-bottom-32 sm:-left-24 sm:h-80 sm:w-80"
      />

      <Container className="relative z-10">
        <RevealAnimation>
          <SectionHeading
            variant="light"
            label="Contact Us"
            title="Get in Touch with Yasir Ali Classes"
            highlight="Yasir Ali Classes"
            description="Have questions about admissions, batches, or courses? Fill out the form and our team will reach out shortly."
          />
        </RevealAnimation>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-5 lg:gap-10">
          <RevealAnimation className="lg:col-span-2" delay={0.05}>
            <div className="flex h-full flex-col gap-4">
              {contactInfo.map(({ id, icon: Icon, label, value, href }) => (
                <div
                  key={id}
                  className="group flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-yac-red/30 hover:shadow-md"
                >
                  <div className="inline-flex rounded-xl bg-yac-red/10 p-3 text-yac-red transition-colors group-hover:bg-yac-red group-hover:text-white">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-yac-red">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block text-sm font-medium text-neutral-800 transition-colors hover:text-yac-red"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-neutral-800">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-2 rounded-2xl border border-yac-red/20 bg-yac-red/5 p-5">
                <p className="text-sm font-semibold text-yac-red">
                  Quick Admission Enquiry
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  Prefer talking directly? Call{" "}
                  <a
                    href={siteConfig.contact.phones[0].href}
                    className="font-medium text-yac-red hover:underline"
                  >
                    {siteConfig.contact.phones[0].display}
                  </a>{" "}
                  during office hours or visit our {siteConfig.brand.location}{" "}
                  campus for a free counselling session.
                </p>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation className="lg:col-span-3" delay={0.1}>
            <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-yac-red/10 p-4 text-yac-red">
                    <Send className="size-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    Enquiry Submitted!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-neutral-600">
                    Thank you for reaching out. Our admissions team will contact
                    you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitError("");
                    }}
                    className="mt-6 text-sm font-semibold text-yac-red transition-colors hover:text-yac-red/80"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {submitError && (
                    <p
                      role="alert"
                      className="rounded-xl border border-yac-red/25 bg-yac-red/5 px-4 py-3 text-sm text-yac-red"
                    >
                      {submitError}
                    </p>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" id="name" required>
                      <div className="relative">
                        <User
                          className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
                          aria-hidden
                        />
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={update("name")}
                          placeholder="Your full name"
                          className={cn(inputClass, "pl-10")}
                          aria-invalid={!!errors.name}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-yac-red">{errors.name}</p>
                      )}
                    </Field>

                    <Field label="Phone Number" id="phone" required>
                      <div className="relative">
                        <Phone
                          className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
                          aria-hidden
                        />
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={update("phone")}
                          placeholder={siteConfig.contact.phones[0].display}
                          className={cn(inputClass, "pl-10")}
                          aria-invalid={!!errors.phone}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-yac-red">{errors.phone}</p>
                      )}
                    </Field>
                  </div>

                  <Field label="Email Address" id="email">
                    <div className="relative">
                      <Mail
                        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
                        aria-hidden
                      />
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@example.com (optional)"
                        className={cn(inputClass, "pl-10")}
                        aria-invalid={!!errors.email}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-yac-red">{errors.email}</p>
                    )}
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Course Interested In" id="course" required>
                      <select
                        id="course"
                        value={form.course}
                        onChange={update("course")}
                        className={cn(
                          inputClass,
                          !form.course && "text-neutral-400"
                        )}
                        aria-invalid={!!errors.course}
                      >
                        <option value="" disabled>
                          Select a course
                        </option>
                        {courseOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-neutral-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.course && (
                        <p className="text-xs text-yac-red">{errors.course}</p>
                      )}
                    </Field>

                    <Field label="Current Class / Level" id="studentClass">
                      <select
                        id="studentClass"
                        value={form.studentClass}
                        onChange={update("studentClass")}
                        className={cn(
                          inputClass,
                          !form.studentClass && "text-neutral-400"
                        )}
                      >
                        <option value="">Select class (optional)</option>
                        {classOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-neutral-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Your Message" id="message" required>
                    <div className="relative">
                      <MessageSquare
                        className="pointer-events-none absolute left-3.5 top-3.5 size-4 text-neutral-400"
                        aria-hidden
                      />
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell us about your goals, preferred batch timing, or any questions..."
                        className={cn(inputClass, "resize-none pl-10")}
                        aria-invalid={!!errors.message}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-xs text-yac-red">{errors.message}</p>
                    )}
                  </Field>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5",
                      "text-sm font-semibold text-white sm:text-base",
                      "bg-yac-red shadow-[0_4px_14px_rgba(220,38,38,0.35)]",
                      "transition-all hover:bg-yac-red/90 active:scale-[0.98]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red focus-visible:ring-offset-2",
                      "disabled:cursor-not-allowed disabled:opacity-70"
                    )}
                  >
                    <Send className="size-4" aria-hidden />
                    {submitting ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </RevealAnimation>
        </div>
      </Container>
    </section>
  );
}
