"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { signUp } from "./actions";
import RegisterButton from "./button";
import { useEffect, useId, useRef, useState } from "react";
import {
  IoChevronDownOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { toast } from "sonner";
import validator from "validator";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select, { components } from "react-select";

export default function RegisterForm(props: any) {
  const router = useRouter();
  const { ipAddress, geoData } = props;
  const ref = useRef<HTMLFormElement>(null);
  const [ipData, setIPData] = useState(geoData);
  const [phone, setPhone] = useState(geoData.calling_code);
  const [country, setCountry] = useState(geoData.country_code2.toLowerCase());
  const [passMode, setPassMode] = useState("password");
  const [emailVal, setEmailVal] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const genders: any[] = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
    { value: 3, label: "I'd rather not say" },
  ];

  const handleGenderChange = (event: any) => {
    setSelectedGender(event.value);
  };

  const CustomDropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoChevronDownOutline />
      </components.DropdownIndicator>
    );
  };

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
      "Tuhustle - Freelance Platform"
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

  useEffect(() => {
    // Fetch the public IP address
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };

    fetchIP();
  }, []);

  return (
    <div className="w-full rounded-lg p-4 sm:p-8">
      <div className="mb-6 flex items-center gap-4">
        <Image
          className=""
          src="/assets/img/logos/logo.svg"
          width={60}
          height={60}
          alt="Madfun Events & Travel"
        />
        <div>
          <div className="font-bold text-xl sm:text-2xl text-slate-800">
            Create Account
          </div>
          <div className=" text-slate-700">
            Already have an account?{" "}
            <Link
              href="/login"
              className="transition-colors duration-300 font-medium text-yellow-500 hover:text-slate-800 underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <form
        className="form"
        action={async (formData) => {
          // Input Validation
          const email = formData.get("register_email") as string;
          const pass1 = formData.get("register_password") as string;
          const pass2 = formData.get("register_confirm") as string;
          if (!validator.isEmail(email)) {
            toast.error("Invalid Email Address", {
              description: "Please enter a correct email address and try again",
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });
          } else if (pass1 !== pass2) {
            toast.error("Password mismatch!", {
              description:
                "Your passwords did not match! Please correct this and try again.",
              position: "bottom-right",
              icon: " ",
              duration: 5000,
            });
          } else {
            const res = await signUp(formData, ipData);
            if (res.success) {
              ref.current?.reset();
              toast.success(res.info.title, {
                description: res.info.message,
                position: "bottom-right",
                icon: " ",
                duration: 5000,
              });
              router.push("/");
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/emails/welcome`,
                {
                  method: "post",
                  headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(res.data),
                }
              );
            } else {
              if (res.data.result !== "valid") {
                setEmailVal("invalid");
                //setShowModal(true);
                toast.error(res.info.title, {
                  description: res.info.message,
                  position: "bottom-right",
                  icon: " ",
                  duration: 5000,
                });
              } else {
                toast.error(res.info.title, {
                  description: res.info.message,
                  position: "bottom-right",
                  icon: " ",
                  duration: 5000,
                });
              }
            }
          }
        }}
      >
        <div className="grid grid-cols-1 gap-3">
          <div className="w-full mb-3">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="register_name"
            >
              Full name
            </label>
            <input
              type="text"
              className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
              id="register_name"
              name="register_name"
              placeholder="Jennifer Maina"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative grid">
            <label
              className="flex items-center justify-between tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="register_email"
            >
              <span className="uppercase">Email</span>
              {emailVal === "valid" ? (
                emailVal.length > 0 ? (
                  <span className="absolute right-0 bg-emerald-400 text-emerald-800 font-medium text-xs px-3 py-1 rounded-full">
                    Valid Email
                  </span>
                ) : (
                  ""
                )
              ) : emailVal.length > 0 ? (
                <span className="absolute right-0 bg-red-300 text-red-700 font-medium text-xs px-3 py-1 rounded-full">
                  Invalid Email
                </span>
              ) : (
                ""
              )}
            </label>
            <input
              type="email"
              className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
              id="register_email"
              name="register_email"
              placeholder="jennifer@example.com"
              required
              onKeyUp={validateEmail}
            />
          </div>
          <div className="grid">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="register_phone"
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
                id: "register_phone",
                name: "register_phone",
                className:
                  "appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded rounded-s-none py-2.5 px-4 focus:outline-none",
                required: true,
                autoFocus: false,
                placeholder: "712 345 678",
              }}
            />
          </div>

          <div className="grid relative">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="register_password"
            >
              Password
            </label>
            <div className="flex relative justify-between items-center">
              <input
                type={passMode}
                name="register_password"
                id="register_password"
                className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
                required
              />
              <span
                className="cursor-pointer absolute right-3 text-2xl text-slate-400"
                onClick={() =>
                  setPassMode(passMode === "password" ? "text" : "password")
                }
              >
                {passMode === "password" ? (
                  <IoEyeOffOutline />
                ) : (
                  <IoEyeOutline />
                )}
              </span>
            </div>
          </div>
          <div className="grid relative">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="register_confirm"
            >
              Repeat Password
            </label>
            <div className="flex relative justify-between items-center">
              <input
                type={passMode}
                name="register_confirm"
                id="register_confirm"
                className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
                required
              />
              <span
                className="cursor-pointer absolute right-3 text-2xl text-slate-400"
                onClick={() =>
                  setPassMode(passMode === "password" ? "text" : "password")
                }
              >
                {passMode === "password" ? (
                  <IoEyeOffOutline />
                ) : (
                  <IoEyeOutline />
                )}
              </span>
            </div>
          </div>
          <div className="w-full mb-3">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="register_gender"
            >
              Gender
            </label>
            <Select
              defaultValue={selectedGender}
              onChange={handleGenderChange}
              options={genders}
              placeholder="Gender"
              unstyled
              name="register_gender"
              required
              instanceId={useId()}
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              className="w-full"
              classNames={{
                control: () =>
                  "appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none",
                menu: () =>
                  "p-1 mt-1 border min-w-[200px] left-0 border-slate-200 text-slate-800 bg-white rounded-lg py-2.5 px-4 focus:outline-none",
                option: () =>
                  "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                menuList: () => "cursor-pointer text-base",
                placeholder: () => "text-slate-600",
                dropdownIndicator: () => "pt-1",
              }}
            />
          </div>
          <div className="w-full mb-3">
            <label
              className="block uppercase tracking-wide text-slate-800 text-xs mb-2"
              htmlFor="register_yob"
            >
              Year of Birth
            </label>
            <input
              type="number"
              className="appearance-none block w-full outline-none text-sm border border-slate-200 text-slate-800 bg-slate-50 rounded py-2.5 px-4 focus:outline-none"
              id="register_yob"
              name="register_yob"
              placeholder="eg 1996"
              required
            />
          </div>
        </div>
        <div className="w-full flex flex-row gap-2 my-3 items-center">
          <input
            id="register_terms"
            type="checkbox"
            name="register_terms"
            className="checkbox rounded border-slate-300"
            required
          />
          <label
            htmlFor="register_terms"
            className="cursor-pointer text-sm text-slate-800"
          >
            I agree to the Terms & conditions
          </label>
        </div>
        <div>
          <div className="grid pt-2">
            <RegisterButton />
          </div>
        </div>
      </form>
    </div>
  );
}
