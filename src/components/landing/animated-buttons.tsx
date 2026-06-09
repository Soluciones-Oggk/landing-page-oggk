import { useState, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'

import { ArrowRightIcon } from '@/components/animate-ui/icons/arrow-right'
import { SendIcon } from '@/components/animate-ui/icons/send'

type AnimatedButtonIcon = 'arrow' | 'send'

function AnimatedIcon({
  icon,
  size,
  isHovered,
}: {
  icon: AnimatedButtonIcon
  size: number
  isHovered: boolean
}) {
  if (icon === 'send') {
    return (
      <SendIcon
        size={size}
        animate={isHovered ? true : false}
        initialOnAnimateEnd
        className="shrink-0"
      />
    )
  }

  return (
    <span className="inline-flex w-[1.55em] shrink-0 items-center justify-center overflow-visible">
      <ArrowRightIcon
        size={size}
        animation="pointing"
        animate={isHovered ? 'pointing' : false}
        className="overflow-visible"
      />
    </span>
  )
}

export function AnimatedLinkButton({
  children,
  className,
  icon,
  iconSize = 18,
  ...props
}: HTMLMotionProps<'a'> & {
  children: ReactNode
  className: string
  icon: AnimatedButtonIcon
  iconSize?: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
      {...props}
    >
      <span>{children}</span>
      <AnimatedIcon icon={icon} size={iconSize} isHovered={isHovered} />
    </motion.a>
  )
}

export function AnimatedSubmitButton({
  children,
  className,
  icon,
  iconSize = 18,
  ...props
}: HTMLMotionProps<'button'> & {
  children: ReactNode
  className: string
  icon: AnimatedButtonIcon
  iconSize?: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
      {...props}
    >
      <span>{children}</span>
      <AnimatedIcon icon={icon} size={iconSize} isHovered={isHovered} />
    </motion.button>
  )
}
