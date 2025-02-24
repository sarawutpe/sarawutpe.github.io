import React, { useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  onLoadimgId: string;
  title: string;
  imgs: string[];
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, onLoadimgId, title, imgs }) => {
  useEffect(() => {
    if (isOpen && onLoadimgId) {
      setTimeout(() => {
        const section = document.getElementById(onLoadimgId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 50);
    }
  }, [isOpen, onLoadimgId]);

  return (
    <div>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
        {/* Nav */}
        <div className="fixed w-full top-0 right-0 z-50 bg-white">
          <div className="flex justify-between items-center py-2 px-6">
            <DialogTitle className="text-lg font-medium text-gray-900">{title}</DialogTitle>
            <button
              onClick={onClose}
              className="flex justify-center items-center bg-[#e6e9f1] w-10 h-10 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="fixed top-10 inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex h-auto items-center justify-center">
            <DialogPanel
              transition
              className="w-full h-full rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="max-w-2xl mx-auto mt-4">
                <div id="post-wrapper" className="scroll-smooth w-full h-full">
                  {imgs.map((img, index) => (
                    <div
                      key={index}
                      id={`#preview${index + 1}`}
                      className="relative shadow-sm mb-8"
                    >
                      <img src={img} />
                      <div className="absolute top-2 left-2">
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                          #{index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Lightbox;
