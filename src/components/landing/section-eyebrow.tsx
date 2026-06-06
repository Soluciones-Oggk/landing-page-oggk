export function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-normal text-brand-blue">
      <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
      {children}
    </p>
  )
}
