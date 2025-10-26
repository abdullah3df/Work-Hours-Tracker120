import React, { useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon, XMarkIcon, InformationCircleIcon } from './Icons';

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  icon?: React.ReactNode;
}

interface ToastProps {
  toast: ToastMessage;
  onRemove: (id: number) => void;
}

const toastStyles = {
  success: {
    icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
    borderColor: 'border-green-500',
  },
  error: {
    icon: <XCircleIcon className="w-6 h-6 text-red-500" />,
    borderColor: 'border-red-500',
  },
  info: {
    icon: <InformationCircleIcon className="w-6 h-6 text-indigo-500" />,
    borderColor: 'border-indigo-500',
  }
};


const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, 5000); // 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [toast.id, onRemove]);

  return (
    <div className={`max-w-sm w-full bg-white dark:bg-slate-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden border border-slate-200 dark:border-slate-700 border-l-4 ${toastStyles[toast.type].borderColor}`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {toast.icon || toastStyles[toast.type].icon}
          </div>
          <div className="ms-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{toast.message}</p>
          </div>
          <div className="ms-4 flex-shrink-0 flex">
            <button
              onClick={() => onRemove(toast.id)}
              className="bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


interface ToastContainerProps {
    toasts: ToastMessage[];
    onRemoveToast: (id: number) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemoveToast }) => {
    return (
        <div className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-[10000]">
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                {toasts.map((toast) => (
                    <Toast key={toast.id} toast={toast} onRemove={onRemoveToast} />
                ))}
            </div>
        </div>
    );
}