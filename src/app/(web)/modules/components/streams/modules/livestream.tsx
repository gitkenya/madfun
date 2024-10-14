"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { IoClose, IoPlayCircleOutline } from "react-icons/io5";

export default function LivestreamModal(props: any) {
  const { event } = props;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  const closeModal = () => {
    if (modalRef.current) {
      if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src; // Reset the iframe src to pause the video
      }
      modalRef.current.close();
    }
  };

  return (
    <>
      <button
        className="transition-colors duration-300 rounded-full flex flex-col gap-2 text-white text-sm hover:text-yellow-400"
        onClick={openModal}
      >
        <IoPlayCircleOutline size={60} className="" />
        <span>Preview</span>
      </button>

      <dialog
        ref={modalRef}
        id={event?.id}
        className="modal modal-bottom sm:modal-middle"
        onClose={closeModal}
      >
        <div className="modal-box p-0 bg-transparent w-full sm:w-11/12 sm:min-w-[60rem] rounded-none flex flex-col gap-5">
          {/* Video Container */}
          <div className="w-full aspect-video">
            <iframe
              ref={iframeRef} // Reference to iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/CgGh1fCQIqA"
              title="Kingdom World Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
