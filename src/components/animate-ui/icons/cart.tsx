'use client';

import { motion, type Variants } from 'motion/react';

import {
  getVariants,
  useAnimateIconContext,
  IconWrapper,
  type IconProps,
} from '@/components/animate-ui/icons/icon';

type CartProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    group: {
      initial: {
        x: 0,
        rotate: 0,
      },
      animate: {
        x: [0, 2, -2, 0],
        rotate: [0, -6, 6, 0],
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
    },
    path1: {},
    path2: {},
    path3: {},
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: CartProps) {
  const { controls } = useAnimateIconContext();
  const variants = getVariants(animations);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.g variants={variants.group} initial="initial" animate={controls}>
        <motion.circle
          cx="8"
          cy="21"
          r="1"
          variants={variants.path1}
          initial="initial"
          animate={controls}
        />
        <motion.circle
          cx="19"
          cy="21"
          r="1"
          variants={variants.path2}
          initial="initial"
          animate={controls}
        />
        <motion.path
          d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          variants={variants.path3}
          initial="initial"
          animate={controls}
        />
      </motion.g>
    </motion.svg>
  );
}

function Cart(props: CartProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export {
  animations,
  Cart,
  Cart as CartIcon,
  type CartProps,
  type CartProps as CartIconProps,
};
