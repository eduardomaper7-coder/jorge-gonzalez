const Hero = () => {
  const whatsappNumber = '34686142747'

  const whatsappMessage = encodeURIComponent(
    'Hola, quiero pedir cita en Clínica Dental Dr. Jorge Gonzalez Cogollo.'
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-fixed max-md:bg-scroll"
      style={{
        backgroundImage: "url('/hero-dentista-usera.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-blue-950/45"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-blue-800/35 to-blue-950/80"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="text-sm font-light tracking-[0.18em] text-white/80 sm:text-2xl">
            CLÍNICA DENTAL EN MADRID
          </span>

          <span className="mt-3 text-xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
            CLÍNICA DENTAL DR. JORGE GONZALEZ COGOLLO
          </span>

          <h1 className="mt-8 text-center text-[2.2rem] font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-[4.8rem]">
            <span className="block">Dentista de confianza</span>
            <span className="mt-2 block">para cuidar tu sonrisa</span>
          </h1>
        </div>

        <p className="mt-8 hidden max-w-4xl text-lg leading-9 text-white/90 sm:block sm:text-xl">
          En Clínica Dental Dr. Jorge Gonzalez Cogollo cuidamos tu salud
          bucodental con una atención cercana, tratamientos personalizados y un
          equipo comprometido con tu bienestar dental en Madrid.
        </p>

        <div className="mt-6 flex w-full max-w-full flex-col gap-2 sm:mt-8 sm:w-auto sm:flex-row sm:justify-center sm:gap-3">
          <span className="w-full break-words rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-blue-700 shadow-lg sm:w-auto sm:px-6 sm:py-3 sm:text-base">
            Clínica dental en Madrid
          </span>

          <span className="w-full break-words rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-blue-700 shadow-lg sm:w-auto sm:px-6 sm:py-3 sm:text-base">
            Atención personalizada
          </span>
        </div>

        <div className="mt-8 flex w-full max-w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full min-w-0 items-center justify-center gap-3 rounded-xl bg-blue-600 px-4 py-4 text-sm font-extrabold text-white shadow-xl transition hover:bg-blue-700 sm:w-auto sm:px-8 sm:text-lg"
            aria-label="Pedir cita por WhatsApp en Clínica Dental Dr. Jorge Gonzalez Cogollo"
          >
            <img
              src="/whatsapp.png"
              alt=""
              className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
              aria-hidden="true"
            />

            <span className="min-w-0 break-words">
              Pedir cita por WhatsApp
            </span>
          </a>

          <a
            href="tel:912833004"
            className="flex w-full min-w-0 items-center justify-center rounded-xl bg-white/95 px-4 py-4 text-sm font-extrabold text-blue-700 shadow-xl transition hover:bg-white sm:w-auto sm:px-8 sm:text-lg sm:whitespace-nowrap"
            aria-label="Llamar a Clínica Dental Dr. Jorge Gonzalez Cogollo"
          >
            Llamar ahora
          </a>
        </div>

        <a
          href="#servicios"
          className="mt-5 hidden items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-700 sm:inline-flex"
        >
          Ver tratamientos dentales
        </a>

        <a
          href="#servicios"
          className="mt-12 hidden flex-col items-center text-base font-medium text-white sm:inline-flex"
        >
          Descubre más
          <span className="mt-2 text-2xl">⌄</span>
        </a>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-2xl transition hover:scale-110 hover:bg-blue-700 sm:h-16 sm:w-16"
        aria-label="Escribir por WhatsApp a Clínica Dental Dr. Jorge Gonzalez Cogollo"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </a>
    </section>
  )
}

export default Hero