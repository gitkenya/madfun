"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { IoMdShare } from "react-icons/io";
import { IoCheckmark, IoClose } from "react-icons/io5";

export default function ShareModal(props: any) {
  const { event } = props;
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="bg-slate-200 w-[30px] h-[30px] rounded-full flex items-center justify-center"
        onClick={openModal}
      >
        <IoMdShare size={16} />
      </button>
      <dialog
        ref={modalRef}
        id={event?.id}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box rounded-sm flex flex-col gap-5">
          <div className="flex flex-row items-center justify-between">
            <h3 className="font-extrabold text-xl">Share</h3>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="bg-slate-100 border border-slate-600 text-slate-600 rounded-full p-1.5">
                <IoClose size={18} />
              </button>
            </form>
          </div>
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center justify-center gap-2 text-xs text-slate-500">
              <Link
                href="https://whatsapp.com"
                target="_blank"
                className="bg-slate-100 p-0 sm:p-3 rounded-full"
              >
                <Image
                  src="/assets/img/social/whatsapp.png"
                  width={36}
                  height={36}
                  alt="Share via WhatsApp"
                />
              </Link>
              Whatsapp
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-xs text-slate-500">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-slate-100 p-0 sm:p-3 rounded-full"
              >
                <Image
                  src="/assets/img/social/facebook.png"
                  width={36}
                  height={36}
                  alt="Share via Facebook"
                />
              </Link>
              Facebook
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-xs text-slate-500">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-slate-100 p-0 sm:p-3 rounded-full"
              >
                <Image
                  src="/assets/img/social/instagram.png"
                  width={36}
                  height={36}
                  alt="Share via Instagram"
                />
              </Link>
              Instagram
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-xs text-slate-500">
              <Link
                href="https://telegram.org"
                target="_blank"
                className="bg-slate-100 p-0 sm:p-3 rounded-full"
              >
                <Image
                  src="/assets/img/social/telegram.png"
                  width={36}
                  height={36}
                  alt="Share via Telegram"
                />
              </Link>
              Telegram
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-xs text-slate-500">
              <Link
                href="https://madfun.com"
                target="_blank"
                className="bg-slate-100 p-0 sm:p-3 rounded-full"
              >
                <Image
                  src="/assets/img/social/save.png"
                  width={36}
                  height={36}
                  alt="Download"
                />
              </Link>
              Save
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm">Copy Link</h4>
            <div className="flex flex-row justify-between items-center">
              <div className="px-4 py-2 border border-slate-400 rounded w-full focus:outline-none text-sm text-slate-400">
                {event?.url}
              </div>
              <button
                className=" absolute right-10 text-slate-400"
                onClick={() => copyToClipboard(event?.url)}
              >
                {copied ? (
                  <IoCheckmark size={24} className="text-green-500" />
                ) : (
                  <FiCopy size={24} className="text-slate-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
