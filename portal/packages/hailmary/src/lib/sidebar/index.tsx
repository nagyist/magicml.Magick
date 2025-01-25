'use client';

import React, { useMemo } from 'react';
import { SidebarProps } from '../types';
import { SidebarButton } from './sidebar-button';
import { Button, TooltipProvider } from '@magickml/client-ui';
import { UserButton } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { Eclipse, Moon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SidebarDrawer } from './sidebar-drawer';

export const Sidebar: React.FC<SidebarProps> = ({ buttons }) => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const { push } = useRouter();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'root' : 'dark');
  };

  const themeMemo = useMemo(() => {
    return {
      icon: theme === 'dark' ? Moon : Sun,
      tooltip: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
    };
  }, [theme]);

  return (
    <TooltipProvider>
      <SidebarDrawer />
      <aside className="hidden md:flex flex-col overflow-y-auto h-full w-16 border-r">
        <div className="border-b rounded-none h-16 flex-col items-center justify-center w-full p-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-full w-full"
            onClick={() => push('/')}
          >
            <Eclipse size={32} />
          </Button>
        </div>

        <nav className="inline-flex flex-col h-full items-center my-4 gap-y-2">
          {buttons.map((button, index) => (
            <SidebarButton key={index} {...button} />
          ))}
          <SidebarButton
            tooltipProps={{
              content: 'You',
            }}
            key="theme-switcher"
            className="mt-auto"
            icon={themeMemo.icon ? <themeMemo.icon /> : null}
            onClick={handleThemeChange}
          />

          <SidebarButton
            tooltipProps={{
              content: 'You',
            }}
            key="profile"
            icon={<UserButton userProfileMode="modal" />}
          />
        </nav>
      </aside>
    </TooltipProvider>
  );
};
