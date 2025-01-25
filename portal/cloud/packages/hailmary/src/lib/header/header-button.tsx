'use client';

import React from 'react';
import { Button } from '@magickml/client-ui';

export const HeaderButton: React.FC<React.ComponentProps<typeof Button>> = (
  props
) => {
  return <Button {...props} />;
};
