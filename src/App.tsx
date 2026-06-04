function App() {
  return (
    <main className="min-h-svh bg-white text-carbon">
      <section className="mx-auto flex min-h-svh max-w-6xl flex-col items-start justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-normal text-brand-blue">
          Soluciones OGGK
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-carbon md:text-6xl">
          Proyecto base listo para construir la nueva landing.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
          React, TypeScript y Tailwind ya estan configurados. El siguiente paso
          es incorporar los assets finales y comenzar la implementacion por
          secciones usando CONTENIDO.md y DESIGN.md.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-md bg-brand-yellow px-4 py-2 text-sm font-bold text-carbon">
            React + TS
          </span>
          <span className="rounded-md bg-brand-blue px-4 py-2 text-sm font-bold text-white">
            Tailwind
          </span>
        </div>
      </section>
    </main>
  )
}

export default App
