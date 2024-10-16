"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function Itinerary() {
  return (
    <div className="">
      <div className="mx-auto w-full max-w-lg divide-y divide-slate-300/5 rounded-xl bg-slate-400/5">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-slate-700 group-data-[hover]:text-slate-600/80">
              What is your refund policy?
            </span>
            <IoChevronDownOutline className="size-5 fill-slate-300/60 group-data-[hover]:fill-slate-300/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-slate-600 group-data-[hover]:text-slate-600/80">
              Do you offer technical support?
            </span>
            <IoChevronDownOutline className="size-5 fill-slate-500/60 group-data-[hover]:fill-slate-600/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-slate-600/50">
            No.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
