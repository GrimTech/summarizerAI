import { toast, ToastOptions } from 'react-hot-toast';

const defaultOptions: ToastOptions = {
  duration: 4000,
  position: 'top-right',
};

export function useToast() {
  const showToast = (message: string, type: 'success' | 'error' = 'success', options?: ToastOptions) => {
    const toastOptions = { ...defaultOptions, ...options };
    if (type === 'error') {
      toast.error(message, toastOptions);
    } else {
      toast.success(message, toastOptions);
    }
  };

  return { showToast };
}
