export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2025 Jonathan Muchewicz. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/JonathanAndresM" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">GitHub</a>
            <a href="https://www.linkedin.com/in/jonathan-muchewicz/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">LinkedIn</a>
            <a href="https://wa.me/543764842498" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Whatsapp</a>
          </div>
        </div>
      </footer>
    );
  }
  