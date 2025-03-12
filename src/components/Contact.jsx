import { useState, useEffect } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState(""); // Estado para la alerta

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => {
        setFormStatus(""); // Borra la alerta después de 5 segundos
      }, 5000);
      return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }
  }, [formStatus]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita la recarga de la página

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formsubmit.co/jonathanandres.dev@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success"); // Mensaje de éxito
        event.target.reset(); // Limpia el formulario
      } else {
        setFormStatus("error"); // Mensaje de error
      }
    } catch (error) {
      setFormStatus("error");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Contáctame</h2>
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
          
          {/* Alertas de éxito o error con desaparición automática */}
          {formStatus === "success" && (
            <div className="mb-4 text-green-700 bg-green-100 p-2 rounded-lg">
              ✅ Mensaje enviado correctamente.
            </div>
          )}
          {formStatus === "error" && (
            <div className="mb-4 text-red-700 bg-red-100 p-2 rounded-lg">
              ❌ Error al enviar el mensaje. Intenta nuevamente.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition duration-200"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}