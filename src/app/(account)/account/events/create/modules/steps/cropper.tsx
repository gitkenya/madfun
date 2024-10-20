"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Croppie from "croppie";
import "croppie/croppie.css";
import { toast } from "sonner";
import { IoCameraOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

export default function CroppieModal(props: any) {
  const { user } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [eventPhoto, setEventPhoto] = useState("");
  const [croppie, setCroppie] = useState<Croppie | null>(null);

  const handleCroppie = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsOpen(true);
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        const croppieElement = document.getElementById("croppie-section");
        if (croppieElement) {
          const croppieInstance = new Croppie(croppieElement, {
            showZoomer: true,
            enableResize: false,
            enableExif: true,
            enableOrientation: true,
            viewport: { width: 280, height: 280, type: "square" },
            boundary: { width: 300, height: 300 },
          });
          setTimeout(() => {
            croppieInstance.bind({
              url: dataUrl,
            });
            setCroppie(croppieInstance);
          }, 500);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const cancelSubmit = async () => {
    const inputFile = document.getElementById(
      "user_profile_photo"
    ) as HTMLInputElement;
    inputFile.value = "";
    setIsOpen(false);
    setLoading(false);
    toast.error("Photo upload cancelled!", {
      description:
        "Your photo upload process has been successfully cancelled. ",
      position: "bottom-right",
      icon: " ",
      duration: 5000,
    });
  };

  const handleSubmit = async () => {
    const inputFile = document.getElementById(
      "event_poster"
    ) as HTMLInputElement;
    inputFile.value = "";
    if (croppie !== null) {
      croppie
        .result({
          type: "base64",
          size: {
            width: 480,
            height: 480,
          },
        })
        .then(async (photo: any) => {
          setIsOpen(false);
          setEventPhoto(photo);
        });
    } else {
      toast.error("Photo upload failed!", {
        description: "Please try again or contact us if the issue persists.",
        position: "bottom-right",
        icon: " ",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        id="event_poster"
        name="event_poster"
        className="hidden"
        onChange={handleCroppie}
      />
      <label
        htmlFor="event_poster"
        className="relative cursor-pointer p-1 flex flex-col items-center justify-center gap-3 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 rounded-lg"
      >
        <div className="relative w-full h-full rounded-lg flex flex-col items-center justify-center gap-3">
          {eventPhoto && (
            <Image
              className="object-cover rounded-lg"
              src={eventPhoto}
              alt="Madfun Event Poster"
              fill
            />
          )}
          <span>Add Poster</span>
          <IoCameraOutline size={28} />
        </div>
      </label>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[100]"
          onClose={() => setIsOpen(isOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[400px] h-auto transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 p-4 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col items-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg text-center font-semibold text-slate-600 dark:text-slate-200 mb-4"
                    >
                      Crop your event poster
                    </Dialog.Title>
                    <div
                      className="croppie-section w-full h-auto rounded-t-lg bg-slate-300 dark:bg-slate-700 pt-6"
                      id="croppie-section"
                    ></div>
                    <div className="w-full flex justify-between">
                      <button
                        type="button"
                        className="transition-all duration-300 w-full inline-flex justify-center rounded-bl-lg bg-slate-600 hover:bg-slate-700 px-4 py-2 text-sm font-medium text-slate-50 focus:outline-none"
                        onClick={cancelSubmit}
                        disabled={isLoading}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="transition-all duration-300 w-full inline-flex justify-center items-center gap-3 rounded-br-lg bg-primary-500 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-primary-600 focus:outline-none"
                        onClick={handleSubmit}
                        disabled={isLoading}
                      >
                        {isLoading ? "Please wait..." : "Crop Photo"}
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
