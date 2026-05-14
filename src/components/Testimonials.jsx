const reviews = [
  {
    text: 'Excelente atención y gran profesionalidad. Me explicaron todo el tratamiento con claridad y el resultado ha sido perfecto.',
    name: 'María G.',
    time: 'Hace 3 meses',
  },
  {
    text: 'Fui por una urgencia dental y me atendieron muy rápido. Trato cercano, sin dolor y con mucha confianza. Muy recomendable en Carabanchel.',
    name: 'Carlos R.',
    time: 'Hace 6 meses',
  },
  {
    text: 'Clínica moderna y muy limpia. Llevo tiempo viniendo y siempre recibo una atención excelente por parte del equipo.',
    name: 'Laura M.',
    time: 'Hace 1 mes',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#f3f6f9] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Opiniones de nuestros pacientes
          </h2>

          <div className="mt-5 text-2xl tracking-[0.2em] text-yellow-400">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            Pacientes satisfechos en Carabanchel, Madrid
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[340px] flex-col rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:min-h-[360px] sm:p-7"
            >
              <div className="mb-5 text-lg tracking-[0.18em] text-yellow-400 sm:text-xl">
                ★★★★★
              </div>

              <p className="flex-1 text-sm leading-7 text-neutral-700 sm:text-[15px] sm:leading-8">
                {review.text}
              </p>

              <div className="mt-6 sm:mt-8">
                <p className="text-lg font-bold text-black sm:text-xl">
                  {review.name}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {review.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials