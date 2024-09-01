import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

type CustomDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

const CustomDialog: React.FC<CustomDialogProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex h-auto items-center justify-center">
          <DialogPanel transition className="w-full h-dvh rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-lg font-medium text-gray-900">{title}</DialogTitle>
              <button onClick={onClose} className="flex justify-center items-center bg-[#e6e9f1] w-10 h-10 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <span className="sr-only">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="max-w-2xl mx-auto mt-2">{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default CustomDialog;
