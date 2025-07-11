
export const ROW_CLASSES = {
    0: 'w-full md:max-w-[320px] bg-slate-200 min-h-64 rounded-md p-4 border-2 border-slate-300',
    1: 'text-sky-700 text-2xl text-left font-semibold',
    2: 'text-slate-700',
    3: 'text-balance leading-relaxed font-normal text-slate-700'
}


const infoFirstRow = [
    {
        title: 'CHARLAS INSPIRADORAS',
        classNames: ROW_CLASSES,

        content: `Sumérgete en las <strong>mentes más brillantes del desarrollo</strong>. Aprende de expertos líderes que compartirán sus conocimientos y las últimas tendencias de la industria. ¡Prepárate para expandir tus horizontes!`

    },
    {
        title: 'CONEXIONES ESTRATÉGICAS',
        classNames: ROW_CLASSES,
        content: `El entorno perfecto para <strong>ampliar tu red de contactos</strong>. Conecta con otros desarrolladores, comparte experiencias, y encuentra oportunidades únicas de colaboración y crecimiento profesional.`
    },
    {
        title: ' PROGRAMACIÓN COLABORATIVA',
        classNames: ROW_CLASSES,
        content: `Participa en una jornada intensiva de <strong
            >programación en pareja\</strong
          >\. Aprende aplicando, crea proyectos innovadores y potencia tus
          habilidades en un ambiente de colaboración y aprendizaje mutuo.`
    }
]

export default infoFirstRow