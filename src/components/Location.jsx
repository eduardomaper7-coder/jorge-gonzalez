const Location = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
          Ven a visitarnos
        </h2>

        {/* Dirección */}
        <p className="mt-6 text-lg font-medium text-neutral-700">
          C. de Carrero Juan Ramón, 7, Local, Carabanchel, 28025 Madrid
        </p>

        {/* Mapa */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
          <iframe
            src="https://www.google.com/maps?q=C.%20de%20Carrero%20Juan%20Ram%C3%B3n%207%2C%20Carabanchel%2C%2028025%20Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica Dental Dr. Jorge Gonzalez Cogollo"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Location