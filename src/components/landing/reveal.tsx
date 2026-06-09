import { type ReactNode } from 'react'
import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react'

type RevealVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in'
type RevealTag = 'div' | 'section' | 'article' | 'footer'

type RevealProps = Omit<HTMLMotionProps<'div'>, 'animate' | 'initial' | 'transition' | 'variants' | 'viewport' | 'whileInView'> & {
  as?: RevealTag
  children: ReactNode
  delay?: number
  duration?: number
  once?: boolean
  variant?: RevealVariant
  viewportMargin?: string
}

const revealVariants = {
  'fade-up': { opacity: 0, y: 20 },
  'fade-left': { opacity: 0, x: -20 },
  'fade-right': { opacity: 0, x: 20 },
  'fade-in': { opacity: 0 },
} satisfies Record<RevealVariant, HTMLMotionProps<'div'>['initial']>

const motionTags: Record<RevealTag, typeof motion.div> = {
  div: motion.div,
  section: motion.section as typeof motion.div,
  article: motion.article as typeof motion.div,
  footer: motion.footer as typeof motion.div,
}

export function revealDelay(index: number, base = 0.08, max = 0.48) {
  return Math.min(index * base, max)
}

export function Reveal({
  as = 'div',
  children,
  delay = 0,
  duration = 0.68,
  once = true,
  variant = 'fade-up',
  viewportMargin = '0px 0px -15% 0px',
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motionTags[as]

  if (shouldReduceMotion) {
    return (
      <MotionTag {...props}>
        {children}
      </MotionTag>
    )
  }

  return (
    <MotionTag
      initial={revealVariants[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
