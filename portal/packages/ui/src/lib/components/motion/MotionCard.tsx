import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const CardWrapper = forwardRef((props: any, ref: any) => (
  <div className={props?.className} ref={ref} {...props}>
    {props.children}
  </div>
));

CardWrapper.displayName = 'CardWrapper';

const MotionCard = motion(CardWrapper);

MotionCard.displayName = 'MotionCard';

export default MotionCard;
