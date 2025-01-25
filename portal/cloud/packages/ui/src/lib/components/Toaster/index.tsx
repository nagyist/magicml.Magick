import { Transition } from '@headlessui/react'
import { useMedia } from '@magickml/portal-hooks'
import { Toaster, ToastIcon, resolveValue } from 'react-hot-toast'

export const StyledToaster = () => {
  const small = useMedia('(max-width: 640px)')

  return (
    <Toaster position={small ? 'bottom-center' : 'bottom-left'}>
      {t => (
        <Transition
          appear
          show={t.visible}
          className="flex p-4 dark:text-white text-black transform border-2 rounded shadow-lg dark:bg-[#262730] bg-white border-secondary-main"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />

          <p
            className="px-2 text-sm text-[#000 !important] dark:text-white"
            data-test="Toast"
          >
            {
              // @ts-ignore
              resolveValue(t.message)
            }
          </p>
        </Transition>
      )}
    </Toaster>
  )
}
