import { useState, useRef } from "react";
import SEO from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeedbackForm() {
  const { show } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    phone: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    studentId: "",
    email: "",
    phone: "",
    message: "",
  });

  // Success state for fields
  const [validFields, setValidFields] = useState({
    name: false,
    studentId: false,
    email: false,
    phone: false,
    message: true, // Optional field
  });

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form ref for scrolling to errors
  const formRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Validate field on change for immediate feedback
    validateField(name, value);
  };

  // Validate individual field
  const validateField = (name, value) => {
    let isValid = true;
    let errorMessage = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          errorMessage = "Name is required";
          isValid = false;
        } else if (value.trim().length < 2) {
          errorMessage = "Name must be at least 2 characters";
          isValid = false;
        }
        break;

      case "studentId":
        if (!value.trim()) {
          errorMessage = "Student ID is required";
          isValid = false;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          errorMessage = "Email is required";
          isValid = false;
        } else if (!emailRegex.test(value)) {
          errorMessage = "Please enter a valid email address";
          isValid = false;
        }
        break;

      case "phone":
        const phoneRegex = /^\d{10,15}$/;
        if (!value.trim()) {
          errorMessage = "Phone number is required";
          isValid = false;
        } else if (!phoneRegex.test(value.replace(/[-()\s]/g, ""))) {
          errorMessage = "Please enter a valid phone number";
          isValid = false;
        }
        break;

      case "message":
        // Message is optional
        isValid = true;
        break;

      default:
        break;
    }

    // Update error state
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));

    // Update valid fields state
    setValidFields((prev) => ({ ...prev, [name]: isValid }));

    return isValid;
  };

  // Validate all fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate each field
    Object.entries(formData).forEach(([key, value]) => {
      if (!validateField(key, value)) {
        isValid = false;
      }
    });

    // Update errors state
    setErrors(newErrors);

    // Scroll to first error if any
    if (!isValid && formRef.current) {
      const firstErrorField = formRef.current.querySelector(
        '[aria-invalid="true"]'
      );
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    return isValid;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData);

        show({
          message:
            "Form submitted successfully! Thank you for sharing your thoughts.",
          type: "success",
          duration: 3000,
        });

        // Reset form
        setFormData({
          name: "",
          studentId: "",
          email: "",
          phone: "",
          message: "",
        });

        // Reset valid fields
        setValidFields({
          name: false,
          studentId: false,
          email: false,
          phone: false,
          message: true,
        });

        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <>
      <SEO
        title="Student Feedback"
        description="Share your feedback with Siva Sivani Institute of Management (SSIM). We value your input to help us improve our programs and student experience."
        keywords="SSIM student feedback, student suggestions, college feedback, program feedback"
        canonicalUrl="https://www.ssim.ac.in/students-life/students-feedback"
      />
      <section className="py-16 px-5 sm:px-0 sm:py-20">
        <Card className="w-full max-w-2xl mx-auto shadow-lg border-t-4 border-t-mainBlue">
          <CardHeader className="text-center space-y-2 pb-6">
            <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-mainBlue bg-clip-text text-transparent">
              Fill the form and share your thoughts...
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              We value your feedback and appreciate your time
            </p>
          </CardHeader>

          <CardContent>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium flex items-center"
                >
                  Name <span className="text-destructive ml-1">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={cn(
                      "transition-all duration-200 pr-10",
                      errors.name
                        ? "border-destructive focus-visible:ring-destructive/30"
                        : "",
                      validFields.name
                        ? "border-green-500 focus-visible:ring-green-500/30"
                        : ""
                    )}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {validFields.name && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
                  )}
                  {errors.name && (
                    <AlertCircle className="w-5 h-5 text-destructive absolute right-3 top-1/2 transform -translate-y-1/2" />
                  )}
                </div>
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-destructive text-sm mt-1 animate-fadeIn"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="studentId"
                  className="text-sm font-medium flex items-center"
                >
                  Student ID <span className="text-destructive ml-1">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Enter your student ID"
                    className={cn(
                      "transition-all duration-200 pr-10",
                      errors.studentId
                        ? "border-destructive focus-visible:ring-destructive/30"
                        : "",
                      validFields.studentId
                        ? "border-green-500 focus-visible:ring-green-500/30"
                        : ""
                    )}
                    aria-invalid={!!errors.studentId}
                    aria-describedby={
                      errors.studentId ? "studentId-error" : undefined
                    }
                  />
                  {validFields.studentId && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
                  )}
                  {errors.studentId && (
                    <AlertCircle className="w-5 h-5 text-destructive absolute right-3 top-1/2 transform -translate-y-1/2" />
                  )}
                </div>
                {errors.studentId && (
                  <p
                    id="studentId-error"
                    className="text-destructive text-sm mt-1 animate-fadeIn"
                  >
                    {errors.studentId}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium flex items-center"
                  >
                    Email <span className="text-destructive ml-1">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={cn(
                        "transition-all duration-200 pr-10",
                        errors.email
                          ? "border-destructive focus-visible:ring-destructive/30"
                          : "",
                        validFields.email
                          ? "border-green-500 focus-visible:ring-green-500/30"
                          : ""
                      )}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {validFields.email && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
                    )}
                    {errors.email && (
                      <AlertCircle className="w-5 h-5 text-destructive absolute right-3 top-1/2 transform -translate-y-1/2" />
                    )}
                  </div>
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-destructive text-sm mt-1 animate-fadeIn"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium flex items-center"
                  >
                    Phone <span className="text-destructive ml-1">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={cn(
                        "transition-all duration-200 pr-10",
                        errors.phone
                          ? "border-destructive focus-visible:ring-destructive/30"
                          : "",
                        validFields.phone
                          ? "border-green-500 focus-visible:ring-green-500/30"
                          : ""
                      )}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {validFields.phone && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
                    )}
                    {errors.phone && (
                      <AlertCircle className="w-5 h-5 text-destructive absolute right-3 top-1/2 transform -translate-y-1/2" />
                    )}
                  </div>
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="text-destructive text-sm mt-1 animate-fadeIn"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Comment or Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your thoughts here..."
                  className="min-h-[120px] resize-none transition-all duration-200"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-destructive text-sm mt-1 animate-fadeIn"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full sm:w-auto min-w-[120px] bg-mainBlue text-white hover:bg-mainBlue/80 transition-all duration-300 flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center border-t pt-6 text-center text-sm text-muted-foreground">
            <p>
              All fields marked with <span className="text-destructive">*</span>{" "}
              are required
            </p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
