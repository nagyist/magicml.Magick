import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type AgentMobileSlideOverProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
};

export default function AgentMobileSlideOver({
  open,
  setOpen,
  children,
}: AgentMobileSlideOverProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden md:hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 top-0 right-0 flex max-w-full pl-10 pointer-events-none sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen bg-white pointer-events-auto dark:bg-main-shark">
                  <div className="flex flex-col h-full overflow-y-scroll shadow-xl">
                    <div className="relative flex-1 mt-6">{children}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
