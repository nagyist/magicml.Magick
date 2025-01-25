import Sheet, { SheetRef } from "react-modal-sheet";
import { useEffect, useRef, useState } from "react";

type ChatInputProps = {
  children: React.ReactNode;
  textareaRef: any;
  value: string;
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  displacement?: number;
};

const ChatInput = ({
  children,
  textareaRef,
  value,
  isOpen,
  setOpen,
  displacement = 0,
}: ChatInputProps) => {
  const ref = useRef<SheetRef>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [disableDrag] = useState(false);
  const initialSnap = 1;
  const maxHeight = 300;
  const baseSnap = 70;
  const initialSnapPoints = [maxHeight, baseSnap, 0];

  const [snapPoints, setSnapPoints] = useState(initialSnapPoints);

  // useEffect(() => {
  //   if (displacement === 0) {
  //     ref.current?.snapTo(1);
  //     setDisableDrag(true);
  //   } else {
  //     setDisableDrag(false);
  //   }
  // }, [displacement]);

  const close = () => {
    // setOpen(false);
  };

  useEffect(() => {
    // set innitial snap points from text area scrollHeight
    if (textareaRef.current) {
      setSnapPoints([maxHeight, textareaRef.current.scrollHeight, 0]);
    }
  }, [textareaRef.current]);

  useEffect(() => {
    if (containerRef.current) {
      console.log(containerRef.current.style.height);

      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      if (textareaRef.current.scrollHeight > snapPoints[1]) {
        setSnapPoints([maxHeight, textareaRef.current.scrollHeight, 0]);
      }
    }
  }, [value]);

  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      onClose={close}
      snapPoints={snapPoints}
      disableDrag={disableDrag}
      initialSnap={initialSnap}
      rootId="_next"
      className="border-t"
      style={{
        transform: `translateY(-${displacement}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <Sheet.Container className="sheet-overrides" ref={containerRef}>
        <Sheet.Header className="bg-[#dbe2e8] dark:bg-[#171b1c] text-[#dbe2e8] dark:text-[#171b1c] border-t-black/50 border-t dark:border-t-white/50" />

        <Sheet.Content className="bg-[#dbe2e8] dark:bg-[#171b1c]">
          <div className="relative flex flex-col h-full p-4 pt-0">
            <div className="absolute top-0 bottom-0 left-0 right-0 h-full">
              {children}
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};

export default ChatInput;
