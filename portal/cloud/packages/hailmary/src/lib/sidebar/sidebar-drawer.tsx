import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from '@magickml/client-ui';
import { atom, useAtom } from 'jotai';

export const sidebarDrawerAtom = atom(false);

type Props = {};

export const SidebarDrawer = (props: Props) => {
  const [isOpen, setIsOpen] = useAtom(sidebarDrawerAtom);
  const onClose = () => setIsOpen(false);
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerTrigger asChild></DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Configuration</DrawerTitle>
          <DrawerDescription>
            Configure the settings for the model and messages.
          </DrawerDescription>
        </DrawerHeader>
        {/* Render settings form */}
      </DrawerContent>
    </Drawer>
  );
};
