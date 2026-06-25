"use client";

import axios from "axios";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

const SLUG_DICTIONARY: Record<string, string> = {
  be: "Backend",
  fe: "Frontend",
  repo: "Repository",
  req: "Request",
};

const formatSlug = (slug: string) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase();
      return (
        SLUG_DICTIONARY[lower] ?? word.charAt(0).toUpperCase() + word.slice(1)
      );
    })
    .join(" ");

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    subject: false,
    message: false,
  });

  const rawSlug = useSearchParams().get("req");

  useEffect(() => {
    if (!rawSlug) {
      setFormValues({ email: "", subject: "", message: "" });
      return;
    }

    if (rawSlug === "resume-request") {
      setFormValues((prev) => ({
        ...prev,
        subject: "Resume Request",
        message: `Hi,\n\nI came across your portfolio and I'm interested in viewing your resume.\n\nCould you please send a copy of your resume to my email?\n\nThank you.`,
      }));
      return;
    }

    const displaySlug = formatSlug(rawSlug);
    const displayWithoutRequest = displaySlug
      .replace(/\bRequest\b/i, "")
      .trim();

    setFormValues((prev) => ({
      ...prev,
      subject: displaySlug,
      message: `Hi,\n\nI'm requesting access to ${displayWithoutRequest}. Please add my email to the repository access list.\n\nLet me know if you need any additional details.\n\nThank you.`,
    }));
  }, [rawSlug]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const submitForm = async () => {
    if (isLoading) return;

    const newErrors = {
      email: !formValues.email.trim(),
      subject: !formValues.subject.trim(),
      message: !formValues.message.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      toast.error("Please fill in all fields before sending your message.");
      return;
    }

    setIsLoading(true);

    try {
      const result = await axios.post("/api/contact", formValues);
      setFormValues({ email: "", subject: "", message: "" });
      toast.success(result.data.message);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message ?? "Failed to send message");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article
      id="contact"
      className="w-full md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto my-10 md:my-24 text-center"
    >
      <Card>
        <CardHeader>
          <CardTitle>
            <Title
              text="Contact Me"
              className="flex flex-col items-center justify-center rotate-2"
            />
          </CardTitle>
          <CardDescription className="text-base lg:text-lg">
            I&apos;m always interested in hearing about new learning
            opportunities, collaborating on coding projects, or simply connect
            on social platforms.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            ref={formRef}
            onSubmit={async (e) => {
              e.preventDefault();
              await submitForm();
            }}
            className="rounded-md flex flex-col p-2 xl:p-8 xl:pt-0 gap-3"
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="text-left font-medium">
                Email:
              </label>
              <input
                type="text"
                name="email"
                placeholder="name@email.com"
                value={formValues.email}
                onChange={handleChange}
                className={`border rounded-md p-2 ${errors.email ? "border-red-500" : "border-input"}`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-left font-medium">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formValues.subject}
                onChange={handleChange}
                className={`border rounded-md p-2 ${errors.subject ? "border-red-500" : "border-input"}`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-left font-medium">
                Message:
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formValues.message}
                onChange={handleChange}
                rows={6}
                className={`border rounded-md p-2 ${errors.message ? "border-red-500" : "border-input"}`}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              variant="default"
              className="w-full"
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </article>
  );
};

const Contact = () => (
  <Suspense fallback={null}>
    <ContactForm />
  </Suspense>
);

export default Contact;
