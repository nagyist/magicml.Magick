import { Box, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const BoxWrapper = forwardRef((props: BoxProps, ref: any) => (
  <Box ref={ref} {...props}>
    {props.children}
  </Box>
));

BoxWrapper.displayName = 'BoxWrapper';

const MotionBox = motion(BoxWrapper);

MotionBox.displayName = 'MotionCard';

export default MotionBox;
