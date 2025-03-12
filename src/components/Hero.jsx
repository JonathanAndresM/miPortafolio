export default function Hero() {
    return (
      <section id="hero" className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl h-[100vh] mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 items-center flex flex-col justify-center">
          <img src="https://avatars.githubusercontent.com/u/166529327?v=4" alt="Jonathan Muchewicz" className="w-32 h-32 rounded-full mb-4 shadow hover:shadow-2xl transition duration-200" />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">¡Hola! Soy Jonathan Muchewicz</h1>
          <p className="text-lg sm:text-2xl mb-6">Desarrollador Full Stack | Diseñador Gráfico</p>
          <a
            href="#contact"
            className="bg-white text-orange-500 px-6 py-3 rounded-full shadow hover:bg-gray-200"
          >
            ¡Contáctame!
          </a>
        </div>
      </section>
    )
  }