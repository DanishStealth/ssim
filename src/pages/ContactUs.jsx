import { useState } from "react";
import SEO from "@/components/Seo";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Send,
  GraduationCap,
  Briefcase,
  UserPlus,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Move InputField component outside to prevent re-creation on renders
const InputField = ({
  name,
  label,
  type = "text",
  placeholder,
  className,
  formData,
  errors,
  touched,
  onChange,
  onBlur,
  ...props
}) => {
  const hasError = touched[name] && errors[name];
  const isValid = touched[name] && !errors[name] && formData[name]?.trim();

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={formData[name]}
          onChange={onChange}
          onBlur={onBlur}
          className={cn(
            "transition-all duration-200",
            hasError &&
              "border-red-500 focus:border-red-500 focus:ring-red-500",
            isValid &&
              "border-green-500 focus:border-green-500 focus:ring-green-500"
          )}
          {...props}
        />
        {isValid && (
          <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
        )}
        {hasError && (
          <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
        )}
      </div>
      {hasError && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {errors[name]}
        </p>
      )}
    </div>
  );
};

// Move TextareaField component outside to prevent re-creation on renders
const TextareaField = ({
  name,
  label,
  placeholder,
  className,
  formData,
  errors,
  touched,
  onChange,
  onBlur,
  ...props
}) => {
  const hasError = touched[name] && errors[name];
  const isValid = touched[name] && !errors[name] && formData[name]?.trim();

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <div className="relative">
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={onChange}
          onBlur={onBlur}
          className={cn(
            "min-h-[120px] transition-all duration-200 resize-none",
            hasError &&
              "border-red-500 focus:border-red-500 focus:ring-red-500",
            isValid &&
              "border-green-500 focus:border-green-500 focus:ring-green-500"
          )}
          {...props}
        />
        {isValid && (
          <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-green-500" />
        )}
        {hasError && (
          <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-red-500" />
        )}
      </div>
      {hasError && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {errors[name]}
        </p>
      )}
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    let errorMsg = "";

    // Required field validation
    if (!value.trim()) {
      errorMsg = "This field is required";
    } else {
      // Specific field validations
      switch (name) {
        case "firstName":
        case "lastName":
          if (!/^[A-Za-z\s]+$/.test(value.trim())) {
            errorMsg = "Only letters and spaces are allowed";
          } else if (value.trim().length < 2) {
            errorMsg = "Must be at least 2 characters long";
          }
          break;
        case "email":
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorMsg = "Please enter a valid email address";
          }
          break;
        case "phone":
          if (!/^[6-9]\d{9}$/.test(value)) {
            errorMsg = "Enter a valid 10-digit phone number starting with 6-9";
          }
          break;
        case "subject":
          if (value.trim().length < 5) {
            errorMsg = "Subject must be at least 5 characters long";
          }
          break;
        case "message":
          if (value.trim().length < 10) {
            errorMsg = "Message must be at least 10 characters long";
          }
          break;
      }
    }

    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors = {};
    const newTouched = {};

    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    // Check if form is valid
    const isValid = Object.keys(newErrors).length === 0;

    if (isValid) {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form data:", formData);
        setSubmitSuccess(true);

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setTouched({});

        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        console.error("Submission failed:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content:
        "Siva Sivani Institute of Management, NH 44, Kompally, Secunderabad, Telangana - 500100.",
    },
    {
      icon: GraduationCap,
      title: "Admissions Office",
      content: (
        <>
          <p>
            <strong>Email:</strong>{" "}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=admissions@ssim.ac.in">
              admissions@ssim.ac.in
            </a>
          </p>
          <p>
            <strong>Call:</strong> <a href="tel:+919391114948">9391114948</a> /{" "}
            <a href="tel:+916281350079">6281350079</a>
          </p>
        </>
      ),
    },
    // {
    //   icon: Phone,
    //   title: "Corporate Relations Office",
    //   content: (
    //     <>
    //       <p>
    //         <strong>Email:</strong> info@ssim.ac.in
    //       </p>
    //       <p>
    //         <strong>Call:</strong> 040-2716 5451 / 53 / 54
    //       </p>
    //     </>
    //   ),
    // },
    {
      icon: Briefcase,
      title: "Placements",
      content: (
        <>
          <p>
            <strong>Email:</strong>{" "}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=placements@ssim.ac.in">
              placements@ssim.ac.in
            </a>
          </p>
          <p>
            <strong>Call:</strong>{" "}
            <a href="tel:+919133305060">9133305060</a> /{" "}
            <a href="tel:+919989191878">9989191878</a>
          </p>
        </>
      ),
    },
    {
      icon: UserPlus,
      title: "PGP Office",
      content: (
        <>
          <p>
            <strong>Email:</strong>{" "}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pgpchair@ssim.ac.in">
              pgpchair@ssim.ac.in
            </a>
          </p>
          <p>
            <strong>Call:</strong> <a href="tel:+918328275438">8328275438</a>
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: "Examination Department (For student verification)",
      content: (
        <>
          <p>
            <strong>Email:</strong>{" "}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=controller.exams@ssim.ac.in">
              controller.exams@ssim.ac.in
            </a>
          </p>
          <p>
            <strong>Call:</strong> <a href="tel:+919391115088">9391115088</a>
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Siva Sivani Institute of Management (SSIM). Find our address, phone number, and email for admissions, placements, and general inquiries."
        keywords="SSIM contact, contact siva sivani, ssim hyderabad address, ssim phone number"
        canonicalUrl="https://www.ssim.ac.in/contact-us"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Success Alert */}
          {submitSuccess && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Thank you for your message! We'll get back to you as soon as
                possible.
              </AlertDescription>
            </Alert>
          )}

          <Card className="border-none shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-8 md:p-12">
              <CardTitle className="text-4xl md:text-5xl font-bold tracking-tight">
                Contact Us
              </CardTitle>
              <CardDescription className="text-xl text-blue-100 mt-3">
                We'd love to hear from you! Get in touch with us today.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Contact Information */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Get in Touch
                  </h3>
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card
                        key={index}
                        className="border border-gray-200 hover:shadow-md transition-shadow duration-200"
                      >
                        <CardContent className="flex items-start space-x-4 p-4">
                          <div className="flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              {info.title}
                            </h4>
                            <div className="text-sm text-gray-600 space-y-1">
                              {typeof info.content === "string" ? (
                                <p>{info.content}</p>
                              ) : (
                                info.content
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Contact Form */}
                <Card className="lg:col-span-2 border border-gray-200 shadow-lg">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-semibold text-blue-700 flex items-center gap-2">
                      <Send className="h-6 w-6" />
                      Send us a message
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon as
                      possible.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                          name="firstName"
                          label="First Name"
                          placeholder="Enter your first name"
                          formData={formData}
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <InputField
                          name="lastName"
                          label="Last Name"
                          placeholder="Enter your last name"
                          formData={formData}
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                          name="email"
                          label="Email Address"
                          type="email"
                          placeholder="Enter your email address"
                          formData={formData}
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <InputField
                          name="phone"
                          label="Phone Number"
                          placeholder="Enter your phone number"
                          formData={formData}
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <InputField
                        name="subject"
                        label="Subject"
                        placeholder="What is this regarding?"
                        formData={formData}
                        errors={errors}
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <TextareaField
                        name="message"
                        label="Message"
                        className="min-h-[180px] h-full"
                        placeholder="Tell us more about your inquiry..."
                        formData={formData}
                        errors={errors}
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Map Section */}
          <Card className="mt-8 border-none shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm">
            <CardHeader className="p-6">
              <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                Find Us Here
              </CardTitle>
              <CardDescription className="text-gray-600">
                Visit our campus located in Kompally, Secunderabad
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.444089771495!2d78.48308207436037!3d17.534030983378358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb855abbdd1bd9%3A0x40fab830f7127b5!2sSiva%20Sivani%20Institute%20of%20Management%20%5BBschool%20in%20Hyderabad%5D!5e0!3m2!1sen!2sin!4v1734608560811!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
