import { Toaster } from "sonner";

export default function Sonner(props: any) {
  return (
    <div>
      <Toaster
        toastOptions={{
          unstyled: true,
          closeButton: true,
          classNames: {
            success:
              "bg-gradient-to-r from-green-600 via-green-600 to-green-700 pb-2 rounded shadow",
            info: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 rounded shadow",
            warning:
              "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-600 rounded shadow",
            error:
              "bg-gradient-to-r from-red-600 via-red-600 to-red-700 rounded shadow",
            title:
              "px-6 py-3 pe-8 pt-0 text-slate-50 text-sm border-b border-slate-50/[.4] font-medium font-inter lg:min-w-[350px]",
            description:
              "px-6 py-2 pb-4 text-slate-100 text-sm font-normal font-inter",
            actionButton:
              "bg-transparent absolute top-0 left-0 text-slate-100 rounded text-xs font-inter w-full h-full",
            cancelButton:
              "bg-orange-700 text-orange-100 px-4 py-2 rounded mb-2 ms-6 text-xs font-inter",
            closeButton:
              "transition-all duration-300 absolute left-auto right-0 mr-auto mt-5 bg-slate-900/[.2] border-0 text-slate-50 hover:text-slate-800",
          },
        }}
      />
    </div>
  );
}
