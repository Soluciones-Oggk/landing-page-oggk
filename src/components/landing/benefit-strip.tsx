import {
  useEffect,
  useRef,
  type ForwardRefExoticComponent,
  type HTMLAttributes,
  type PointerEvent,
  type RefAttributes,
} from 'react'

import { BoxIcon } from '@/components/animate-ui/icons/box'
import { HeartHandshakeIcon } from '@/components/animate-ui/icons/heart-handshake'
import { ShieldCheckIcon } from '@/components/animate-ui/icons/shield-check'
import { TruckIcon } from '@/components/animate-ui/icons/truck'
import { Reveal, revealDelay } from '@/components/landing/reveal'

type AnimatedIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}

type AnimatedBenefitIcon = ForwardRefExoticComponent<
  HTMLAttributes<HTMLDivElement> & { size?: number } & RefAttributes<AnimatedIconHandle>
>

const benefits = [
  {
    icon: TruckIcon,
    title: 'Abastecimiento ágil',
    description: 'Productos para obra, ferretería, mantenimiento e industria.',
  },
  {
    icon: BoxIcon,
    title: 'Marcas especializadas',
    description: 'Selladores, pinturas, herramientas y soluciones técnicas.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Compra confiable',
    description: 'Atención responsable desde una empresa peruana constituida.',
  },
  {
    icon: HeartHandshakeIcon,
    title: 'Asesoría cercana',
    description: 'Orientación para encontrar el producto adecuado.',
  },
]

const benefitRoundedClasses = [
  'rounded-t-lg md:rounded-tl-lg md:rounded-tr-none lg:rounded-l-lg',
  'md:rounded-tr-lg lg:rounded-none',
  'md:rounded-bl-lg lg:rounded-none',
  'rounded-b-lg md:rounded-bl-none md:rounded-br-lg lg:rounded-r-lg',
]

export function BenefitStrip() {
  const stripRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const pointerPositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  function syncSpotlightPointer(event: PointerEvent<HTMLDivElement>) {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return
    }

    stripRef.current?.setAttribute('data-spotlight-active', 'true')
    pointerPositionRef.current = {
      x: event.clientX,
      y: event.clientY,
    }

    if (animationFrameRef.current !== null) {
      return
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      const { x, y } = pointerPositionRef.current

      stripRef.current?.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--spotlight-x', `${(x - rect.left).toFixed(2)}px`)
        card.style.setProperty('--spotlight-y', `${(y - rect.top).toFixed(2)}px`)
      })

      animationFrameRef.current = null
    })
  }

  function clearSpotlightPointer() {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }

    stripRef.current?.removeAttribute('data-spotlight-active')
    stripRef.current?.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
      card.style.removeProperty('--spotlight-x')
      card.style.removeProperty('--spotlight-y')
    })
  }

  return (
    <section id="beneficios" className="relative z-10 bg-[#0c2b45] px-5 pb-10 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl" viewportMargin='0px 0px -10% 0px'>
        <div
          ref={stripRef}
          onPointerEnter={syncSpotlightPointer}
          onPointerLeave={clearSpotlightPointer}
          onPointerMove={syncSpotlightPointer}
          className="grid overflow-hidden rounded-lg border border-white/10 shadow-2xl md:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} index={index} {...benefit} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function BenefitCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: AnimatedBenefitIcon
  title: string
  description: string
  index: number
}) {
  const iconRef = useRef<AnimatedIconHandle>(null)
  const iconAnimationTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (iconAnimationTimeoutRef.current !== null) {
        window.clearTimeout(iconAnimationTimeoutRef.current)
      }
    }
  }, [])

  function animateIconOnPress(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === 'mouse') {
      return
    }

    if (iconAnimationTimeoutRef.current !== null) {
      window.clearTimeout(iconAnimationTimeoutRef.current)
    }

    iconRef.current?.startAnimation()
    iconAnimationTimeoutRef.current = window.setTimeout(() => {
      iconRef.current?.stopAnimation()
      iconAnimationTimeoutRef.current = null
    }, 900)
  }

  return (
    <Reveal
      as="article"
      data-spotlight
      className={`group ${benefitRoundedClasses[index]}`}
      delay={revealDelay(index, 0.06)}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      onPointerDown={animateIconOnPress}
    >
      <div data-spotlight-panel className="relative z-10 h-full p-6">
        <Icon ref={iconRef} className="mb-5 text-brand-yellow" size={28} />
        <h2 className="text-base font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-white/62">{description}</p>
      </div>
    </Reveal>
  )
}
