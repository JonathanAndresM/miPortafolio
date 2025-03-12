export default function Technologies() {
    const technologies = [
      { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
      { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
      { name: "Redux", icon: "https://img.icons8.com/color/48/redux.png" },
      { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
      { name: "HTML5", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
      { name: "CSS3", icon: "https://img.icons8.com/color/48/css3.png" },
      { name: "Bootstrap", icon: "https://img.icons8.com/color/48/bootstrap.png" },
      { name: "Vue.js", icon: "https://img.icons8.com/color/48/vue-js.png" },
      { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
      { name: "CorelDraw", icon: "https://img.icons8.com/?size=100&id=9kTbRIN6cDXX&format=png&color=000000" },
    ]
  
    return (
      <section id="technologies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Tecnologías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-200 hover:scale-110"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2 hover:animate-pulse" />
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }