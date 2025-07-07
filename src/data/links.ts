import type { Link } from '../types'

const GENERIC_CLASS = 'text-lg text-white/90 transition-transform ease-out hover:scale-110 hover:text-amber-200 inline-block'

const CALL_TO_ACTION_CLASS_DESKTOP = 'flex text-lg font-bold text-black/80 bg-amber-500 px-4 py-2 transition-transform ease-in-out duration-300 hover:scale-95 hover:outline-2 hover:outline-white rounded-md'

const GENERIC_CLASS_MOBILE = 'text-2xl text-white'

const CALL_TO_ACTION_CLASS_MOBILE = 'flex text-2xl font-bold text-black/80 bg-amber-500 px-4 py-2'

const LIST_ELEMENT_CLASS = 'py-4'


const navLinks: Link[] = [
    {
        title: 'INICIO',
        path: '#home',
        className: GENERIC_CLASS
    },
    {
        title: '+INFO',
        path: '#about',
        className: GENERIC_CLASS
    },
    {
        title: 'PONENTES',
        path: '#speakers',
        className: GENERIC_CLASS
    },
    {
        title: 'AGENDA',
        path: '#schedule',
        className: GENERIC_CLASS
    },
    {
        title: 'APÚNTATE',
        path: '#tickets',
        className: CALL_TO_ACTION_CLASS_DESKTOP
    }
]

const mobileLinks: Link[] = navLinks.map((link) => {
    return {
        title: link.title,
        path: link.path,
        className: link.title === 'APÚNTATE' ? CALL_TO_ACTION_CLASS_MOBILE : GENERIC_CLASS_MOBILE,
        listElementClassName: LIST_ELEMENT_CLASS
    }
})

export { navLinks, mobileLinks }