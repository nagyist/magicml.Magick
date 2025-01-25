import React from 'react';
import { ChatMessagesProps } from '../types';
import { Play } from 'lucide-react';

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const handleAudioPlay = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  };

  return (
    <div className="flex-1">
      {messages.map((message, index) => (
        <div key={index} className="mb-4">
          <div className="font-bold flex items-center">
            {message.sender}:
            {message.audioUrl && (
              <button
                className="ml-2 p-1 rounded-full bg-muted hover:bg-muted-foreground transition-colors duration-200"
                onClick={() => handleAudioPlay(message.audioUrl as string)}
              >
                <Play className="size-4" />
              </button>
            )}
          </div>
          <div>{message.text}</div>
        </div>
      ))}
    </div>
  );
};
