"use client";

import axios from "axios";
import { useRef, useState } from "react";
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

const Contact = () => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const submitForm = async () => {
    if (isLoading) return;

    const newErrors = {
      email: !formValues.email.trim(),
      subject: !formValues.subject.trim(),
      message: !formValues.message.trim(),
    };

    setErrors(newErrors);

    if (
      !formValues.email.trim() ||
      !formValues.subject.trim() ||
      !formValues.message.trim()
    ) {
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
      className="w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto my-10 md:my-24 text-center"
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
            className="border rounded-md flex flex-col p-8 gap-3"
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="text-left font-medium">
                Email:
              </label>
              <input
                type="text"
                name="email"
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
                value={formValues.message}
                onChange={handleChange}
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

export default Contact;
