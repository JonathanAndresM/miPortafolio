import imgMinga from "../assets/home-minga.jpg";
import imgMytinerary from "../assets/home-myTinerary.jpg";
import imgPortfolio from "../assets/home-miPorfolio.jpg";

export default function Projects() {
    const projects = [
      {
        title: "myTinerary",
        img: imgMytinerary,
        description: "Una app para gestionar actividades en ciudades del mundo con autenticación y base de datos MongoDB.",
        technologies: "React, Node.js, MongoDB y Tailwind CSS",
        link: "https://itinerary-ec8d7.web.app/home",
      },
      {
        title: "Minga",
        img: imgMinga,
        description: "Plataforma creada para los fanaticos del comic y el manga, con autenticación de usuario, compania y autores, sistema de donaciones y tambien con chatbot.",
        technologies: "React, Node.js, MongoDB y Tailwind CSS",
        link: "https://grupo3-front-minga.vercel.app/",
      },
      {
        title: "Portafolio Personal",
        img: imgPortfolio,
        description: "Un portafolio dinámico creado con React y Tailwind CSS para mostrar mi trabajo.",
        technologies: "React, Tailwind CSS",
        link: "#",
      },
    ];
  
    return (
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow p-6 hover:shadow-lg transition duration-200"
              >
                <img className="rounded-lg hover:scale-125 hover:-translate-y-5 transition duration-500" src={project.img} alt={project.title} />
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Tecnologías:</strong> {project.technologies}
                </p>
                <a
                  href={project.link}
                  className="text-orange-500 font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Proyecto →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  