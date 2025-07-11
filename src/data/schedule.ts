import type { Schedule } from "../types"

const schedule: Schedule[] = [
  {
    "day": "18 de Agosto",
    "date": "2025-08-18",
    "sessions": [
      {
        "time": "09:00 - 09:30",
        "title": "Registro y Bienvenida",
        "type": "General",
        "description": "Recogida de acreditaciones y café de bienvenida."
      },
      {
        "time": "09:30 - 10:30",
        "title": "El Futuro del Frontend con Web Components",
        "speakerId": 1,
        "type": "Charla",
        "description": "Una inmersión profunda en cómo los Web Components están transformando la arquitectura frontend."
      },
      {
        "time": "10:30 - 11:00",
        "title": "Pausa Café",
        "type": "General",
        "description": "Oportunidad para networking y café."
      },
      {
        "time": "11:00 - 12:00",
        "title": "Optimización de Rendimiento en Astro",
        "speakerId": 2,
        "type": "Charla",
        "description": "Consejos y trucos para construir sitios ultrarrápidos con Astro."
      },
      {
        "time": "12:00 - 13:30",
        "title": "Programación Colaborativa (Pair Programming)",
        "type": "Taller",
        "description": "Jornada intensiva de programación en pareja. Aprende aplicando, crea proyectos innovadores y potencia tus habilidades en un ambiente de colaboración y aprendizaje mutuo."
      },
      {
        "time": "13:30 - 14:30",
        "title": "Almuerzo",
        "type": "General",
        "description": "Catering disponible en la zona de conferencias."
      },
      {
        "time": "14:30 - 15:30",
        "title": "Seguridad en Aplicaciones Web Modernas",
        "speakerId": 4,
        "type": "Charla",
        "description": "Explorando las vulnerabilidades comunes y las mejores prácticas de seguridad."
      },
      {
        "time": "15:30 - 16:30",
        "title": "Panel de Discusión: El Rol del AI en el Desarrollo Frontend",
        "speakerId": [5, 6],
        "type": "Panel",
        "description": "Un debate con expertos sobre cómo la inteligencia artificial está impactando nuestra profesión."
      },
      {
        "time": "16:30 - 17:00",
        "title": "Cierre del Día 1 y Networking",
        "type": "General",
        "description": "Sesión de clausura del primer día y oportunidad de networking."
      }
    ]
  },
  {
    "day": "19 de Agosto",
    "date": "2025-08-19",
    "sessions": [
      {
        "time": "09:00 - 09:30",
        "title": "Apertura del Día 2",
        "type": "General",
        "description": "Recepción y café."
      },
      {
        "time": "09:30 - 10:30",
        "title": "Desarrollo con Server Components en React",
        "speakerId": 2,
        "type": "Charla",
        "description": "Explorando las capacidades de los Server Components para aplicaciones React."
      },
      {
        "time": "10:30 - 11:00",
        "title": "Pausa Café",
        "type": "General",
        "description": "Networking."
      },
      {
        "time": "11:00 - 12:00",
        "title": "Patrones Avanzados de CSS con Tailwind",
        "speakerId": 4,
        "type": "Charla",
        "description": "Aprende a dominar Tailwind CSS para diseños complejos y responsivos."
      },
      {
        "time": "12:00 - 13:30",
        "title": "Hooks Avanzados y Patrones Modernos en React",
        "speakerId": 1,
        "type": "Taller",
        "description": "Explora el poder de los React Hooks más allá de lo básico, aprende a construir componentes reutilizables con rendimiento optimizado y descubre patrones de arquitectura que escalarán tus aplicaciones."
      },
      {
        "time": "13:30 - 14:30",
        "title": "Almuerzo",
        "type": "General",
        "description": "Catering disponible."
      },
      {
        "time": "14:30 - 15:30",
        "title": "Estado del Arte de la Accesibilidad Web",
        "speakerId": 5,
        "type": "Charla",
        "description": "La importancia de la accesibilidad y cómo implementarla correctamente."
      },
      {
        "time": "15:30 - 16:30",
        "title": "Diseño de APIs Robustas con GraphQL",
        "speakerId": 6,
        "type": "Charla",
        "description": "Profundizando en las ventajas y desafíos de GraphQL para tu backend frontend."
      },
      {
        "time": "16:30 - 17:00",
        "title": "Cierre del Día 2 y Happy Hour",
        "type": "General",
        "description": "Sesión de clausura del segundo día con bebidas y snacks."
      }
    ]
  },
  {
    "day": "20 de Agosto",
    "date": "2025-08-20",
    "sessions": [
      {
        "time": "09:00 - 09:30",
        "title": "Apertura del Día 3",
        "type": "General",
        "description": "Recepción y café."
      },
      {
        "time": "09:30 - 10:30",
        "title": "Testing en Frontend: De Unitarias a E2E",
        "speakerId": 3,
        "type": "Charla",
        "description": "Una guía completa sobre las diferentes estrategias de testing para asegurar la calidad de tu código."
      },
      {
        "time": "10:30 - 11:00",
        "title": "Pausa Café",
        "type": "General",
        "description": "Networking."
      },
      {
        "time": "11:00 - 12:00",
        "title": "Inteligencia Artificial en el Navegador",
        "speakerId": 1,
        "type": "Charla",
        "description": "Casos de uso y librerías para implementar modelos de IA directamente en el cliente."
      },
      {
        "time": "12:00 - 13:00",
        "title": "Conferencia Magistral: El Futuro de la Web 3.0",
        "speakerId": 5,
        "type": "Charla",
        "description": "Una visión general de las tecnologías y tendencias que definirán la próxima era de la web."
      },
      {
        "time": "13:00 - 14:00",
        "title": "Almuerzo",
        "type": "General",
        "description": "Catering disponible."
      },
      {
        "time": "14:00 - 15:30",
        "title": "Mini Hackathon Final",
        "type": "Hackathon",
        "description": "Pon a prueba tus nuevas habilidades en nuestro mini hackathon final. Desarrolla proyectos sorprendentes aplicando todo lo aprendido y demuestra tu creatividad en un desafío emocionante."
      },
      {
        "time": "15:30 - 16:30",
        "title": "Sesión de Preguntas y Respuestas con Todos los Ponentes",
        "speakerId": [1, 2, 3, 4, 5, 6],
        "type": "Panel",
        "description": "Una oportunidad única para preguntar directamente a todos nuestros expertos."
      },
      {
        "time": "16:30 - 17:00",
        "title": "Ceremonia de Clausura y Despedida",
        "type": "General",
        "description": "Agradecimientos, sorteos y despedida oficial de Konekta Frontend."
      }
    ]
  }
]

export default schedule
