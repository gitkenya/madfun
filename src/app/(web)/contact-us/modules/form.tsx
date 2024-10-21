"use client";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import validator from "validator";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import ContactButton from "./button";
import { sendMessage } from "./actions";
export default function ContactForm(props: any) {
  const { ipAddress, geoData } = props;
  const ref = useRef<HTMLFormElement>(null);
  const [ipData, setIPData] = useState(geoData);
  const [phone, setPhone] = useState(geoData.calling_code);
  const [country, setCountry] = useState(geoData.country_code2.toLowerCase());
  const [emailVal, setEmailVal] = useState("");
  useEffect(() => {
    // Function to update alt tags based on class name
    const updateAltTagsByClass = (className: string, altText: string) => {
      const images = document.querySelectorAll(`.${className}`);
      images.forEach((img) => {
        img.setAttribute("alt", altText);
      });
    };

    // Call the function with your class name and desired alt text
    updateAltTagsByClass(
      "react-international-phone-flag-emoji",
      "Madfun - Events, Flights and Holidays"
    );
  }, []);

  const validateEmail = (ev: any) => {
    const email = ev.target.value;
    if (email.length > 0) {
      if (validator.isEmail(email)) {
        setEmailVal("valid");
      } else {
        setEmailVal("invalid");
      }
    } else {
      setEmailVal("");
    }
  };
  return (
    <div className="">
      <form
        ref={ref}
        className="form"
        action={async (formData) => {
          const email = formData.get("contact_email") as string;
          if (validator.isEmail(email)) {
            const res = await sendMessage(formData, ipData);
            console.log(res);
            if (res.success) {
              if (res.data.result === "valid") {
                ref.current?.reset();
                toast.success(
                  res.info.title ? res.info.title : "Request successful!",
                  {
                    description:
                      "Your message has been successfully sent! We will get in touch shortly.",
                    position: "bottom-right",
                    icon: " ",
                    duration: 5000,
                  }
                );
              } else {
                toast.error(
                  res.info.title ? res.info.title : "Request Failed!",
                  {
                    description:
                      "We could not send your message at the moment. Please try again later.",
                    position: "bottom-right",
                    icon: " ",
                    duration: 5000,
                  }
                );
              }
            } else {
              if (res.data.result === "invalid") {
                setEmailVal("invalid");
                toast.error(
                  res.info.title ? res.info.title : "Invalid email address!",
                  {
                    description:
                      "Please check and enter a valid email address then resend your message!.",
                    position: "bottom-right",
                    icon: " ",
                    duration: 5000,
                  }
                );
              } else {
                toast.error(
                  res.info.title ? res.info.title : "An error occurred!",
                  {
                    description:
                      "We could not send your message at the moment. Please try again later.",
                    position: "bottom-right",
                    icon: " ",
                    duration: 5000,
                  }
                );
              }
            }
          } else {
            toast.error("Invalid email address!", {
              description:
                "Please check and enter a valid email address then resend your message!.",
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });
          }
        }}
      >
        <div className="grid grid-cols-1 gap-3">
          <div className="grid mb-3">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2"
              htmlFor="contact_name_id"
            >
              Your Full Name
            </label>
            <input
              type="text"
              className="appearance-none block w-full outline-none text-sm border border-slate-300 text-slate-800 bg-slate-50 rounded py-3 px-4 focus:outline-none"
              id="contact_name_id"
              name="contact_name"
              placeholder="Jane Doe"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative grid">
            <label
              className="flex items-center justify-between tracking-wide text-slate-800 text-xs font-bold mb-2"
              htmlFor="contact_email_id"
            >
              <span className="uppercase">Your Email</span>
            </label>
            <input
              type="email"
              className="appearance-none block w-full outline-none text-sm border border-slate-300 text-slate-800 bg-slate-50 rounded py-3 px-4 focus:outline-none"
              id="contact_email_id"
              name="contact_email"
              placeholder="jane@example.com"
              required
              onKeyUp={validateEmail}
            />
          </div>
          <div className="grid">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2"
              htmlFor="contact_phone_id"
            >
              Phone Number
            </label>
            <PhoneInput
              defaultCountry={country.toString()}
              value={phone}
              defaultMask="... ... ..."
              forceDialCode={true}
              className="phone-input"
              inputClassName="form-control"
              onChange={(phone) => setPhone(phone)}
              inputProps={{
                id: "contact_phone_id",
                name: "contact_phone",
                className:
                  "appearance-none block w-full outline-none text-sm border border-slate-300 text-slate-800 bg-slate-50 rounded rounded-s-none py-3 px-4 focus:outline-none",
                required: true,
                autoFocus: false,
                placeholder: "712 345 678",
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 mt-6">
          <div className="grid relative">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2"
              htmlFor="contact_message_id"
            >
              Message
            </label>
            <div className="flex relative justify-between items-center">
              <textarea
                name="contact_message"
                id="contact_message_id"
                className="appearance-none block w-full outline-none text-sm min-h-32 border border-slate-300 text-slate-800 bg-slate-50 rounded py-3 px-4 focus:outline-none"
                placeholder="Type your message..."
                required
              />
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <ContactButton />
          </div>
        </div>
      </form>
    </div>
  );
}
