"use client";

import { Icon } from "@iconify/react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ open, onClose, children }: Props) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-negro/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* stopPropagation evita que un clic dentro del cuadro cierre el modal */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto scroll-fino rounded-3xl bg-blanco p-8 shadow-2xl dark:bg-panel-oscuro animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 flex justify-center items-center w-9 h-9 rounded-full text-zinc-500 hover:bg-zinc-100 hover:text-negro dark:hover:bg-zinc-800 dark:hover:text-blanco cursor-pointer"
        >
          <Icon icon="mdi:close" className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
